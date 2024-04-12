package api

import (
	"mayfly-go/internal/common/consts"
	"mayfly-go/internal/db/api/form"
	"mayfly-go/internal/db/api/vo"
	"mayfly-go/internal/db/application"
	"mayfly-go/internal/db/domain/entity"

	tagapp "mayfly-go/internal/tag/application"
	tagentity "mayfly-go/internal/tag/domain/entity"
	"mayfly-go/pkg/biz"
	"mayfly-go/pkg/req"
	"mayfly-go/pkg/utils/collx"
	"strconv"
	"strings"
)

type Instance struct {
	InstanceApp         application.Instance    `inject:"DbInstanceApp"`
	DbApp               application.Db          `inject:""`
	ResourceAuthCertApp tagapp.ResourceAuthCert `inject:""`
}

// Instances 获取数据库实例信息
// @router /api/instances [get]
func (d *Instance) Instances(rc *req.Ctx) {
	queryCond, page := req.BindQueryAndPage[*entity.InstanceQuery](rc, new(entity.InstanceQuery))

	var instvos []*vo.InstanceListVO
	res, err := d.InstanceApp.GetPageList(queryCond, page, &instvos)
	biz.ErrIsNil(err)

	// 填充授权凭证信息
	d.ResourceAuthCertApp.FillAuthCert(consts.ResourceTypeDb, collx.ArrayMap(instvos, func(vos *vo.InstanceListVO) tagentity.IAuthCert {
		return vos
	})...)

	rc.ResData = res
}

func (d *Instance) TestConn(rc *req.Ctx) {
	form := &form.InstanceForm{}
	instance := req.BindJsonAndCopyTo[*entity.DbInstance](rc, form, new(entity.DbInstance))

	biz.ErrIsNil(d.InstanceApp.TestConn(instance, form.AuthCerts[0]))
}

// SaveInstance 保存数据库实例信息
// @router /api/instances [post]
func (d *Instance) SaveInstance(rc *req.Ctx) {
	form := &form.InstanceForm{}
	instance := req.BindJsonAndCopyTo[*entity.DbInstance](rc, form, new(entity.DbInstance))

	rc.ReqParam = form
	biz.ErrIsNil(d.InstanceApp.SaveDbInstance(rc.MetaCtx, &application.SaveDbInstanceParam{
		DbInstance: instance,
		AuthCerts:  form.AuthCerts,
	}))
}

// GetInstance 获取数据库实例密码，由于数据库是加密存储，故提供该接口展示原文密码
// @router /api/instances/:instance [GET]
func (d *Instance) GetInstance(rc *req.Ctx) {
	dbId := getInstanceId(rc)
	dbEntity, err := d.InstanceApp.GetById(new(entity.DbInstance), dbId)
	biz.ErrIsNil(err, "获取数据库实例错误")
	rc.ResData = dbEntity
}

// DeleteInstance 删除数据库实例信息
// @router /api/instances/:instance [DELETE]
func (d *Instance) DeleteInstance(rc *req.Ctx) {
	idsStr := rc.PathParam("instanceId")
	rc.ReqParam = idsStr
	ids := strings.Split(idsStr, ",")

	for _, v := range ids {
		value, err := strconv.Atoi(v)
		biz.ErrIsNilAppendErr(err, "删除数据库实例失败: %s")
		instanceId := uint64(value)
		err = d.InstanceApp.Delete(rc.MetaCtx, instanceId)
		biz.ErrIsNilAppendErr(err, "删除数据库实例失败: %s")
	}
}

// 获取数据库实例的所有数据库名
func (d *Instance) GetDatabaseNames(rc *req.Ctx) {
	instanceId := getInstanceId(rc)
	authCertName := rc.Query("authCertName")
	biz.NotEmpty(authCertName, "授权凭证名不能为空")

	instance, err := d.InstanceApp.GetById(new(entity.DbInstance), instanceId)
	biz.ErrIsNil(err, "获取数据库实例错误")

	res, err := d.InstanceApp.GetDatabases(instance, authCertName)
	biz.ErrIsNil(err)
	rc.ResData = res
}

// 获取数据库实例server信息
func (d *Instance) GetDbServer(rc *req.Ctx) {
	instanceId := getInstanceId(rc)
	conn, err := d.DbApp.GetDbConnByInstanceId(instanceId)
	biz.ErrIsNil(err)
	res, err := conn.GetMetaData().GetDbServer()
	biz.ErrIsNil(err)
	rc.ResData = res
}

func getInstanceId(rc *req.Ctx) uint64 {
	instanceId := rc.PathParamInt("instanceId")
	biz.IsTrue(instanceId > 0, "instanceId 错误")
	return uint64(instanceId)
}

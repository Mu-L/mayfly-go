package form

import tagentity "mayfly-go/internal/tag/domain/entity"

type MachineForm struct {
	Id       uint64 `json:"id"`
	Protocol int    `json:"protocol" binding:"required"`
	Code     string `json:"code" binding:"required"`
	Name     string `json:"name" binding:"required"`
	Ip       string `json:"ip" binding:"required"`   // IP地址
	Port     int    `json:"port" binding:"required"` // 端口号

	TagId     []uint64                      `json:"tagId" binding:"required"`
	AuthCerts []*tagentity.ResourceAuthCert // 资产授权凭证信息列表

	Remark             string `json:"remark"`
	SshTunnelMachineId int    `json:"sshTunnelMachineId"` // ssh隧道机器id
	EnableRecorder     int8   `json:"enableRecorder"`     // 是否启用终端回放记录
}

type MachineRunForm struct {
	MachineId int64  `json:"machineId" binding:"required"`
	Cmd       string `json:"cmd" binding:"required"`
}

type MachineScriptForm struct {
	Id          uint64 `json:"id"`
	Name        string `json:"name" binding:"required"`
	MachineId   uint64 `json:"machineId" binding:"required"`
	Type        int    `json:"type" binding:"required"`
	Description string `json:"description" binding:"required"`
	Params      string `json:"params"`
	Script      string `json:"script" binding:"required"`
}

// 机器记录任务
type MachineCronJobForm struct {
	Id              uint64   `json:"id"`
	Name            string   `json:"name" binding:"required"`
	Cron            string   `json:"cron" binding:"required"` // cron
	Script          string   `json:"script" binding:"required"`
	Status          int      `json:"status" binding:"required"`
	SaveExecResType int      `json:"saveExecResType" binding:"required"`
	MachineIds      []uint64 `json:"machineIds"`
	Remark          string   `json:"remark"`
}

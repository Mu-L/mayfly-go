export function exportCsv(filename: string, columns: string[], datas: []) {
    // 二维数组
    const cvsData = [columns];
    for (let data of datas) {
        // 数据值组成的一维数组
        let dataValueArr: any = [];
        for (let column of columns) {
            let val: any = data[column];
            if (typeof val == 'string' && val) {
                // csv格式如果有逗号，整体用双引号括起来；如果里面还有双引号就替换成两个双引号，这样导出来的格式就不会有问题了
                if (val.indexOf(',') != -1) {
                    // 如果还有双引号，先将双引号转义，避免两边加了双引号后转义错误
                    if (val.indexOf('"') != -1) {
                        val = val.replace(/\"/g, '""');
                    }
                    // 再将逗号转义
                    val = `"${val}"`;
                }
                dataValueArr.push(val);
            } else {
                dataValueArr.push(val);
            }
        }
        cvsData.push(dataValueArr);
    }
    const csvString = cvsData.map((e) => e.join(',')).join('\n');
    // 导出
    let link = document.createElement('a');
    let exportContent = '\uFEFF';
    let blob = new Blob([exportContent + csvString], {
        type: 'text/plain;charset=utrf-8',
    });
    link.id = 'download-csv';
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
}

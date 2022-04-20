export default {
	methods:{
		exportExcel( data, name){
            let nameArr = name.split('.'),
                type = nameArr[nameArr.length-1],
                WorkBook = this.$XLSX.utils.book_new();
            if( Array.isArray( data) ){ // 根据数据生成XLSX
                console.log( 1 )
                data.forEach(item=>{// 循环sheet页
                    let [sheetName, sheetData] = ['', []];
                    // 设置sheet名称
                    sheetName = item.sheetName ? item.sheetName : ""
                    // 设置表头
                    if( item.tableHead ){
                        sheetData.push(item.tableHead)
                    }
                    // 设置表数据
                    item.tableData.forEach( obj => {
                        let rowData = [];
                        for( let key of item.tableProp ){
                            rowData.push(obj[key])
                        }
                        sheetData.push(rowData)
                    });
                    let sheet = this.$XLSX.utils.aoa_to_sheet(sheetData);
                    // 设置样式
                    sheet['!cols'] = [
                        { wch: 20 },
                        { wch: 20 },
                        { wch: 20 }
                    ]
                    // 实例、数据、sheet名
                    this.$XLSX.utils.book_append_sheet( WorkBook, sheet, sheetName);
                })
            }else{  // 根据表格dom生成XLSX
                let sheet = this.$XLSX.utils.table_to_sheet( data );   // 将 data转化为WorkBook
                // 设置样式
                sheet['!cols'] = [
                    { wch: 20 },
                    { wch: 20 },
                    { wch: 20 }
                ]
                this.$XLSX.utils.book_append_sheet( WorkBook, sheet, "sheet");
            }
            // 写文件( book, xlsx文件名称)
            this.$XLSX.writeFile( WorkBook, name)
		}
	}
}

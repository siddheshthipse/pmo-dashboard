export interface ComponentData {
    id:string,
    name:string,
    componentName:string,
    componentType:string,
    cols:number,
    rows:number,
    x:number,
    y:number,
    minItemRows:number,
    minItemCols:number,
    data:{
        title:string,
        tableData:any[]
    }
}
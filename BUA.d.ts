/**
 * 通过一个类启动程序
 * @param entry 具有init静态方法的类
 */
declare function startScript(entry:any):void
declare class Console{
    /**
     * 普通控制台输出
     * @param msg
     */
    static log(...msg:any)
}
/**
 * 数据库
 */
declare namespace db{
    /**
     * 输入sql语句，查询数据库
     */
    //@ts-ignore
    export function sql(query:TemplateStringsArray):Promise<Box3QueryResult>
}

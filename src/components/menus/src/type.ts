export interface MenuItem {
  icon ?: string,
  i?:any, // 处理之后的图标,icon不能直接在jsx里面用
  name: string,
  index:string,// 标识
  children?: MenuItem[]
}
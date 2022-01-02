function showSimpleDialog(entity: Box3PlayerEntity,title?:string,content?:string) { 
  //奇怪的API问题
  entity.player.dialog(<any>{
    type: "text",
    title,
    content
  });
}

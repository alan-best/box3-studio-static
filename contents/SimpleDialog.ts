async function textDialog(entity: Box3PlayerEntity, title?: string, content?: string) { 
  //奇怪的API问题
  return await entity.player.dialog(<any>{
    type: "text",
    title,
    content
  });
}

async function selectDialog(entity: Box3PlayerEntity, title?: string, content?: string, options: Array<string>) { 
  //奇怪的API问题
  return await entity.player.dialog(<any>{
    type: "select",
    title,
    content,
    options
  });
}

async function inputDialog(entity: Box3PlayerEntity, title?: string, content?: string, confirmText?: string, placeholder?: string) { 
  //奇怪的API问题
  return await entity.player.dialog(<any>{
    type: "input",
    title,
    content,
    confirmText,
    placeholder
  });
}

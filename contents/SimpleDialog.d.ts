/**
 * 显示简单的对话框
 */
declare function textDialog(entity: Box3PlayerEntity, title?: string, content?: string): Promise<string | Box3DialogSelectResponse>
declare function selectDialog(entity: Box3PlayerEntity, title?: string, content?: string, options: Array<string>): Promise<string | Box3DialogSelectResponse>
declare function inputDialog(entity: Box3PlayerEntity, title?: string, content?: string, confirmText?: string, placeholder?: string): Promise<string | Box3DialogSelectResponse>

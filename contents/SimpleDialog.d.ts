/**
 * 显示文本对话框
 */
declare function textDialog(entity: Box3PlayerEntity, title?: string, content?: string): Promise<string | Box3DialogSelectResponse>

/**
 * 显示选择对话框
 */
declare function selectDialog(entity: Box3PlayerEntity, title?: string, content?: string, options: Array<string>): Promise<string | Box3DialogSelectResponse>

/**
 * 显示输入对话框
 */
declare function inputDialog(entity: Box3PlayerEntity, title?: string, content?: string, confirmText?: string, placeholder?: string): Promise<string | Box3DialogSelectResponse>

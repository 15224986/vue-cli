/**
 * 引入clipboard
 * 复制到剪切模板 插件
 */
import Clipboard from 'clipboard'
export default function( text, success, error) {
    // 逻辑...
    let oCopyBtn = document.createElement('button');
    document.body.appendChild(oCopyBtn);
    const clipboard = new Clipboard( oCopyBtn, {
        text: () => text
    })
    clipboard.on('success', e => {
        success(e);
        // 释放内存
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy();
        //移除节点
        document.body.removeChild(oCopyBtn);
    });
    clipboard.on('error', e => {
        error(e);
        // 释放内存
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy();
        //移除节点
        document.body.removeChild(oCopyBtn);
    });
    //模拟点击
    oCopyBtn.click();
};

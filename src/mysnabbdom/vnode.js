/**
 * 函数功能是将参数组合成对象返回
 * @param {*} sel 选择器
 * @param {*} data 对应的是vnode绑定的数据
 * @param {*} children 子元素数组
 * @param {*} text 文本
 * @param {*} elm 对应真是dom element的引用
 * @returns
 */
export default function (sel, data, children, text, elm) {
  return { sel, data, children, text, elm }
}

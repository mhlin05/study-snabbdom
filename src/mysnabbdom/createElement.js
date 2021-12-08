/**
 * 真正创建节点，将vnode创建为DOM
 * @param {*} vnode
 * @param {*} pivot
 */
export default function createElement(vnode) {
  // 创建一个DOM节点
  let domNode = document.createElement(vnode.sel)
  if (
    vnode.text !== '' &&
    (vnode.children === undefined || vnode.children.length === 0)
  ) {
    // 内部是文字的情况
    domNode.innerText = vnode.text
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    for (let i = 0; i < vnode.children.length; i++) {
      // 将递归得到的DOM上树
      domNode.appendChild(createElement(vnode.children[i]))
    }
  }
  // 补充elm属性
  vnode.elm = domNode
  // 返回DOM
  return vnode.elm
}

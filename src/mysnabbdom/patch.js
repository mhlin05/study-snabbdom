import vnode from './vnode'
import sameVnode from './sameVnode'
import createElement from './createElement'

export default function (oldVnode, newVnode) {
  console.log('patch ', 'old', oldVnode, 'new', newVnode)

  // 判断传入的第一个参数 是DOM还是虚拟节点
  if (oldVnode.sel === '' || oldVnode.sel === undefined) {
    // DOM节点 此时要包装为虚拟节点
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVnode
    )
  }
  // 判断oldVnode和newVnode是不是同一个节点
  if (sameVnode(oldVnode, newVnode)) {
    // 精细化比较
    console.log('同一个节点')
  } else {
    console.log('不是同一个节点 插入新的删除旧的')
    // 不是同一个节点 插入新的删除旧的
    let newVnodeElm = createElement(newVnode) //生成DOM
    // newVnode.elm = newVnodeElm
    // 插入新节点到老节点之前
    if (oldVnode.elm.parentNode && newVnodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
    }
    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}

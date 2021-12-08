import vnode from './vnode'
import sameVnode from './sameVnode'

export default function (oldVnode, newVnode) {
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
  } else {
    // 不是同一个节点 插入新的删除旧的
  }
}

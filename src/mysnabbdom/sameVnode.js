/**
 * 判断两个虚拟节点是否相等
 * @param {*} vnode1
 * @param {*} vnode2
 * @returns
 */
function sameVnode(vnode1, vnode2) {
  const isSameKey = vnode1.key === vnode2.key
  const isSameSel = vnode1.sel === vnode2.sel

  return isSameSel && isSameKey
}

export default sameVnode

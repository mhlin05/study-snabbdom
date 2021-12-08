/**
 * 真正创建节点，将vnode创建为DOM，插入倒pivot这个元素之前
 * @param {*} vnode
 * @param {*} pivot
 */
export default function (vnode, pivot) {
  console.log('目的是把虚拟节点', vnode, '插入到标杆', pivot, '之前')
  // 创建一个DOM节点，这个节点现在还是孤儿节点
  let domNode = document.createElement(vnode.sel)
}

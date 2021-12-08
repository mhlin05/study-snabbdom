import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h
} from 'snabbdom'

// 创建出patch函数
const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule // attaches event listeners
])

// 得到盒子和按钮
const container = document.getElementById('container')
const btn = document.getElementById('btn')

const vnode1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
])
const vnode2 = h('ul', {}, [
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
])

patch(container, vnode1)

// 点击按钮，将vnode1变为vnode2
btn.onclick = () => {
  patch(vnode1, vnode2)
}

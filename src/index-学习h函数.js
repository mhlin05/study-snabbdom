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

// 创建虚拟节点
const myVnode1 = h(
  'a',
  {
    props: { href: 'https://github.com/snabbdom/snabbdom', target: '_blank' }
  },
  'snabbdom'
)
// console.log(myVnode1)

const myVnode2 = h('ul', '', [
  h('li', {}, '牛奶'),
  '这是什么',
  h('li', {}, '咖啡'),
  h('li', {}, '可乐')
])

// 让虚拟节点上树
const container = document.getElementById('container')
patch(container, myVnode2)

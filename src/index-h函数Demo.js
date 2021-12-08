import h from './mysnabbdom/h'

// let myVnode = h('div', {}, '文字')
// let myVnode = h('div', {}, [
//   h('p', {}, '哈哈'),
//   h('p', {}, 'xixi'),
//   h('p', {}, '呵呵')
// ])
let myVnode = h('div', {}, h('p', {}, '哈哈'))

console.log(myVnode)

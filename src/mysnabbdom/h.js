import vnode from './vnode'

// console.log(vnode(1, 2, 3))

/**
 * 低配版本，没有实现多种重载
 * @param {*} sel 选择器
 * @param {*} data
 * @param {*} c 文字、数组、h
 */
/**
 * 三种形态
 * h('div',{},'文字')
 * h('div',{},[])
 * h('div',{},h())
 */
export default function (sel, data, c) {
  // 检查参数的个数
  if (arguments.length !== 3) {
    throw new Error('对不起，h函数必须传入三个参数，这是低配版本')
  }
  //   检查C的类型
  if (typeof c === 'string' || typeof c === 'number') {
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    let children = []
    //   检查c[i]必须是一个对象，如果不满足报错
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
        // console.log((typeof c);
        console.log(c[i])
        throw new Error('传入的数组参数中有项不是h函数')
      }

      children.push(c[i])
    }

    // 循环结束 children收集完毕
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    //   唯一的children
    return vnode(sel, data, [c], undefined, undefined)
  } else {
    throw new Error('传入第三个参数不对')
  }
}

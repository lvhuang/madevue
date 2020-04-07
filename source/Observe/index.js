import Observe from './observe'

export function initstate(vm) {
    let opts = vm.$options
    if (opts.data) {
        initData(vm)
    }
    if (opts.computed) {
        initComputed()
    }
    if (opts.watch) {
        initWatch()
    }
}

export function observe(data) {
    //判断是不是对象 return
    if (typeof data !== 'object' || data == null) {
        return
    }
    return new Observe(data)//观察数据的业务逻辑放在这里
}
function proxy(vm, source, key) {
    Object.defineProperty(vm, key, {
        get() {
            return vm[source][key]
        },
        set(newValue) {
            return vm[source][key] = newValue
        }
    })
}
function initData(vm) {
    //获取用户传入的data
    let data = vm.$options.data
    //判断传入的data是不是函数，把数据赋值给vm._data方便观察    
    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {}
    //其实vm._data代理了vm的操纵


    //为什么写这部？？？？？？？
    for (let key in data) {
        proxy(vm, '_data', key)
    }
    observe(data)
}

function initComputed() { }
function initWatch() { }

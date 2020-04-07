import { observe } from "."

class Observe {
    constructor(data) {//data就是vue里面的定义的data
        //将用户的数据使用definProperty定义
        this.walk(data)
    }
    walk(data) {
        let keys = Object.keys(data)//得到data的key值返回一个数组
        for (var i = 0; i < keys.length; i++) {
            let key = keys[i]//data的key值
            let value = data[keys[i]]//data的value
            defineReactive(data, key, value)
        }
    }
}

export function defineReactive(data, key, value) {
    //观察value是不是一个对象然后监听，如果是对象，递归监听
    observe(value)

    Object.defineProperty(data, key, {
        get() {
            console.log('获取数据');
            return value
        },
        set(newValue) {
            console.log('设置数据');
            if (newValue === value) return
            //如果你设置的时候就是一个对象
            observe(newValue)
            value = newValue
        }
    })
}
export default Observe
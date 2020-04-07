import { initstate } from '../Observe'


function Vue(options) {//vue中传入参数
    //初始化用户传入的选项
    this._init(options)

}
//初始化
Vue.prototype._init = function (options) {
    let vm = this
    vm.$options = options
    //重新初始化状态data computed watch
    initstate(vm)
}
export default Vue
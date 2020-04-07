import Vue from 'vue'//默认source/vue/index.找

let vm = new Vue({
    el: '#app',
    //把data里面的数据代理到vm身上；实现双向数据绑定
    data() {
        return {
            msg: 'hello',
            haha: { a: 1 },
            arr: [1, 2, 3]
        }
    },
    computed: {},
    watch: {}
})
vm.arr.push(4)
console.log();



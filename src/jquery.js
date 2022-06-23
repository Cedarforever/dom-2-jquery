

window.jquery = function(selectorOrArray){
    let elements  //在这声明变量elements  表示这个变量 能够在window.jquery=function(){}中 这个{}里面全局使用
    if(typeof selectorOrArray === 'string'){  //if(){}else if(){}构成 重载！！！
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){  //判断数组和对象 用的instanceof  DOM第一篇文章也有介绍
        elements = selectorOrArray  //此时这个selectorOrArray就是个数组 并且这个数组是筛选后的数组对应下面的arr
    }

    return{   //这里是执行jquery(selectorOrArray)后 返回的对象  (无名对象)
        oldApi : selectorOrArray.oldApi,
    addClass(className){
        for(let i=0;i<elements.length;i++){
            elements[i].classList.add(className)
        }
        return this // 这里需要对照一下 下面的return jquery 两者是有区别的！！
    },
    find(selector){
        let arr = []
        for(let i=0;i<elements.length;i++){
          let arr11 =  Array.from(elements[i].querySelectorAll(selector)) //这里就是在筛选 得到范围更小的数组
          arr = arr.concat(arr11)
        }
        arr.oldApi = this
        return jquery(arr)  //*****重新构造一个对象 把筛选过后的数组 传入到jquery(数组) 再通过重载判断 
    },             //在通过重载判断 把变量elements不同的值 再传入给不同的方法 例如此时传给find()和addClass()

    end(){
        return this.oldApi
    },

    each(fn){  //each函数的主要作用就是 遍历调用者的elements变量  而且是把elements[i]当作实际参数传给fn函数  
        for(let i=0;i<elements.length;i++){
            fn.call(null,elements[i],i) //null表示fn函数没有this
        }
        return this   //返回调用者对象
    },

    parent(){  
        let arr22 = []
        this.each((node)=>{
            if(arr22.indexOf(node.parentElement) === -1 ){  // if语句加的位置想一想为什么在这，
             arr22.push(node.parentElement) } //不要当sb用concat concat是连接数组 这里是数组？
        })                                   //因为某node的父亲只有一个 所以这里并不是数组而是一个元素
        return jquery(arr22)
    },

    print(){
       console.log(elements)  //法一  注意这里的elements是个数组 所以打印出的是个数组

       
         //法二 return this.each((node)=>console.log(node))自己想的办法 因为要个结果值所以加个return！！ 
    },


    children(){
        let arr33 = []
        this.each( (node)=>{ //不使用...会让数组arr33中有很多伪数组,使用...就是让伪数组展开 形如node.children[0]
            arr33.push(...node.children) //node是个形参占位，实际参数是elements[i] 
         } )                             //某node.children会有很多儿子 所以是个伪数组  
         return jquery(arr33)
    },

}
}       
   //总结此时还不够完善，因为我没考虑到内存，具体做法是我应该把这些函数方法放到jQuery.prototype身上 ,然后
   //然后 构造一个对象api 使其api.__proto__ === jQuery.prototype

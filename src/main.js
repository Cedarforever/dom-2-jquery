// //    window.jquery('.test') 这个window可以省略不写 因为它是全局的，但是jquery.js里面的window不能缩写！！
// jquery('.test').addClass('green') //由于返回的是个对象 所以可继续addClass 这个操作叫链式操作
//      .addClass('blue')     //****此时表示只在test身上加 class=green、blue


 jquery('.test').find('.red').addClass('ppppp') 
//      //***** 此时表示在test儿子里面有class='red'的儿子增加class='ppppp'



// jquery('.test').addClass('yellow') //这是回马枪操作 此时我想在test身上加 class='yellow'



//jquery('.test').addClass('okk').find('.red').addClass('llll').end().addClass('oooo')
             //此时的.end()返回的对象 就是调用find()函数的对象 显然此时这个对象就是jquery('.test')
    //所以末尾的addClass('oooo') 会加在 jquery('.test')身上  ( 准备说是jquery('.test')执行后 返回的对象身上 )

   // jquery('.test').each((div,ii)=>{console.log(div,ii)})
                 //这里的div和ii其实是形式参数 表站位，真正的参数是elements[i]和i   具体理解去jquery.js文件看


   jquery('.red').parent().print()
   jquery('.test').children().print()

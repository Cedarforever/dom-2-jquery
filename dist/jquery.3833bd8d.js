// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"ZC2/":[function(require,module,exports) {
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.$ = window.jquery = function (selectorOrArray) {
    var elements = void 0; //在这声明变量elements  表示这个变量 能够在window.jquery=function(){}中 这个{}里面全局使用
    if (typeof selectorOrArray === 'string') {
        //if(){}else if(){}构成 重载！！！
        elements = document.querySelectorAll(selectorOrArray);
    } else if (selectorOrArray instanceof Array) {
        //判断数组和对象 用的instanceof  DOM第一篇文章也有介绍
        elements = selectorOrArray; //此时这个selectorOrArray就是个数组 并且这个数组是筛选后的数组对应下面的arr
    }

    return { //这里是执行jquery(selectorOrArray)后 返回的对象  (无名对象)
        oldApi: selectorOrArray.oldApi,
        addClass: function addClass(className) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.add(className);
            }
            return this; // 这里需要对照一下 下面的return jquery 两者是有区别的！！
        },
        find: function find(selector) {
            var arr = [];
            for (var i = 0; i < elements.length; i++) {
                var arr11 = Array.from(elements[i].querySelectorAll(selector)); //这里就是在筛选 得到范围更小的数组
                arr = arr.concat(arr11);
            }
            arr.oldApi = this;
            return jquery(arr); //*****重新构造一个对象 把筛选过后的数组 传入到jquery(数组) 再通过重载判断 
        },
        //在通过重载判断 把变量elements不同的值 再传入给不同的方法 例如此时传给find()和addClass()

        end: function end() {
            return this.oldApi;
        },
        each: function each(fn) {
            //each函数的主要作用就是 遍历调用者的elements变量  而且是把elements[i]当作实际参数传给fn函数  
            for (var i = 0; i < elements.length; i++) {
                fn.call(null, elements[i], i); //null表示fn函数没有this
            }
            return this; //返回调用者对象
        },
        parent: function parent() {
            var arr22 = [];
            this.each(function (node) {
                if (arr22.indexOf(node.parentElement) === -1) {
                    // if语句加的位置想一想为什么在这，
                    arr22.push(node.parentElement);
                } //不要当sb用concat concat是连接数组 这里是数组？
            }); //因为某node的父亲只有一个 所以这里并不是数组而是一个元素
            return jquery(arr22);
        },
        print: function print() {
            console.log(elements); //法一  注意这里的elements是个数组 所以打印出的是个数组


            //法二 return this.each((node)=>console.log(node))自己想的办法 因为要个结果值所以加个return！！ 
        },
        children: function children() {
            var arr33 = [];
            this.each(function (node) {
                //不使用...会让数组arr33中有很多伪数组,使用...就是让伪数组展开 形如node.children[0]
                arr33.push.apply(arr33, _toConsumableArray(node.children)); //node是个形参占位，实际参数是elements[i] 
            }); //某node.children会有很多儿子 所以是个伪数组  
            return jquery(arr33);
        }
    };
};
//总结此时还不够完善，因为我没考虑到内存，具体做法是我应该把这些函数方法放到jQuery.prototype身上 ,然后
//然后 构造一个对象api 使其api.__proto__ === jQuery.prototype
},{}]},{},["ZC2/"], null)
//# sourceMappingURL=jquery.3833bd8d.map
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
})({"epB2":[function(require,module,exports) {
// //    window.jquery('.test') 这个window可以省略不写 因为它是全局的，但是jquery.js里面的window不能缩写！！
// jquery('.test').addClass('green') //由于返回的是个对象 所以可继续addClass 这个操作叫链式操作
//      .addClass('blue')     //****此时表示只在test身上加 class=green、blue


jquery('.test').find('.red').addClass('ppppp');
//      //***** 此时表示在test儿子里面有class='red'的儿子增加class='ppppp'


// jquery('.test').addClass('yellow') //这是回马枪操作 此时我想在test身上加 class='yellow'


//jquery('.test').addClass('okk').find('.red').addClass('llll').end().addClass('oooo')
//此时的.end()返回的对象 就是调用find()函数的对象 显然此时这个对象就是jquery('.test')
//所以末尾的addClass('oooo') 会加在 jquery('.test')身上  ( 准备说是jquery('.test')执行后 返回的对象身上 )

// jquery('.test').each((div,ii)=>{console.log(div,ii)})
//这里的div和ii其实是形式参数 表站位，真正的参数是elements[i]和i   具体理解去jquery.js文件看


jquery('.red').parent().print();
jquery('.test').children().print();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.8c8333c0.map
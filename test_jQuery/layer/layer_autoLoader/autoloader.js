/**
 * Created by hongwei on 2016/7/27.
 */


;!function( ){


    var ui = {
        path : 'http://localhost:63342/test/test_jQuery/layer/layer_autoLoader/'
    };

    /**
     *
     * @param module 相对应与该文件的路径+文件名
     */
    var use = function ( module ) {

        //对参数进行简单的处理
        var module = module.replace(/\s/g, '');
        //.test(String) 如果字符串能和正则表达式匹配return true。
        var isCss = /\.css$/.test(module);
        var head = document.getElementsByTagName('head')[0];
        //首先分析传入的参数,生成相对的地址
        //根据参数的类型传入相应的标签
        var node = document.createElement( isCss ? 'link' : 'script');
        //完善标签 添加id属性、rel、链接。添加id是用来检测是否有重复的
        if( !ui.path ) return ;
        var id = 'loader_ui_' + module.replace(/\.|\//g, '');
        node.id = id ;
        if( isCss ){
            node.rel = 'stylesheet';
        }
        node[isCss ? 'href':'src'] = /^http:\/\//.test(module) ? module : ui.path + module;
        //将标签放到head里面
        if( !document.getElementById(id) ){
            //如果已经添加，就不用再添加了。
            head.appendChild(node);
        }

        ;(function poll() {

            ;(iscss ? parseInt($('#'+id).css('width')) === 1989 : layer[readyMethod||id]) ? function(){
                fn && fn();
                try { iscss || head.removeChild(node); } catch(e){};
            }() : setTimeout(poll, 100);
        }());
    };


    (function(){
        use('test.css');
        use('test.js');
    })();
}();
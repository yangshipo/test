/**
 * Created by hongwei on 2016/7/27.
 */


;!function( ){


    var ui = {
        path : 'http://localhost:63342/test/test_jQuery/layer/layer_autoLoader/'
    };

    /**
     *
     * @param module ���Ӧ����ļ���·��+�ļ���
     */
    var use = function ( module ) {

        //�Բ������м򵥵Ĵ���
        var module = module.replace(/\s/g, '');
        //.test(String) ����ַ����ܺ�������ʽƥ��return true��
        var isCss = /\.css$/.test(module);
        var head = document.getElementsByTagName('head')[0];
        //���ȷ�������Ĳ���,������Եĵ�ַ
        //���ݲ��������ʹ�����Ӧ�ı�ǩ
        var node = document.createElement( isCss ? 'link' : 'script');
        //���Ʊ�ǩ ���id���ԡ�rel�����ӡ����id����������Ƿ����ظ���
        if( !ui.path ) return ;
        var id = 'loader_ui_' + module.replace(/\.|\//g, '');
        node.id = id ;
        if( isCss ){
            node.rel = 'stylesheet';
        }
        node[isCss ? 'href':'src'] = /^http:\/\//.test(module) ? module : ui.path + module;
        //����ǩ�ŵ�head����
        if( !document.getElementById(id) ){
            //����Ѿ���ӣ��Ͳ���������ˡ�
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
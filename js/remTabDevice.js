/**
 * Created by Administrator on 2017/3/20.
 */
/*   rem尺寸转换函数   */
var rem = 20;
;(function(win,doc){
    rem =20/320*doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize = rem+'px';
    win.addEventListener('resize',function(){
        rem =20/320*doc.documentElement.clientWidth;
        doc.documentElement.style.fontSize = rem+'px';
    },false);
})(window,document);

/*var rem;
;(function(win,doc){
    rem =20/320*doc.documentElement.clientWidth;
    doc.documentElement.style.fontSize = rem+'px';
    win.addEventListener('resize',function(){
        rem =20/320*doc.documentElement.clientWidth;
        doc.documentElement.style.fontSize = rem+'px';
    },false);
})(window,document);*/
function domReady(fn){
    if(document.addEventListener){
        //IE 9+ chrome FF
        document.addEventListener('DOMContentLoaded',function(){
            fn && fn();
        },false);
    }else{ //IE8
        /*document.onreadystatechange=function(){
         if(document.readyState=='complete'){
         fn && fn();
         }
         };*/
        document.attachEvent('onreadystatechange',function(){
            if(document.readyState=='complete'){
                fn && fn();
            }
        });
    }
}


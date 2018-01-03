/**
 * Created by Administrator on 2017/4/23.
 */
$(function(){
    /*   fullPage  滚屏     */
    $('#dowebok').fullpage({
        'navigation': true,
        scrollingSpeed: 1000,
        css3: true,
        resize: true,
        anchors: ["page1","page2","page3","page4","page5","page6"],
        navigationPosition:'right',
        navigationTooltips:["首页","关于我","专业技能","工作经历","我的作品","联系我"],
        verticalCentered: false,
        afterRender:function(){
            $('.page1').addClass('active');
            $('.page1').find('h3').animate({
                top:'17%'
            },400);
            $('.page1 .text p').eq(0).css({
                WebkitTransform:'scale(1,1)'
            })
            $('.page1 .text p').eq(1).css({
                WebkitTransform:'scale(1,1)'
            })
            $('.page1 .text p').eq(2).css({
                WebkitTransform:'scale(1,1)'
            })
            $('.page1 .text p').eq(3).css({
                WebkitTransform:'scale(1,1)'
            })
        },/*     滚屏的回调函数，第一屏得放在这个     */
        afterLoad:function (anchorLink,index) {
            if(index==1){
                $('.page1').addClass('active');
                /*$('.page1').find('h3').animate({
                    top:'18%',
                    right:'12%'
                })*/
                $('.page1').find('h3').css({
                    top:'17%'
                });
                $('.page1 .text p').eq(0).css({
                    transform:'scale(1,1)'
                })
                $('.page1 .text p').eq(0).css({
                    WebkitTransform:'scale(1,1)'
                })
                $('.page1 .text p').eq(1).css({
                    WebkitTransform:'scale(1,1)'
                })
                $('.page1 .text p').eq(2).css({
                    WebkitTransform:'scale(1,1)'
                })
                $('.page1 .text p').eq(3).css({
                    WebkitTransform:'scale(1,1)'
                })
            }
            if(index==2){
                $('.page2').addClass('active2');
                $('.page2 .imgs img').css({
                    transform:'scale(1,1)'
                })
                $('.page2 h3 span').css({
                    width:'160px'
                })
            }
            if(index==5){
                /*$('.page2').find('.dome').delay(10).animate({
                    left:'160%'
                },500,'easeOutExpo',function(){
                    $('.page2').find('h3').animate({
                        top:'26%',
                        right:'8%'
                    },400)
                });*/
                $('.page5').find('h3').animate({
                    top:'26%',
                    right:'12%'
                },800)
                $('.page5 .dome').css({
                    transform:'scale(1,1)'
                },800)
                $('.page5 .fp1').animate({
                    top:'10%',
                    left:'100px'
                },800);
                $('.page5 .fp2').animate({
                    bottom:'10%',
                    right:'100px'
                },800);
                $('.page5 p').eq(0).animate({
                    left:'8%',
                    bottom:'36%'
                },600,function(){
                    $('.page5 p').eq(1).animate({
                        left:'8%',
                        bottom:'24%'
                    },500,function(){
                        $('.page5 p').eq(2).animate({
                            left:'8%',
                            bottom:'12%'
                        },400)
                    })
                })
            }
            if(index==3){
                $('.page3 h3').animate({
                    top:'15%'
                },800);
                $('.page3 section').eq(1).animate({
                    opacity:1
                },800)
                $('.page3 section').eq(0).animate({
                    left:0
                },800)
                $('.page3 section').eq(2).animate({
                    right:0
                },800)

            }
            if(index==4){
                $('.page4 h3').animate({
                    right:'0'
                },800);
                $('.page4 section').eq(0).animate({
                    opacity:1
                },600,function(){
                    $('.page4 section').eq(1).animate({
                        opacity:1
                    },500,function(){
                        $('.page4 section').eq(2).animate({
                            opacity:1
                        },400)
                    })
                })

            }
            if(index==6){
                $('.page6 .toContactMe').css('opacity',1);
                $('.page6 .Dream').css('marginLeft',0);
                $('.page6 .footer p').eq(0).css('transform','scale(1,1)');
                $('.page6 .footer p').eq(1).css('marginLeft',0);
                $('.page6 .footer p').eq(2).css('marginRight',0);
            }
        },
        onLeave:function (index,nextIndex,direction){
            if(index==1){
                $('.page1').removeClass('.active');
                $('.page1').find('h3').animate({
                    top:'-100%'
                });
                $('.page1 .text p').eq(1).animate({
                    transform:'scale(1,1)'
                },400)
                $('.page1 .text p').eq(0).css({
                    WebkitTransform:'scale(0,0)'
                })
                $('.page1 .text p').eq(1).css({
                    WebkitTransform:'scale(0,0)'
                })
                $('.page1 .text p').eq(2).css({
                    WebkitTransform:'scale(0,0)'
                })
                $('.page1 .text p').eq(3).css({
                    WebkitTransform:'scale(0,0)'
                })
            }
            if(index==2){
                $('.page2').removeClass('active2');
                $('.page2 .imgs img').css({
                    transform:'scale(0,0)'
                })
                $('.page2 h3 span').css({
                    width:0
                })
            }
            if(index==5){
                $('.page5 .dome').css({
                    transform:'scale(0,0)'
                },800);
                $('.page5').find('h3').animate({
                    top:'-200%',
                    right:'-100%'
                },800);
                $('.page5 .fp1').animate({
                    top:'-200%',
                    left:'-100%'
                },800);
                $('.page5 .fp2').animate({
                    bottom:'-60%',
                    right:'-100%'
                },800);
                $('.page5 p').eq(0).animate({
                    left:'-180%',
                    bottom:'280px'
                },466,function(){
                    $('.page5 p').eq(1).animate({
                        left:'-180%',
                        bottom:'180px'
                    },366,function(){
                        $('.page5 p').eq(2).animate({
                            left:'-180%',
                            bottom:'80px'
                        },266)
                    })
                })
                /*$('.page2 p').eq(0).animate({
                    left:'-180%',
                    bottom:'36%'
                },600,function(){
                    $('.page2 p').eq(1).animate({
                        left:'-180%',
                        bottom:'24%'
                    },500,function(){
                        $('.page2 p').eq(2).animate({
                            left:'-180%',
                            bottom:'12%'
                        },400)
                    })
                })*/
            }
            if(index==3){
                $('.page3 h3').animate({
                    top:'-300%'
                },800);
                $('.page3 section').eq(1).animate({
                    opacity:0
                },800);
                $('.page3 section').eq(0).animate({
                    left:'-100%'
                },800);
                $('.page3 section').eq(2).animate({
                    right:'-100%'
                },800)
            }
            if(index==4){
                $('.page4 h3').animate({
                    right:'-100%'
                },800);
                $('.page4 section').eq(2).animate({
                    opacity:0
                },300,function(){
                    $('.page4 section').eq(1).animate({
                        opacity:0
                    },300,function(){
                        $('.page4 section').eq(0).animate({
                            opacity:0
                        },300)
                    })
                })

            }
            if(index==6){
                $('.page6 .toContactMe').css('opacity',0);
                $('.page6 .Dream').css('marginLeft','100%');
                $('.page6 .footer p').eq(0).css('transform','scale(0,0)');
                $('.page6 .footer p').eq(1).css('marginLeft','-200%');
                $('.page6 .footer p').eq(2).css('marginRight','-200%');
            }
        }
        /*afterRender: function(){
         $("#home").css({"display":"block"}).addClass("home_zoom");
         $("#fp-nav").css({"top":($(".active").height()-$("#fp-nav").height())/2});
         $("header").before("<div id='header' style='opacity:0'></div>");
         $("#home_head").css({"margin-top":"100px"});
         $("header").animate({opacity:"1"},1000,function(){
         $("#header").css({"opacity":"0.3"});
         $("#home_info1").fadeIn(700,function(){
         $(this).next().animate({width:"800px"},700,function(){
         $("#home_info2").fadeIn(450,function(){
         $(this).next().fadeIn(450,function(){
         $(this).next().fadeIn(450,function(){
         $(this).next().fadeIn(450,function(){
         $("aside").fadeIn(300);
         });
         });
         });
         });
         });
         });
         });
         $("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
         },*/
    });
    /*   文字切换    */
    {
        $('#top-nav li').on('mouseover',function(){
            $('#top-nav li').eq($(this).index()).find('div').css('top','-66px');
        });
        $('#top-nav li').on('mouseout',function(){
            $('#top-nav li').eq($(this).index()).find('div').css('top','0');
        });
        $('.contactMe h2 a').on('mouseover',function(){
            $('.contactMe div').css('top','-46px');
        });
        $('.contactMe h2 a').on('mouseout',function(){
            $('.contactMe div').css('top','0');
        });
    }
    /*    穿墙效果    */
    {
        function getStyle(obj,name){
            if(obj.currentStyle){
                return obj.currentStyle[name];
            }else{
                return getComputedStyle(obj,false)[name];
            }
        }

        function startMove(obj,json,options){
            //判断默认值
            options=options || {};
            options.duration=options.duration || 500;
            options.easing=options.easing || 'ease-out';

            //准备运动需要东西
            var count=Math.floor(options.duration/30);

            var start={};
            var dis={};

            for(var name in json){
                start[name]=parseFloat(getStyle(obj,name));

                if(isNaN(start[name])){
                    //有事，没有给默认值
                    switch (name){
                        case 'left':
                            start[name]=obj.offsetLeft;
                            break;
                        case 'top':
                            start[name]=obj.offsetTop;
                            break;
                        case 'width':
                            start[name]=obj.offsetWidth;
                            break;
                        case 'height':
                            start[name]=obj.offsetHeight;
                            break;
                        case 'marginLeft':
                            start[name]=0;
                            break;
                        case 'marginTop':
                            start[name]=0;
                            break;
                        case 'fontSize':
                            start[name]=12;
                            break;
                        //.......

                    }
                }

                dis[name]=json[name]-start[name];
            }

            clearInterval(obj.timer);

            var n=0;

            obj.timer=setInterval(function(){
                n++;

                for(var name in json){

                    switch (options.easing){
                        case 'linear':
                            var a=n/count;
                            var cur=start[name]+dis[name]*a;
                            break;
                        case 'ease-in':
                            var a=n/count;
                            var cur=start[name]+dis[name]*Math.pow(a,3);
                            break;
                        case 'ease-out':
                            var a=1-n/count;
                            var cur=start[name]+dis[name]*(1-Math.pow(a,3));
                            break;
                    }

                    if(name=='opacity'){
                        obj.style.opacity=cur;
                        obj.style.filter='alpha(opacity:'+cur*100+')';
                    }else{
                        obj.style[name]=cur+'px';
                    }
                }

                if(n==count){
                    clearInterval(obj.timer);

                    options.complete && options.complete();
                }
            },30);

        }

        function hoverDir(obj,ev){
            var w=obj.offsetWidth;
            var h=obj.offsetHeight;

            var a=obj.offsetLeft+w/2-ev.clientX;
            var b=obj.offsetTop+h/2-ev.clientY;

            return Math.round((Math.atan2(b,a)*180/Math.PI+180)/90)%4;

        }

        let oBox=document.querySelector('.page5');
        let aA=oBox.querySelectorAll('a');
        for(let i=0; i<aA.length; i++){
            aA[i].onmouseenter=function(ev){
                var oSpan=this.children[1];

                var oEvent=ev || event;
                var n=hoverDir(this,oEvent);

                switch (n){
                    case 0:
                        oSpan.style.left=360+'px';
                        oSpan.style.top=0;
                        break;
                    case 1:
                        oSpan.style.top=187+'px';
                        oSpan.style.left=0;
                        break;
                    case 2:
                        oSpan.style.left=-360+'px';
                        oSpan.style.top=0;
                        break;
                    case 3:
                        oSpan.style.top=-187+'px';
                        oSpan.style.left=0;
                        break;
                }
                startMove(oSpan,{left:0, top:0});
            };

            aA[i].onmouseleave=function(ev){
                var oSpan=this.children[1];

                var oEvent=ev || event;
                var n=hoverDir(this,oEvent);

                switch (n){
                    case 0:
                        startMove(oSpan,{left:360,top:0});
                        break;
                    case 1:
                        startMove(oSpan,{left:0,top:187});
                        break;
                    case 2:
                        startMove(oSpan,{left:-360,top:0});
                        break;
                    case 3:
                        startMove(oSpan,{left:0,top:-187});
                        break;
                }
            };
        }
    }
});
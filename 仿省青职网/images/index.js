/**
 * Created by xinxibu03 on 15-8-12.
 */
var Index = {
    init: function () {
        this.bind();
        this.tab();
        this.ad();
    },
    bind: function () {
//        $(".i_shuru").focus(function () {
//            if ($(this).val() == this.defaultValue) {
//                $(this).val("").css("color", "#353535");
//            }
//        }).blur(function () {
//                if ($(this).val() == '') {
//                    $(this).val(this.defaultValue).css("color", "#d5d5d5");
//                }
//            });
//        $(".i_kuang:first-child").addClass(" i_kuang_first");
//        $(".i_mediaNotices .i_notices .content:last-child").addClass("lastContent");
        var mySwiper = new Swiper('.swiper-container1', {
            pagination: '.pagination',
            autoplay: 7500,
            speed: 3000,
            loop: true,
            grabCursor: true,
            paginationClickable: true,
            calculateHeight: true
        });
        var mySwiper2 = new Swiper('.swiper-container2', {
            grabCursor: true,
            loop: true,
            calculateHeight: true,
            slidesPerView: 4,
            slidesPerGroup:4,
            slidesPerGroupFit : true
        });
        $('.arrow-left').on('click', function (e) {
            e.preventDefault();
            mySwiper2.swipePrev()
        })
        $('.arrow-right').on('click', function (e) {
            e.preventDefault();
            mySwiper2.swipeNext()
        });
    },
    tab: function () {
//        $(".tabWrap").bind("click", function (e) {
//            var target = $(e.target);
//            if (target.is("a")) {
//                var _parent = target.parent();//.tabWrap
//                var _liArr = _parent.find("a");//当前tabWrap的a数组
//                var _index = _liArr.index(target);//获取当前a在数组中的索引
//                var _tabArea = target.parents(".tabArea");//获取当前tab的最上层节点
//                _liArr.removeClass("selected");
//                target.addClass("selected");
//                _tabArea.find(".tabContent").removeClass("displayBlock").eq(_index).addClass("displayBlock");
//            }
//        });
        $(".i2Tab").bind("click", function (e) {
            var target = $(e.target);
            if (target.is("a")) {
                var _parent = target.parent();//.tabWrap
                var _liArr = _parent.find("a");//当前tabWrap的a数组
                var _index = _liArr.index(target);//获取当前a在数组中的索引
                var _tabArea = target.parents(".i2_box");//获取当前tab的最上层节点
                _liArr.removeClass("current");
                target.addClass("current");
                _tabArea.find(".i2TabContent").removeClass("displayBlock").eq(_index).addClass("displayBlock");
            }
        });

        var _lastCodeImg = $(".code").find("img");
        $(".code").bind("mouseover", function (e) {
            var target = $(e.target);
            if (target.is("img") && _lastCodeImg.index(target) == 0) {
                //target.next().css("left", offset);
                if ($(window).width() < 1340) {
                    target.next().css("left", -140)
                } else {
                    target.next().css("left", -85)
                }
            }
        });
    },
    ad: function (){
    	var x = 0,y = 0;
        var xin = true, yin = true;
        var step = 1;
        var delay = 10;
        var obj=$("#float_ad");
        var float = function(){
                var L = T = 0;
                var OW = obj.width();//当前广告的宽
                var OH = obj.height();//高
                var DW = $(window).width(); //浏览器窗口的宽
                var DH = $(window).height();

                x = x + step *( xin ? 1 : -1 );
                if (x < L) {
                    xin = true; x = L
                }
                if (x > DW-OW-1){//-1为了ie
                    xin = false; x = DW-OW-1
                }

                y = y + step * ( yin ? 1 : -1 );
                if (y > DH-OH-1) {

                    yin = false; y = DH-OH-1 ;
                }
                if (y < T) {
                    yin = true; y = T
                }

                var left = x ;
                var top = y;

                obj.css({'top':top,'left':left});
        }
        var itl = setInterval(float,30);
        obj.mouseover(function(){clearInterval(itl)});
        obj.mouseout(function(){itl=setInterval(float, 30)} );
        // 点击关闭
        $('#close_float_ad').on('click',function(){
            obj.hide();
        });
    }
}
Index.init();
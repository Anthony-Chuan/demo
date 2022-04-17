
        var dropnum=3;
        $("a").click(function () {
            event.preventDefault();
        })



        $(window).scroll(function () {
            console.log($(window).scrollTop());
            if($(window).scrollTop()>200)
            {
                $(".header-bottom").addClass("stick");
                $("#scrollup").show();
            }
            else
            {
                $(".header-bottom").removeClass("stick");
                $("#scrollup").hide();
            }
        })
        $("#scrollup").click(function () {
            event.preventDefault();
            $("html").animate({"scrollTop":0},1000);
        })



        $(".dropdown-toggle").click(function () {
            event.preventDefault();
            var ind=$(this).parent().index();
            if(dropnum==ind){
                $(".nav>li").eq(ind).find(".dropdown-menu").hide("slow");
              
            }else{
                $(".nav>li").eq(ind).find(".dropdown-menu").slideDown();
                $(".nav>li").eq(dropnum ).find(".dropdown-menu").hide("slow");
            }
            dropnum=ind; 
        })



        var iconnum=0;
        $(".header-action>div:nth-child(1)>a").click(function () {
            iconnum=iconnum+1;
            if (iconnum==1) {
                $(".search-wrap").addClass("open-1");
                $(".icon-2").css("opacity","1");
                $(".icon-1").css("opacity","0");
            }else{
                $(".search-wrap").removeClass("open-1");
                $(".icon-1").css("opacity","1");
                $(".icon-2").css("opacity","0");
                iconnum=0;
            }
        })



        $(".header-action>div:nth-child(4) a").click(function () {
            $(".sidebar").addClass("sidebar-active");
            $(".body-color").addClass("body-color-active");
       })
       $(".cart-close").click(function () {
            $(".sidebar").removeClass("sidebar-active");
            $(".body-color").removeClass("body-color-active");
       })


       $(".header-action>div:nth-child(5) a").click(function () {
            $(".canvas-active").addClass("inside");
            $(".body-color").addClass("body-color-active");
       })
       $(".ti-close").click(function () {
        $(".canvas-active").removeClass("inside");
            $(".body-color").removeClass("body-color-active");
       })


       $(".slinky-menu li").click(function () {
            $(".slinky-menu>ul").addClass("smli-active");
            $(this).children("ul").addClass("smli-active-2");
       })
       $(".slinky-menu .header").click(function () {
            $(".slinky-menu>ul").removeClass("smli-active");
            $(".slinky-menu>ul>li>ul").parent().removeClass("smli-active");
       })



       $(".inc").click(function () {
            var num=$(".input-text").val()*1;
            $(".input-text").val(num+1);
       })
       $(".dec").click(function () {
            var num=$(".input-text").val()*1;
            if (num>2) {
                $(".input-text").val(num-1);
           }
       })



       $(".tab-style-1 a").click(function () {
           var ind=$(this).index();
           $(".tab-style-1 a").eq(ind).addClass("tab-active");
           $(".tab-style-1 a").eq(ind).siblings().removeClass("tab-active");
           $(".tab-content>div").eq(ind).addClass("tab-pane-active");
           $(".tab-content>div").eq(ind).siblings().removeClass("tab-pane-active");
       })



       var slinum=0;
       $(".main-slider-nav").click(function () {
           var num=1-slinum;
            if (num==0) {
                $(".swiper-wrapper>div").eq(num).css("opacity","1");
                $(".swiper-wrapper>div").eq(slinum).css("opacity","0");
                slinum=num;
           }else{
                $(".swiper-wrapper>div").eq(num).css("opacity","1");
                $(".swiper-wrapper>div").eq(slinum).css("opacity","0");
                slinum=num;
           }
       })


       var donum=0;
       $(".product-next-1").click(function (event) {
            if(donum<1){
                donum=donum+1;
            }
            else donum=0;
            $(".dotd").css("margin-left",-300*donum);
            
        })
        $(".product-prev-1").click(function (event) {
            if(donum>0){
                donum=donum-1;
            }
            else donum=1;
            $(".dotd").css("margin-left", -300*donum);
        })

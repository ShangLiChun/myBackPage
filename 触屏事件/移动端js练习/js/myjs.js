/**
 * Created by Administrator on 2016/7/25.
 */
/*//////Table切换//////*/
window.onload = function () {


var box1 = document.getElementById("box1");
var ul1 = box1.getElementsByTagName("ul")[0];
var oLi1 = ul1.getElementsByTagName("li");
var box2 = document.getElementById("box2");
var tabletext = document.getElementsByClassName("tableText");
var startPoint,endPoint;
var startX=0,liLeft;
    var iNow = 0;
    var iX = 0;
    var iW = 600;
    var isStartTouchX = 0;

    function oLiTab() {
        function getPoint(e){
            var touches = e.touches;
            //获取触摸点
            return {
                x:touches[0].clientX,
                y:touches[0].clientY
            }
        }
        for(var i=0;i<oLi1.length;i++){
            oLi1[i].index = i;
            oLi1[i].addEventListener("touchstart",function (e) {
                startPoint = getPoint(e);
                    for(var i=0;i<oLi1.length;i++){
                        oLi1[i].style.backgroundColor = "#F5F5F4";
                        oLi1[i].style.borderBottom = "1px solid #dfdfdf"
                    }
                    oLi1[this.index].style.borderBottom = "none";
                    oLi1[this.index].style.backgroundColor = "white";

                    box2.style.transition = "all .3s";
                    box2.style.transform = "translateX("+(-600*this.index)+"px)"

            });
        }

        box1.addEventListener("touchstart",function (e) {
            e.preventDefault();
            isStartTouchX = e.pageX;
            startX = iX;
        });
        box1.addEventListener("touchmove",function (e) {
            e.preventDefault();
            e = e.changedTouches[0];
            var iDis = e.pageX - isStartTouchX;
            iX = startX + iDis;
            tab()
        });

}
    oLiTab();

    function tab() {
        iNow++;
        var w = box2.length;
        var wid = box2.offsetLeft;
        iX = -iNow*wid;
        if(iNow<4) {
            box2.style.transition = "0.3s";
            box2.style.transform = "translateX(" + iX + "px)";
        }
    }



    function fnTable() {
        var iTab = document.getElementById("box1");
        var iList = document.getElementById("box2");
        var iNow = 0;
        var iX = 0;
        var iW = 600;
        var isStartTouchX = 0;
        var startX = 0;

        iTab.addEventListener("touchstart",function (e) {
           e.preventDefault();
            e = e.changedTouches[0];
            //console.log(e);
            isStartTouchX = e.pageX;
            startX = iX;
        });

        iTab.addEventListener("touchmove",function (e) {
            e.preventDefault();
            e = e.changedTouches[0];
            var iDis = e.pageX - isStartTouchX;
            iX = startX + iDis;
            //tab()
        });

        iTab.addEventListener("touchend",function (e) {
            var iNow = Math.abs(iX/iW);
            iNow = Math.round(iNow);
            if(iNow<0){
                iNow=0
            }
            iNow = iNow%3;
            if(iNow>3){
                iNow = 2
            }
            tab()
        });

        function tab() {
            iNow++;
            iX = -iNow*600;
            iList.style.transition = "0.3s";
            iList.style.transform = "translateX("+iX+"px)";
        }
    }
    //fnTable();

};
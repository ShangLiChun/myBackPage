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
/*////////////////////////////////*/
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
/*////////////////////////////////////////////////////////////////////////////////*/

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
    /*////////////////////////////////////////////////*/


    function getPoint(e){
        var touches = e.touches;
        //获取触摸点
        return {
            x:touches[0].clientX,
            y:touches[0].clientY
        }
    }
    //得到两点之间的距离
    function getDistance(p1,p2) {
        //开平方根(通过勾股定理)
        return Math.sqrt((p1.x-p2.x)*(p1.x - p2.x) + (p1.y - p2.y)*(p1.y - p2.y));

    }
    var angle;
    var count = 0;
    var fleg = 0;
    //获得方向
    function getDirection(p1,p2) {
        //对应获得两点的位置坐标差值,从而求得弧度数
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;

        //弧度和角度的转换公式
        //弧度 = 角度*Math.PI/180
        //角度 = 弧度*180/Math.PI
        //弧度构成坐标;x轴方向,顺时针为正逆时针为负;这个角度在x轴正方向的值为0
        angle = Math.atan2(dy,dx) * 180 / Math.PI;
        //对角度进行判定,并设置相对应的朝向问题;从而在空白盒子当中,根据触摸两点构成的角度数,从而相对应来显示出来设定的朝向问题
       /* if(angle<45&&angle>-45) return count++;
        if(angle>=45&&angle<135) return count++;
        if(angle>=135||angle<-135) return count--;
        if(angle>=-135&&angle<=-45) return count--*/
    }

    box1.addEventListener("touchstart",touchStart);
    box1.addEventListener("touchmove",touchMove);
    box1.addEventListener("touchend",touchEnd);
    
    var startX=0;
    var endX=0;
    var x=0;


    function panduan() {
        if(box2.style.left>0){
            box2.style.left=0
        }
        if(box2.style.left<-1200){
            box2.style.left=-1200
        }
    }
    function touchStart(ev) {
        ev.preventDefault();
        startX = getPoint(ev);
        count++;
    }
    
    function touchMove(ev) {
        ev.preventDefault();
        endX = getPoint(ev);
        getDirection(startX,endX);
        if(count>2){
            count=2;
        }


        box2.style.transition = "0.3s";
        if(angle>=135||angle<-135){

                box2.style.transform = "translateX(" + (-count * 600) + "px)";
                panduan()

        }
        if(angle<45&&angle>-45){
            if(count==2){
                count=-2
            }
                box2.style.transform = "translateX(" + count * 600 + "px)";

                panduan()
        }


        console.log(box2.style.left);
        console.log(count)
    }
    function touchEnd() {

        if(getDistance(startX,endX)>200){
            getDirection(startX,endX);
            if(count>2){
                count=-2;
            }

            box2.style.transition = "0.3s";
            if(angle>=135||angle<-135){

                    box2.style.transform = "translateX(" + (-count * 600) + "px)";
                    panduan()

            }
            if(angle<45&&angle>-45){
                if(count==2){
                    count=-2
                }
                    box2.style.transform = "translateX(" + count * 600 + "px)";
                    panduan()

            }
        }

    }
    
    
};
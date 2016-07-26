/**
 * Created by Administrator on 2016/7/23.
 */
window.onload = function () {
    document.documentElement.style.fontSize = innerWidth / 6.4 + "px";
    window.addEventListener("resize", function () {
        document.documentElement.style.fontSize = innerWidth / 6.4 + "px"
    });
};
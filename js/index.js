/**
 * Created by wangbiaozy on 2017/12/1.
 */
(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);
$(function () {
    var $firPage = $('#firPage'),
        $rulePage = $('#rulePage'),
        $openBtn = $('#openBtn'),
        $showBox = $('#showBox'),
        $qdBtn = $('#qdBtn'),
        $ruleBtn = $('#ruleBtn'),
        $closeRuleBtn = $('#closeRuleBtn');

    /*首页拆红包按钮*/
    $openBtn.on('click',function () {
        $showBox.show();
    });
    /*红包弹窗确定按钮*/
    $qdBtn.on('click',function () {
        $showBox.hide();
    });
    /*首页活动规则*/
    $ruleBtn.on('click',function () {
        $firPage.hide();
        $rulePage.show();
    });
    /*活动规则页知道了按钮*/
    $closeRuleBtn.on('click',function () {
        $rulePage.hide();
        $firPage.show();
    });
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});

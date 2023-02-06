<script>
$(function(){
    //resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
    $(window).resize(function () {
        var width = $(window).width();
        if (width>=992) {
            $(".box").css("width","50%");
            $("#news2").css("width","50%");
            $("#product1").css("width","50%");
            $("#product2").css("width","50%");
        } else if (width>=768 && width<992) {
            $(".box").css("width","100%");
            $("#news2").css("width","100%");
            $("#product1").css("width","50%");
            $("#product2").css("width","50%");
        } else if (width<768) {
            $(".box").css("width","100%");
            $("#news2").css("width","100%");
            $("#product1").css("width","100%");
            $("#product2").css("width","100%");
        }
    });

    $(window).trigger("resize"); //강제로 호출하는 함수
});
</script>
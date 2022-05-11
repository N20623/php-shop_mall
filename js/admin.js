$(document).ready(function () {
    $(".function_list").css("height", $(window).height());
    $(window).resize(function () {
        $(".function_list").css("height", $(window).height());
    });
    $("#top_box_btn").click(function () {
        $("#top_box_btn,#expect_box_btn,#more_box_btn,#user_box_btn,#order_box_btn").css({
            backgroundColor: "#FF4040",
            color: "#ffffff"
        });
        $("#top_box_btn").css({
            backgroundColor: "#ffffff",
            color: "red"
        });
        $(".top_box,.expect_box,.more_box,.user_box,order_box").css("display", "none");
        $(".top_box").css("display", "block")
    });
    $("#expect_box_btn").click(function () {
        $("#top_box_btn,#expect_box_btn,#more_box_btn,#user_box_btn,#order_box_btn").css({
            backgroundColor: "#FF4040",
            color: "#ffffff"
        });
        $("#expect_box_btn").css({
            backgroundColor: "#ffffff",
            color: "red"
        });
        $(".top_box,.expect_box,.more_box,.user_box,order_box").css("display", "none");
        $(".expect_box").css("display", "block")
    });
    $("#more_box_btn").click(function () {
        $("#top_box_btn,#expect_box_btn,#more_box_btn,#user_box_btn,#order_box_btn").css({
            backgroundColor: "#FF4040",
            color: "#ffffff"
        });
        $("#more_box_btn").css({
            backgroundColor: "#ffffff",
            color: "red"
        });
        $(".top_box,.expect_box,.more_box,.user_box,order_box").css("display", "none");
        $(".more_box").css("display", "block")
    });
    $("#user_box_btn").click(function () {
        $("#top_box_btn,#expect_box_btn,#more_box_btn,#user_box_btn,#order_box_btn").css({
            backgroundColor: "#FF4040",
            color: "#ffffff"
        });
        $("#user_box_btn").css({
            backgroundColor: "#ffffff",
            color: "red"
        });
        $(".top_box,.expect_box,.more_box,.user_box,.order_box").css("display", "none");
        $(".user_box").css("display", "block")
    });
    $("#order_box_btn").click(function () {
        $("#top_box_btn,#expect_box_btn,#more_box_btn,#user_box_btn,#order_box_btn").css({
            backgroundColor: "#FF4040",
            color: "#ffffff"
        });
        $("#order_box_btn").css({
            backgroundColor: "#ffffff",
            color: "red"
        });
        $(".top_box,.expect_box,.more_box,.user_box,order_box").css("display", "none");
        $(".order_box").css("display", "block")
    });


    $(".userdel_btn").click(function () {
        var val = $(this).attr("data-id");
        $(this).parent().parent().css("display", "none");
        console.log(val);
        $.ajax("delete_user.php", {
            type: "POST",
            data: { id: val }
        });
    });
    $(".orderdel_btn").click(function () {
        var val = $(this).attr("data-id");
        $(this).parent().parent().css("display", "none");
        console.log(val);
        $.ajax("delete_order.php", {
            type: "POST",
            data: { id: val }
        });
    });


});



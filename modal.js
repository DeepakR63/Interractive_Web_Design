

$(document).ready(function(){
    $("#img-i1").click(function(){
        $("#lbl-kindfull").hide();
        $("#lbl-webhook").show();
        $("#mdl-webhook").show();
        $("#img-i2").hide();
        $("#img-i1").show();
        $(".property").css("margin-bottom","0%");
    });
});
$(document).ready(function(){
    $("#img-i2").click(function(){
        $("#lbl-kindfull").show();
        $("#lbl-webhook").hide();
        $("#mdl-webhook").show();
        $("#img-i1").hide();
        $("#img-i2").show();
        $(".property").css("margin-bottom","0%");
    });
});
$(document).ready(function(){
    $("#btn-add-integration").click(function(){
        $("#mdl-webhook").hide();
        $("#img-i1").show();
        $("#img-i2").show();
        $(".property").css("margin-bottom","22%");
    });
});

    
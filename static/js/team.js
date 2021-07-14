$(function() {


  $(".team__teammate-bio").hide();
  $(".team__scrim").hide();

  $(".team__teammate").each(function(index){
    $(this).attr('id', 'member-' + index);
  });


  $(".team__teammate").click(function () {
    var memberId = this.id;
    // alert("#" + memberId);
		var memberContentId = this.id + "_content";
		$(".team__teammate").removeClass("selected");
    $(".team__teammate-bio").removeClass("selected-panel");
		$("#" + memberId).addClass("selected");
    $(".team__teammate-bio").hide();
    $("#" + memberContentId).show().addClass("selected-panel");
    $(".team__scrim").show();
  });

  $(".team__scrim").click(function () {
    $(".team__teammate-bio").hide();
    $(".team__scrim").hide();
  });


});

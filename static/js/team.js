$(function() {
  $(".team-tab:first-of-type").addClass("selected");
  $(".team__page").hide();
  $(".team__page:first-of-type").show();

  $(".team__teammate-bio").hide();

  $(".team__teammate").each(function(index){
    $(this).attr('id', 'member-' + index);
  });

	$(".team-tab").click(function () {
		var tabId = this.id;
		var contentId = this.id + "_content";
		$(".team-tab").removeClass("selected");
		$("#" + tabId).addClass("selected");
    $(".team__page").hide();
    $("#" + contentId).show();
	});

  $(".team__teammate").click(function () {
    var memberId = this.id;
    // alert("#" + memberId);
		var memberContentId = this.id + "_content";
		$(".team__teammate").removeClass("selected");
		$("#" + memberId).addClass("selected");
    $(".team__teammate-bio").hide();
    $("#" + memberContentId).show();
  });
});

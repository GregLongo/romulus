//wait till the page loads
$(function() {
  $(".tab:first-of-type").addClass("selected");
  $(".team__page").hide();
  $(".team__page:first-of-type").show();

  $(".team__teammate-bio").hide();

  $(".team__teammate").each(function(index){
    $(this).attr('id', 'member-' + index);
  });


	$(".tab").click(function () {
		var tabId = this.id;
		var contentId = this.id + "_content"; //figure out the id of the corresonding article element by appending "_content" to the id
		$(".tab").removeClass("selected");
		$("#" + tabId).addClass("selected");
    $(".team__page").hide();
    $("#" + contentId).show();
	});

  $(".team__teammate").click(function () {
    var memberId = this.id;
    // alert("#" + memberId);
		var memberContentId = this.id + "_content"; //figure out the id of the corresonding article element by appending "_content" to the id
		$(".team__teammate").removeClass("selected");
		$("#" + memberId).addClass("selected");
    $(".team__teammate-bio").hide();
    $("#" + memberContentId).show();
  });



});

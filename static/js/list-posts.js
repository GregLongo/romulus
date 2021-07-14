//wait till the page loads
$(function() {
  $(".list-tab:first-of-type").addClass("selected");
  $(".blog-preview__page--list").hide();
  $(".blog-preview__page--list:first-of-type").show();

  $(".more-tab:first-of-type").addClass("selected");
  $(".blog-preview__page--more").hide();
  $(".blog-preview__page--more:first-of-type").show();

	$(".list-tab").click(function () {
		var tabId = this.id;
		var contentId = this.id + "_content"; //figure out the id of the corresonding article element by appending "_content" to the id
		$(".list-tab").removeClass("selected");
		$("#" + tabId).addClass("selected");
    $(".blog-preview__page--list").hide();
    $("#" + contentId).show();
	});

  $(".more-tab").click(function () {
		var tabId = this.id;
		var contentId = this.id + "_content"; //figure out the id of the corresonding article element by appending "_content" to the id
		$(".more-tab").removeClass("selected");
		$("#" + tabId).addClass("selected");
    $(".blog-preview__page--more").hide();
    $("#" + contentId).show();
	});

});

import lottie from 'lottie-web'
var main1 = require('../lottie/main1.json')
var main2 = require('../lottie/main2.json')
var main3 = require('../lottie/main3.json')
var symbol1 = require('../lottie/contract-free.json')
var symbol2 = require('../lottie/vendor-neutral.json')
var symbol3 = require('../lottie/privacy-security.json')
var symbol4 = require('../lottie/fast-responsiveness.json')
var helpdesk = require('../lottie/helpdesk_half2.json')
var onboarding = require('../lottie/onboarding.json')
var security = require('../lottie/security.json')
var compliance = require('../lottie/compliance.json')
var messages = require('../lottie/slack.json')
var team = require('../lottie/helpdesk_half.json')

var animations = [
    [main1,'main1'],
    [main2,'main2'],
    [main3,'main3'],
    [symbol1,'symbol1'],
    [symbol2,'symbol2'],
    [symbol3,'symbol3'],
    [symbol4,'symbol4'],
    [helpdesk,'helpdesk'],
    [onboarding,'onboarding'],
    [security,'security'],
    [compliance,'compliance'],
    [messages,'messages'],
    [team,'team']
  ];

jQuery(document).ready(function() {

animations.forEach(function(anim){
  var element =  $("#lottie-" + anim[1]);
      lottie.loadAnimation({
      container: element[0],
      renderer: 'svg',
      animationData: anim[0]
    })
  });

  $("svg").attr('aria-label','vector animation')

});

import lottie from 'lottie-web'
var home = require('../lottie/lottie1.json')
var onboard = require('../lottie/lottie2.json')
var stats = require('../lottie/stats.json')
var symbol1 = require('../lottie/cube1.json')
var symbol2 = require('../lottie/cube2.json')
var symbol3 = require('../lottie/cube3.json')
var symbol4 = require('../lottie/cube4.json')
var scienceguy = require('../lottie/scienceguy.json')
var statsgirl = require('../lottie/statsgirl.json')
var macguy = require('../lottie/macguy.json')
var handshake = require('../lottie/handshake.json')
var messages = require('../lottie/messages.json')

var animations = [
    [home,'home'],
    [onboard,'onboard'],
    [stats,'stats'],
    [symbol1,'symbol1'],
    [symbol2,'symbol2'],
    [symbol3,'symbol3'],
    [symbol4,'symbol4'],
    [scienceguy,'scienceguy'],
    [statsgirl,'statsgirl'],
    [macguy,'macguy'],
    [handshake,'handshake'],
    [messages,'messages']
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

});

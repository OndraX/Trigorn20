/*
 * Via DarioSoller @ https://github.com/janpaepke/ScrollMagic/issues/660
 */
var SM = {
    sceneHeights: [], // has to be initialized with the scene heights
    scenePinLengths: [], // has to be initilized with "0"s
    mainPinEl: "#container",
    smController: new ScrollMagic.controller()
  }

  function _sceneOffset(sceneIndex){
    var total = 0;
    var sceneHeightsForOffset = SM.sceneHeights.slice(0, sceneIndex);
    var scenePinsForOffset = SM.scenePinLengths.slice(0, sceneIndex);

    for (var i = 0; i < sceneHeightsForOffset.length; i++) {
      total += sceneHeightsForOffset[i] + scenePinsForOffset[i];
    }

    return total;
  }



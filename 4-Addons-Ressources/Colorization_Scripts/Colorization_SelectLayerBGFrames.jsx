﻿#target photoshop//// Colorization_SelectLayerBGFrames.jsx////// Generated Wed Jan 28 2015 23:56:41 GMT+0100//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };if (documents.length == 0) {    // alert("There are no documents open.");}else {    //    //==================== Colorization_SelectLayerBGFrames ==============    //    function Colorization_SelectLayerBGFrames() {      // Select      function step1(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putName(cTID('Lyr '), "BG_Frames");        desc1.putReference(cTID('null'), ref1);        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      step1();      // Select    };    //=========================================    //                    Colorization_SelectLayerBGFrames.main    //=========================================    //    Colorization_SelectLayerBGFrames.main = function () {      Colorization_SelectLayerBGFrames();    };    Colorization_SelectLayerBGFrames.main();}// EOF"Colorization_SelectLayerBGFrames.jsx"// EOF
﻿#target photoshop//// ColorizTools_BrushOnePx.jsx////// Generated Tue Feb 10 2015 10:18:15 GMT+0100//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };if (documents.length == 0) {    // alert("There are no documents open.");}else {    //    //==================== ColorizTools_BrushOnePx ==============    //    function ColorizTools_BrushOnePx() {      // Select      function step1(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(cTID('PbTl'));        desc1.putReference(cTID('null'), ref1);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Select      function step2(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putName(sTID("toolPreset"), "Colorization_Brush1px");        desc1.putReference(cTID('null'), ref1);        executeAction(cTID('slct'), desc1, dialogMode);      };      step1();      // Select      step2();      // Select    };    //=========================================    //                    ColorizTools_BrushOnePx.main    //=========================================    //    ColorizTools_BrushOnePx.main = function () {      ColorizTools_BrushOnePx();    };    ColorizTools_BrushOnePx.main();}// EOF"ColorizTools_BrushOnePx.jsx"// EOF
﻿#target photoshop//// ColorizTools_MagicWandAll.jsx////// Generated Tue Feb 10 2015 10:24:53 GMT+0100//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };if (documents.length == 0) {    // alert("There are no documents open.");}else {    // =======================================================    var idslct = charIDToTypeID( "slct" );        var desc22 = new ActionDescriptor();        var idnull = charIDToTypeID( "null" );            var ref34 = new ActionReference();            var idmagicWandTool = stringIDToTypeID( "magicWandTool" );            ref34.putClass( idmagicWandTool );        desc22.putReference( idnull, ref34 );        var iddontRecord = stringIDToTypeID( "dontRecord" );        desc22.putBoolean( iddontRecord, true );        var idforceNotify = stringIDToTypeID( "forceNotify" );        desc22.putBoolean( idforceNotify, true );    executeAction( idslct, desc22, DialogModes.NO );    //    //==================== ColorizTools_MagicWandAll ==============    //    function ColorizTools_MagicWandAll() {      // Select      function step1(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putName(sTID("toolPreset"), "Colorization_MagicWand_AllLayers");        desc1.putReference(cTID('null'), ref1);        executeAction(cTID('slct'), desc1, dialogMode);      };      step1();      // Select    };    //=========================================    //                    ColorizTools_MagicWandAll.main    //=========================================    //    ColorizTools_MagicWandAll.main = function () {      ColorizTools_MagicWandAll();    };    ColorizTools_MagicWandAll.main();}// EOF"ColorizTools_MagicWandAll.jsx"// EOF
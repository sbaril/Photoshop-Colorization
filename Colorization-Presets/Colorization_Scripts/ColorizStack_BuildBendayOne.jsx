﻿#target photoshop//// ColorizStack_BuildBendayOne.jsx////// Generated Mon May 04 2015 14:41:54 GMT+0200//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };if (documents.length == 0) {    // alert("There are no documents open.");}else {    //    //==================== ColorizStack_BuildBendayOne ==============    //    function ColorizStack_BuildBendayOne() {      // Convert Mode      function step1(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        desc1.putClass(cTID('T   '), cTID('Grys'));        executeAction(sTID('convertMode'), desc1, dialogMode);      };      // Set      function step2(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putProperty(cTID('Chnl'), sTID("selection"));        desc1.putReference(cTID('null'), ref1);        var ref2 = new ActionReference();        ref2.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('T   '), ref2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Make      function step3(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(cTID('Lyr '));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Original_Lines");        desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Inverse      function step4(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        executeAction(cTID('Invs'), undefined, dialogMode);      };      // Reset      function step5(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putProperty(cTID('Clr '), cTID('Clrs'));        desc1.putReference(cTID('null'), ref1);        executeAction(cTID('Rset'), desc1, dialogMode);      };      // Fill      function step6(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        desc1.putEnumerated(cTID('Usng'), cTID('FlCn'), cTID('FrgC'));        desc1.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);        desc1.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));        executeAction(cTID('Fl  '), desc1, dialogMode);      };      // Set      function step7(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putProperty(cTID('Chnl'), sTID("selection"));        desc1.putReference(cTID('null'), ref1);        desc1.putEnumerated(cTID('T   '), cTID('Ordn'), cTID('None'));        executeAction(cTID('setd'), desc1, dialogMode);      };      // Select      function step8(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Back'));        desc1.putReference(cTID('null'), ref1);        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Delete      function step9(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        executeAction(cTID('Dlt '), desc1, dialogMode);      };      // Convert to Smart Object      function step10(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        executeAction(sTID('newPlacedLayer'), undefined, dialogMode);      };      // Set      function step11(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Lines");        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Set      function step12(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Gry '));        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Convert to Profile      function step13(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Dcmn'), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        desc1.putString(cTID('T   '), "Generic CMYK Profile");        desc1.putEnumerated(cTID('Inte'), cTID('Inte'), cTID('Img '));        desc1.putBoolean(cTID('MpBl'), true);        desc1.putBoolean(cTID('Dthr'), true);        desc1.putBoolean(sTID("rasterizePlaced"), false);        desc1.putInteger(cTID('sdwM'), -1);        executeAction(sTID('convertToProfile'), desc1, dialogMode);      };      // Image Size      function step14(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        desc1.putUnitDouble(cTID('Rslt'), cTID('#Rsl'), 300);        desc1.putBoolean(cTID('CnsP'), true);        desc1.putEnumerated(cTID('Intr'), cTID('Intp'), sTID("automaticInterpolation"));        executeAction(sTID('imageSize'), desc1, dialogMode);      };      // Set      function step15(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        desc2.putUnitDouble(sTID("fillOpacity"), cTID('#Prc'), 0);        var list1 = new ActionList();        list1.putEnumerated(cTID('Chnl'), cTID('Blck'));        desc2.putList(sTID("channelRestrictions"), list1);        var desc3 = new ActionDescriptor();        desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 833.333333333333);        var desc4 = new ActionDescriptor();        desc4.putBoolean(cTID('enab'), true);        desc4.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Mltp'));        desc4.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);        var desc5 = new ActionDescriptor();        desc5.putDouble(cTID('Cyn '), 0);        desc5.putDouble(cTID('Mgnt'), 0);        desc5.putDouble(cTID('Ylw '), 0);        desc5.putDouble(cTID('Blck'), 100);        desc4.putObject(cTID('Clr '), cTID('CMYC'), desc5);        desc3.putObject(cTID('SoFi'), cTID('SoFi'), desc4);        desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Make      function step16(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Lines_CMY");        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Gry '));        desc1.putObject(cTID('Nw  '), cTID('Lyr '), desc2);        desc1.putEnumerated(cTID('Usng'), cTID('ArSl'), cTID('Slct'));        desc1.putBoolean(cTID('Cpy '), true);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Move      function step17(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var ref2 = new ActionReference();        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Back'));        desc1.putReference(cTID('T   '), ref2);        executeAction(cTID('move'), desc1, dialogMode);      };      // Set      function step18(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        var list1 = new ActionList();        list1.putEnumerated(cTID('Chnl'), cTID('Cyn '));        list1.putEnumerated(cTID('Chnl'), cTID('Mgnt'));        list1.putEnumerated(cTID('Chnl'), cTID('Yllw'));        desc2.putList(sTID("channelRestrictions"), list1);        var desc3 = new ActionDescriptor();        desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 833.333333333333);        var desc4 = new ActionDescriptor();        desc4.putBoolean(cTID('enab'), true);        desc4.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));        desc4.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);        var desc5 = new ActionDescriptor();        desc5.putDouble(cTID('Cyn '), 60);        desc5.putDouble(cTID('Mgnt'), 50);        desc5.putDouble(cTID('Ylw '), 50);        desc5.putDouble(cTID('Blck'), 0);        desc4.putObject(cTID('Clr '), cTID('CMYC'), desc5);        desc3.putObject(cTID('SoFi'), cTID('SoFi'), desc4);        desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Maximum      function step19(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        desc1.putUnitDouble(cTID('Rds '), cTID('#Pxl'), 1);        desc1.putEnumerated(sTID("preserveShape"), sTID("preserveShape"), sTID("squareness"));        executeAction(cTID('Mxm '), desc1, dialogMode);      };      // Delete      function step20(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("filterMask"));        desc1.putReference(cTID('null'), ref1);        executeAction(cTID('Dlt '), desc1, dialogMode);      };      // Select      function step21(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Bckw'));        desc1.putReference(cTID('null'), ref1);        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Make      function step22(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(cTID('Lyr '));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Lines_Color");        desc2.putBoolean(cTID('Grup'), true);        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Gry '));        desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Set      function step23(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        var list1 = new ActionList();        list1.putEnumerated(cTID('Chnl'), cTID('Cyn '));        list1.putEnumerated(cTID('Chnl'), cTID('Mgnt'));        list1.putEnumerated(cTID('Chnl'), cTID('Yllw'));        desc2.putList(sTID("channelRestrictions"), list1);        var desc3 = new ActionDescriptor();        desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 833.333333333333);        desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Select      function step24(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Bckw'));        desc1.putReference(cTID('null'), ref1);        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Select      function step25(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Bckw'));        desc1.putReference(cTID('null'), ref1);        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Make      function step26(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(sTID("layerSection"));        desc1.putReference(cTID('null'), ref1);        var ref2 = new ActionReference();        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('From'), ref2);        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Lines_Folder");        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Gry '));        desc1.putObject(cTID('Usng'), sTID("layerSection"), desc2);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Make      function step27(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(cTID('Lyr '));        desc1.putReference(cTID('null'), ref1);        desc1.putBoolean(sTID("below"), true);        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Background_Color");        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Bl  '));        desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Make      function step28(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(sTID("contentLayer"));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        var desc3 = new ActionDescriptor();        var desc4 = new ActionDescriptor();        desc4.putDouble(cTID('Cyn '), 0);        desc4.putDouble(cTID('Mgnt'), 0);        desc4.putDouble(cTID('Ylw '), 0);        desc4.putDouble(cTID('Blck'), 0);        desc3.putObject(cTID('Clr '), cTID('CMYC'), desc4);        desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);        desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Set      function step29(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Bl  '));        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Set      function step30(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        var list1 = new ActionList();        list1.putEnumerated(cTID('Chnl'), cTID('Cyn '));        list1.putEnumerated(cTID('Chnl'), cTID('Mgnt'));        list1.putEnumerated(cTID('Chnl'), cTID('Yllw'));        desc2.putList(sTID("channelRestrictions"), list1);        var desc3 = new ActionDescriptor();        desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 833.333333333333);        desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Make      function step31(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(cTID('Lyr '));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "BG_Frames");        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Bl  '));        desc1.putObject(cTID('Usng'), cTID('Lyr '), desc2);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Set      function step32(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var desc2 = new ActionDescriptor();        var list1 = new ActionList();        list1.putEnumerated(cTID('Chnl'), cTID('Cyn '));        list1.putEnumerated(cTID('Chnl'), cTID('Mgnt'));        list1.putEnumerated(cTID('Chnl'), cTID('Yllw'));        desc2.putList(sTID("channelRestrictions"), list1);        var desc3 = new ActionDescriptor();        desc3.putUnitDouble(cTID('Scl '), cTID('#Prc'), 833.333333333333);        desc2.putObject(cTID('Lefx'), cTID('Lefx'), desc3);        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);        executeAction(cTID('setd'), desc1, dialogMode);      };      // Select      function step33(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Bckw'));        desc1.putReference(cTID('null'), ref1);        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Make      function step34(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putClass(sTID("layerSection"));        desc1.putReference(cTID('null'), ref1);        var ref2 = new ActionReference();        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('From'), ref2);        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Background_Folder");        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Bl  '));        desc1.putObject(cTID('Usng'), sTID("layerSection"), desc2);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Select      function step35(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putName(cTID('Lyr '), "BG_Frames");        desc1.putReference(cTID('null'), ref1);        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Make      function step36(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "Foreground");        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Orng'));        desc1.putObject(cTID('Nw  '), cTID('Lyr '), desc2);        desc1.putEnumerated(cTID('Usng'), cTID('ArSl'), cTID('Slct'));        desc1.putBoolean(cTID('Cpy '), true);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Move      function step37(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        var ref2 = new ActionReference();        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Nxt '));        desc1.putReference(cTID('T   '), ref2);        executeAction(cTID('move'), desc1, dialogMode);      };      // Make      function step38(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var desc2 = new ActionDescriptor();        desc2.putString(cTID('Nm  '), "FX");        desc2.putEnumerated(cTID('Clr '), cTID('Clr '), cTID('Ylw '));        desc1.putObject(cTID('Nw  '), cTID('Lyr '), desc2);        desc1.putEnumerated(cTID('Usng'), cTID('ArSl'), cTID('Slct'));        desc1.putBoolean(cTID('Cpy '), true);        executeAction(cTID('Mk  '), desc1, dialogMode);      };      // Select      function step39(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putName(cTID('Lyr '), "BG_Frames");        desc1.putReference(cTID('null'), ref1);        desc1.putBoolean(cTID('MkVs'), false);        executeAction(cTID('slct'), desc1, dialogMode);      };      // Select      function step40(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('FtOn'));        desc1.putReference(cTID('null'), ref1);        executeAction(cTID('slct'), desc1, dialogMode);      };      step1();      // Convert Mode      step2();      // Set      step3();      // Make      step4();      // Inverse      step5();      // Reset      step6();      // Fill      step7();      // Set      step8();      // Select      step9();      // Delete      step10();      // Convert to Smart Object      step11();      // Set      step12();      // Set      step13();      // Convert to Profile      step14(true, true);      // Image Size      step15();      // Set      step16();      // Make      step17();      // Move      step18();      // Set      step19();      // Maximum      step20();      // Delete      step21();      // Select      step22();      // Make      step23();      // Set      step24();      // Select      step25();      // Select      step26();      // Make      step27();      // Make      step28();      // Make      step29();      // Set      step30();      // Set      step31();      // Make      step32();      // Set      step33();      // Select      step34();      // Make      step35();      // Select      step36();      // Make      step37();      // Move      step38();      // Make      step39();      // Select      step40();      // Select    };    //=========================================    //                    ColorizStack_BuildBendayOne.main    //=========================================    //    ColorizStack_BuildBendayOne.main = function () {      ColorizStack_BuildBendayOne();    };    //ColorizStack_BuildBendayOne.main();    app.activeDocument.suspendHistory("Create a CMY+K Layers Structure - Method 1", 'ColorizStack_BuildBendayOne.main()');}// EOF"ColorizStack_BuildBendayOne.jsx"// EOF
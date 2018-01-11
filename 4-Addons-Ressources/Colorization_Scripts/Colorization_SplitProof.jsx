#target photoshop
//
// Colorization_SplitProof.jsx
//

//
// Generated Tue Feb 10 2015 22:42:55 GMT+0100
//

cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };


if (documents.length == 0) {
    // alert("There are no documents open.");
}
else {
    //
    //==================== Colorization_SplitProof ==============
    //
      function Colorization_SplitProof() {
      // Proof Setup
      function step1(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        desc1.putString(sTID("profile"), "Dot Gain 20%");
        desc1.putEnumerated(cTID('Inte'), cTID('Inte'), cTID('Img '));
        desc1.putBoolean(cTID('MpBl'), true);
        executeAction(sTID('proofSetup'), desc1, dialogMode);
      };

      // Select
      function step2(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('ZmOt'));
        desc1.putReference(cTID('null'), ref1);
        executeAction(cTID('slct'), desc1, dialogMode);
      };

      // Select
      function step3(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('NwVw'));
        desc1.putReference(cTID('null'), ref1);
        executeAction(cTID('slct'), desc1, dialogMode);
      };

      // Proof Setup
      function step4(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID('Bltn'), sTID("builtinProof"), sTID("proofCMYK"));
        executeAction(sTID('proofSetup'), desc1, dialogMode);
      };

      // Select
      function step5(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('NwVw'));
        desc1.putReference(cTID('null'), ref1);
        executeAction(cTID('slct'), desc1, dialogMode);
      };

      // Select
      function step6(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), cTID('FtOn'));
        desc1.putReference(cTID('null'), ref1);
        executeAction(cTID('slct'), desc1, dialogMode);
      };

      // Proof Setup
      function step7(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID('Bltn'), sTID("builtinProof"), sTID("proofCMYK"));
        executeAction(sTID('proofSetup'), desc1, dialogMode);
      };

      // Select
      function step8(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), sTID("toggleProofColors"));
        desc1.putReference(cTID('null'), ref1);
        executeAction(cTID('slct'), desc1, dialogMode);
      };

      // Select
      function step9(enabled, withDialog) {
        if (enabled != undefined && !enabled)
          return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Mn  '), cTID('MnIt'), sTID("3upStacked"));
        desc1.putReference(cTID('null'), ref1);
        executeAction(cTID('slct'), desc1, dialogMode);
      };

      step1();      // Proof Setup
      step2();      // Select
      step3();      // Select
      step4();      // Proof Setup
      step5();      // Select
      step6();      // Select
      step7();      // Proof Setup
      step8();      // Select
      step9();      // Select
    };






    //=========================================
    //                    Colorization_SplitProof.main
    //=========================================
    //

    Colorization_SplitProof.main = function () {
      Colorization_SplitProof();
    };

    Colorization_SplitProof.main();

}

// EOF

"Colorization_SplitProof.jsx"
// EOF

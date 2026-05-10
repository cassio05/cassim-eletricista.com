
// Wed, 12 Mar 2003, 9:31am EST
// - added function to support translated graphics

// Wed, 14 Aug 2002, WGS
// - this is the common "<head>" javascript for every Fault Code

// Wed, 14 Aug 2002, WGS
// - these should be constants, but "const" keyword does not seem to be recognized by IE 6.0
// const msgWindow_Top_Y_margin = ...
// const msgWindow_Left_X_margin = ...
// const msgWindowOpenFeatures = ...

var msgWindow_Top_Y_margin = 10;
var msgWindow_Left_X_margin = 10;
var msgWindowOpenFeatures = 'alwaysRaised=yes,dependent=yes,location=no,menubar=yes,resizable=yes,scrollbars=yes,status=no,toolbar=no,width=400,height=250,left=' + msgWindow_Left_X_margin + ',top=' + msgWindow_Top_Y_margin + ',screenX=' + msgWindow_Left_X_margin + ',screenY=' + msgWindow_Top_Y_margin;

var msgWindow;


// **********
var allTranslatedGraphicChecksSuccessful = true;

function recheckTranslatedGraphicsIfNeeded() {
  if (!allTranslatedGraphicChecksSuccessful) {
    window.location.reload();
  }
}


// **********
function msgWindowClosed() {

  var tempMsgWindowClosed = true;

  if ( "object" == typeof(msgWindow) ) {
    if ( "boolean" == typeof(msgWindow.closed) ) {
      if ( !msgWindow.closed ) {
        tempMsgWindowClosed = false;
      }
    }
  }
  return tempMsgWindowClosed;
}


// **********
function setupMsgWindow() {

  if ( msgWindowClosed() ) {
    msgWindow=window.open('','displayWindow',msgWindowOpenFeatures);
  }
  else {
    msgWindow.focus();
    msgWindow.document.open("text/html","replace");
  }
  msgWindow.document.write("<html>\n<head />\n<body>\n");
}


// **********
function closeMsgWindowIfNeeded() {

  if ( !msgWindowClosed() ) {
    msgWindow.close();
  }
}

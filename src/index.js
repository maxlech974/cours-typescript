var foo = 'une string';
var bar = 5;
var boolean = false;
var obj = new Map(); //[] //{ name: 'jean' }
var anything = 'une string'; // 5 // false // [] // {}
var myconst = 5;
var arr = [1, 2, 3, 4, 5];
var arr2 = ['a', 'b', 'c'];
var tuple = ['a', 1];
var XhrReadyState;
(function (XhrReadyState) {
    XhrReadyState[XhrReadyState["UNSENT"] = 0] = "UNSENT";
    XhrReadyState[XhrReadyState["OPENED"] = 1] = "OPENED";
    XhrReadyState[XhrReadyState["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
    XhrReadyState[XhrReadyState["LOADING"] = 3] = "LOADING";
    XhrReadyState[XhrReadyState["DONE"] = 4] = "DONE";
})(XhrReadyState || (XhrReadyState = {}));
var readyState = 0;
if (readyState === XhrReadyState.UNSENT) {
}
if (readyState === XhrReadyState.OPENED) {
}
if (readyState === XhrReadyState.HEADERS_RECEIVED) {
}
if (readyState === XhrReadyState.LOADING) {
}
// requete.onreadystatechage = () => {
//   if (requete.readyState === 1) {
//   }
//   if (requete.readyState === 2) {
//   }
//   if (requete.readyState === 3) {
//   }
//   if (requete.readyState === 4) {
//   }
// }

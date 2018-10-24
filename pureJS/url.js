var URL = (function () {
    "use strict";

    // var url = window.location.href;
    var url = "http://test.php?id=3&user=admin";

    var params = url.split("?");

    var keyValues = params[1].split("&");
    var objectArray = {};
    var keys;
    var part;

    for (keys in keyValues) {
        part = keyValues[keys].split("=");
        objectArray[part[0]] = decodeURIComponent(part[1]);
    }
    return objectArray;
})();
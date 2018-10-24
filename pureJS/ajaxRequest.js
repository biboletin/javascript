var Request = {
    method: "POST",

    send: function (url, data, callback) {
        var dataToSend = this.QueryString(data);
        var ajax = new XMLHttpRequest();

        ajax.open(this.method, url, true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                return callback(ajax.responseText);
            }
        };
        ajax.send(dataToSend);
    },

    QueryString: function (params) {
        var str = "";

        if (typeof params === "object" && params.constructor == Object) {
            for (var value in params) {
                str += value + "=" + encodeURIComponent(params[value]) + "&";
            }
        }

        if (str.length > 0) {
            str = str.substring(0, str.length - 1);
        }

        return str;
    }
};



document.getElementById("send").onclick = function () {
    Request.send("ajax.php", {
        "choice": document.getElementById("sel").value,
        "text": document.getElementById("texts").value,
        "str": document.getElementById("someText").value
    },
        function (result) {
            console.log(result);
        });

};

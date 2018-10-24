var Cookie = {
    days: 1,
    hours: 8,
    setCookie: function(cookieName, cookieValue, cookiePath, cookieValid){
        var cname = cookieName;
        var cvalue = cookieValue;

        if(cname === ""){
            return false;
        }

        if(cvalue === ""){
            return false;
        }
// return cname + "=" + cvalue;
        document.cookie = cname + "=" + cvalue;

    },
    getCookie: function(){
        return document.cookie;
    },
    removeCookie: function(cookieName){
        // return cookieName;
        return document.cookie;
    }
};
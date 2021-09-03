
function onLoad() {
    const urlQueryRaw = window.location.search;
    let urlQuery = new URLSearchParams(urlQueryRaw.slice(1));
    let prevValue = urlQuery.get("preview");
    console.log(`prevValue: ${prevValue}`);
    let showPreview = (prevValue != null) && (prevValue !== "false");

    if (showPreview) {
        let elsNodeList = document.querySelectorAll(".preview");
        let els = [];
        for (let el of elsNodeList)
            els.push(el);

        for (let el of els)
            el.classList.remove("preview");

        elsNodeList = document.querySelectorAll("a[href]");
        els = [];
        for (let el of elsNodeList)
            els.push(el);

        for (let el of els)
            el.setAttribute("href", el.getAttribute("href") + `?preview`);
    }

    let sidebarLeft = document.querySelector("#sidebarLeft");

    let scrollTop = getCookie("sidebarScrollTop");
    let scrollTopTime = getCookie("sidebarScrollTopTime");
    if (scrollTop != null && scrollTopTime != null) {
        let ago = new Date().getTime() - scrollTopTime;
        console.log(`Scrolltop was last set ${ago / 1000} seconds ago`);
        if (ago <= 30 * 1000) {
            sidebarLeft.scrollTop = scrollTop;
        }
    }

    sidebarLeft?.addEventListener("click", e => {
        setCookie("sidebarScrollTop", sidebarLeft.scrollTop, 1);
        setCookie("sidebarScrollTopTime", new Date().getTime(), 1);
    }, {capture: true});

}

// Source: https://www.w3schools.com/js/js_cookies.asp
// Modified
function setCookie(cname, cvalue, exdays, plain = false) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    let cookieString = cname + "=" + (plain ? ("!" + cvalue) : window.btoa(cvalue)) + ";" + expires + ";samesite=lax;path=/";
    //console.log("setting cookie: " + cookieString);
    document.cookie = cookieString;
    //cname + "=" + cvalue + ";" + expires + ";SameSite:strict;path=/";
}

// Source: https://www.w3schools.com/js/js_cookies.asp
// Modified
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            //console.log("decoding " + c.substring(name.length, c.length));
            let val = c.substring(name.length, c.length);
            if (val.startsWith("!"))
                return val.substring(1);
            else
                return window.atob(val);
        }
    }
    return null;
}

function saveObject(name, value, exdays = 36500) {
    setCookie(name, JSON.stringify(value), exdays);
}

function loadObject(name) {
    let v = getCookie(name);
    if (v != null)
        return JSON.parse(v);
    else
        return null;
}

document.addEventListener("DOMContentLoaded", e => {
    onLoad();
});

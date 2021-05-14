
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

}

document.addEventListener("DOMContentLoaded", e => {
    onLoad();
});

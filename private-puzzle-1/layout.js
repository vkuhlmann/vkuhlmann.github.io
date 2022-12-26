"use strict";

let hasDataInit = false;
let qrScanner = null;
let statusEl = null;

let correctReg = /^[A-Z]$/;

// let current = [];
let distance = null;
let prevDistancePromise = Promise.resolve();

let sequenceList = null;
let sortable = null;

// This JavaScript file contains code from https://github.com/mebjas/html5-qrcode

async function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    if (decodedText.match(correctReg) == null)
        return;

    // clearList();
    await addItem(decodedText);

    // setBackupsListToDiskUUID(decodedText);
}
  
function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    //console.warn(`Code scan error = ${error}`);
}

function escapeHtml(unsafe)
{
    // Source: https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
    // By bjornd
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

let hues = [0, 21, 57, 94, 164, 200, 235, 262, 296];

// let colors = [
//     "hsla(0, 100%, 81%, 1)",
//     "hsla(57, 100%, 81%, 1)",
//     "hsla(97, 100%, 81%, 1)",
//     "hsla(164, 100%, 81%, 1)",
//     "hsla(200, 100%, 81%, 1)",
//     "hsla(235, 100%, 81%, 1)",
//     "hsla(262, 100%, 81%, 1)",
//     "hsla(296, 100%, 81%, 1)",
//     "hsla(0, 57%, 55%, 1)",
//     "hsla(57, 57%, 55%, 1)"
// ]

let colors = [];

for (let hue of hues)
    colors.push(`hsla(${hue}, 100%, 81%, 1)`);

for (let hue of hues)
    colors.push(`hsla(${hue}, 57%, 55%, 1)`);


const NORMAL_ANIMATION_DUR = 100;

function onLoad() {
    //tryOpenSocket();
    //dataInit();
    statusEl = document.querySelector("#status");

    try{

    let clearEl = document.querySelector("#clearSequence");
    clearEl.addEventListener("click", e => {
        clearList();
    });

    // fetchBackupAvailability().then(() => {
    let html5QrcodeScanner = new Html5QrcodeScanner(
        "reader", { fps: 10, qrbox: 250 }, /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    // });

    clearList();

    // Reference: https://github.com/SortableJS/Sortable

    sortable = new Sortable(document.querySelector("#sequence"), {
        animation: NORMAL_ANIMATION_DUR,
        easing: "cubic-bezier(1, 0, 0, 1)",
        onSort: () => {
            scheduleDistanceUpdate();
            lastScanned = null;
        }
    });

    // for (let a of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    //     addItem(a);
    // }

    for (let a of "ABCDEFGHIJKLMNOPQRS") {
        addItem(a);
    }
}catch(e){
    statusEl.innerHTML = escapeHtml(e);
    console.error(e);
}

    // sortable.

    // statusEl.innerText = "A";
    // let qrWebcamEl = document.querySelector("#qrWebcam");
    // qrScanner = new QrScanner(qrWebcamEl, result => {
    //     statusEl.innerText = "D";
    //     console.log(`QR code: ${result}`);
    // });
    // statusEl.innerText = "B";
    // qrScanner.start();
    // statusEl.innerText = "C";
}

document.addEventListener("DOMContentLoaded", onLoad);

// function updateHtml() {
//     let el = document.querySelector("#sequenceViewer");
//     el.innerHTML = escapeHtml(current.join(""));
// }

function getCurrent() {
    let list = [];
    for (let el of sequence.querySelectorAll("li"))
        list.push(getValOf(el));
    return list;
}

async function getDistance(val = null) {
    if (val == null)
        val = getCurrent().join("");

    console.log(`Lookup ${val}`);
    
    let ans = await fetch("https://l7u3ikl050.execute-api.eu-north-1.amazonaws.com/economistPuzzleVerifier", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        body: JSON.stringify({
            sequence: val
        })
    });
    ans = await ans.json();
    if (ans.error != null)
        return ans;

    return ans.distance;
}

async function updateDistance() {
    distance = await getDistance();

    let el = document.querySelector("#distanceViewer");

    if (distance.error) {
        el.innerHTML = escapeHtml(distance.error);
        return;
    }
    if (distance >= 1e6) {
        el.innerHTML = "";
        return;
    }
    el.innerHTML = escapeHtml(distance.toString());

    if (distance == 0)
        document.body.style.backgroundColor = "green";
}

function scheduleDistanceUpdate() {
    let promise = updateDistance();
    prevDistancePromise.catch(reason => {
        console.error(`Previous update distance attempt resulted in an error: ${reason}`);
    });

    prevDistancePromise = promise;

    window.setTimeout(() => {
        promise.catch(reason => {
            console.error(`Previous update distance attempt resulted in an error: ${reason}`);
        });
    }, 2000);
}

function clearList() {
    while (sequence.hasChildNodes())
        sequence.removeChild(sequence.childNodes[0]);

    addInsertMarker();

    lastScanned = null;

    // current = [];
    // updateHtml();

    // let el = document.querySelector("#backupsList");
    // while (el.children.length > 3) {
    //     el.removeChild(el.children[3]);
    // }
}

function removeInsertMarker() {
    for (let el of sequence.querySelectorAll(".insertMarker"))
        el.parentNode.removeChild(el);
}

function addInsertMarker() {
    removeInsertMarker();

    let el = document.createElement("li");
    el.classList.add("insertMarker")
    el.innerHTML = "";
    el.setAttribute("data-id", "insertMarker");
    sequence.appendChild(el);
}

function getValOf(el) {
    return el.innerText.trim();
}

function sendChangeAcknowledgedFeedback() {
    try {
        navigator.vibrate([300]);
    } catch (e) {
        console.error(`Error on vibrating: ${e}`);
    }
}

let lastScanned = null;
let lastScannedTime = 0;

async function addItem(val) {
    let lastElement = null;
    if (sequence.children.length > 0)
        lastElement = sequence.children[sequence.children.length - 1];

    if (val == lastScanned && Date.now() - lastScannedTime < 5000) {
        // console.log("Returning!");
        return;
    }
    console.log("LastScanned was ", lastScanned);
    console.log("Current is ", val);


    lastScanned = val;
    lastScannedTime = Date.now();
    
    // if (lastElement != null && getValOf(lastElement) == val)
    //     return;

    let reference = sequence.querySelector(".insertMarker");

    for (let el of sequence.querySelectorAll("li")) {
        if (getValOf(el) == val) {
            let arr = sortable.toArray().filter(v => v != val);
            let newPos = arr.findIndex(v => v == reference?.getAttribute("data-id"));
            if (newPos == -1)
                newPos = arr.length;
            arr.splice(newPos, 0, val);
            sortable.option("animation", 1000);
            // window.setTimeout(() => {
            console.log("Sorting!");
            sortable.sort(arr, true);
            console.log("Sorting 2");
            // }, 200);
            window.setTimeout(() => {
                sortable.option("animation", NORMAL_ANIMATION_DUR);
            }, 1100);
            sendChangeAcknowledgedFeedback();
            return;
            //el.parentNode.removeChild(el);
        }
    }

    let el = document.createElement("li");
    el.innerHTML = escapeHtml(val);
    if (val.length == 1 && val[0] >= 'A' && val[0] <= 'Z') {
        let index = val.charCodeAt(0) - 'A'.charCodeAt(0);
        el.style.backgroundColor = colors[index % colors.length];
    }
    el.setAttribute("data-id", val);

    // sequence.appendChild(el);
    sequence.insertBefore(el, reference);

    sendChangeAcknowledgedFeedback();

    // console.log("Adding item");
    // current = current.filter((v, i, a) => v != val);
    // current.push(val);
    
    // updateHtml();
    scheduleDistanceUpdate();

    // let el = document.querySelector("#backupsList");

    // let idEl = document.createElement("div");
    // let nameEl = document.createElement("div");
    // let availabilityEl = document.createElement("div");

    // idEl.innerText = "0";
    // nameEl.innerText = name;
    // availabilityEl.innerText = "";

    // el.appendChild(idEl);
    // el.appendChild(nameEl);
    // el.appendChild(availabilityEl);
}

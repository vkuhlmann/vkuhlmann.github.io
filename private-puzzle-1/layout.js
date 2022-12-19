"use strict";

let hasDataInit = false;
let qrScanner = null;
let statusEl = null;

let correctReg = /^[A-Z]$/;

let current = [];
let distance = null;
let prevDistancePromise = Promise.resolve();

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


function onLoad() {
    //tryOpenSocket();
    //dataInit();
    statusEl = document.querySelector("#status");

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

function updateHtml() {
    let el = document.querySelector("#sequenceViewer");
    el.innerHTML = escapeHtml(current.join(""));
}

async function getDistance(val = null) {
    if (val == null)
        val = current.join("");

    // return Promise.resolve(6);
    
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
    el.innerHTML = escapeHtml(distance.toString());
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
    current = [];
    updateHtml();

    // let el = document.querySelector("#backupsList");
    // while (el.children.length > 3) {
    //     el.removeChild(el.children[3]);
    // }
}

async function addItem(val) {
    console.log("Adding item");
    current = current.filter((v, i, a) => v != val);
    current.push(val);
    
    updateHtml();
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

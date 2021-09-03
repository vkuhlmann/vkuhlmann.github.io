"use strict";

let socket = null;
let blob = null;
let blobURL = null;
let screenDest = null;

let isFullscreen = false;

function onFullsceenChange() {
    if (document.fullscreenElement != null) {
        isFullscreen = true;
        document.querySelector("#toggleFullscreen .bi-fullscreen").classList.add("hide");
        document.querySelector("#toggleFullscreen .bi-fullscreen-exit").classList.remove("hide");
    } else {
        isFullscreen = false;
        document.querySelector("#toggleFullscreen .bi-fullscreen-exit").classList.add("hide");
        document.querySelector("#toggleFullscreen .bi-fullscreen").classList.remove("hide");
    }
}

function startFullscreen() {
    document.querySelector("#screenDest").requestFullscreen();
    isFullscreen = true;
}

function endFullscreen() {
    document.exitFullscreen();
    isFullscreen = false;
}

function toggleFullscreen() {
    if (isFullscreen) {
        endFullscreen();
    } else {
        startFullscreen();
    }
}


function onScreenLayoutLoad() {
    console.log("Hey!");

    // blob = new Blob([buffer], { "type": "image/png" });
    // blobURL = window.URL.createObjectURL(blob);
    
    screenDest = document.querySelector("#screenDest");
    let toggleFullscreenEl = document.querySelector("#toggleFullscreen");
    toggleFullscreenEl.addEventListener("click", toggleFullscreen);

    let statusEl = document.querySelector("#socketStatus");
    statusEl.innerHTML = `<span style="color:blue;" onclick="tryOpenSocket()">Click to connect.</span>`;

    //tryOpenSocket();

    let feedIpEl = document.querySelector("#feedIp");
    feedIpEl.addEventListener("input", e => {
        if (socket != null)
            socket.close();
        socket = null;
        feedIpEl.style["background-color"] = "hsl(0, 80%, 90%)";
        
        statusEl.innerHTML = `<span style="color:blue;" onclick="tryOpenSocket()">Click to change connection.</span>`;
    });

    document.addEventListener("keydown", e => {
        if (e.code == "KeyF") {
            toggleFullscreen();
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

document.addEventListener("DOMContentLoaded", onScreenLayoutLoad);

function tryOpenSocket() {
    let statusEl = document.querySelector("#socketStatus");

    statusEl.innerHTML = `<span style="color:gray;">Trying to connect...</span>`;
    try{

        let feedIpEl = document.querySelector("#feedIp");
        let feedIp = feedIpEl.value;
        socket = new WebSocket(`wss://${feedIp}`);
        socket.onopen = e => {
            console.log("[open] Connection established");
            statusEl.innerHTML = `<span style="color:green;">Connected</span>`;

            if (feedIpEl.value == feedIp)
                feedIpEl.style["background-color"] = "hsl(108, 80%, 90%)";
            // if (!hasDataInit)
            //     dataInit();
        };

        socket.onmessage = e => {
            //logEl.textContent += `${e.data}\n`;
            try{
                let oldBlobURL = blobURL;

                blob = new Blob([e.data], { "type": "image/png" });
                blobURL = window.URL.createObjectURL(blob);

                screenDest.setAttribute("src", blobURL);

                if (oldBlobURL != null)
                    window.URL.revokeObjectURL(oldBlobURL);

            } catch (ex) {
                alert(`On message error: ${ex}`);
            }
            //handleMessage(JSON.parse(e.data));
        };

        socket.onerror = (e) => {
            console.log(`[error] Socket error`);
            statusEl.innerHTML = `<span style="color:red;" onclick="tryOpenSocket()">Disconnected</span>`;
        }

        socket.onclose = (e) => {
            console.log(`[close] Socket closed with code ${e.code}, reason: ${e.reason}`);
            statusEl.innerHTML = `<span style="color:red;" onclick="tryOpenSocket()">Disconnected</span>`;
            socket = null;
        }
    } catch(ex) {
        alert(`Error: ${ex}`);
        statusEl.innerHTML = `<span style="color:red;">Error</span>`;
    }
}

// Source: https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

function base64ToBlobURL(data, type=null) {
    let buffer = base64ToArrayBuffer(data);
    let url = bufferToBlobURL(buffer, type=type);
    return url;
}

function binaryStringToBuffer(data, type=null) {
    var len = data.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = data.charCodeAt(i);
    }
    let buffer = bytes.buffer;
    return buffer;
}

function bufferToBlobURL(buffer, type=null) {
    type = type ?? "image/svg+xml";
    let blob = new Blob([buffer], { "type": type });
    let url = window.URL.createObjectURL(blob);
    return url;
}

function binaryStringToBlobURL(data, type=null) {
    let buffer = binaryStringToBuffer(data);
    let url = bufferToBlobURL(buffer, type=type);
    return url;
}

function textToBlobURL(text, type="image/svg+xml") {
    return binaryStringToBlobURL(text, type=type);
}



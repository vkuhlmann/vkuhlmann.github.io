"use strict"

$(document).ready(function () {
    onDOMReady();
});

function onDOMReady() {
    console.log("Hey!");

    for (let projectCardEl of $(".project-card")) {
        for (let showButton of $(".showProjectDetails", projectCardEl)) {
            showButton.addEventListener("click", () => {
                $("#view-projectdetails")[0].innerHTML = $(".project-details", projectCardEl)[0].innerHTML;
            });
        }
    }
}

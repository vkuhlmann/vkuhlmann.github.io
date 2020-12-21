"use strict"

$(document).ready(function () {
    onDOMReady();
});

function onDOMReady() {
    for (let projectCardEl of $(".project-card")) {
        for (let showButton of $(".showProjectDetails", projectCardEl)) {
            showButton.addEventListener("click", (e) => {
                $("#view-projectdetails")[0].innerHTML = $(".project-details", projectCardEl)[0].innerHTML;
                $("#view-projectshortdescription")[0].innerHTML = $(".project-shortdescription", projectCardEl)[0].innerHTML;
                $("#view-projectname")[0].innerHTML = $(".project-name", projectCardEl)[0].innerHTML;
                $("#view-projectdate")[0].innerHTML = $(".project-date", projectCardEl)[0].innerHTML;
                $("#view-projectimage")[0].src = $(".project-image", projectCardEl)[0].src;

                e.preventDefault();
                e.stopPropagation();
            });
        }
    }

    $("#lorentz-interactive .showProjectDetails").trigger("click");
}

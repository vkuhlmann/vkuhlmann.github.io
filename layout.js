"use strict"

$(document).ready(function () {
    onDOMReady();
});

let currSelected;

function focusProjectCard(el) {
    if (el == null)
        return;
    $("#view-projectdetails")[0].innerHTML = $(".project-details", el)[0].innerHTML;
    $("#view-projectshortdescription")[0].innerHTML = $(".project-shortdescription", el)[0].innerHTML;
    $("#view-projectname")[0].innerHTML = $(".project-name", el)[0].innerHTML;
    $("#view-projectdate")[0].innerHTML = $(".project-date", el)[0].innerHTML;
    $("#view-projectimage")[0].src = $(".project-image", el)[0].src;
    if (currSelected != null)
        currSelected.classList.remove("project-card-selected");
    el.classList.add("project-card-selected");
    currSelected = el;
}

function onDOMReady() {
    for (let projectCardEl of $(".project-card")) {
        for (let showButton of $(".showProjectDetails", projectCardEl)) {
            showButton.addEventListener("click", (e) => {
                focusProjectCard(projectCardEl);

                e.preventDefault();
                e.stopPropagation();
            });
        }
    }

    for (let projectCardEl of $(".project-card-selectable")) {
        projectCardEl.addEventListener("click", (e) => {
            focusProjectCard(projectCardEl);

            e.preventDefault();
            e.stopPropagation();
        });
    }

    focusProjectCard($("#lorentz-interactive")[0]);

    //$("#lorentz-interactive .showProjectDetails").trigger("click");
}

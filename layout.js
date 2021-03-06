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
                // let el = $(".project-details", projectCardEl)[0];
                // if (el.classList.contains("collapse")) {
                //     el.classList.remove("collapse")
                // } else {
                //     el.classList.add("collapse")
                // }
                projectCardEl.classList.add("project-card-expanded");
                focusProjectCard(projectCardEl);

                e.preventDefault();
                e.stopPropagation();
            });
        }

        for (let hideButton of $(".hideProjectDetails", projectCardEl)) {
            hideButton.addEventListener("click", (e) => {
                // let el = $(".project-details", projectCardEl)[0];
                // if (el.classList.contains("collapse")) {
                //     el.classList.remove("collapse")
                // } else {
                //     el.classList.add("collapse")
                // }
                projectCardEl.classList.remove("project-card-expanded");

                e.preventDefault();
                e.stopPropagation();
            });
        }
    }

    for (let projectCardEl of $(".project-card-selectable")) {
        projectCardEl.addEventListener("click", (e) => {
            // if(e.target.tagName == "a" || e.target.tagName == "button"
            // || e.target.style.cursor == "pointer")
            //     return;

            focusProjectCard(projectCardEl);

            // e.preventDefault();
            // e.stopPropagation();
        });
    }

    focusProjectCard($("#lorentz-interactive")[0]);

    //$("#lorentz-interactive .showProjectDetails").trigger("click");
}

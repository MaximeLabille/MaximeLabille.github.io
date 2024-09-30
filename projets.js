// gestion des categories
const tabs = document.getElementById("tabs");
const projets_content = document.getElementById("projets_content");
const projets_template = projets_content.querySelectorAll('[id="template"]')[0];

function createnewprojetelem(nom_projet, urllive, urlrepo, type, description, hidden) {
    let cloned = projets_template.cloneNode(true);
    cloned.attributes.data.value = type;
    cloned.querySelectorAll('[id="projet"]')[0].innerText = nom_projet;
    cloned.querySelectorAll('[id="livelink"]')[0].href = urllive;
    cloned.querySelectorAll('[id="repolink"]')[0].href = urlrepo;

    if (hidden == true) {
        cloned.style = "display: none;";
    }

    projets_content.appendChild(cloned);
}

function ChangeSelection(event) {
    const el = (event.target || event.srcElement);
    for (const y of tabs.childNodes) {
        if (y.classList != undefined) {
            y.classList.remove("tab-active")
        }
    }
    el.classList.add("tab-active")
    for (const x of projets_content.childNodes) {
        if (x.attributes != undefined) {
            if (x.attributes.data.value == el.attributes.data.value) {
                x.style = "display: flex;";
            } else {
                x.style = "display: none;";
            }
        }
    }
}

// les tps
createnewprojetelem("TP 1", "/TP1", "https://github.com/MaximeLabille/TP1", "tp", "", false);
createnewprojetelem("TP 2", "/TP2", "https://github.com/MaximeLabille/TP2", "tp", "", false);
createnewprojetelem("TP 3", "/TP3", "https://github.com/MaximeLabille/TP3", "tp", "", false);
createnewprojetelem("TP 4", "/TP4", "https://github.com/MaximeLabille/TP4", "tp", "", false);

// les missions
createnewprojetelem("Mission 1", "/Mission1", "https://github.com/MaximeLabille/Mission1", "mission", "", true);
createnewprojetelem("Mission 2", "/Mission2", "https://github.com/MaximeLabille/Mission2", "mission", "", true);
createnewprojetelem("Mission 3", "/Mission3", "https://github.com/MaximeLabille/Mission3", "mission", "", true);

// trigger tabs
var tabslist = document.getElementById("tabs").childNodes;
for (let x of tabslist) {
    x.addEventListener("click", ChangeSelection);
}


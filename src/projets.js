// gestion des categories
const tabs = document.getElementById("tabs");
const descmodal = document.getElementById("descmodal");
const projets_content = document.getElementById("projets_content");
const projets_template = projets_content.querySelectorAll('[id="template"]')[0];
const embedrepo = document.getElementById("embedrepo");

function createnewprojetelem(nom_projet, urllive, urlrepo, type, description, hidden) {
    let cloned = projets_template.cloneNode(true);
    cloned.attributes.data.value = type;
    cloned.querySelectorAll('[id="about"]')[0].addEventListener("click", function(){
        descmodal.querySelectorAll('[id="name"]')[0].innerText = nom_projet;
        descmodal.querySelectorAll('[id="desc"]')[0].innerText = description;
        embedrepo.href = urlrepo;
        embedrepo.childNodes[1].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSItMyAwIDQwMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIvPg==";
        var username = urlrepo.split('://github.com/').pop().split('/')[0];
        var repo = urlrepo.split("github.com/"+username+"/").pop();
        setTimeout(function(){
            embedrepo.childNodes[1].src = "https://github-readme-stats.vercel.app/api/pin/?username="+username+"&repo="+repo+"&theme=vue-dark&bg_color=140f0f&border_color=110c0c";
            descmodal.showModal();
        }, 50);
    });
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
createnewprojetelem("TP 1", "/TP1", "https://github.com/MaximeLabille/TP1", "tp", "Le premier TP, pour apprendre les balises HTML de base, fait le 16/09/2024.", false);
createnewprojetelem("TP 2", "/TP2", "https://github.com/MaximeLabille/TP2", "tp", "Le second TP, pour apprendre a utiliser la balises IFRAME, fait le 16/09/2024.", false);
createnewprojetelem("TP 3", "/TP3", "https://github.com/MaximeLabille/TP3", "tp", "Le troisieme TP, pour apprendre a faire des Formulaire HTML, fait le 23/09/2024.", false);
createnewprojetelem("TP 4", "/TP4", "https://github.com/MaximeLabille/TP4", "tp", "Le quatrieme TP, pour apprendre a utiliser le css (en particulier float), fait le 30/09/2024.", false);

// les missions
createnewprojetelem("Mission 1", "/Mission1", "https://github.com/MaximeLabille/Mission1", "mission", "La premiere mission, le but etait de faire plusieures page en utilisant toutes les balises HTML que nous avions vu jusque a présent, fait le 13/09/2024.", true);
createnewprojetelem("Mission 2", "/Mission2", "https://github.com/MaximeLabille/Mission2", "mission", "La seconde mission, faire un site avec du chapitrage grace aux IFRAME que nous avons vu dans le TP 2, fait le 20/09/2024.", true);
createnewprojetelem("Mission 3", "/Mission3", "https://github.com/MaximeLabille/Mission3", "mission", "La seconde mission, faire un site avec plusieurs page en particulier un formulaire et l'utilisation du css, fait le 27/09/2024.", true);

// autre proj
createnewprojetelem("MaximeLabille.github.io", "/", "https://github.com/MaximeLabille/MaximeLabille.github.io", "autre", "Le site sur lequel vous êtes.", true);

// trigger tabs
var tabslist = document.getElementById("tabs").childNodes;
for (let x of tabslist) {
    x.addEventListener("click", ChangeSelection);
}


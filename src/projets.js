// gestion des categories  
const tabs = document.getElementById("tabs");
const descmodal = document.getElementById("descmodal");
const projets_content = document.getElementById("projets_content");
const projets_template = projets_content.querySelectorAll('[data="template"]')[0];
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
createnewprojetelem("TP 1", "https://maximeLabille.github.io/TP1", "https://github.com/MaximeLabille/TP1", "tpbts1", "Le premier TP, pour apprendre les balises HTML de base, fait le 16/09/2024.", false);
createnewprojetelem("TP 2", "https://maximeLabille.github.io/TP2", "https://github.com/MaximeLabille/TP2", "tpbts1", "Le second TP, pour apprendre a utiliser la balises IFRAME, fait le 16/09/2024.", false);
createnewprojetelem("TP 3", "https://maximeLabille.github.io/TP3", "https://github.com/MaximeLabille/TP3", "tpbts1", "Le troisieme TP, pour apprendre a faire des Formulaire HTML, fait le 23/09/2024.", false);
createnewprojetelem("TP 4", "https://maximeLabille.github.io/TP4", "https://github.com/MaximeLabille/TP4", "tpbts1", "Le quatrieme TP, pour apprendre a utiliser le css (en particulier float), fait le 30/09/2024.", false);
createnewprojetelem("TP JS 1", "https://maximeLabille.github.io/TP-JS1", "https://github.com/MaximeLabille/TP-JS1", "tpbts1", "Le premier TP de javascript, fait le 07/10/2024.", false);
createnewprojetelem("TP JS 2", "https://maximeLabille.github.io/TP-JS2", "https://github.com/MaximeLabille/TP-JS2", "tpbts1", "Le second TP de javascript, fait le 04/11/2024.", false);
createnewprojetelem("TP JS 3", "https://maximeLabille.github.io/TP-JS3", "https://github.com/MaximeLabille/TP-JS3", "tpbts1", "Le troisieme TP de javascript, fait le 04/11/2024.", false);
createnewprojetelem("TP JS 4", "https://maximeLabille.github.io/TP-JS4", "https://github.com/MaximeLabille/TP-JS4", "tpbts1", "Le 4 eme TP de javascript, fait le 25/11/2024.", false);

// les missions
createnewprojetelem("Mission 1", "https://maximeLabille.github.io/Mission1", "https://github.com/MaximeLabille/Mission1", "missionbts1", "La premiere mission, le but etait de faire plusieures page en utilisant toutes les balises HTML que nous avions vu jusque a présent, fait le 13/09/2024.", true);
createnewprojetelem("Mission 2", "https://maximeLabille.github.io/Mission2", "https://github.com/MaximeLabille/Mission2", "missionbts1", "La seconde mission, faire un site avec du chapitrage grace aux IFRAME que nous avons vu dans le TP 2, fait le 20/09/2024.", true);
createnewprojetelem("Mission 3", "https://maximeLabille.github.io/Mission3", "https://github.com/MaximeLabille/Mission3", "missionbts1", "La troisieme missio, fait le 27/09/2024.", true);
createnewprojetelem("Mission 4", "https://maximeLabille.github.io/Mission4", "https://github.com/MaximeLabille/Mission4", "missionbts1", "La quatrieme mission, fait le 06/10/2024.", true);
createnewprojetelem("Mission 5", "https://maximeLabille.github.io/Mission5", "https://github.com/MaximeLabille/Mission5", "missionbts1", "La 5eme mission, fait le 13/10/2024.", true);
createnewprojetelem("Mission 6", "https://maximeLabille.github.io/Mission5/Missions/6/", "about:blank", "mission", "La 6eme mission, fait le 02/11/2024.", true);
createnewprojetelem("Mission 7", "https://maximeLabille.github.io/Mission5/Missions/7/", "about:blank", "mission", "La 7eme mission.", true);
createnewprojetelem("Mission 9", "https://maximeLabille.github.io/Mission9", "https://github.com/MaximeLabille/Mission9", "missionbts1", "La 9eme mission, fait le 08/12/2024.", true);
createnewprojetelem("Mission 10", "https://maximeLabille.github.io/Mission10", "https://github.com/MaximeLabille/Mission10", "missionbts1", ".", true);

// autre proj
createnewprojetelem("MaximeLabille.github.io", "/", "https://github.com/MaximeLabille/MaximeLabille.github.io", "autre", "Le site sur lequel vous êtes.", true);

// trigger tabs
var tabslist = document.getElementById("tabs").childNodes;
for (let x of tabslist) {
    x.addEventListener("click", ChangeSelection);
}


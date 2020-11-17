// Set local version
let versionid = '1.1.0';

let styleHeadlines = document.getElementsByClassName('headline');
for (var i = 0; i < styleHeadlines.length; i++) {
  styleHeadlines[i].style.fontsize = "12px";
}
let allLinks;

window.onload = function () {
    var input = document.getElementById('dagWeekSwitch');

    function check() {
        dagWeek = input.checked ? "week" : "dag";
        document.getElementById('dagWeekText').innerHTML = dagWeek;
    }
    input.onchange = check;
    check();
}


console.log(dagWeek);

function getAllContent(){

//buttons

document.getElementById('headlinesButton').onclick = function (event2) {
  headlinesContainer.style.display = "block";
  headlinesOverlay.style.display = "block";
  artikelenGrootContainer.style.display = "none";
  agendaAcademyContainer.style.display = "none";
  artikelenKleinContainer.style.display = "none";
  agendaOverlay.style.display = "none";
  vacatureContainer.style.display = "none";

  headlinesButtonImg.className = "ButtonImgPressd";
  artikelGrootButtonImg.className = "ButtonImg";
  agendaAcademyButtonImg.className = "ButtonImg";
  artikelKleinButtonImg.className = "ButtonImg";
  vacatureButtonImg.className = "ButtonImg"
}

document.getElementById("artikelGrootButton").onclick = function (event3) {
  headlinesContainer.style.display = "none";
  headlinesOverlay.style.display = "none";
  artikelenGrootContainer.style.display = "block";
  agendaAcademyContainer.style.display = "none";
  artikelenKleinContainer.style.display = "none";
  agendaOverlay.style.display = "none";
  vacatureContainer.style.display = "none";

  headlinesButtonImg.className = "ButtonImg";
  artikelGrootButtonImg.className = "ButtonImgPressd";
  agendaAcademyButtonImg.className = "ButtonImg";
  artikelKleinButtonImg.className = "ButtonImg";
  vacatureButtonImg.className = "ButtonImg"
}

document.getElementById('agendaAcademyButton').onclick = function (event4) {
  headlinesContainer.style.display = "none";
  headlinesOverlay.style.display = "none";
  artikelenGrootContainer.style.display = "none";
  agendaAcademyContainer.style.display = "block";
  artikelenKleinContainer.style.display = "none";
  agendaOverlay.style.display = "block";
  vacatureContainer.style.display = "none";

  headlinesButtonImg.className = "ButtonImg";
  artikelGrootButtonImg.className = "ButtonImg";
  agendaAcademyButtonImg.className = "ButtonImgPressd";
  artikelKleinButtonImg.className = "ButtonImg";
  vacatureButtonImg.className = "ButtonImg"
}

document.getElementById('artikelKleinButton').onclick = function (event5) {
  headlinesContainer.style.display = "none";
  headlinesOverlay.style.display = "none";
  artikelenGrootContainer.style.display = "none";
  agendaAcademyContainer.style.display = "none";
  artikelenKleinContainer.style.display = "block";
  agendaOverlay.style.display = "none";
  vacatureContainer.style.display = "none";

  headlinesButtonImg.className = "ButtonImg";
  artikelGrootButtonImg.className = "ButtonImg";
  agendaAcademyButtonImg.className = "ButtonImg";
  artikelKleinButtonImg.className = "ButtonImgPressd";
  vacatureButtonImg.className = "ButtonImg"
}

document.getElementById('vacatureButton').onclick = function (event5) {
  headlinesContainer.style.display = "none";
  headlinesOverlay.style.display = "none";
  artikelenGrootContainer.style.display = "none";
  agendaAcademyContainer.style.display = "none";
  artikelenKleinContainer.style.display = "none";
  agendaOverlay.style.display = "none";
  vacatureContainer.style.display = "block";

  headlinesButtonImg.className = "ButtonImg";
  artikelGrootButtonImg.className = "ButtonImg";
  agendaAcademyButtonImg.className = "ButtonImg";
  artikelKleinButtonImg.className = "ButtonImg";
  vacatureButtonImg.className = "ButtonImgPressd"
}

"use strict";


fetch("https://www.frankwatching.com/feed-nieuwsbrief-v2/")
.then(function(respons) {
  return respons.text();
})
.then(function(data) {
  let parser = new DOMParser(),
    xmlDoc = parser.parseFromString(data, 'text/xml');

    let allItems = xmlDoc.getElementsByTagName("item");
    let allTitles = xmlDoc.getElementsByTagName("title");
    let allLinks = xmlDoc.getElementsByTagName("link");
    let headerline2adv = document.getElementById('sheadline2b');
    headerline2adv.textContent="\xa0ADV\xa0";
    let headerline5tip = document.getElementById('sheadline5b');
    headerline5tip.textContent="\xa0TIP\xa0";

    let headerline1 = document.getElementById('headline1');
    headerline1.textContent = 'Voorbeeld';
    headerline1.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);
    let headerline2 = document.getElementById('headline2');
    headerline2.textContent = 'Voorbeeld';
    headerline2.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);
    let headerline3 = document.getElementById('headline3');
    headerline3.textContent = allTitles[1].firstChild.nodeValue;
    headerline3.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);
    let headerline4 = document.getElementById('headline4');
    headerline4.textContent = allTitles[2].firstChild.nodeValue;
    headerline4.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);
    let headerline5 = document.getElementById('headline5');
    headerline5.textContent = 'Voorbeeld';
    headerline5.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);
    let headerline6 = document.getElementById('headline6');
    headerline6.textContent = allTitles[3].firstChild.nodeValue;
    headerline6.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);//campagne);
    let headerline7 = document.getElementById('headline7');
    headerline7.textContent = allTitles[4].firstChild.nodeValue;
    headerline7.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);

});


/*
"use strict";
fetch("https://www.frankwatching.com/feed/academy/upcoming/")
.then(function(respons) {
  return respons.text();
})
.then(function(data) {
  let parser = new DOMParser(),
    xmlDoc = parser.parseFromString(data, 'text/xml');


    let allAgendas = xmlDoc.getElementsByTagName("title");
    let allLocations = xmlDoc.getElementsByTagName("postmeta:location");
    let allDays = xmlDoc.getElementsByTagName("postmeta:dateDay");
    let allMonths = xmlDoc.getElementsByTagName("postmeta:dateMonth");
    let allDurations = xmlDoc.getElementsByTagName("postmeta:durration");
    let allAgendaLinks = xmlDoc.getElementsByTagName("link");
    let allCategories = xmlDoc.getElementsByTagName("postmeta:campaign");

    let agendaCategory1 = allCategories[0].firstChild.nodeValue;
    let agendaCategory2 = allCategories[1].firstChild.nodeValue;
    let agendaCategory3 = allCategories[2].firstChild.nodeValue;
    let agendaCategory4 = allCategories[3].firstChild.nodeValue;
    let agendaCategory5 = allCategories[4].firstChild.nodeValue;
    let agendaCategory6 = allCategories[5].firstChild.nodeValue;
    let agendaCategory7 = allCategories[6].firstChild.nodeValue;
    let agendaCategory8 = allCategories[7].firstChild.nodeValue;
    let agendaCategory9 = allCategories[8].firstChild.nodeValue;
    let agendaCategory10 = allCategories[9].firstChild.nodeValue;
    let agendaCategory11 = allCategories[10].firstChild.nodeValue;
    let agendaCategory12 = allCategories[11].firstChild.nodeValue;
    let agendaCategory13 = allCategories[12].firstChild.nodeValue;
    let agendaCategory14 = allCategories[13].firstChild.nodeValue;
    let agendaCategory15 = allCategories[14].firstChild.nodeValue;
    let agendaCategory16 = allCategories[15].firstChild.nodeValue;
    let agendaCategory17 = allCategories[16].firstChild.nodeValue;
    let agendaCategory18 = allCategories[17].firstChild.nodeValue;
    let agendaCategory19 = allCategories[18].firstChild.nodeValue;
    let agendaCategory20 = allCategories[19].firstChild.nodeValue;

    let agenda1a = document.getElementById('saa1a');
    let agenda1b = document.getElementById('saa1b');
    let agendaLink1 = document.getElementById('agendaAcademy1');
    agenda1a.textContent = allAgendas[1].firstChild.nodeValue;
    agenda1b.textContent = " " + allDays[0].firstChild.nodeValue + " " + allMonths[0].firstChild.nodeValue + " | " + allLocations[0].firstChild.nodeValue + " | " + allDurations[0].firstChild.nodeValue;
    agendaLink1.setAttribute("href", allAgendaLinks[1].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory1}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);//campaign

    let agenda2a = document.getElementById('saa2a');
    let agenda2b = document.getElementById('saa2b');
    let agendaLink2 = document.getElementById('agendaAcademy2');
    agenda2a.textContent = allAgendas[2].firstChild.nodeValue;
    agenda2b.textContent = " " + allDays[1].firstChild.nodeValue + " " + allMonths[1].firstChild.nodeValue + " | " + allLocations[1].firstChild.nodeValue + " | " + allDurations[1].firstChild.nodeValue;
    agendaLink2.setAttribute("href", allAgendaLinks[2].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory2}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda3a = document.getElementById('saa3a');
    let agenda3b = document.getElementById('saa3b');
    let agendaLink3 = document.getElementById('agendaAcademy3');
    agenda3a.textContent = allAgendas[3].firstChild.nodeValue;
    agenda3b.textContent = " " + allDays[2].firstChild.nodeValue + " " + allMonths[2].firstChild.nodeValue + " | " + allLocations[2].firstChild.nodeValue + " | " + allDurations[2].firstChild.nodeValue;
    agendaLink3.setAttribute("href", allAgendaLinks[3].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory3}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda4a = document.getElementById('saa4a');
    let agenda4b = document.getElementById('saa4b');
    let agendaLink4 = document.getElementById('agendaAcademy4');
    agenda4a.textContent = allAgendas[4].firstChild.nodeValue;
    agenda4b.textContent = " " + allDays[3].firstChild.nodeValue + " " + allMonths[3].firstChild.nodeValue + " | " + allLocations[3].firstChild.nodeValue + " | " + allDurations[3].firstChild.nodeValue;
    agendaLink4.setAttribute("href", allAgendaLinks[4].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory4}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda5a = document.getElementById('saa5a');
    let agenda5b = document.getElementById('saa5b');
    let agendaLink5 = document.getElementById('agendaAcademy5');
    agenda5a.textContent = allAgendas[5].firstChild.nodeValue;
    agenda5b.textContent = " " + allDays[4].firstChild.nodeValue + " " + allMonths[4].firstChild.nodeValue + " | " + allLocations[4].firstChild.nodeValue + " | " + allDurations[4].firstChild.nodeValue;
    agendaLink5.setAttribute("href", allAgendaLinks[5].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory5}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda6a = document.getElementById('saa6a');
    let agenda6b = document.getElementById('saa6b');
    let agendaLink6 = document.getElementById('agendaAcademy6');
    agenda6a.textContent = allAgendas[6].firstChild.nodeValue;
    agenda6b.textContent = " " + allDays[5].firstChild.nodeValue + " " + allMonths[5].firstChild.nodeValue + " | " + allLocations[5].firstChild.nodeValue + " | " + allDurations[5].firstChild.nodeValue;
    agendaLink6.setAttribute("href", allAgendaLinks[6].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory6}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda7a = document.getElementById('saa7a');
    let agenda7b = document.getElementById('saa7b');
    let agendaLink7 = document.getElementById('agendaAcademy7');
    agenda7a.textContent = allAgendas[7].firstChild.nodeValue;
    agenda7b.textContent = " " + allDays[6].firstChild.nodeValue + " " + allMonths[6].firstChild.nodeValue + " | " + allLocations[6].firstChild.nodeValue + " | " + allDurations[6].firstChild.nodeValue;
    agendaLink7.setAttribute("href", allAgendaLinks[7].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory7}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda8a = document.getElementById('saa8a');
    let agenda8b = document.getElementById('saa8b');
    let agendaLink8 = document.getElementById('agendaAcademy8');
    agenda8a.textContent = allAgendas[8].firstChild.nodeValue;
    agenda8b.textContent = " " + allDays[7].firstChild.nodeValue + " " + allMonths[7].firstChild.nodeValue + " | " + allLocations[7].firstChild.nodeValue + " | " + allDurations[7].firstChild.nodeValue;
    agendaLink8.setAttribute("href", allAgendaLinks[8].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory8}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda9a = document.getElementById('saa9a');
    let agenda9b = document.getElementById('saa9b');
    let agendaLink9 = document.getElementById('agendaAcademy9');
    agenda9a.textContent = allAgendas[9].firstChild.nodeValue;
    agenda9b.textContent = " " + allDays[8].firstChild.nodeValue + " " + allMonths[8].firstChild.nodeValue + " | " + allLocations[8].firstChild.nodeValue + " | " + allDurations[8].firstChild.nodeValue;
    agendaLink9.setAttribute("href", allAgendaLinks[9].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory9}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda10a = document.getElementById('saa10a');
    let agenda10b = document.getElementById('saa10b');
    let agendaLink10 = document.getElementById('agendaAcademy10');
    agenda10a.textContent = allAgendas[10].firstChild.nodeValue;
    agenda10b.textContent = " " + allDays[9].firstChild.nodeValue + " " + allMonths[9].firstChild.nodeValue + " | " + allLocations[9].firstChild.nodeValue + " | " + allDurations[9].firstChild.nodeValue;
    agendaLink10.setAttribute("href", allAgendaLinks[10].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory10}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda11a = document.getElementById('saa11a');
    let agenda11b = document.getElementById('saa11b');
    let agendaLink11 = document.getElementById('agendaAcademy11');
    agenda11a.textContent = allAgendas[11].firstChild.nodeValue;
    agenda11b.textContent = " " + allDays[10].firstChild.nodeValue + " " + allMonths[10].firstChild.nodeValue + " | " + allLocations[10].firstChild.nodeValue + " | " + allDurations[10].firstChild.nodeValue;
    agendaLink11.setAttribute("href", allAgendaLinks[11].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory11}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda12a = document.getElementById('saa12a');
    let agenda12b = document.getElementById('saa12b');
    let agendaLink12 = document.getElementById('agendaAcademy12');
    agenda12a.textContent = allAgendas[12].firstChild.nodeValue;
    agenda12b.textContent = " " + allDays[11].firstChild.nodeValue + " " + allMonths[11].firstChild.nodeValue + " | " + allLocations[11].firstChild.nodeValue + " | " + allDurations[11].firstChild.nodeValue;
    agendaLink12.setAttribute("href", allAgendaLinks[12].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory12}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda13a = document.getElementById('saa13a');
    let agenda13b = document.getElementById('saa13b');
    let agendaLink13 = document.getElementById('agendaAcademy13');
    agenda13a.textContent = allAgendas[13].firstChild.nodeValue;
    agenda13b.textContent = " " + allDays[12].firstChild.nodeValue + " " + allMonths[12].firstChild.nodeValue + " | " + allLocations[12].firstChild.nodeValue + " | " + allDurations[12].firstChild.nodeValue;
    agendaLink13.setAttribute("href", allAgendaLinks[13].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory13}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda14a = document.getElementById('saa14a');
    let agenda14b = document.getElementById('saa14b');
    let agendaLink14 = document.getElementById('agendaAcademy14');
    agenda14a.textContent = allAgendas[14].firstChild.nodeValue;
    agenda14b.textContent = " " + allDays[13].firstChild.nodeValue + " " + allMonths[13].firstChild.nodeValue + " | " + allLocations[13].firstChild.nodeValue + " | " + allDurations[13].firstChild.nodeValue;
    agendaLink14.setAttribute("href", allAgendaLinks[14].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory14}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda15a = document.getElementById('saa15a');
    let agenda15b = document.getElementById('saa15b');
    let agendaLink15 = document.getElementById('agendaAcademy15');
    agenda15a.textContent = allAgendas[15].firstChild.nodeValue;
    agenda15b.textContent = " " + allDays[14].firstChild.nodeValue + " " + allMonths[14].firstChild.nodeValue + " | " + allLocations[14].firstChild.nodeValue + " | " + allDurations[14].firstChild.nodeValue;
    agendaLink15.setAttribute("href", allAgendaLinks[15].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory15}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda16a = document.getElementById('saa16a');
    let agenda16b = document.getElementById('saa16b');
    let agendaLink16 = document.getElementById('agendaAcademy16');
    agenda16a.textContent = allAgendas[16].firstChild.nodeValue;
    agenda16b.textContent = " " + allDays[15].firstChild.nodeValue + " " + allMonths[15].firstChild.nodeValue + " | " + allLocations[15].firstChild.nodeValue + " | " + allDurations[15].firstChild.nodeValue;
    agendaLink16.setAttribute("href", allAgendaLinks[16].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory16}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda17a = document.getElementById('saa17a');
    let agenda17b = document.getElementById('saa17b');
    let agendaLink17 = document.getElementById('agendaAcademy17');
    agenda17a.textContent = allAgendas[17].firstChild.nodeValue;
    agenda17b.textContent = " " + allDays[16].firstChild.nodeValue + " " + allMonths[16].firstChild.nodeValue + " | " + allLocations[16].firstChild.nodeValue + " | " + allDurations[16].firstChild.nodeValue;
    agendaLink17.setAttribute("href", allAgendaLinks[17].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory17}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda18a = document.getElementById('saa18a');
    let agenda18b = document.getElementById('saa18b');
    let agendaLink18 = document.getElementById('agendaAcademy18');
    agenda18a.textContent = allAgendas[18].firstChild.nodeValue;
    agenda18b.textContent = " " + allDays[17].firstChild.nodeValue + " " + allMonths[17].firstChild.nodeValue + " | " + allLocations[17].firstChild.nodeValue + " | " + allDurations[17].firstChild.nodeValue;
    agendaLink18.setAttribute("href", allAgendaLinks[18].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory18}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda19a = document.getElementById('saa19a');
    let agenda19b = document.getElementById('saa19b');
    let agendaLink19 = document.getElementById('agendaAcademy19');
    agenda19a.textContent = allAgendas[19].firstChild.nodeValue;
    agenda19b.textContent = " " + allDays[18].firstChild.nodeValue + " " + allMonths[18].firstChild.nodeValue + " | " + allLocations[18].firstChild.nodeValue + " | " + allDurations[18].firstChild.nodeValue;
    agendaLink19.setAttribute("href", allAgendaLinks[19].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory19}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);

    let agenda20a = document.getElementById('saa20a');
    let agenda20b = document.getElementById('saa20b');
    let agendaLink20 = document.getElementById('agendaAcademy20');
    agenda20a.textContent = allAgendas[20].firstChild.nodeValue;
    agenda20b.textContent = " " + allDays[19].firstChild.nodeValue + " " + allMonths[19].firstChild.nodeValue + " | " + allLocations[19].firstChild.nodeValue + " | " + allDurations[19].firstChild.nodeValue;
    agendaLink20.setAttribute("href", allAgendaLinks[20].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${agendaCategory20}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`);
});
*/


//drag and drop
var allHeadlines = document.getElementById("headlinesContainer");

  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(allHeadlines);
  selection.removeAllRanges();
  selection.addRange(range);

document.getElementById('headline1').ondragstart = function(event){
  event.preventDefault();
};

document.getElementById('headlinesOverlay').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', headlinesContainer.innerHTML);
    console.log('dragstart');
}
/*
document.getElementById('agendaOverlay').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', agendaAcademyContainer.innerHTML);
        console.log('dragstart');
}
*/


/*
function onDragStart(event) {
  event.preventDefault();
  console.log("dragover");
}

function onDrop(event) {
  event.preventDefault();
  const id = event
    .dataTransfer
    .getData('text');

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);

  event
    .dataTransfer
    .clearData();
}
*/


/*

document.getElementById('artikelGroot1T').onmousehover = function () {
  if (allArtikel1.includes("seo") || allArtikel1.includes("SEO") || allArtikel1.includes("Search Engine Optimization")) {
    document.getElementById('categroySEO').display = "block";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("conversie") || allArtikel1.includes("Conversie") || allArtikel1.includes("conversion")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "block";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("Adverteren") || allArtikel1.includes("adverteren") || allArtikel1.includes("Advertising")||allArtikel1.includes("Ecommerce")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "block";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("Adverteren") || allArtikel1.includes("content") || allArtikel1.includes("Content")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "block";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("branding") || allArtikel1.includes("communicatie") || allArtikel1.includes("Communicatie")||allArtikel1.includes("Branding")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "block";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("social") || allArtikel1.includes("Social")|| allArtikel1.includes("conversational") || allArtikel1.includes("video") || allArtikel1.includes("facebook") || allArtikel1.includes("twitter") || allArtikel1.includes("youtube")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "block";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("design") || allArtikel1.includes("Design")|| allArtikel1.includes("UX")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "block";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("Digital") || allArtikel1.includes("Tech") || allArtikel1.includes("E-mailmarketing") || allArtikel1.includes("data")){
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "block";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel1.includes("carriere")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "block";
  };
};

document.getElementById('artikelGroot2T').onmousehover = function () {
  if (allArtikel2.includes("seo") || allArtikel2.includes("SEO") || allArtikel2.includes("Search Engine Optimization")) {
    document.getElementById('categroySEO').display = "block";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("conversie") || allArtikel2.includes("Conversie") || allArtikel2.includes("conversion")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "block";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("Adverteren") || allArtikel2.includes("adverteren") || allArtikel2.includes("Advertising")||allArtikel2.includes("Ecommerce")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "block";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("Adverteren") || allArtikel2.includes("content") || allArtikel2.includes("Content")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "block";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("branding") || allArtikel2.includes("communicatie") || allArtikel2.includes("Communicatie")||allArtikel2.includes("Branding")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "block";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("social") || allArtikel2.includes("Social")|| allArtikel2.includes("conversational") || allArtikel2.includes("video") || allArtikel2.includes("facebook") || allArtikel2.includes("twitter") || allArtikel2.includes("youtube")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "block";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("design") || allArtikel2.includes("Design")|| allArtikel2.includes("UX")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "block";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("Digital") || allArtikel2.includes("Tech") || allArtikel2.includes("E-mailmarketing") || allArtikel2.includes("data")){
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "block";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel2.includes("carriere")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "block";
  };
};

document.getElementById('artikelGroot3T').onmousehover = function hoverColor() {
  if (allArtikel3.includes("seo") || allArtikel3.includes("SEO") || allArtikel3.includes("Search Engine Optimization")) {
    document.getElementById('categroySEO').display = "block";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("conversie") || allArtikel3.includes("Conversie") || allArtikel3.includes("conversion")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "block";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("Adverteren") || allArtikel3.includes("adverteren") || allArtikel3.includes("Advertising")||allArtikel3.includes("Ecommerce")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "block";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("Adverteren") || allArtikel3.includes("content") || allArtikel3.includes("Content")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "block";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("branding") || allArtikel3.includes("communicatie") || allArtikel3.includes("Communicatie")||allArtikel3.includes("Branding")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "block";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("social") || allArtikel3.includes("Social")|| allArtikel3.includes("conversational") || allArtikel3.includes("video") || allArtikel3.includes("facebook") || allArtikel3.includes("twitter") || allArtikel3.includes("youtube")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "block";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("design") || allArtikel3.includes("Design")|| allArtikel3.includes("UX")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "block";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("Digital") || allArtikel3.includes("Tech") || allArtikel3.includes("E-mailmarketing") || allArtikel3.includes("data")){
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "block";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel3.includes("carriere")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "block";
  };
};

document.getElementById('artikelGroot4T').onmousehover = function () {
  if (allArtikel4.includes("seo") || allArtikel4.includes("SEO") || allArtikel4.includes("Search Engine Optimization")) {
    document.getElementById('categroySEO').display = "block";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("conversie") || allArtikel4.includes("Conversie") || allArtikel4.includes("conversion")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "block";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("Adverteren") || allArtikel4.includes("adverteren") || allArtikel4.includes("Advertising")||allArtikel4.includes("Ecommerce")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "block";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("Adverteren") || allArtikel4.includes("content") || allArtikel4.includes("Content")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "block";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("branding") || allArtikel4.includes("communicatie") || allArtikel4.includes("Communicatie")||allArtikel4.includes("Branding")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "block";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("social") || allArtikel4.includes("Social")|| allArtikel4.includes("conversational") || allArtikel4.includes("video") || allArtikel4.includes("facebook") || allArtikel4.includes("twitter") || allArtikel4.includes("youtube")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "block";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("design") || allArtikel4.includes("Design")|| allArtikel4.includes("UX")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "block";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("Digital") || allArtikel4.includes("Tech") || allArtikel4.includes("E-mailmarketing") || allArtikel4.includes("data")){
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "block";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel4.includes("carriere")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "block";
  };
};

document.getElementById('artikelGroot5T').onmousehover = function () {
  if (allArtikel5.includes("seo") || allArtikel5.includes("SEO") || allArtikel5.includes("Search Engine Optimization")) {
    document.getElementById('categroySEO').display = "block";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("conversie") || allArtikel5.includes("Conversie") || allArtikel5.includes("conversion")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "block";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("Adverteren") || allArtikel5.includes("adverteren") || allArtikel5.includes("Advertising")||allArtikel5.includes("Ecommerce")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "block";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("Adverteren") || allArtikel5.includes("content") || allArtikel5.includes("Content")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "block";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("branding") || allArtikel5.includes("communicatie") || allArtikel5.includes("Communicatie")||allArtikel5.includes("Branding")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "block";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("social") || allArtikel5.includes("Social")|| allArtikel5.includes("conversational") || allArtikel5.includes("video") || allArtikel5.includes("facebook") || allArtikel5.includes("twitter") || allArtikel5.includes("youtube")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "block";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("design") || allArtikel5.includes("Design")|| allArtikel5.includes("UX")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "block";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("Digital") || allArtikel5.includes("Tech") || allArtikel5.includes("E-mailmarketing") || allArtikel5.includes("data")){
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "block";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel5.includes("carriere")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "block";
  };
};

document.getElementById('artikelGroot6T').onmousehover = function () {
  if (allArtikel6.includes("seo") || allArtikel6.includes("SEO") || allArtikel6.includes("Search Engine Optimization")) {
    document.getElementById('categroySEO').display = "block";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("conversie") || allArtikel6.includes("Conversie") || allArtikel6.includes("conversion")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "block";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("Adverteren") || allArtikel6.includes("adverteren") || allArtikel6.includes("Advertising")||allArtikel6.includes("Ecommerce")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "block";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("Adverteren") || allArtikel6.includes("content") || allArtikel6.includes("Content")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "block";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("branding") || allArtikel6.includes("communicatie") || allArtikel6.includes("Communicatie")||allArtikel6.includes("Branding")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "block";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("social") || allArtikel6.includes("Social")|| allArtikel6.includes("conversational") || allArtikel6.includes("video") || allArtikel6.includes("facebook") || allArtikel6.includes("twitter") || allArtikel6.includes("youtube")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "block";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("design") || allArtikel6.includes("Design")|| allArtikel6.includes("UX")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "block";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("Digital") || allArtikel6.includes("Tech") || allArtikel6.includes("E-mailmarketing") || allArtikel6.includes("data")){
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "block";
    document.getElementById('categoryHR').display = "none";
  }else if (allArtikel6.includes("carriere")) {
    document.getElementById('categroySEO').display = "none";
    document.getElementById('categoryConversie').display = "none";
    document.getElementById('categoryAdvertising').display = "none";
    document.getElementById('categoryContent').display = "none";
    document.getElementById('categoryCommunicatie').display = "none";
    document.getElementById('categorySocial').display = "none";
    document.getElementById('categoryUX').display = "none";
    document.getElementById('categoryTech').display = "none";
    document.getElementById('categoryHR').display = "block";
  };
};

*/

// ## LOAD AGENDA
"use strict";
fetch("https://www.frankwatching.com/feed/academy/upcoming/")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {
  
  //console.log(data);

  const items = data.querySelectorAll("item");
  
  
  var existAAC = document.getElementById("agendaAcademyContainer");
  if(existAAC){
    console.log('List agenda items empty');
   // existAAC.innerHTML = ``;

    existAAC.innerHTML = `<table id="academyTable" width="100%" style="line-height: 22px; margin: 0px;"><tbody></tbody></table>`;  
   
  }
  
  
  setTimeout(function() {
    for (var i = 0, len = 15; i < len; i++) {
      agendaItems(items[i]);
    }


 }, 100);

});

   
function agendaItems(item, index) {

  var table = document.getElementById("academyTable");

  var json = xml2json(item); 

  var title = (json["title"]); 
  var link = (json["link"]); 
  var postid = (json["productid"]);   
  var campaign = (json["postmeta:campaign"]); 
  var location = (json["postmeta:location"]); 
  var durration = (json["postmeta:durration"]); 
  var dateMonth = (json["postmeta:dateMonth"]); 
  var dateDay = (json["postmeta:dateDay"]); 

  var item_link = link + `?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=${campaign}&utm_content=%7c{{^Account.DATE(SHORT)}}%7cagenda%7c`;

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = `▸`;
  cell1.style.fontSize = "12px";
  cell1.style.fontSize = "#18608b";
  cell1.style.verticalAlign = "top";
  cell2.innerHTML = `<p style="margin: 0px;"><a id="agendaAcademy${postid}" class="agendaItem" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;"><span  style="color: rgb(24, 96, 139);">${title}</span><span style="font-size: 12px; color: rgb(158, 158, 158);"> ${dateDay} ${dateMonth} | ${location} | ${durration}</span></a></p>`;

}

document.getElementById('agendaOverlay').ondragstart = function (event) {
    event
      .dataTransfer
      .setData('text/html', agendaAcademyContainer.innerHTML);
      console.log('dragstart');
}

// ## LOAD ARTIKELEN
"use strict";
fetch("https://www.frankwatching.com/feed-nieuwsbrief-v2/")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {
  
  //console.log(data);

  const items = data.querySelectorAll("item");
  
  var existGCC = document.getElementById("artikelenGrootContainerContent");
  if(existGCC){
    console.log('List grote items empty');
    existGCC.innerHTML = ``;
  }

  var existKCC = document.getElementById("artikelenKleinContainerContent");
  if(existKCC){
    console.log('List kleine items empty');
    existKCC.innerHTML = ``;
  }
  
  setTimeout(function() {
    items.forEach(artikelenGrootItems);
    items.forEach(artikelenKleinItems);
 }, 100);

});

function artikelenGrootItems(item, index) {
   
//  console.log(item);

  var postid = item.querySelector("postid").innerHTML;

  var item_link = item.querySelector("link").innerHTML + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`;
  
  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  
   const div = document.createElement('div');
   div.className = 'grootArtikel';
   div.id = 'grootArtikel'+postid;
   div.draggable = 'true';


  div.innerHTML = `
  <table id="artikelGroot${postid}T"> 
 <tbody id="artikelGroot${postid}Tb"> 
  <tr id="artikelGroot${postid}TrA"> 
   <td id="artikelGroot${postid}TdA"><a class="grootArtikelTitle" style="color: #1a1a1a; display: block; line-height: 22px; font-size: 14pt; padding: 0px 0px 10px 0px;" href="${item_link}">${item.querySelector("title").innerHTML}</a></td> 
  </tr> 
  <tr id="artikelGroot${postid}TrB"> 
   <td id="artikelGroot${postid}TdB"><a style="padding: 0px;" id="ct11_1" href="${item_link}"><img id="grootArtikelImg1" class="grootArtikelImg" style="display: block; width: 100%; padding-bottom: 10px; height: auto;" src="${item_img_groot}" width="600" height="180"></a></td> 
  </tr> 
  <tr id="artikelGroot${postid}TrC"> 
   <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;"><a class="grootArtikelDescription" style="color: #666666; font-size: 16px; display: inline; padding: 0px 0px 0px 0px;" id="ct11_2" href="${item_link}"><span style="font-size: 12pt; color: #333333;">${item.querySelector("description").innerHTML}.</span></a><a class="GrootArtikelCTA" style="display: inline; font-size: 16px; text-decoration: none; color: #18608b;"  href="${item_link}"> Lees meer ▸</a></td> 
  </tr> 
 </tbody> 
</table>`;  

   artikelenGrootContainerContent.appendChild(div);

   document.getElementById('grootArtikel' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }
    
}

function artikelenKleinItems(item, index) {
   
  var postid = item.querySelector("postid").innerHTML;

  var item_link = item.querySelector("link").innerHTML + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`;
  
  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  var item_img_klein = item.querySelector("*|foto").innerHTML;
  item_img_klein = item_img_klein.replace("<![CDATA[", "").replace("]]>", "");

   const div = document.createElement('div');
   div.className = 'kleinArtikel';
   div.id = 'kleinArtikel'+postid;
   div.draggable = 'true';


  div.innerHTML = `<table class="table1a">
  <tbody>
    <tr>
      <td class="tableDivider1a"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="height: auto; width: 100%; display: block;" draggable="true" src="${item_img_groot}" /></td>
    </tr>
  </tbody>
  </table>
  <table>
  <tbody>
    <tr>
      <td class="tableDivider1" width="0px" height="auto" style="padding-bottom: 20px;">
        <div class="tdDiv"><a id="imgKlein${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}" class="imgKleinArtikel" style="display: none; height: 150px; width: 150px;" src="${item_img_klein}" /></a></div>
      </td>
      <td class="tableDivider2" height="auto" width="auto" style="vertical-align: top; padding-bottom: 20px;">
        <table class="tableC">
          <tbody>
            <tr>
              <td class="artikelKleinTDcA"><a id="kleinTitleLink${postid}" class="titleKleinArtikel" style="color: #1a1a1a; line-height: 22px; margin-top: 0px; margin-bottom: 7px; top: 0px; display: block; font-size: 14pt; font-weight: regular; font-family: Arial;" href="${item_link}">${item.querySelector("title").innerHTML}</a></td>
            </tr>
            <tr>
              <td><a id="DescriptionKleinArtikel${postid}" class="DescriptionKleinArtikel" style="color: #333333; font-size: 16px; line-height: 22px; font-weight: regular; font-family: Arial;" href="${item_link}">${item.querySelector("description").innerHTML}</a><a id="KleinArtikelCTA${postid}" class="KleinArtikelCTA" style="text-decoration: none; color: #18608b; font-size: 12pt;" href="${item_link}"> Lees meer ▸</a></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>`;  

   artikelenKleinContainerContent.appendChild(div);

   document.getElementById('kleinArtikel' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
         //console.log(event.target.innerHTML);
     }
    
}



// ## LOAD VACATURES

"use strict";
fetch("https://www.frankwatching.com/feed/?post_type=vacature")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {
  
  //console.log(data);

  const items = data.querySelectorAll("item");
  
  var existVCC = document.getElementById("vacatureContainerContent");
  if(existVCC){
    console.log('List empty');
    existVCC.innerHTML = ``;
  }
  
  setTimeout(function() {
    items.forEach(functionVacatureItems);
 }, 100);

});


function functionVacatureItems(item, index) {
   
  var postid = item.querySelector("guid").innerHTML;
  postid = postid.substring(postid.indexOf("p=") + 2);

  var description = item.querySelector("description").innerHTML;
  description = description.replace("<![CDATA[", "").replace("]]>", "");
  
  var vac_org_naam = item.querySelector("*|vac_org_naam").innerHTML;
  
  var vac_org_naam = item.querySelector("*|vac_org_naam").innerHTML;
  vac_org_naam = vac_org_naam.replace("<![CDATA[", "").replace("]]>", "");

  var vac_uur = item.querySelector("*|vac_uur").innerHTML;
  vac_uur = vac_uur.replace("<![CDATA[", "").replace("]]>", "");

  if( ! vac_uur.includes("uur") ) {
   vac_uur = vac_uur + " uur";
  }

  var vac_standplaats = item.querySelector("*|vac_standplaats").innerHTML;
  vac_standplaats = vac_standplaats.replace("<![CDATA[", "").replace("]]>", "");

  var vac_link = item.querySelector("link").innerHTML + '?utm_source=vacaturealert-dag&amp;utm_medium=email&amp;utm_campaign=vacature&amp;utm_content=%7c{{^Account.DATE(SHORT)}}%7cvacature%7c';

  var enclosure_img = item.querySelector("enclosure").getAttribute("url");
  
   const div = document.createElement('div');
   div.className = 'dragrow vacature';
   div.id = 'vacature'+postid;
   div.draggable = 'true';

  //console.log(dagWeek);
  var daginzet = '<tr><td id="vacatureTD' + postid + 'bMob" class="vacaturetd_mobile" style="display: none;"><a  style="display: none;" id="vacatureImgLink' + postid + '" class="vacatureImgLink_mob" href="'+vac_link+'"><img id="imgVacatureArtikel'+postid+'mob" class="imgVacature_mobile" style="display: none;" src="'+enclosure_img+'" /></a></td></tr> ';
   if(dagWeek != 'dag') { 
    daginzet = '';
  }

   div.innerHTML = `
   <table id="vacatureTable${postid}" style="margin: 0px 0px 20px;">
       <tbody>
           <tr>
               <td class="vacTableDivider1" width="30%" height="150px" style="vertical-align: top;"><a></a><a id="vacatureImgLink${postid}" class="vacatureImgLink" href="${vac_link}"><img id="imgVacatureArtikel${postid}" class="imgVacature" style="display: block; height: auto; width: 150px;" src="${enclosure_img}" /></a></td>
               <td class="vacTableDivider2" height="150px" width="auto" style="vertical-align: top;">
                   <table>
                       <tbody>
                           ${daginzet}
                           <tr>
                               <td id="vacatureTD${postid}bA" class="vacatureTDbA"><a id="metaVacature${postid}"  href="${vac_link}" style="display: block; font-size: 12px; font-weight: bold; font-family: Arial; color: #019000;" class="metaVacature"><span id="vacatureMeta${postid}a" class="metaVacatureCompany" style="font-size: 12px; font-weight: bold; font-family: Arial; color: #019000;">${vac_org_naam}</span><span id="vacatureMeta${postid}b" class="metaVacature" style="font-size: 12px; font-weight: bold; font-family: Arial; color: #666666;"> • ${vac_standplaats} • ${vac_uur}</span></a></td>
                           </tr>
                           <tr>
                               <td id="vacatureTD${postid}bB" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: Arial; line-height: 1; color: #1a1a1a; text-decoration: none; padding: 0px 0px 8px 0px;"><a id="vacatureLink${postid}title" class="titleVacature" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: Arial; line-height: 1; color: #1a1a1a; text-decoration: none; padding: 8px 0px 0px 0px;" href="${vac_link}">${item.querySelector("title").innerHTML}</a></td>
                           </tr>
                           <tr>
                               <td id="vacatureTD${postid}bC" style="display: block; font-size: 16px; line-height: 22px; font-weight: regular; font-family: Arial; color: #666666; text-decoration: none; padding: 10x 0px 15px 0px;" class="vacatureTDbC"><a id="vacatureLink${postid}description" class="DescriptionVacature" style="display: block; font-size: 16px; font-weight: regular; font-family: Arial; color: #666666; text-decoration: none; padding: 0x 0px 0px 0px;" href="${vac_link}">${description}</a></td>
                           </tr>
                       </tbody>
                   </table>
               </td>
           </tr>
       </tbody>
   </table> `;
   vacatureContainerContent.appendChild(div);

   document.getElementById('vacature' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
         //console.log(event.target.innerHTML);
     }
}

// Check version extension
fetch('https://raw.githubusercontent.com/ThomasSonneveld/Act-On-External-Content/master/manifest.json')
    .then(res => res.json())
    .then((out) => {
        //console.log('Output: ', out);
        var text = `Lokale versie: ${versionid}<br>
                    Online versie: ${out.version}<br>`;
  
        const versiediv = document.createElement('div');
        versiediv.id = 'versiondiv';
        if(versionid != out.version) {
          versiediv.className = 'versiondiv-update';
          text = `Lokale versie: ${versionid}<br>`;
          text = text + '<a href="https://github.com/ThomasSonneveld/Act-On-External-Content" target="_blank">Nu updaten naar: ' + out.version + '</a>';
        }
        versiediv.innerHTML = text;
      
      credits.appendChild(versiediv);

}).catch(err => console.error(err));


};
getAllContent();


function xml2json(xml) {
  try {
    var obj = {};
    if (xml.children.length > 0) {
      for (var i = 0; i < xml.children.length; i++) {
        var item = xml.children.item(i);
        var nodeName = item.nodeName;

        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = xml2json(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            var old = obj[nodeName];

            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(xml2json(item));
        }
      }
    } else {
      obj = xml.textContent;
    }
    return obj;
  } catch (e) {
      console.log(e.message);
  }
}
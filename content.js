let styleHeadlines = document.getElementsByClassName('headline');
for (var i = 0; i < styleHeadlines.length; i++) {
  styleHeadlines[i].style.fontsize = "12px";
  styleHeadlines[i].style.color = "#21759b";
}

let allLinks;

"use strict";
setTimeout(() => {
fetch("https://www.frankwatching.com/feed-nieuwsbrief-v2/")
.then(function(respons) {
  return respons.text();
})
.then(function(data) {
  let parser = new DOMParser(),
    xmlDoc = parser.parseFromString(data, 'text/xml');

    let allItems = xmlDoc.getElementsByTagName("item");

    let allImages = xmlDoc.getElementsByTagName("enclosure");
    console.log(allImages);
    let allSmallImages = xmlDoc.getElementsByTagName("dc:foto");
    let allTitles = xmlDoc.getElementsByTagName("title");
    let allDescriptions = xmlDoc.getElementsByTagName("description");
    let allAuthors = xmlDoc.getElementsByTagName("author");
    let allLinks = xmlDoc.getElementsByTagName("link");

    let allArtikel1 = allTitles[1].firstChild.nodeValue + allDescriptions[1].firstChild.nodeValue
    if (allArtikel1.includes("seo") || allArtikel1.includes("SEO") || allArtikel1.includes("Search Engine Optimization")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #ffffba";
    }else if (allArtikel1.includes("conversie") || allArtikel1.includes("Conversie") || allArtikel1.includes("conversion")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #bae1ff";
    }else if (allArtikel1.includes("Adverteren") || allArtikel1.includes("adverteren") || allArtikel1.includes("Advertising")||allArtikel1.includes("Ecommerce")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #ffb3ba";
    }else if (allArtikel1.includes("Adverteren") || allArtikel1.includes("content") || allArtikel1.includes("Content")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #eecbff";
    }else if (allArtikel1.includes("branding") || allArtikel1.includes("communicatie") || allArtikel1.includes("Communicatie")||allArtikel1.includes("Branding")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #baffc9";
    }else if (allArtikel1.includes("social") || allArtikel1.includes("Social")|| allArtikel1.includes("conversational") || allArtikel1.includes("video") || allArtikel1.includes("facebook") || allArtikel1.includes("twitter") || allArtikel1.includes("youtube")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #d4ffea";
    }else if (allArtikel1.includes("design") || allArtikel1.includes("Design")|| allArtikel1.includes("UX")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #a8e6cf";
    }else if (allArtikel1.includes("Digital") || allArtikel1.includes("Tech") || allArtikel1.includes("E-mailmarketing") || allArtikel1.includes("data")){
      document.getElementById('grootArtikel1').style.border= "5px solid #ff8b94";
    }else if (allArtikel1.includes("carriere")) {
      document.getElementById('grootArtikel1').style.border= "5px solid #dfa290";
    };

    let allArtikel2 = allTitles[2].firstChild.nodeValue + allDescriptions[2].firstChild.nodeValue
    if (allArtikel2.includes("seo") || allArtikel2.includes("SEO") || allArtikel2.includes("Search Engine Optimization")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #ffffba";
    }else if (allArtikel2.includes("conversie") || allArtikel2.includes("Conversie") || allArtikel2.includes("conversion")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #bae1ff";
    }else if (allArtikel2.includes("Adverteren") || allArtikel2.includes("adverteren") || allArtikel2.includes("Advertising")||allArtikel2.includes("Ecommerce")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #ffb3ba";
    }else if (allArtikel2.includes("Adverteren") || allArtikel2.includes("content") || allArtikel2.includes("Content")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #eecbff";
    }else if (allArtikel2.includes("branding") || allArtikel2.includes("communicatie") || allArtikel2.includes("Communicatie")||allArtikel2.includes("Branding")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #baffc9";
    }else if (allArtikel2.includes("social") || allArtikel2.includes("Social")||allArtikel2.includes("conversational") || allArtikel2.includes("video") || allArtikel2.includes("facebook") || allArtikel2.includes("twitter") || allArtikel2.includes("youtube")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #d4ffea";
    }else if (allArtikel2.includes("design") || allArtikel2.includes("Design")||allArtikel2.includes("UX")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #a8e6cf";
    }else if (allArtikel2.includes("Digital") || allArtikel2.includes("Tech") || allArtikel2.includes("E-mailmarketing") || allArtikel2.includes("data")){
      document.getElementById('grootArtikel2').style.border= "5px solid #ff8b94";
    }else if (allArtikel2.includes("carriere")) {
      document.getElementById('grootArtikel2').style.border= "5px solid #dfa290";
    };


    let allArtikel3 = allTitles[3].firstChild.nodeValue + allDescriptions[3].firstChild.nodeValue
    if (allArtikel3.includes("seo") || allArtikel3.includes("SEO") || allArtikel3.includes("Search Engine Optimization")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #ffffba";
    }else if (allArtikel3.includes("conversie") || allArtikel3.includes("Conversie") || allArtikel3.includes("conversion")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #bae1ff";
    }else if (allArtikel3.includes("Adverteren") || allArtikel3.includes("adverteren") || allArtikel3.includes("Advertising")||allArtikel3.includes("Ecommerce")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #ffb3ba";
    }else if (allArtikel3.includes("Adverteren") || allArtikel3.includes("content") || allArtikel3.includes("Content")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #eecbff";
    }else if (allArtikel3.includes("branding") || allArtikel3.includes("communicatie") || allArtikel3.includes("Communicatie")||allArtikel3.includes("Branding")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #baffc9";
    }else if (allArtikel3.includes("social") || allArtikel3.includes("Social") || allArtikel3.includes("conversational") || allArtikel3.includes("video") || allArtikel3.includes("facebook") || allArtikel3.includes("twitter") || allArtikel3.includes("youtube")){
      document.getElementById('grootArtikel3').style.border= "5px solid #d4ffea";
    }else if (allArtikel3.includes("design") || allArtikel3.includes("Design")||allArtikel3.includes("UX")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #a8e6cf";
    }else if (allArtikel3.includes("Digital")|| allArtikel3.includes("Tech") || allArtikel3.includes("E-mailmarketing") || allArtikel3.includes("data")){
      document.getElementById('grootArtikel3').style.border= "5px solid #ff8b94";
    }else if (allArtikel3.includes("carriere")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #dfa290";
    };


    let allArtikel4 = allTitles[4].firstChild.nodeValue + allDescriptions[4].firstChild.nodeValue
    if (allArtikel4.includes("seo") || allArtikel4.includes("SEO") || allArtikel4.includes("Search Engine Optimization")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #ffffba";
    }else if (allArtikel4.includes("conversie") || allArtikel4.includes("Conversie") || allArtikel4.includes("conversion")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #bae1ff";
    }else if (allArtikel4.includes("Adverteren") || allArtikel4.includes("adverteren") || allArtikel4.includes("Advertising")||allArtikel4.includes("Ecommerce")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #ffb3ba";
    }else if (allArtikel4.includes("Adverteren") || allArtikel4.includes("content") || allArtikel4.includes("Content")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #eecbff";
    }else if (allArtikel4.includes("branding") || allArtikel4.includes("communicatie") || allArtikel4.includes("Communicatie")||allArtikel4.includes("Branding")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #baffc9";
    }else if (allArtikel4.includes("social") || allArtikel4.includes("Social")||allArtikel4.includes("conversational") || allArtikel4.includes("video") || allArtikel4.includes("facebook") || allArtikel4.includes("twitter") || allArtikel4.includes("youtube")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #d4ffea";
    }else if (allArtikel4.includes("design") || allArtikel4.includes("Design")||allArtikel4.includes("UX")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #a8e6cf";
    }else if (allArtikel4.includes("Digital")|| allArtikel4.includes("Tech") || allArtikel4.includes("E-mailmarketing") || allArtikel4.includes("data")){
      document.getElementById('grootArtikel4').style.border= "5px solid #ff8b94";
    }else if (allArtikel4.includes("carriere")) {
      document.getElementById('grootArtikel4').style.border= "5px solid #dfa290";
    };


    let allArtikel5 = allTitles[5].firstChild.nodeValue + allDescriptions[5].firstChild.nodeValue
    if (allArtikel5.includes("seo") || allArtikel5.includes("SEO") || allArtikel5.includes("Search Engine Optimization")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #ffffba";
    }else if (allArtikel5.includes("conversie") || allArtikel5.includes("Conversie") || allArtikel5.includes("conversion")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #bae1ff";
    }else if (allArtikel5.includes("Adverteren") || allArtikel5.includes("adverteren") || allArtikel5.includes("Advertising")||allArtikel5.includes("Ecommerce")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #ffb3ba";
    }else if (allArtikel5.includes("Adverteren") || allArtikel5.includes("content") || allArtikel5.includes("Content")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #eecbff";
    }else if (allArtikel5.includes("branding") || allArtikel5.includes("communicatie") || allArtikel5.includes("Communicatie")||allArtikel5.includes("Branding")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #baffc9";
    }else if (allArtikel5.includes("social") || allArtikel5.includes("Social")||allArtikel5.includes("conversational") || allArtikel5.includes("video") || allArtikel5.includes("facebook") || allArtikel5.includes("twitter") || allArtikel5.includes("youtube")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #d5ffea";
    }else if (allArtikel5.includes("design") || allArtikel5.includes("Design")||allArtikel5.includes("UX")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #a8e6cf";
    }else if (allArtikel5.includes("Digital") || allArtikel5.includes("Tech") || allArtikel5.includes("e-mailmarketing") || allArtikel5.includes("data")){
      document.getElementById('grootArtikel5').style.border= "5px solid #ff8b94";
    }else if (allArtikel5.includes("carriere")) {
      document.getElementById('grootArtikel5').style.border= "5px solid #dfa290";
    };


    let allArtikel6 = allTitles[6].firstChild.nodeValue + allDescriptions[6].firstChild.nodeValue
    if (allArtikel6.includes("seo") || allArtikel6.includes("SEO") || allArtikel6.includes("Search Engine Optimization")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #fffda3";
    }else if (allArtikel6.includes("conversie") || allArtikel6.includes("Conversie") || allArtikel6.includes("conversion")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #e6ffec";
    }else if (allArtikel6.includes("Adverteren") || allArtikel6.includes("adverteren") || allArtikel6.includes("Advertising")||allArtikel6.includes("Ecommerce")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #fff2f2";
    }else if (allArtikel6.includes("Adverteren") || allArtikel6.includes("content") || allArtikel6.includes("Content")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #fff5d9";
    }else if (allArtikel6.includes("branding") || allArtikel6.includes("communicatie") || allArtikel6.includes("Communicatie")||allArtikel6.includes("Branding")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #ebfff8";
    }else if (allArtikel6.includes("social") || allArtikel6.includes("Social") || allArtikel6.includes("conversational") || allArtikel6.includes("video") || allArtikel6.includes("facebook") || allArtikel6.includes("twitter") || allArtikel6.includes("youtube")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #ebf7ff";
    }else if (allArtikel6.includes("design") || allArtikel6.includes("Design") || allArtikel6.includes("UX")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #efebff";
    }else if (allArtikel6.includes("Digital")|| allArtikel6.includes("Tech") || allArtikel6.includes("E-mailmarketing") || allArtikel6.includes("data")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #fbebff";
    }else if (allArtikel6.includes("carrière")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #ffebf6";
    };




    document.getElementById("headline2").setAttribute("href", allLinks[2]);
    document.getElementById("headline3").setAttribute("href", allLinks[3]);
    document.getElementById("headline4").setAttribute("href", allLinks[4]);
    document.getElementById("headline5").setAttribute("href", allLinks[5]);
    document.getElementById("headline6").setAttribute("href", allLinks[6]);


    let headerline1 = document.getElementById('headline1');
    headerline1.textContent = "▶" + " " + allTitles[1].firstChild.nodeValue;
    headerline1.setAttribute("href", allLinks[1].textContent );
    let headerline2 = document.getElementById('headline2');
    headerline2.textContent = "▶" + " " + allTitles[2].firstChild.nodeValue;
    headerline2.setAttribute("href", allLinks[2].textContent );
    let headerline3 = document.getElementById('headline3');
    headerline3.textContent = "▶" + " " + allTitles[3].firstChild.nodeValue;
    headerline3.setAttribute("href", allLinks[3].textContent );
    let headerline4 = document.getElementById('headline4');
    headerline4.textContent = "▶" + " " + allTitles[4].firstChild.nodeValue;
    headerline4.setAttribute("href", allLinks[4].textContent );
    let headerline5 = document.getElementById('headline5');
    headerline5.textContent = "▶" + " "  + allTitles[5].firstChild.nodeValue;
    headerline5.setAttribute("href", allLinks[5].textContent );
    let headerline6 = document.getElementById('headline6');
    headerline6.textContent = "▶" + " " + allTitles[6].firstChild.nodeValue;
    headerline6.setAttribute("href", allLinks[6].textContent );


    console.log(allSmallImages);

    let imgKlein1 = document.getElementById('imgKleinArtikel1');
    imgKlein1.src = allSmallImages[0].textContent;
    let titleKlein1 = document.getElementById('titleKleinArtikel1');
    titleKlein1.textContent = allTitles[1].firstChild.nodeValue;
    let descriptionKlein1 = document.getElementById('DescriptionKleinArtikel1');
    descriptionKlein1.textContent = allDescriptions[1].firstChild.nodeValue;
    let imgKlein12 = document.getElementById('imgKleinArtikel12');
    imgKlein12.src = allImages[0].attributes.url.nodeValue;

    let imgKlein2 = document.getElementById('imgKleinArtikel2');
    imgKlein2.src =  allSmallImages[1].textContent;
    let titleKlein2 = document.getElementById('titleKleinArtikel2');
    titleKlein2.textContent = allTitles[2].firstChild.nodeValue;
    let descriptionKlein2 = document.getElementById('DescriptionKleinArtikel2');
    descriptionKlein2.textContent = allDescriptions[2].firstChild.nodeValue;

    let imgKlein3 = document.getElementById('imgKleinArtikel3');
    imgKlein3.src =  allSmallImages[2].textContent;
    let titleKlein3 = document.getElementById('titleKleinArtikel3');
    titleKlein3.textContent = allTitles[3].firstChild.nodeValue;
    let descriptionKlein3 = document.getElementById('DescriptionKleinArtikel3');
    descriptionKlein3.textContent = allDescriptions[3].firstChild.nodeValue;

    let imgKlein4 = document.getElementById('imgKleinArtikel4');
    imgKlein4.src =  allSmallImages[3].textContent;
    let titleKlein4 = document.getElementById('titleKleinArtikel4');
    titleKlein4.textContent = allTitles[4].firstChild.nodeValue;
    let descriptionKlein4 = document.getElementById('DescriptionKleinArtikel4');
    descriptionKlein4.textContent = allDescriptions[4].firstChild.nodeValue;

    let imgKlein5 = document.getElementById('imgKleinArtikel5');
    imgKlein5.src =  allSmallImages[4].textContent;
    let titleKlein5 = document.getElementById('titleKleinArtikel5');
    titleKlein5.textContent = allTitles[5].firstChild.nodeValue;
    let descriptionKlein5 = document.getElementById('DescriptionKleinArtikel5');
    descriptionKlein5.textContent = allDescriptions[5].firstChild.nodeValue;

    let imgKlein6 = document.getElementById('imgKleinArtikel6');
    imgKlein6.src =  allSmallImages[5].textContent;
    let titleKlein6 = document.getElementById('titleKleinArtikel6');
    titleKlein6.textContent = allTitles[6].firstChild.nodeValue;
    let descriptionKlein6 = document.getElementById('DescriptionKleinArtikel6');
    descriptionKlein6.textContent = allDescriptions[6].firstChild.nodeValue;


    let authorGroot1 = document.getElementById('grootArtikelAuthor1');
    authorGroot1.textContent = allAuthors[0].firstChild.nodeValue;
    let titleGroot1 = document.getElementById('grootArtikelTitle1');
    titleGroot1.textContent = allTitles[1].firstChild.nodeValue;
    let imgGroot1 = document.getElementById('grootArtikelImg1');
    imgGroot1.src = allImages[1].attributes.url.nodeValue;
    let descriptionGroot1 = document.getElementById('grootArtikelDescription1');
    descriptionGroot1.textContent = allDescriptions[1].firstChild.nodeValue;

    let authorGroot2 = document.getElementById('grootArtikelAuthor2');
    authorGroot2.textContent = allAuthors[1].firstChild.nodeValue;
    let titleGroot2 = document.getElementById('grootArtikelTitle2');
    titleGroot2.textContent = allTitles[2].firstChild.nodeValue;
    let imgGroot2 = document.getElementById('grootArtikelImg2');
    imgGroot2.src = allImages[2].attributes.url.nodeValue;
    let descriptionGroot2 = document.getElementById('grootArtikelDescription2');
    descriptionGroot2.textContent = allDescriptions[2].firstChild.nodeValue;

    let authorGroot3 = document.getElementById('grootArtikelAuthor3');
    authorGroot3.textContent = allAuthors[2].firstChild.nodeValue;
    let titleGroot3 = document.getElementById('grootArtikelTitle3');
    titleGroot3.textContent = allTitles[3].firstChild.nodeValue;
    let imgGroot3 = document.getElementById('grootArtikelImg3');
    imgGroot3.src = allImages[3].attributes.url.nodeValue;
    let descriptionGroot3 = document.getElementById('grootArtikelDescription3');
    descriptionGroot3.textContent = allDescriptions[3].firstChild.nodeValue;

    let authorGroot4 = document.getElementById('grootArtikelAuthor4');
    authorGroot4.textContent = allAuthors[3].firstChild.nodeValue;
    let titleGroot4 = document.getElementById('grootArtikelTitle4');
    titleGroot4.textContent = allTitles[4].firstChild.nodeValue;
    let imgGroot4 = document.getElementById('grootArtikelImg4');
    imgGroot4.src = allImages[4].attributes.url.nodeValue;
    let descriptionGroot4 = document.getElementById('grootArtikelDescription4');
    descriptionGroot4.textContent = allDescriptions[4].firstChild.nodeValue;

    let authorGroot5 = document.getElementById('grootArtikelAuthor5');
    authorGroot5.textContent = allAuthors[4].firstChild.nodeValue;
    let titleGroot5 = document.getElementById('grootArtikelTitle5');
    titleGroot5.textContent = allTitles[5].firstChild.nodeValue;
    let imgGroot5 = document.getElementById('grootArtikelImg5');
    imgGroot5.src = allImages[5].attributes.url.nodeValue;
    let descriptionGroot5 = document.getElementById('grootArtikelDescription5');
    descriptionGroot5.textContent = allDescriptions[5].firstChild.nodeValue;

    let authorGroot6 = document.getElementById('grootArtikelAuthor6');
    authorGroot6.textContent = allAuthors[5].firstChild.nodeValue;
    let titleGroot6 = document.getElementById('grootArtikelTitle6');
    titleGroot6.textContent = allTitles[6].firstChild.nodeValue;
    let imgGroot6 = document.getElementById('grootArtikelImg6');
    imgGroot6.src = allImages[6].attributes.url.nodeValue;
    let descriptionGroot6 = document.getElementById('grootArtikelDescription6');
    descriptionGroot6.textContent = allDescriptions[6].firstChild.nodeValue;
});
}, 2000);


"use strict";
setTimeout(() => {
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


    let agenda1 = document.getElementById('agendaAcademy1');
    agenda1.textContent = "▶" + " " + allAgendas[1].firstChild.nodeValue + " " + allDays[0].firstChild.nodeValue + " " + allMonths[0].firstChild.nodeValue + " | " + allLocations[0].firstChild.nodeValue + " | " + allDurations[0].firstChild.nodeValue;
    agenda1.setAttribute("href", allAgendaLinks[1].textContent );
    let agenda2 = document.getElementById('agendaAcademy2');
    agenda2.textContent = "▶" + " " + allAgendas[2].firstChild.nodeValue + " " + allDays[1].firstChild.nodeValue + " " + allMonths[1].firstChild.nodeValue + " | " + allLocations[1].firstChild.nodeValue + " | " + allDurations[1].firstChild.nodeValue;
    agenda2.setAttribute("href", allAgendaLinks[2].textContent );
    let agenda3 = document.getElementById('agendaAcademy3');
    agenda3.textContent = "▶" + " " + allAgendas[3].firstChild.nodeValue + " " + allDays[2].firstChild.nodeValue + " " + allMonths[2].firstChild.nodeValue + " | " + allLocations[2].firstChild.nodeValue + " | " + allDurations[2].firstChild.nodeValue;
    agenda3.setAttribute("href", allAgendaLinks[3].textContent );
    let agenda4 = document.getElementById('agendaAcademy4');
    agenda4.textContent = "▶" + " " + allAgendas[4].firstChild.nodeValue + " " + allDays[3].firstChild.nodeValue + " " + allMonths[3].firstChild.nodeValue + " | " + allLocations[3].firstChild.nodeValue + " | " + allDurations[3].firstChild.nodeValue;
    agenda4.setAttribute("href", allAgendaLinks[4].textContent );
    let agenda5 = document.getElementById('agendaAcademy5');
    agenda5.textContent = "▶" + " " + allAgendas[5].firstChild.nodeValue + " " + allDays[4].firstChild.nodeValue + " " + allMonths[4].firstChild.nodeValue + " | " + allLocations[4].firstChild.nodeValue + " | " + allDurations[4].firstChild.nodeValue;
    agenda5.setAttribute("href", allAgendaLinks[5].textContent );
});
}, 2000);


/*
//Copy functionality
buttonHeadlines.onclick = function copyClipboard() {
  var elm = document.getElementById("headlinesContainer");

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copied content to clipboard");

  };
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
document.getElementById('kleinArtikel1').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel2').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel3').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel4').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel5').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel6').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}


document.getElementById('grootArtikel1').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('grootArtikel2').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('grootArtikel3').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('grootArtikel4').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('grootArtikel5').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('grootArtikel6').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('agendaOverlay').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', agendaAcademyContainer.innerHTML);
        console.log('dragstart');
}

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

//buttons

document.getElementById('headlinesButton').onclick = function (event2) {
      headlinesContainer.style.display = "block";
      headlinesOverlay.style.display = "block";
      artikelenGrootContainer.style.display = "none";
      agendaAcademyContainer.style.display = "none";
      artikelenKleinContainer.style.display = "none";
      agendaOverlay.style.display = "none";

      headlinesButtonImg.className = "ButtonImgPressd";
      artikelGrootButtonImg.className = "ButtonImg";
      agendaAcademyButtonImg.className = "ButtonImg";
      artikelKleinButtonImg.className = "ButtonImg";
}

document.getElementById("artikelGrootButton").onclick = function (event3) {
      headlinesContainer.style.display = "none";
      headlinesOverlay.style.display = "none";
      artikelenGrootContainer.style.display = "block";
      agendaAcademyContainer.style.display = "none";
      artikelenKleinContainer.style.display = "none";
      agendaOverlay.style.display = "none";

      headlinesButtonImg.className = "ButtonImg";
      artikelGrootButtonImg.className = "ButtonImgPressd";
      agendaAcademyButtonImg.className = "ButtonImg";
      artikelKleinButtonImg.className = "ButtonImg";
}

document.getElementById('agendaAcademyButton').onclick = function (event4) {
      headlinesContainer.style.display = "none";
      headlinesOverlay.style.display = "none";
      artikelenGrootContainer.style.display = "none";
      agendaAcademyContainer.style.display = "block";
      artikelenKleinContainer.style.display = "none";
      agendaOverlay.style.display = "block";

      headlinesButtonImg.className = "ButtonImg";
      artikelGrootButtonImg.className = "ButtonImg";
      agendaAcademyButtonImg.className = "ButtonImgPressd";
      artikelKleinButtonImg.className = "ButtonImg";
}

document.getElementById('artikelKleinButton').onclick = function (event5) {
      headlinesContainer.style.display = "none";
      headlinesOverlay.style.display = "none";
      artikelenGrootContainer.style.display = "none";
      agendaAcademyContainer.style.display = "none";
      artikelenKleinContainer.style.display = "block";
      agendaOverlay.style.display = "none";

      headlinesButtonImg.className = "ButtonImg";
      artikelGrootButtonImg.className = "ButtonImg";
      agendaAcademyButtonImg.className = "ButtonImg";
      artikelKleinButtonImg.className = "ButtonImgPressd";
}

document.getElementById('grootArtikel1').onmousehover = function () {
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

document.getElementById('grootArtikel2').onmousehover = function () {
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

document.getElementById('grootArtikel3').onmousehover = function hoverColor() {
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

document.getElementById('grootArtikel4').onmousehover = function () {
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

document.getElementById('grootArtikel5').onmousehover = function () {
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

document.getElementById('grootArtikel6').onmousehover = function () {
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

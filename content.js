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

"use strict";

fetch("https://www.frankwatching.com/feed-nieuwsbrief-v2/")
.then(function(respons) {
  return respons.text();
})
.then(function(data) {
  let parser = new DOMParser(),
    xmlDoc = parser.parseFromString(data, 'text/xml');

    let allItems = xmlDoc.getElementsByTagName("item");

    let allImages = xmlDoc.getElementsByTagName("enclosure");
    let allSmallImages = xmlDoc.getElementsByTagName("dc:foto");
    let allTitles = xmlDoc.getElementsByTagName("title");
    let allDescriptions = xmlDoc.getElementsByTagName("description");
    let allAuthors = xmlDoc.getElementsByTagName("author");
    let allLinks = xmlDoc.getElementsByTagName("link");
/*
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
    }else if (allArtikel2.includes("social") || allArtikel2.includes("Social")||allArtikel2.includes("conversational") || allArtikel2.includes("video") || allArtikel2.includes("facebook") || allArtikel2.includes("twitter") || allArtikel2.includes("youtube")) {
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
    }else if (allArtikel3.includes("Adverteren") || allArtikel3.includes("content") || allArtikel3.includes("Content")) {
      document.getElementById('grootArtikel3').style.border= "5px solid #baffc9";
    }else if (allArtikel3.includes("social") || allArtikel3.includes("Social") || allArtikel3.includes("conversational") || allArtikel3.includes("video") || allArtikel3.includes("facebook") || allArtikel3.includes("twitter") || allArtikel3.includes("youtube")){
      document.getElementById('grootArtikel3').style.border= "5px solid #d4ffea";
    }else if (allArtikel3.includes("social") || allArtikel3.includes("Design") || allArtikel3.includes("conversational") || allArtikel3.includes("video") || allArtikel3.includes("facebook") || allArtikel3.includes("twitter") || allArtikel3.includes("youtube")){
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
    }else if (allArtikel4.includes("Adverteren") || allArtikel4.includes(" communicatie") || allArtikel4.includes("Advertising")||allArtikel4.includes("Ecommerce")) {
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
    }else if (allArtikel5.includes("branding") || allArtikel5.includes("communicatie") || allArtikel5.includes("Communicatie")||allArtikel5.includes("Branding")) {
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
    }else if (allArtikel6.includes("design") || allArtikel6.includes("Design") || allArtikel6.includes("UX")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #fbebff";
    }else if (allArtikel6.includes("carrière")) {
      document.getElementById('grootArtikel6').style.border= "5px solid #ffebf6";
    };
*/
    let headerline2adv = document.getElementById('sheadline2b');
    headerline2adv.textContent="\xa0ADV\xa0";
    let headerline5tip = document.getElementById('sheadline5b');
    headerline5tip.textContent="\xa0TIP\xa0";


    let headerline3 = document.getElementById('headline3');
    headerline3.textContent = allTitles[1].firstChild.nodeValue;
    headerline3.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);
    let headerline4 = document.getElementById('headline4');
    headerline4.textContent = allTitles[2].firstChild.nodeValue;
    headerline4.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);
    let headerline6 = document.getElementById('headline6');
    headerline6.textContent = allTitles[3].firstChild.nodeValue;
    headerline6.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);//campagne);
    let headerline7 = document.getElementById('headline7');
    headerline7.textContent = allTitles[4].firstChild.nodeValue;
    headerline7.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c{{^Account.DATE(SHORT)}}%7cheadline%7c`);


    let imgKlein1 = document.getElementById('imgKleinArtikel1');
    imgKlein1.src = allSmallImages[0].textContent;
    imgKlein1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let titleKleinLink1 = document.getElementById('kleinTitleLink1');
    titleKleinLink1.textContent = allTitles[1].firstChild.nodeValue;
    titleKleinLink1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein1 = document.getElementById('DescriptionKleinArtikel1');
    descriptionKlein1.textContent = allDescriptions[1].firstChild.nodeValue;
    descriptionKlein1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein1a = document.getElementById('imgKleinArtikel1a');
    imgKlein1a.src = allImages[0].attributes.url.nodeValue;
    let imgKlein1aLink = document.getElementById('imgKlein1ALink');
    imgKlein1a.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein1Link = document.getElementById('imgKlein1Link');
    imgKlein1a.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein1 = document.getElementById('KleinArtikelCTA1');
    ctaKlein1.textContent = " Lees meer ▸";
    ctaKlein1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein2 = document.getElementById('imgKleinArtikel2');
    imgKlein2.src =  allSmallImages[1].textContent;
    let titleKleinLink2 = document.getElementById('kleinTitleLink2');
    titleKleinLink2.textContent = allTitles[2].firstChild.nodeValue;
    titleKleinLink2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein2 = document.getElementById('DescriptionKleinArtikel2');
    descriptionKlein2.textContent = allDescriptions[2].firstChild.nodeValue;
    descriptionKlein2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein2a = document.getElementById('imgKleinArtikel2a');
    imgKlein2a.src = allImages[1].attributes.url.nodeValue;
    let imgKlein2aLink = document.getElementById('imgKlein2ALink');
    imgKlein2a.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein2Link = document.getElementById('imgKlein2Link');
    imgKlein2a.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein2 = document.getElementById('KleinArtikelCTA2');
    ctaKlein2.textContent = " Lees meer ▸";
    ctaKlein2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein3 = document.getElementById('imgKleinArtikel3');
    imgKlein3.src =  allSmallImages[2].textContent;
    let titleKleinlink3 = document.getElementById('kleinTitleLink3');
    titleKleinlink3.textContent = allTitles[3].firstChild.nodeValue;
    titleKleinlink3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein3 = document.getElementById('DescriptionKleinArtikel3');
    descriptionKlein3.textContent = allDescriptions[3].firstChild.nodeValue;
    descriptionKlein3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein3a = document.getElementById('imgKleinArtikel3a');
    imgKlein3a.src = allImages[2].attributes.url.nodeValue;
    let imgKlein3aLink = document.getElementById('imgKlein3ALink');
    imgKlein3a.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein3Link = document.getElementById('imgKlein3Link');
    imgKlein3a.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein3 = document.getElementById('KleinArtikelCTA3');
    ctaKlein3.textContent = " Lees meer ▸";
    ctaKlein3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein4 = document.getElementById('imgKleinArtikel4');
    imgKlein4.src =  allSmallImages[3].textContent;
    let titleKleinLink4 = document.getElementById('kleinTitleLink4');
    titleKleinLink4.textContent = allTitles[4].firstChild.nodeValue;
    titleKleinLink4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein4 = document.getElementById('DescriptionKleinArtikel4');
    descriptionKlein4.textContent = allDescriptions[4].firstChild.nodeValue;
    descriptionKlein4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein4a = document.getElementById('imgKleinArtikel4a');
    imgKlein4a.src = allImages[3].attributes.url.nodeValue;
    let imgKlein4aLink = document.getElementById('imgKlein4ALink');
    imgKlein4a.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein4Link = document.getElementById('imgKlei4Link');
    imgKlein4a.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein4 = document.getElementById('KleinArtikelCTA4');
    ctaKlein4.textContent = " Lees meer ▸";
    ctaKlein4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein5 = document.getElementById('imgKleinArtikel5');
    imgKlein5.src =  allSmallImages[4].textContent;
    let titleKleinLink5 = document.getElementById('kleinTitleLink5');
    titleKleinLink5.textContent = allTitles[5].firstChild.nodeValue;
    titleKleinLink5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein5 = document.getElementById('DescriptionKleinArtikel5');
    descriptionKlein5.textContent = allDescriptions[5].firstChild.nodeValue;
    descriptionKlein5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein5a = document.getElementById('imgKleinArtikel5a');
    imgKlein5a.src = allImages[4].attributes.url.nodeValue;
    let imgKlein5aLink = document.getElementById('imgKlein5ALink');
    imgKlein5a.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein5Link = document.getElementById('imgKlein5Link');
    imgKlein5a.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein5 = document.getElementById('KleinArtikelCTA5');
    ctaKlein5.textContent = " Lees meer ▸";
    ctaKlein5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein6 = document.getElementById('imgKleinArtikel6');
    imgKlein6.src =  allSmallImages[5].textContent;
    let titleKleinLink6 = document.getElementById('kleinTitleLink6');
    titleKleinLink6.textContent = allTitles[6].firstChild.nodeValue;
    titleKleinLink6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein6 = document.getElementById('DescriptionKleinArtikel6');
    descriptionKlein6.textContent = allDescriptions[6].firstChild.nodeValue;
    descriptionKlein6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein6a = document.getElementById('imgKleinArtikel6a');
    imgKlein6a.src = allImages[5].attributes.url.nodeValue;
    let imgKlein6aLink = document.getElementById('imgKlein6ALink');
    imgKlein6a.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein6Link = document.getElementById('imgKlein6Link');
    imgKlein6a.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein6 = document.getElementById('KleinArtikelCTA6');
    ctaKlein6.textContent = " Lees meer ▸";
    ctaKlein6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein7 = document.getElementById('imgKleinArtikel7');
    imgKlein7.src =  allSmallImages[6].textContent;
    let titleKleinLink7 = document.getElementById('kleinTitleLink7');
    titleKleinLink7.textContent = allTitles[7].firstChild.nodeValue;
    titleKleinLink7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein7 = document.getElementById('DescriptionKleinArtikel7');
    descriptionKlein7.textContent = allDescriptions[7].firstChild.nodeValue;
    descriptionKlein7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein7a = document.getElementById('imgKleinArtikel7a');
    imgKlein7a.src = allImages[6].attributes.url.nodeValue;
    let imgKlein7aLink = document.getElementById('imgKlein7ALink');
    imgKlein7a.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein7Link = document.getElementById('imgKlein7Link');
    imgKlein7a.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein7 = document.getElementById('KleinArtikelCTA7');
    ctaKlein7.textContent = " Lees meer ▸";
    ctaKlein7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein8 = document.getElementById('imgKleinArtikel8');
    imgKlein8.src =  allSmallImages[7].textContent;
    let titleKleinLink8 = document.getElementById('kleinTitleLink8');
    titleKleinLink8.textContent = allTitles[8].firstChild.nodeValue;
    titleKleinLink8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein8 = document.getElementById('DescriptionKleinArtikel8');
    descriptionKlein8.textContent = allDescriptions[8].firstChild.nodeValue;
    descriptionKlein8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein8a = document.getElementById('imgKleinArtikel8a');
    imgKlein8a.src = allImages[7].attributes.url.nodeValue;
    let imgKlein8aLink = document.getElementById('imgKlein8ALink');
    imgKlein8a.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein8Link = document.getElementById('imgKlein8Link');
    imgKlein8a.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein8 = document.getElementById('KleinArtikelCTA8');
    ctaKlein8.textContent = " Lees meer ▸";
    ctaKlein8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein9 = document.getElementById('imgKleinArtikel9');
    imgKlein9.src =  allSmallImages[8].textContent;
    let titleKleinLink9 = document.getElementById('kleinTitleLink9');
    titleKleinLink9.textContent = allTitles[9].firstChild.nodeValue;
    titleKleinLink9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein9 = document.getElementById('DescriptionKleinArtikel9');
    descriptionKlein9.textContent = allDescriptions[9].firstChild.nodeValue;
    descriptionKlein9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein9a = document.getElementById('imgKleinArtikel9a');
    imgKlein9a.src = allImages[8].attributes.url.nodeValue;
    let imgKlein9aLink = document.getElementById('imgKlein9ALink');
    imgKlein1a.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein9Link = document.getElementById('imgKlein9Link');
    imgKlein9a.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein9 = document.getElementById('KleinArtikelCTA9');
    ctaKlein9.textContent = " Lees meer ▸";
    ctaKlein9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein10 = document.getElementById('imgKleinArtikel10');
    imgKlein10.src =  allSmallImages[9].textContent;
    let titleKleinLink10 = document.getElementById('kleinTitleLink10');
    titleKleinLink10.textContent = allTitles[10].firstChild.nodeValue;
    titleKleinLink10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein10 = document.getElementById('DescriptionKleinArtikel10');
    descriptionKlein10.textContent = allDescriptions[10].firstChild.nodeValue;
    descriptionKlein10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein10a = document.getElementById('imgKleinArtikel10a');
    imgKlein10a.src = allImages[9].attributes.url.nodeValue;
    let imgKlein10aLink = document.getElementById('imgKlein10ALink');
    imgKlein10a.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein10Link = document.getElementById('imgKlein10Link');
    imgKlein10a.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein10 = document.getElementById('KleinArtikelCTA10');
    ctaKlein10.textContent = " Lees meer ▸";
    ctaKlein10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein11 = document.getElementById('imgKleinArtikel11');
    imgKlein11.src =  allSmallImages[10].textContent;
    let titleKleinLink11 = document.getElementById('kleinTitleLink11');
    titleKleinLink11.textContent = allTitles[11].firstChild.nodeValue;
    titleKleinLink11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein11 = document.getElementById('DescriptionKleinArtikel11');
    descriptionKlein11.textContent = allDescriptions[11].firstChild.nodeValue;
    descriptionKlein11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein11a = document.getElementById('imgKleinArtikel11a');
    imgKlein11a.src = allImages[10].attributes.url.nodeValue;
    let imgKlein11aLink = document.getElementById('imgKlein11ALink');
    imgKlein11a.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein11Link = document.getElementById('imgKlein11Link');
    imgKlein11a.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein11 = document.getElementById('KleinArtikelCTA11');
    ctaKlein11.textContent = " Lees meer ▸";
    ctaKlein11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein12 = document.getElementById('imgKleinArtikel12');
    imgKlein12.src =  allSmallImages[11].textContent;
    let titleKleinLink12 = document.getElementById('kleinTitleLink12');
    titleKleinLink12.textContent = allTitles[12].firstChild.nodeValue;
    titleKleinLink12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein12 = document.getElementById('DescriptionKleinArtikel12');
    descriptionKlein12.textContent = allDescriptions[12].firstChild.nodeValue;
    descriptionKlein12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein12a = document.getElementById('imgKleinArtikel12a');
    imgKlein12a.src = allImages[11].attributes.url.nodeValue;
    let imgKlein12aLink = document.getElementById('imgKlein12ALink');
    imgKlein12a.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein12Link = document.getElementById('imgKlein12Link');
    imgKlein12a.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein12 = document.getElementById('KleinArtikelCTA12');
    ctaKlein12.textContent = " Lees meer ▸";
    ctaKlein12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein13 = document.getElementById('imgKleinArtikel13');
    imgKlein13.src =  allSmallImages[12].textContent;
    let titleKleinLink13 = document.getElementById('kleinTitleLink13');
    titleKleinLink13.textContent = allTitles[13].firstChild.nodeValue;
    titleKleinLink13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein13 = document.getElementById('DescriptionKleinArtikel13');
    descriptionKlein13.textContent = allDescriptions[13].firstChild.nodeValue;
    descriptionKlein13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein13a = document.getElementById('imgKleinArtikel13a');
    imgKlein13a.src = allImages[12].attributes.url.nodeValue;
    let imgKlein13aLink = document.getElementById('imgKlein13ALink');
    imgKlein13a.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein13Link = document.getElementById('imgKlein13Link');
    imgKlein13a.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein13 = document.getElementById('KleinArtikelCTA13');
    ctaKlein13.textContent = " Lees meer ▸";
    ctaKlein13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein14 = document.getElementById('imgKleinArtikel14');
    imgKlein14.src =  allSmallImages[13].textContent;
    let titleKleinLink14 = document.getElementById('kleinTitleLink14');
    titleKleinLink14.textContent = allTitles[14].firstChild.nodeValue;
    titleKleinLink14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein14 = document.getElementById('DescriptionKleinArtikel14');
    descriptionKlein14.textContent = allDescriptions[14].firstChild.nodeValue;
    descriptionKlein14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein14a = document.getElementById('imgKleinArtikel14a');
    imgKlein14a.src = allImages[13].attributes.url.nodeValue;
    let imgKlein14aLink = document.getElementById('imgKlein14ALink');
    imgKlein14a.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein14Link = document.getElementById('imgKlein14Link');
    imgKlein14a.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein14 = document.getElementById('KleinArtikelCTA14');
    ctaKlein14.textContent = " Lees meer ▸";
    ctaKlein14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein15 = document.getElementById('imgKleinArtikel15');
    imgKlein15.src =  allSmallImages[14].textContent;
    let titleKleinLink15 = document.getElementById('kleinTitleLink15');
    titleKleinLink15.textContent = allTitles[15].firstChild.nodeValue;
    titleKleinLink15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein15 = document.getElementById('DescriptionKleinArtikel15');
    descriptionKlein15.textContent = allDescriptions[15].firstChild.nodeValue;
    descriptionKlein15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein15a = document.getElementById('imgKleinArtikel15a');
    imgKlein15a.src = allImages[14].attributes.url.nodeValue;
    let imgKlein15aLink = document.getElementById('imgKlein15ALink');
    imgKlein15a.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein15Link = document.getElementById('imgKlein15Link');
    imgKlein15a.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein15 = document.getElementById('KleinArtikelCTA15');
    ctaKlein15.textContent = " Lees meer ▸";
    ctaKlein15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein16 = document.getElementById('imgKleinArtikel16');
    imgKlein16.src =  allSmallImages[15].textContent;
    let titleKleinLink16 = document.getElementById('kleinTitleLink16');
    titleKleinLink16.textContent = allTitles[16].firstChild.nodeValue;
    titleKleinLink16.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein16 = document.getElementById('DescriptionKleinArtikel16');
    descriptionKlein16.textContent = allDescriptions[16].firstChild.nodeValue;
    descriptionKlein16.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein16a = document.getElementById('imgKleinArtikel16a');
    imgKlein16a.src = allImages[15].attributes.url.nodeValue;
    let imgKlein16aLink = document.getElementById('imgKlein16ALink');
    imgKlein16a.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein16Link = document.getElementById('imgKlein16Link');
    imgKlein16a.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein16 = document.getElementById('KleinArtikelCTA16');
    ctaKlein16.textContent = " Lees meer ▸";
    ctaKlein16.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein17 = document.getElementById('imgKleinArtikel17');
    imgKlein17.src =  allSmallImages[16].textContent;
    let titleKleinLink17 = document.getElementById('kleinTitleLink17');
    titleKleinLink17.textContent = allTitles[17].firstChild.nodeValue;
    titleKleinLink17.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein17 = document.getElementById('DescriptionKleinArtikel17');
    descriptionKlein17.textContent = allDescriptions[17].firstChild.nodeValue;
    descriptionKlein17.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein17a = document.getElementById('imgKleinArtikel17a');
    imgKlein17a.src = allImages[16].attributes.url.nodeValue;
    let imgKlein17aLink = document.getElementById('imgKlein17ALink');
    imgKlein17a.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein17Link = document.getElementById('imgKlein17Link');
    imgKlein17a.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein17 = document.getElementById('KleinArtikelCTA17');
    ctaKlein17.textContent = " Lees meer ▸";
    ctaKlein17.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein18 = document.getElementById('imgKleinArtikel18');
    imgKlein18.src =  allSmallImages[17].textContent;
    let titleKleinLink18 = document.getElementById('kleinTitleLink18');
    titleKleinLink18.textContent = allTitles[18].firstChild.nodeValue;
    titleKleinLink18.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein18 = document.getElementById('DescriptionKleinArtikel18');
    descriptionKlein18.textContent = allDescriptions[18].firstChild.nodeValue;
    descriptionKlein18.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein18a = document.getElementById('imgKleinArtikel18a');
    imgKlein18a.src = allImages[17].attributes.url.nodeValue;
    let imgKlein18aLink = document.getElementById('imgKlein18ALink');
    imgKlein18a.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein18Link = document.getElementById('imgKlein18Link');
    imgKlein18a.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein18 = document.getElementById('KleinArtikelCTA18');
    ctaKlein18.textContent = " Lees meer ▸";
    ctaKlein18.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein19 = document.getElementById('imgKleinArtikel19');
    imgKlein19.src =  allSmallImages[18].textContent;
    let titleKleinLink19 = document.getElementById('kleinTitleLink19');
    titleKleinLink19.textContent = allTitles[19].firstChild.nodeValue;
    titleKleinLink19.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein19 = document.getElementById('DescriptionKleinArtikel19');
    descriptionKlein19.textContent = allDescriptions[19].firstChild.nodeValue;
    descriptionKlein19.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein19a = document.getElementById('imgKleinArtikel19a');
    imgKlein19a.src = allImages[18].attributes.url.nodeValue;
    let imgKlein19aLink = document.getElementById('imgKlein19ALink');
    imgKlein19a.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein19Link = document.getElementById('imgKlein19Link');
    imgKlein19a.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein19 = document.getElementById('KleinArtikelCTA19');
    ctaKlein19.textContent = " Lees meer ▸";
    ctaKlein19.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein20 = document.getElementById('imgKleinArtikel20');
    imgKlein20.src =  allSmallImages[19].textContent;
    let titleKleinLink20 = document.getElementById('kleinTitleLink20');
    titleKleinLink20.textContent = allTitles[20].firstChild.nodeValue;
    titleKleinLink20.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein20 = document.getElementById('DescriptionKleinArtikel20');
    descriptionKlein20.textContent = allDescriptions[20].firstChild.nodeValue;
    descriptionKlein20.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein20a = document.getElementById('imgKleinArtikel20a');
    imgKlein20a.src = allImages[19].attributes.url.nodeValue;
    let imgKlein20aLink = document.getElementById('imgKlein20ALink');
    imgKlein20a.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein20Link = document.getElementById('imgKlein20Link');
    imgKlein20a.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein20 = document.getElementById('KleinArtikelCTA20');
    ctaKlein20.textContent = " Lees meer ▸";
    ctaKlein20.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein21 = document.getElementById('imgKleinArtikel21');
    imgKlein21.src =  allSmallImages[20].textContent;
    let titleKleinLink21 = document.getElementById('kleinTitleLink21');
    titleKleinLink21.textContent = allTitles[21].firstChild.nodeValue;
    titleKleinLink21.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein21 = document.getElementById('DescriptionKleinArtikel21');
    descriptionKlein21.textContent = allDescriptions[21].firstChild.nodeValue;
    descriptionKlein21.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein21a = document.getElementById('imgKleinArtikel21a');
    imgKlein21a.src = allImages[20].attributes.url.nodeValue;
    let imgKlein21aLink = document.getElementById('imgKlein21ALink');
    imgKlein21a.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein21Link = document.getElementById('imgKlein21Link');
    imgKlein21a.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein21 = document.getElementById('KleinArtikelCTA21');
    ctaKlein21.textContent = " Lees meer ▸";
    ctaKlein21.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein22 = document.getElementById('imgKleinArtikel22');
    imgKlein22.src =  allSmallImages[21].textContent;
    let titleKleinLink22 = document.getElementById('kleinTitleLink22');
    titleKleinLink22.textContent = allTitles[22].firstChild.nodeValue;
    titleKleinLink22.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein22 = document.getElementById('DescriptionKleinArtikel22');
    descriptionKlein22.textContent = allDescriptions[22].firstChild.nodeValue;
    descriptionKlein22.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein22a = document.getElementById('imgKleinArtikel22a');
    imgKlein22a.src = allImages[21].attributes.url.nodeValue;
    let imgKlein22aLink = document.getElementById('imgKlein22ALink');
    imgKlein22a.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein22Link = document.getElementById('imgKlein22Link');
    imgKlein22a.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein22 = document.getElementById('KleinArtikelCTA22');
    ctaKlein22.textContent = " Lees meer ▸";
    ctaKlein22.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein23 = document.getElementById('imgKleinArtikel23');
    imgKlein23.src =  allSmallImages[22].textContent;
    let titleKleinLink23 = document.getElementById('kleinTitleLink23');
    titleKleinLink23.textContent = allTitles[23].firstChild.nodeValue;
    titleKleinLink23.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein23 = document.getElementById('DescriptionKleinArtikel23');
    descriptionKlein23.textContent = allDescriptions[23].firstChild.nodeValue;
    descriptionKlein23.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein23a = document.getElementById('imgKleinArtikel23a');
    imgKlein23a.src = allImages[22].attributes.url.nodeValue;
    let imgKlein23aLink = document.getElementById('imgKlein23ALink');
    imgKlein23a.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein23Link = document.getElementById('imgKlein23Link');
    imgKlein23a.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein23 = document.getElementById('KleinArtikelCTA23');
    ctaKlein23.textContent = " Lees meer ▸";
    ctaKlein23.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein24 = document.getElementById('imgKleinArtikel24');
    imgKlein24.src =  allSmallImages[23].textContent;
    let titleKleinLink24 = document.getElementById('kleinTitleLink24');
    titleKleinLink24.textContent = allTitles[24].firstChild.nodeValue;
    titleKleinLink24.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein24 = document.getElementById('DescriptionKleinArtikel24');
    descriptionKlein24.textContent = allDescriptions[24].firstChild.nodeValue;
    descriptionKlein24.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein24a = document.getElementById('imgKleinArtikel24a');
    imgKlein24a.src = allImages[23].attributes.url.nodeValue;
    let imgKlein24aLink = document.getElementById('imgKlein24ALink');
    imgKlein24a.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein24Link = document.getElementById('imgKlein24Link');
    imgKlein24a.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein24 = document.getElementById('KleinArtikelCTA24');
    ctaKlein24.textContent = " Lees meer ▸";
    ctaKlein24.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    let imgKlein25 = document.getElementById('imgKleinArtikel25');
    imgKlein25.src =  allSmallImages[24].textContent;
    let titleKleinLink25 = document.getElementById('kleinTitleLink25');
    titleKleinLink25.textContent = allTitles[25].firstChild.nodeValue;
    titleKleinLink25.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionKlein25 = document.getElementById('DescriptionKleinArtikel25');
    descriptionKlein25.textContent = allDescriptions[25].firstChild.nodeValue;
    descriptionKlein25.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein25a = document.getElementById('imgKleinArtikel25a');
    imgKlein25a.src = allImages[24].attributes.url.nodeValue;
    let imgKlein25aLink = document.getElementById('imgKlein25ALink');
    imgKlein25a.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgKlein25Link = document.getElementById('imgKlein25Link');
    imgKlein25a.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaKlein25 = document.getElementById('KleinArtikelCTA25');
    ctaKlein25.textContent = " Lees meer ▸";
    ctaKlein25.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //Artekelen Groot

    //let authorGroot1 = document.getElementById('grootArtikelAuthor1');
    //authorGroot1.textContent = allAuthors[0].firstChild.nodeValue;
    let titleGroot1 = document.getElementById('grootArtikelTitle1');
    titleGroot1.textContent = allTitles[1].firstChild.nodeValue;
    titleGroot1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot1 = document.getElementById('grootArtikelImg1');
    imgGroot1.src = allImages[0].attributes.url.nodeValue;
    let imgGroot1Link = document.getElementById('grootArtikelImg1Link');
    imgGroot1Link.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot1 = document.getElementById('grootArtikelDescription1');
    descriptionGroot1.textContent = allDescriptions[1].firstChild.nodeValue;
    descriptionGroot1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot1 = document.getElementById('GrootArtikelCTA1');
    ctaGroot1.innerHTML = " Lees meer ▸";
    ctaGroot1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot2 = document.getElementById('grootArtikelAuthor2');
    //authorGroot2.textContent = allAuthors[1].firstChild.nodeValue;
    let titleGroot2 = document.getElementById('grootArtikelTitle2');
    titleGroot2.textContent = allTitles[2].firstChild.nodeValue;
    titleGroot2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot2 = document.getElementById('grootArtikelImg2');
    imgGroot2.src = allImages[1].attributes.url.nodeValue;
    let imgGroot2Link = document.getElementById('grootArtikelImg2Link');
    imgGroot2Link.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot2 = document.getElementById('grootArtikelDescription2');
    descriptionGroot2.textContent = allDescriptions[2].firstChild.nodeValue;
    descriptionGroot2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot2 = document.getElementById('GrootArtikelCTA2');
    ctaGroot2.textContent = " Lees meer ▸";
    ctaGroot2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot3 = document.getElementById('grootArtikelAuthor3');
    //authorGroot3.textContent = allAuthors[2].firstChild.nodeValue;
    let titleGroot3 = document.getElementById('grootArtikelTitle3');
    titleGroot3.textContent = allTitles[3].firstChild.nodeValue;
    titleGroot3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot3 = document.getElementById('grootArtikelImg3');
    imgGroot3.src = allImages[2].attributes.url.nodeValue;
    let imgGroot3Link = document.getElementById('grootArtikelImg3Link');
    imgGroot3Link.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot3 = document.getElementById('grootArtikelDescription3');
    descriptionGroot3.textContent = allDescriptions[3].firstChild.nodeValue;
    descriptionGroot3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot3 = document.getElementById('GrootArtikelCTA3');
    ctaGroot3.textContent = " Lees meer ▸";
    ctaGroot3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot4 = document.getElementById('grootArtikelAuthor4');
    //authorGroot4.textContent = allAuthors[3].firstChild.nodeValue;
    let titleGroot4 = document.getElementById('grootArtikelTitle4');
    titleGroot4.textContent = allTitles[4].firstChild.nodeValue;
    titleGroot4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot4 = document.getElementById('grootArtikelImg4');
    imgGroot4.src = allImages[3].attributes.url.nodeValue;
    let imgGroot4Link = document.getElementById('grootArtikelImg1Link');
    imgGroot4Link.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot4 = document.getElementById('grootArtikelDescription4');
    descriptionGroot4.textContent = allDescriptions[4].firstChild.nodeValue;
    descriptionGroot4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot4 = document.getElementById('GrootArtikelCTA4');
    ctaGroot4.textContent = " Lees meer ▸";
    ctaGroot4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot5 = document.getElementById('grootArtikelAuthor5');
    //authorGroot5.textContent = allAuthors[4].firstChild.nodeValue;
    let titleGroot5 = document.getElementById('grootArtikelTitle5');
    titleGroot5.textContent = allTitles[5].firstChild.nodeValue;
    titleGroot5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot5 = document.getElementById('grootArtikelImg5');
    imgGroot5.src = allImages[4].attributes.url.nodeValue;
    let imgGroot5Link = document.getElementById('grootArtikelImg5Link');
    imgGroot5Link.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot5 = document.getElementById('grootArtikelDescription5');
    descriptionGroot5.textContent = allDescriptions[5].firstChild.nodeValue;
    descriptionGroot5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot5 = document.getElementById('GrootArtikelCTA5');
    ctaGroot5.textContent = " Lees meer ▸";
    ctaGroot5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);


    //let authorGroot6 = document.getElementById('grootArtikelAuthor6');
    //authorGroot6.textContent = allAuthors[5].firstChild.nodeValue;
    let titleGroot6 = document.getElementById('grootArtikelTitle6');
    titleGroot6.textContent = allTitles[6].firstChild.nodeValue;
    titleGroot6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot6 = document.getElementById('grootArtikelImg6');
    imgGroot6.src = allImages[5].attributes.url.nodeValue;
    let imgGroot6Link = document.getElementById('grootArtikelImg6Link');
    imgGroot6Link.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot6 = document.getElementById('grootArtikelDescription6');
    descriptionGroot6.textContent = allDescriptions[6].firstChild.nodeValue;
    descriptionGroot6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot6 = document.getElementById('GrootArtikelCTA6');
    ctaGroot6.textContent = " Lees meer ▸";
    ctaGroot6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot7 = document.getElementById('grootArtikelAuthor7');
    //authorGroot7.textContent = allAuthors[6].firstChild.nodeValue;
    let titleGroot7 = document.getElementById('grootArtikelTitle7');
    titleGroot7.textContent = allTitles[7].firstChild.nodeValue;
    titleGroot7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot7 = document.getElementById('grootArtikelImg7');
    imgGroot7.src = allImages[6].attributes.url.nodeValue;
    let imgGroot7Link = document.getElementById('grootArtikelImg7Link');
    imgGroot7Link.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot7 = document.getElementById('grootArtikelDescription7');
    descriptionGroot7.textContent = allDescriptions[7].firstChild.nodeValue;
    descriptionGroot7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot7 = document.getElementById('GrootArtikelCTA7');
    ctaGroot7.textContent = " Lees meer ▸";
    ctaGroot7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot8 = document.getElementById('grootArtikelAuthor8');
    //authorGroot8.textContent = allAuthors[7].firstChild.nodeValue;
    let titleGroot8 = document.getElementById('grootArtikelTitle8');
    titleGroot8.textContent = allTitles[8].firstChild.nodeValue;
    titleGroot8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot8 = document.getElementById('grootArtikelImg8');
    imgGroot8.src = allImages[7].attributes.url.nodeValue;
    let imgGroot8Link = document.getElementById('grootArtikelImg8Link');
    imgGroot8Link.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot8 = document.getElementById('grootArtikelDescription8');
    descriptionGroot8.textContent = allDescriptions[8].firstChild.nodeValue;
    descriptionGroot8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot8 = document.getElementById('GrootArtikelCTA8');
    ctaGroot8.textContent = " Lees meer ▸";
    ctaGroot8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot9 = document.getElementById('grootArtikelAuthor9');
    //authorGroot9.textContent = allAuthors[8].firstChild.nodeValue;
    let titleGroot9 = document.getElementById('grootArtikelTitle9');
    titleGroot9.textContent = allTitles[9].firstChild.nodeValue;
    titleGroot9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot9 = document.getElementById('grootArtikelImg9');
    imgGroot9.src = allImages[8].attributes.url.nodeValue;
    let imgGroot9Link = document.getElementById('grootArtikelImg9Link');
    imgGroot9Link.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot9 = document.getElementById('grootArtikelDescription9');
    descriptionGroot9.textContent = allDescriptions[9].firstChild.nodeValue;
    descriptionGroot9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot9 = document.getElementById('GrootArtikelCTA9');
    ctaGroot9.textContent = " Lees meer ▸";
    ctaGroot9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot10 = document.getElementById('grootArtikelAuthor10');
    //authorGroot10.textContent = allAuthors[9].firstChild.nodeValue;
    let titleGroot10 = document.getElementById('grootArtikelTitle10');
    titleGroot10.textContent = allTitles[10].firstChild.nodeValue;
    titleGroot10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot10 = document.getElementById('grootArtikelImg10');
    imgGroot10.src = allImages[9].attributes.url.nodeValue;
    let imgGroot10Link = document.getElementById('grootArtikelImg10Link');
    imgGroot10Link.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot10 = document.getElementById('grootArtikelDescription10');
    descriptionGroot10.textContent = allDescriptions[10].firstChild.nodeValue;
    descriptionGroot10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot10 = document.getElementById('GrootArtikelCTA10');
    ctaGroot10.textContent = " Lees meer ▸";
    ctaGroot10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot11 = document.getElementById('grootArtikelAuthor11');
    //authorGroot11.textContent = allAuthors[10].firstChild.nodeValue;
    let titleGroot11 = document.getElementById('grootArtikelTitle11');
    titleGroot11.textContent = allTitles[11].firstChild.nodeValue;
    titleGroot11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot11 = document.getElementById('grootArtikelImg11');
    imgGroot11.src = allImages[10].attributes.url.nodeValue;
    let imgGroot11Link = document.getElementById('grootArtikelImg11Link');
    imgGroot11Link.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot11 = document.getElementById('grootArtikelDescription11');
    descriptionGroot11.textContent = allDescriptions[11].firstChild.nodeValue;
    descriptionGroot11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot11 = document.getElementById('GrootArtikelCTA11');
    ctaGroot11.textContent = " Lees meer ▸";
    ctaGroot11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot12 = document.getElementById('grootArtikelAuthor12');
    //authorGroot12.textContent = allAuthors[11].firstChild.nodeValue;
    let titleGroot12 = document.getElementById('grootArtikelTitle12');
    titleGroot12.textContent = allTitles[12].firstChild.nodeValue;
    titleGroot12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot12 = document.getElementById('grootArtikelImg12');
    imgGroot12.src = allImages[11].attributes.url.nodeValue;
    let imgGroot12Link = document.getElementById('grootArtikelImg12Link');
    imgGroot12Link.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot12 = document.getElementById('grootArtikelDescription12');
    descriptionGroot12.textContent = allDescriptions[12].firstChild.nodeValue;
    descriptionGroot12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot12 = document.getElementById('GrootArtikelCTA12');
    ctaGroot12.textContent = " Lees meer ▸";
    ctaGroot12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot13 = document.getElementById('grootArtikelAuthor13');
    //authorGroot13.textContent = allAuthors[12].firstChild.nodeValue;
    let titleGroot13 = document.getElementById('grootArtikelTitle13');
    titleGroot13.textContent = allTitles[13].firstChild.nodeValue;
    titleGroot13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot13 = document.getElementById('grootArtikelImg13');
    imgGroot13.src = allImages[12].attributes.url.nodeValue;
    let imgGroot13Link = document.getElementById('grootArtikelImg13Link');
    imgGroot13Link.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot13 = document.getElementById('grootArtikelDescription13');
    descriptionGroot13.textContent = allDescriptions[13].firstChild.nodeValue;
    descriptionGroot13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot13 = document.getElementById('GrootArtikelCTA13');
    ctaGroot13.textContent = " Lees meer ▸";
    ctaGroot13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot14 = document.getElementById('grootArtikelAuthor14');
    //authorGroot14.textContent = allAuthors[13].firstChild.nodeValue;
    let titleGroot14 = document.getElementById('grootArtikelTitle14');
    titleGroot14.textContent = allTitles[14].firstChild.nodeValue;
    titleGroot14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot14 = document.getElementById('grootArtikelImg14');
    imgGroot14.src = allImages[13].attributes.url.nodeValue;
    let imgGroot14Link = document.getElementById('grootArtikelImg14Link');
    imgGroot14Link.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot14 = document.getElementById('grootArtikelDescription14');
    descriptionGroot14.textContent = allDescriptions[14].firstChild.nodeValue;
    descriptionGroot14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot14 = document.getElementById('GrootArtikelCTA14');
    ctaGroot14.textContent = " Lees meer ▸";
    ctaGroot14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot15 = document.getElementById('grootArtikelAuthor15');
    //authorGroot15.textContent = allAuthors[14].firstChild.nodeValue;
    let titleGroot15 = document.getElementById('grootArtikelTitle15');
    titleGroot15.textContent = allTitles[15].firstChild.nodeValue;
    titleGroot15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot15 = document.getElementById('grootArtikelImg15');
    imgGroot15.src = allImages[14].attributes.url.nodeValue;
    let imgGroot15Link = document.getElementById('grootArtikelImg15Link');
    imgGroot15Link.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot15 = document.getElementById('grootArtikelDescription15');
    descriptionGroot15.textContent = allDescriptions[15].firstChild.nodeValue;
    descriptionGroot15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot15 = document.getElementById('GrootArtikelCTA15');
    ctaGroot15.textContent = " Lees meer ▸";
    ctaGroot15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot16 = document.getElementById('grootArtikelAuthor16');
    //authorGroot16.textContent = allAuthors[15].firstChild.nodeValue;
    let titleGroot16 = document.getElementById('grootArtikelTitle16');
    titleGroot16.textContent = allTitles[16].firstChild.nodeValue;
    titleGroot16.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot16 = document.getElementById('grootArtikelImg16');
    imgGroot16.src = allImages[15].attributes.url.nodeValue;
    let imgGroot16Link = document.getElementById('grootArtikelImg16Link');
    imgGroot16Link.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot16 = document.getElementById('grootArtikelDescription16');
    descriptionGroot16.textContent = allDescriptions[16].firstChild.nodeValue;
    descriptionGroot16.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot16 = document.getElementById('GrootArtikelCTA16');
    ctaGroot16.textContent = " Lees meer ▸";
    ctaGroot16.setAttribute("href", allLinks[16].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot17 = document.getElementById('grootArtikelAuthor17');
    //authorGroot17.textContent = allAuthors[16].firstChild.nodeValue;
    let titleGroot17 = document.getElementById('grootArtikelTitle17');
    titleGroot17.textContent = allTitles[17].firstChild.nodeValue;
    titleGroot17.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot17 = document.getElementById('grootArtikelImg17');
    imgGroot17.src = allImages[16].attributes.url.nodeValue;
    let imgGroot17Link = document.getElementById('grootArtikelImg17Link');
    imgGroot17Link.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot17 = document.getElementById('grootArtikelDescription17');
    descriptionGroot17.textContent = allDescriptions[17].firstChild.nodeValue;
    descriptionGroot17.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot17 = document.getElementById('GrootArtikelCTA17');
    ctaGroot17.textContent = " Lees meer ▸";
    ctaGroot17.setAttribute("href", allLinks[17].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot18 = document.getElementById('grootArtikelAuthor18');
    //authorGroot18.textContent = allAuthors[17].firstChild.nodeValue;
    let titleGroot18 = document.getElementById('grootArtikelTitle18');
    titleGroot18.textContent = allTitles[18].firstChild.nodeValue;
    titleGroot18.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot18 = document.getElementById('grootArtikelImg18');
    imgGroot18.src = allImages[17].attributes.url.nodeValue;
    let imgGroot18Link = document.getElementById('grootArtikelImg18Link');
    imgGroot18Link.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot18 = document.getElementById('grootArtikelDescription18');
    descriptionGroot18.textContent = allDescriptions[18].firstChild.nodeValue;
    descriptionGroot18.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot18 = document.getElementById('GrootArtikelCTA18');
    ctaGroot18.textContent = " Lees meer ▸";
    ctaGroot18.setAttribute("href", allLinks[18].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot19 = document.getElementById('grootArtikelAuthor19');
    //authorGroot19.textContent = allAuthors[18].firstChild.nodeValue;
    let titleGroot19 = document.getElementById('grootArtikelTitle19');
    titleGroot19.textContent = allTitles[19].firstChild.nodeValue;
    titleGroot19.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot19 = document.getElementById('grootArtikelImg19');
    imgGroot19.src = allImages[18].attributes.url.nodeValue;
    let imgGroot19Link = document.getElementById('grootArtikelImg19Link');
    imgGroot19Link.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot19 = document.getElementById('grootArtikelDescription19');
    descriptionGroot19.textContent = allDescriptions[19].firstChild.nodeValue;
    descriptionGroot19.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot19 = document.getElementById('GrootArtikelCTA19');
    ctaGroot19.textContent = " Lees meer ▸";
    ctaGroot19.setAttribute("href", allLinks[19].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot20 = document.getElementById('grootArtikelAuthor20');
    //authorGroot20.textContent = allAuthors[19].firstChild.nodeValue;
    let titleGroot20 = document.getElementById('grootArtikelTitle20');
    titleGroot20.textContent = allTitles[20].firstChild.nodeValue;
    titleGroot20.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot20 = document.getElementById('grootArtikelImg20');
    imgGroot20.src = allImages[19].attributes.url.nodeValue;
    let imgGroot20Link = document.getElementById('grootArtikelImg20Link');
    imgGroot20Link.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot20 = document.getElementById('grootArtikelDescription20');
    descriptionGroot20.textContent = allDescriptions[20].firstChild.nodeValue;
    descriptionGroot20.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot20 = document.getElementById('GrootArtikelCTA20');
    ctaGroot20.textContent = " Lees meer ▸";
    ctaGroot20.setAttribute("href", allLinks[20].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot21 = document.getElementById('grootArtikelAuthor21');
    //authorGroot21.textContent = allAuthors[20].firstChild.nodeValue;
    let titleGroot21 = document.getElementById('grootArtikelTitle21');
    titleGroot21.textContent = allTitles[21].firstChild.nodeValue;
    titleGroot21.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot21 = document.getElementById('grootArtikelImg21');
    imgGroot21.src = allImages[20].attributes.url.nodeValue;
    let imgGroot21Link = document.getElementById('grootArtikelImg21Link');
    imgGroot21Link.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot21 = document.getElementById('grootArtikelDescription21');
    descriptionGroot21.textContent = allDescriptions[21].firstChild.nodeValue;
    descriptionGroot21.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot21 = document.getElementById('GrootArtikelCTA21');
    ctaGroot21.textContent = " Lees meer ▸";
    ctaGroot21.setAttribute("href", allLinks[21].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot22 = document.getElementById('grootArtikelAuthor22');
    //authorGroot22.textContent = allAuthors[21].firstChild.nodeValue;
    let titleGroot22 = document.getElementById('grootArtikelTitle22');
    titleGroot22.textContent = allTitles[22].firstChild.nodeValue;
    titleGroot22.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot22 = document.getElementById('grootArtikelImg22');
    imgGroot22.src = allImages[21].attributes.url.nodeValue;
    let imgGroot22Link = document.getElementById('grootArtikelImg22Link');
    imgGroot22Link.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot22 = document.getElementById('grootArtikelDescription22');
    descriptionGroot22.textContent = allDescriptions[22].firstChild.nodeValue;
    descriptionGroot22.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot22 = document.getElementById('GrootArtikelCTA22');
    ctaGroot22.textContent = " Lees meer ▸";
    ctaGroot22.setAttribute("href", allLinks[22].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot23 = document.getElementById('grootArtikelAuthor23');
    //authorGroot23.textContent = allAuthors[22].firstChild.nodeValue;
    let titleGroot23 = document.getElementById('grootArtikelTitle23');
    titleGroot23.textContent = allTitles[23].firstChild.nodeValue;
    titleGroot23.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot23 = document.getElementById('grootArtikelImg23');
    imgGroot23.src = allImages[22].attributes.url.nodeValue;
    let imgGroot23Link = document.getElementById('grootArtikelImg23Link');
    imgGroot23Link.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot23 = document.getElementById('grootArtikelDescription23');
    descriptionGroot23.textContent = allDescriptions[23].firstChild.nodeValue;
    descriptionGroot23.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot23 = document.getElementById('GrootArtikelCTA23');
    ctaGroot23.textContent = " Lees meer ▸";
    ctaGroot23.setAttribute("href", allLinks[23].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot24 = document.getElementById('grootArtikelAuthor24');
    //authorGroot24.textContent = allAuthors[224].firstChild.nodeValue;
    let titleGroot24 = document.getElementById('grootArtikelTitle24');
    titleGroot24.textContent = allTitles[24].firstChild.nodeValue;
    titleGroot24.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot24 = document.getElementById('grootArtikelImg24');
    imgGroot24.src = allImages[23].attributes.url.nodeValue;
    let imgGroot24Link = document.getElementById('grootArtikelImg24Link');
    imgGroot24Link.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot24 = document.getElementById('grootArtikelDescription24');
    descriptionGroot24.textContent = allDescriptions[24].firstChild.nodeValue;
    descriptionGroot24.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot24 = document.getElementById('GrootArtikelCTA24');
    ctaGroot24.textContent = " Lees meer ▸";
    ctaGroot24.setAttribute("href", allLinks[24].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);

    //let authorGroot25 = document.getElementById('grootArtikelAuthor25');
    //authorGroot25.textContent = allAuthors[24].firstChild.nodeValue;
    let titleGroot25 = document.getElementById('grootArtikelTitle25');
    titleGroot25.textContent = allTitles[25].firstChild.nodeValue;
    titleGroot25.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let imgGroot25 = document.getElementById('grootArtikelImg25');
    imgGroot25.src = allImages[24].attributes.url.nodeValue;
    let imgGroot25Link = document.getElementById('grootArtikelImg25Link');
    imgGroot25Link.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let descriptionGroot25 = document.getElementById('grootArtikelDescription25');
    descriptionGroot25.textContent = allDescriptions[25].firstChild.nodeValue;
    descriptionGroot25.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
    let ctaGroot25 = document.getElementById('GrootArtikelCTA25');
    ctaGroot25.textContent = " Lees meer ▸";
    ctaGroot25.setAttribute("href", allLinks[25].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c{{^Account.DATE(SHORT)}}%7cartikel%7c`);
});



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

//var actIframe= document.getElementsByClassName("tox-edit-area").firstChild;
//var iframeText = actIframe.contentWindow.document.getElementsById("tinymce").firstChild;
//iframeText.textContent="Test";

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
    console.log("Dragstart");
//}
//document.getElementById('kleinArtikel1').ondrop = function (event) {
  //console.log("drop");
  //let kleinTD1 = actIframe.getElementsByClassName("tableDivider1");
  //kleinTD1.setAttribute("style", "mso-hide: all;")
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
document.getElementById('kleinArtikel7').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel8').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel9').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel10').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel11').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel12').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel13').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel14').ondragstart = function (event) {
  event

    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel15').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel16').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel17').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel18').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel19').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel20').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel21').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel22').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel23').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel24').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}
document.getElementById('kleinArtikel25').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log('dragstart');
}


document.getElementById('artikelGroot1D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot2D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot3D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot4D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot5D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot6D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot7D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot8D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot9D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot10D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot11D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot12D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot13D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot14D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot15D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot16D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot17D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot18D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot19D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot20D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot21D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot22D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot23D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot24D').ondragstart = function (event) {
      event
        .dataTransfer
        .setData('text/html', event.target.innerHTML);
        console.log('dragstart');
}

document.getElementById('artikelGroot25D').ondragstart = function (event) {
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
   
  var description = item.querySelector("description").innerHTML;
  description = description.replace("<![CDATA[", "").replace("]]>", "");
  
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
   div.id = 'vacature'+index;
   div.draggable = 'true';

   console.log(dagWeek);
  var daginzet = '<tr><td id="vacatureTD' + index + 'bMob" class="vacaturetd_mobile" style="display: none;"><a  style="display: none;" id="vacatureImgLink' + index + '" class="vacatureImgLink_mob" href="'+vac_link+'"><img id="imgVacatureArtikel'+index+'mob" class="imgVacature_mobile" style="display: none;" src="'+enclosure_img+'" /></a></td></tr> ';
   if(dagWeek != 'dag') { 
    daginzet = '';
  }

   div.innerHTML = `
   <table id="vacatureTable${index}" style="margin: 0px 0px 20px;">
       <tbody>
           <tr>
               <td class="vacTableDivider1" width="30%" height="150px" style="vertical-align: top;"><a></a><a id="vacatureImgLink${index}" class="vacatureImgLink" href="${vac_link}"><img id="imgVacatureArtikel${index}" class="imgVacature" style="display: block; height: auto; width: 150px;" src="${enclosure_img}" /></a></td>
               <td class="vacTableDivider2" height="150px" width="auto" style="vertical-align: top;">
                   <table>
                       <tbody>
                           ${daginzet}
                           <tr>
                               <td id="vacatureTD${index}bA" class="vacatureTDbA"><a id="metaVacature${index}"  href="${vac_link}" style="display: block; font-size: 12px; font-weight: bold; font-family: Arial; color: #019000;" class="metaVacature"><span id="vacatureMeta${index}a" class="metaVacatureCompany" style="font-size: 12px; font-weight: bold; font-family: Arial; color: #019000;">${vac_org_naam}</span><span id="vacatureMeta${index}b" class="metaVacature" style="font-size: 12px; font-weight: bold; font-family: Arial; color: #666666;"> • ${vac_standplaats} • ${vac_uur}</span></a></td>
                           </tr>
                           <tr>
                               <td id="vacatureTD${index}bB" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: Arial; line-height: 1; color: #1a1a1a; text-decoration: none; padding: 0px 0px 8px 0px;"><a id="vacatureLink${index}title" class="titleVacature" style="top: 0px; display: block; font-size: 18px; font-weight: bold; font-family: Arial; line-height: 1; color: #1a1a1a; text-decoration: none; padding: 8px 0px 0px 0px;" href="${vac_link}">${item.querySelector("title").innerHTML}</a></td>
                           </tr>
                           <tr>
                               <td id="vacatureTD${index}bC" style="display: block; font-size: 16px; line-height: 22px; font-weight: regular; font-family: Arial; color: #666666; text-decoration: none; padding: 10x 0px 15px 0px;" class="vacatureTDbC"><a id="vacatureLink${index}description" class="DescriptionVacature" style="display: block; font-size: 16px; font-weight: regular; font-family: Arial; color: #666666; text-decoration: none; padding: 0x 0px 0px 0px;" href="${vac_link}">${description}</a></td>
                           </tr>
                       </tbody>
                   </table>
               </td>
           </tr>
       </tbody>
   </table> `;
   vacatureContainerContent.appendChild(div);

   document.getElementById('vacature' + index).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
         console.log(event.target.innerHTML);
     }
}



};
getAllContent();

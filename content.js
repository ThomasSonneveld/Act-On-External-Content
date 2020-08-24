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

    let headerline2adv = document.getElementById('sheadline2b');
    headerline2adv.textContent=" ""ADV"" ";
    let headerline5tip = document.getElementById('sheadline5b');
    headerline5tip.textContent=" ""TIP"" ";


    let headerline1 = document.getElementById('headline1');
    headerline1.textContent = allTitles[1].firstChild.nodeValue;
    headerline1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cheadline%7C`);
    let headerline2 = document.getElementById('headline2');
    headerline2.textContent = allTitles[2].firstChild.nodeValue;
    headerline2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=adv&utm_content={{^Account.DATE(SHORT)}}%7Cheadlineadv%7C`);
    let headerline3 = document.getElementById('headline3');
    headerline3.textContent = allTitles[3].firstChild.nodeValue;
    headerline3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cheadline%7C`);
    let headerline4 = document.getElementById('headline4');
    headerline4.textContent = allTitles[4].firstChild.nodeValue;
    headerline4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cheadline%7C`);
    let headerline5 = document.getElementById('headline5');
    headerline5.textContent = allTitles[5].firstChild.nodeValue;
    headerline5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=adv&utm_content={{^Account.DATE(SHORT)}}%7Cheadlineadv%7C`);
    let headerline6 = document.getElementById('headline6');
    headerline6.textContent = allTitles[6].firstChild.nodeValue;
    headerline6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cheadline%7C`);//campagne);



    let imgKlein1 = document.getElementById('imgKleinArtikel1');
    imgKlein1.src = allSmallImages[0].textContent;
    imgKlein1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let titleKleinLink1 = document.getElementById('kleinTitleLink1');
    titleKleinLink1.textContent = allTitles[1].firstChild.nodeValue;
    titleKleinLink1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein1 = document.getElementById('DescriptionKleinArtikel1');
    descriptionKlein1.textContent = allDescriptions[1].firstChild.nodeValue;
    let imgKlein1a = document.getElementById('imgKleinArtikel1a');
    imgKlein1a.src = allImages[0].attributes.url.nodeValue;
    imgKlein1a.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let ctaKlein1 = document.getElementById('KleinArtikelCTA1');
    ctaKlein1.textContent = " Lees meer ▸";
    ctaKlein1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein2 = document.getElementById('imgKleinArtikel2');
    imgKlein2.src =  allSmallImages[1].textContent;
    let titleKleinLink2 = document.getElementById('kleinTitleLink2');
    titleKleinLink2.textContent = allTitles[2].firstChild.nodeValue;
    titleKleinLink2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=advertorial&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein2 = document.getElementById('DescriptionKleinArtikel2');
    descriptionKlein2.textContent = allDescriptions[2].firstChild.nodeValue;
    let imgKlein2a = document.getElementById('imgKleinArtikel2a');
    imgKlein2a.src = allImages[1].attributes.url.nodeValue;
    let ctaKlein2 = document.getElementById('KleinArtikelCTA2');
    ctaKlein2.textContent = " Lees meer ▸";
    ctaKlein2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=advertorial&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein3 = document.getElementById('imgKleinArtikel3');
    imgKlein3.src =  allSmallImages[2].textContent;
    let titleKleinlink3 = document.getElementById('kleinTitleLink3');
    titleKleinlink3.textContent = allTitles[3].firstChild.nodeValue;
    titleKleinlink3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein3 = document.getElementById('DescriptionKleinArtikel3');
    descriptionKlein3.textContent = allDescriptions[3].firstChild.nodeValue;
    let imgKlein3a = document.getElementById('imgKleinArtikel3a');
    imgKlein3a.src = allImages[2].attributes.url.nodeValue;
    let ctaKlein3 = document.getElementById('KleinArtikelCTA3');
    ctaKlein3.textContent = " Lees meer ▸";
    ctaKlein3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein4 = document.getElementById('imgKleinArtikel4');
    imgKlein4.src =  allSmallImages[3].textContent;
    let titleKleinLink4 = document.getElementById('kleinTitleLink4');
    titleKleinLink4.textContent = allTitles[4].firstChild.nodeValue;
    titleKleinLink4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein4 = document.getElementById('DescriptionKleinArtikel4');
    descriptionKlein4.textContent = allDescriptions[4].firstChild.nodeValue;
    let imgKlein4a = document.getElementById('imgKleinArtikel4a');
    imgKlein4a.src = allImages[3].attributes.url.nodeValue;
    let ctaKlein4 = document.getElementById('KleinArtikelCTA4');
    ctaKlein4.textContent = " Lees meer ▸";
    ctaKlein4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein5 = document.getElementById('imgKleinArtikel5');
    imgKlein5.src =  allSmallImages[4].textContent;
    let titleKleinLink5 = document.getElementById('kleinTitleLink5');
    titleKleinLink5.textContent = allTitles[5].firstChild.nodeValue;
    titleKleinLink5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=advertorial&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein5 = document.getElementById('DescriptionKleinArtikel5');
    descriptionKlein5.textContent = allDescriptions[5].firstChild.nodeValue;
    let imgKlein5a = document.getElementById('imgKleinArtikel5a');
    imgKlein5a.src = allImages[4].attributes.url.nodeValue;
    let ctaKlein5 = document.getElementById('KleinArtikelCTA5');
    ctaKlein5.textContent = " Lees meer ▸";
    ctaKlein5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=advertorial&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein6 = document.getElementById('imgKleinArtikel6');
    imgKlein6.src =  allSmallImages[5].textContent;
    let titleKleinLink6 = document.getElementById('kleinTitleLink6');
    titleKleinLink6.textContent = allTitles[6].firstChild.nodeValue;
    titleKleinLink6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein6 = document.getElementById('DescriptionKleinArtikel6');
    descriptionKlein6.textContent = allDescriptions[6].firstChild.nodeValue;
    let imgKlein6a = document.getElementById('imgKleinArtikel6a');
    imgKlein6a.src = allImages[5].attributes.url.nodeValue;
    let ctaKlein6 = document.getElementById('KleinArtikelCTA6');
    ctaKlein6.textContent = " Lees meer ▸";
    ctaKlein6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein7 = document.getElementById('imgKleinArtikel7');
    imgKlein7.src =  allSmallImages[6].textContent;
    let titleKleinLink7 = document.getElementById('kleinTitleLink7');
    titleKleinLink7.textContent = allTitles[7].firstChild.nodeValue;
    titleKleinLink7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein7 = document.getElementById('DescriptionKleinArtikel7');
    descriptionKlein7.textContent = allDescriptions[7].firstChild.nodeValue;
    let imgKlein7a = document.getElementById('imgKleinArtikel7a');
    imgKlein7a.src = allImages[6].attributes.url.nodeValue;
    let ctaKlein7 = document.getElementById('KleinArtikelCTA7');
    ctaKlein7.textContent = " Lees meer ▸";
    ctaKlein7.setAttribute("href", allLinks[7].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein8 = document.getElementById('imgKleinArtikel8');
    imgKlein8.src =  allSmallImages[7].textContent;
    let titleKleinLink8 = document.getElementById('kleinTitleLink8');
    titleKleinLink8.textContent = allTitles[8].firstChild.nodeValue;
    titleKleinLink8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein8 = document.getElementById('DescriptionKleinArtikel8');
    descriptionKlein8.textContent = allDescriptions[8].firstChild.nodeValue;
    let imgKlein8a = document.getElementById('imgKleinArtikel8a');
    imgKlein8a.src = allImages[7].attributes.url.nodeValue;
    let ctaKlein8 = document.getElementById('KleinArtikelCTA8');
    ctaKlein8.textContent = " Lees meer ▸";
    ctaKlein8.setAttribute("href", allLinks[8].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein9 = document.getElementById('imgKleinArtikel9');
    imgKlein9.src =  allSmallImages[8].textContent;
    let titleKleinLink9 = document.getElementById('kleinTitleLink9');
    titleKleinLink9.textContent = allTitles[9].firstChild.nodeValue;
    titleKleinLink9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein9 = document.getElementById('DescriptionKleinArtikel9');
    descriptionKlein9.textContent = allDescriptions[9].firstChild.nodeValue;
    let imgKlein9a = document.getElementById('imgKleinArtikel9a');
    imgKlein9a.src = allImages[8].attributes.url.nodeValue;
    let ctaKlein9 = document.getElementById('KleinArtikelCTA9');
    ctaKlein9.textContent = " Lees meer ▸";
    ctaKlein9.setAttribute("href", allLinks[9].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein10 = document.getElementById('imgKleinArtikel10');
    imgKlein10.src =  allSmallImages[9].textContent;
    let titleKleinLink10 = document.getElementById('kleinTitleLink10');
    titleKleinLink10.textContent = allTitles[10].firstChild.nodeValue;
    titleKleinLink10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein10 = document.getElementById('DescriptionKleinArtikel10');
    descriptionKlein10.textContent = allDescriptions[10].firstChild.nodeValue;
    let imgKlein10a = document.getElementById('imgKleinArtikel10a');
    imgKlein10a.src = allImages[9].attributes.url.nodeValue;
    let ctaKlein10 = document.getElementById('KleinArtikelCTA10');
    ctaKlein10.textContent = " Lees meer ▸";
    ctaKlein10.setAttribute("href", allLinks[10].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein11 = document.getElementById('imgKleinArtikel11');
    imgKlein11.src =  allSmallImages[10].textContent;
    let titleKleinLink11 = document.getElementById('kleinTitleLink11');
    titleKleinLink11.textContent = allTitles[11].firstChild.nodeValue;
    titleKleinLink11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein11 = document.getElementById('DescriptionKleinArtikel11');
    descriptionKlein11.textContent = allDescriptions[11].firstChild.nodeValue;
    let imgKlein11a = document.getElementById('imgKleinArtikel11a');
    imgKlein11a.src = allImages[10].attributes.url.nodeValue;
    let ctaKlein11 = document.getElementById('KleinArtikelCTA11');
    ctaKlein11.textContent = " Lees meer ▸";
    ctaKlein11.setAttribute("href", allLinks[11].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein12 = document.getElementById('imgKleinArtikel12');
    imgKlein12.src =  allSmallImages[11].textContent;
    let titleKleinLink12 = document.getElementById('kleinTitleLink12');
    titleKleinLink12.textContent = allTitles[12].firstChild.nodeValue;
    titleKleinLink12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein12 = document.getElementById('DescriptionKleinArtikel12');
    descriptionKlein12.textContent = allDescriptions[12].firstChild.nodeValue;
    let imgKlein12a = document.getElementById('imgKleinArtikel12a');
    imgKlein12a.src = allImages[11].attributes.url.nodeValue;
    let ctaKlein12 = document.getElementById('KleinArtikelCTA12');
    ctaKlein12.textContent = " Lees meer ▸";
    ctaKlein12.setAttribute("href", allLinks[12].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein13 = document.getElementById('imgKleinArtikel13');
    imgKlein13.src =  allSmallImages[12].textContent;
    let titleKleinLink13 = document.getElementById('kleinTitleLink13');
    titleKleinLink13.textContent = allTitles[13].firstChild.nodeValue;
    titleKleinLink13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein13 = document.getElementById('DescriptionKleinArtikel13');
    descriptionKlein13.textContent = allDescriptions[13].firstChild.nodeValue;
    let imgKlein13a = document.getElementById('imgKleinArtikel13a');
    imgKlein13a.src = allImages[12].attributes.url.nodeValue;
    let ctaKlein13 = document.getElementById('KleinArtikelCTA13');
    ctaKlein13.textContent = " Lees meer ▸";
    ctaKlein13.setAttribute("href", allLinks[13].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein14 = document.getElementById('imgKleinArtikel14');
    imgKlein14.src =  allSmallImages[13].textContent;
    let titleKleinLink14 = document.getElementById('kleinTitleLink14');
    titleKleinLink14.textContent = allTitles[14].firstChild.nodeValue;
    titleKleinLink14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein14 = document.getElementById('DescriptionKleinArtikel14');
    descriptionKlein14.textContent = allDescriptions[14].firstChild.nodeValue;
    let imgKlein14a = document.getElementById('imgKleinArtikel14a');
    imgKlein14a.src = allImages[13].attributes.url.nodeValue;
    let ctaKlein14 = document.getElementById('KleinArtikelCTA14');
    ctaKlein14.textContent = " Lees meer ▸";
    ctaKlein14.setAttribute("href", allLinks[14].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    let imgKlein15 = document.getElementById('imgKleinArtikel15');
    imgKlein15.src =  allSmallImages[14].textContent;
    let titleKleinLink15 = document.getElementById('kleinTitleLink15');
    titleKleinLink15.textContent = allTitles[15].firstChild.nodeValue;
    titleKleinLink15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
    let descriptionKlein15 = document.getElementById('DescriptionKleinArtikel15');
    descriptionKlein15.textContent = allDescriptions[15].firstChild.nodeValue;
    let imgKlein15a = document.getElementById('imgKleinArtikel15a');
    imgKlein15a.src = allImages[14].attributes.url.nodeValue;
    let ctaKlein15 = document.getElementById('KleinArtikelCTA15');
    ctaKlein15.textContent = " Lees meer ▸";
    ctaKlein15.setAttribute("href", allLinks[15].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);


    //Artekelen Groot

    //let authorGroot1 = document.getElementById('grootArtikelAuthor1');
    //authorGroot1.textContent = allAuthors[0].firstChild.nodeValue;
    let titleGroot1 = document.getElementById('grootArtikelTitle1');
    titleGroot1.textContent = allTitles[1].firstChild.nodeValue;
    let imgGroot1 = document.getElementById('grootArtikelImg1');
    imgGroot1.src = allImages[0].attributes.url.nodeValue;
    let descriptionGroot1 = document.getElementById('grootArtikelDescription1');
    descriptionGroot1.textContent = allDescriptions[1].firstChild.nodeValue;
    let ctaGroot1 = document.getElementById('GrootArtikelCTA1');
    ctaGroot1.innerHTML = "Lees meer ▸";
    ctaGroot1.setAttribute("href", allLinks[1].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    //let authorGroot2 = document.getElementById('grootArtikelAuthor2');
    //authorGroot2.textContent = allAuthors[1].firstChild.nodeValue;
    let titleGroot2 = document.getElementById('grootArtikelTitle2');
    titleGroot2.textContent = allTitles[2].firstChild.nodeValue;
    let imgGroot2 = document.getElementById('grootArtikelImg2');
    imgGroot2.src = allImages[1].attributes.url.nodeValue;
    let descriptionGroot2 = document.getElementById('grootArtikelDescription2');
    descriptionGroot2.textContent = allDescriptions[2].firstChild.nodeValue;
    let ctaGroot2 = document.getElementById('GrootArtikelCTA2');
    ctaGroot2.textContent = "Lees meer ▸";
    ctaGroot2.setAttribute("href", allLinks[2].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    //let authorGroot3 = document.getElementById('grootArtikelAuthor3');
    //authorGroot3.textContent = allAuthors[2].firstChild.nodeValue;
    let titleGroot3 = document.getElementById('grootArtikelTitle3');
    titleGroot3.textContent = allTitles[3].firstChild.nodeValue;
    let imgGroot3 = document.getElementById('grootArtikelImg3');
    imgGroot3.src = allImages[2].attributes.url.nodeValue;
    let descriptionGroot3 = document.getElementById('grootArtikelDescription3');
    descriptionGroot3.textContent = allDescriptions[3].firstChild.nodeValue;
    let ctaGroot3 = document.getElementById('GrootArtikelCTA3');
    ctaGroot3.textContent = "Lees meer ▸";
    ctaGroot3.setAttribute("href", allLinks[3].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    //let authorGroot4 = document.getElementById('grootArtikelAuthor4');
    //authorGroot4.textContent = allAuthors[3].firstChild.nodeValue;
    let titleGroot4 = document.getElementById('grootArtikelTitle4');
    titleGroot4.textContent = allTitles[4].firstChild.nodeValue;
    let imgGroot4 = document.getElementById('grootArtikelImg4');
    imgGroot4.src = allImages[3].attributes.url.nodeValue;
    let descriptionGroot4 = document.getElementById('grootArtikelDescription4');
    descriptionGroot4.textContent = allDescriptions[4].firstChild.nodeValue;
    let ctaGroot4 = document.getElementById('GrootArtikelCTA4');
    ctaGroot4.textContent = "Lees meer ▸";
    ctaGroot4.setAttribute("href", allLinks[4].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);

    //let authorGroot5 = document.getElementById('grootArtikelAuthor5');
    //authorGroot5.textContent = allAuthors[4].firstChild.nodeValue;
    let titleGroot5 = document.getElementById('grootArtikelTitle5');
    titleGroot5.textContent = allTitles[5].firstChild.nodeValue;
    let imgGroot5 = document.getElementById('grootArtikelImg5');
    imgGroot5.src = allImages[4].attributes.url.nodeValue;
    let descriptionGroot5 = document.getElementById('grootArtikelDescription5');
    descriptionGroot5.textContent = allDescriptions[5].firstChild.nodeValue;
    let ctaGroot5 = document.getElementById('GrootArtikelCTA5');
    ctaGroot5.textContent = "Lees meer ▸";
    ctaGroot5.setAttribute("href", allLinks[5].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);


    //let authorGroot6 = document.getElementById('grootArtikelAuthor6');
    //authorGroot6.textContent = allAuthors[5].firstChild.nodeValue;
    let titleGroot6 = document.getElementById('grootArtikelTitle6');
    titleGroot6.textContent = allTitles[6].firstChild.nodeValue;
    let imgGroot6 = document.getElementById('grootArtikelImg6');
    imgGroot6.src = allImages[5].attributes.url.nodeValue;
    let descriptionGroot6 = document.getElementById('grootArtikelDescription6');
    descriptionGroot6.textContent = allDescriptions[6].firstChild.nodeValue;
    let ctaGroot6 = document.getElementById('GrootArtikelCTA6');
    ctaGroot6.textContent = "Lees meer ▸";
    ctaGroot6.setAttribute("href", allLinks[6].textContent + `&utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content={{^Account.DATE(SHORT)}}%7Cartikel%7C`);
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


    let agenda1a = document.getElementById('saa1a');
    let agenda1b = document.getElementById('saa1b');
    let agendaLink1 = document.getElementById('agendaAcademy1');
    agenda1a.textContent = allAgendas[1].firstChild.nodeValue;
    agenda1b.textContent = " " + allDays[0].firstChild.nodeValue + " " + allMonths[0].firstChild.nodeValue + " | " + allLocations[0].firstChild.nodeValue + " | " + allDurations[0].firstChild.nodeValue;
    agendaLink1.setAttribute("href", allAgendaLinks[1].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=FWYToverzichtacademy&utm_content{{^Account.DATE(SHORT)}}%7Cagenda%7C`);//campaign

    let agenda2a = document.getElementById('saa2a');
    let agenda2b = document.getElementById('saa2b');
    let agendaLink2 = document.getElementById('agendaAcademy2');
    agenda2a.textContent = allAgendas[2].firstChild.nodeValue;
    agenda2b.textContent = " " + allDays[1].firstChild.nodeValue + " " + allMonths[1].firstChild.nodeValue + " | " + allLocations[1].firstChild.nodeValue + " | " + allDurations[1].firstChild.nodeValue;
    agendaLink2.setAttribute("href", allAgendaLinks[2].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=FWYToverzichtacademy&utm_content{{^Account.DATE(SHORT)}}%7Cagenda%7C`);

    let agenda3a = document.getElementById('saa3a');
    let agenda3b = document.getElementById('saa3b');
    let agendaLink3 = document.getElementById('agendaAcademy3');
    agenda3a.textContent = allAgendas[3].firstChild.nodeValue;
    agenda3b.textContent = " " + allDays[2].firstChild.nodeValue + " " + allMonths[2].firstChild.nodeValue + " | " + allLocations[2].firstChild.nodeValue + " | " + allDurations[2].firstChild.nodeValue;
    agendaLink3.setAttribute("href", allAgendaLinks[3].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=FWYToverzichtacademy&utm_content{{^Account.DATE(SHORT)}}%7Cagenda%7C`);

    let agenda4a = document.getElementById('saa4a');
    let agenda4b = document.getElementById('saa4b');
    let agendaLink4 = document.getElementById('agendaAcademy4');
    agenda4a.textContent = allAgendas[4].firstChild.nodeValue;
    agenda4b.textContent = " " + allDays[3].firstChild.nodeValue + " " + allMonths[3].firstChild.nodeValue + " | " + allLocations[3].firstChild.nodeValue + " | " + allDurations[3].firstChild.nodeValue;
    agendaLink4.setAttribute("href", allAgendaLinks[4].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=FWYToverzichtacademy&utm_content{{^Account.DATE(SHORT)}}%7Cagenda%7C`);

    let agenda5a = document.getElementById('saa5a');
    let agenda5b = document.getElementById('saa5b');
    let agendaLink5 = document.getElementById('agendaAcademy5');
    agenda5a.textContent = allAgendas[5].firstChild.nodeValue;
    agenda5b.textContent = " " + allDays[4].firstChild.nodeValue + " " + allMonths[4].firstChild.nodeValue + " | " + allLocations[4].firstChild.nodeValue + " | " + allDurations[4].firstChild.nodeValue;
    agendaLink5.setAttribute("href", allAgendaLinks[5].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=FWYToverzichtacademy&utm_content{{^Account.DATE(SHORT)}}%7Cagenda%7C`);

    let agenda6a = document.getElementById('saa6a');
    let agenda6b = document.getElementById('saa6b');
    let agendaLink6 = document.getElementById('agendaAcademy6');
    agenda6a.textContent = allAgendas[6].firstChild.nodeValue;
    agenda6b.textContent = " " + allDays[5].firstChild.nodeValue + " " + allMonths[5].firstChild.nodeValue + " | " + allLocations[5].firstChild.nodeValue + " | " + allDurations[5].firstChild.nodeValue;
    agendaLink6.setAttribute("href", allAgendaLinks[6].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=FWYToverzichtacademy&utm_content{{^Account.DATE(SHORT)}}%7Cagenda%7C`);

    let agenda7a = document.getElementById('saa7a');
    let agenda7b = document.getElementById('saa7b');
    let agendaLink7 = document.getElementById('agendaAcademy7');
    agenda7a.textContent = allAgendas[7].firstChild.nodeValue;
    agenda7b.textContent = " " + allDays[6].firstChild.nodeValue + " " + allMonths[6].firstChild.nodeValue + " | " + allLocations[6].firstChild.nodeValue + " | " + allDurations[6].firstChild.nodeValue;
    agendaLink7.setAttribute("href", allAgendaLinks[7].textContent +`?utm_source=nieuwsbrief-fw-${dagWeek}&utm_medium=email&utm_campaign=FWYToverzichtacademy&utm_content{{^Account.DATE(SHORT)}}%7Cagenda%7C`);

});
}, 2000);


"use strict";
setTimeout(() => {
fetch("https://www.frankwatching.com/feed/?post_type=vacature")
.then(function(respons) {
  return respons.text();
})
.then(function(data) {
  let parser = new DOMParser(),
    xmlDoc = parser.parseFromString(data, 'text/xml');

    let allVacatureImages = xmlDoc.getElementsByTagName("enclosure");
    let allVacatureTitles = xmlDoc.getElementsByTagName("title");
    let allVacatureDescriptions = xmlDoc.getElementsByTagName("description");
    let allPoster = xmlDoc.getElementsByTagName("postmeta:vac_org_naam");
    let allDuur = xmlDoc.getElementsByTagName("postmeta:vac_uur");
    let allVacatureLocations = xmlDoc.getElementsByTagName("postmeta:vac_standplaats");
    let allVacatureLinks = xmlDoc.getElementsByTagName("link");

    let vacLinkTD1a = document.getElementById("vacTableDividerlink1a");
    vacLinkTD1a.href = allVacatureLinks[1].textContent
    let vacLinkTD1b = document.getElementById("vacTableDividerlink1b");
    vacLinkTD1b.href = allVacatureLinks[1].textContent
    let imgVacature1 = document.getElementById("imgVacatureArtikel1");
    imgVacature1.src = allVacatureImages[0].attributes[0].nodeValue;
    let metaVacature1 = document.getElementById("metaVacature1");
    let vacatureMeta1a = document.getElementById("vacatureMeta1a");
    let vacatureMeta1b = document.getElementById("vacatureMeta1b");
    vacatureMeta1a.textContent = allPoster[0].textContent;
    vacatureMeta1b.textContent = " • " + allVacatureLocations[0].textContent + " • " + allDuur[0].textContent;
    let titleVacature1 = document.getElementById("titleVacature1");
    titleVacature1.textContent = allVacatureTitles[1].textContent;
    let descriptionVacature1 = document.getElementById("DescriptionVacature1");
    descriptionVacature1.textContent = allVacatureDescriptions[1].textContent;

    let imgVacature2 = document.getElementById("imgVacatureArtikel2");
    imgVacature2.src = allVacatureImages[1].attributes[0].nodeValue;
    let metaVacature2 = document.getElementById("metaVacature2")
    let vacatureMeta2a = document.getElementById("vacatureMeta2a");
    let vacatureMeta2b = document.getElementById("vacatureMeta2b");
    vacatureMeta2a.textContent = allPoster[1].textContent;
    vacatureMeta2b.textContent = " • " + allVacatureLocations[1].textContent + " • " + allDuur[1].textContent;
    let titleVacature2 = document.getElementById("titleVacature2");
    titleVacature2.textContent = allVacatureTitles[2].textContent;
    let descriptionVacature2 = document.getElementById("DescriptionVacature2");
    descriptionVacature2.textContent = allVacatureDescriptions[2].textContent;

    let imgVacature3 = document.getElementById("imgVacatureArtikel3");
    imgVacature3.src = allVacatureImages[2].attributes[0].nodeValue;
    let metaVacature3 = document.getElementById("metaVacature3")
    let vacatureMeta3a = document.getElementById("vacatureMeta3a");
    let vacatureMeta3b = document.getElementById("vacatureMeta3b");
    vacatureMeta3a.textContent = allPoster[2].textContent;
    vacatureMeta3b.textContent = " • " + allVacatureLocations[2].textContent + " • " + allDuur[2].textContent;
    let titleVacature3 = document.getElementById("titleVacature3");
    titleVacature3.textContent = allVacatureTitles[3].textContent;
    let descriptionVacature3 = document.getElementById("DescriptionVacature3");
    descriptionVacature3.textContent = allVacatureDescriptions[3].textContent;

    let imgVacature4 = document.getElementById("imgVacatureArtikel4");
    imgVacature4.src = allVacatureImages[3].attributes[0].nodeValue;
    let metaVacature4 = document.getElementById("metaVacature4")
    let vacatureMeta4a = document.getElementById("vacatureMeta4a");
    let vacatureMeta4b = document.getElementById("vacatureMeta4b");
    vacatureMeta4a.textContent = allPoster[3].textContent;
    vacatureMeta4b.textContent = " • " + allVacatureLocations[3].textContent + " • " + allDuur[3].textContent;
    let titleVacature4 = document.getElementById("titleVacature4");
    titleVacature4.textContent = allVacatureTitles[4].textContent;
    let descriptionVacature4 = document.getElementById("DescriptionVacature4");
    descriptionVacature4.textContent = allVacatureDescriptions[4].textContent;

    let imgVacature5 = document.getElementById("imgVacatureArtikel5");
    imgVacature5.src = allVacatureImages[4].attributes[0].nodeValue;
    let metaVacature5 = document.getElementById("metaVacature5")
    let vacatureMeta5a = document.getElementById("vacatureMeta5a");
    let vacatureMeta5b = document.getElementById("vacatureMeta5b");
    vacatureMeta5a.textContent = allPoster[4].textContent;
    vacatureMeta5b.textContent = " • " + allVacatureLocations[4].textContent + " • " + allDuur[4].textContent;
    let titleVacature5 = document.getElementById("titleVacature5");
    titleVacature5.textContent = allVacatureTitles[5].textContent;
    let descriptionVacature5 = document.getElementById("DescriptionVacature5");
    descriptionVacature5.textContent = allVacatureDescriptions[5].textContent;

    let imgVacature6 = document.getElementById("imgVacatureArtikel6");
    imgVacature6.src = allVacatureImages[5].attributes[0].nodeValue;
    let metaVacature6 = document.getElementById("metaVacature6")
    let vacatureMeta6a = document.getElementById("vacatureMeta6a");
    let vacatureMeta6b = document.getElementById("vacatureMeta6b");
    vacatureMeta6a.textContent = allPoster[5].textContent;
    vacatureMeta6b.textContent = " • " + allVacatureLocations[5].textContent + " • " + allDuur[5].textContent;
    let titleVacature6 = document.getElementById("titleVacature6");
    titleVacature6.textContent = allVacatureTitles[6].textContent;
    let descriptionVacature6 = document.getElementById("DescriptionVacature6");
    descriptionVacature6.textContent = allVacatureDescriptions[6].textContent;

    let imgVacature7 = document.getElementById("imgVacatureArtikel7");
    imgVacature7.src = allVacatureImages[6].attributes[0].nodeValue;
    let metaVacature7 = document.getElementById("metaVacature7")
    let vacatureMeta7a = document.getElementById("vacatureMeta7a");
    let vacatureMeta7b = document.getElementById("vacatureMeta7b");
    vacatureMeta7a.textContent = allPoster[6].textContent;
    vacatureMeta7b.textContent = " • " + allVacatureLocations[6].textContent + " • " + allDuur[6].textContent;
    let titleVacature7 = document.getElementById("titleVacature7");
    titleVacature7.textContent = allVacatureTitles[7].textContent;
    let descriptionVacature7 = document.getElementById("DescriptionVacature7");
    descriptionVacature7.textContent = allVacatureDescriptions[7].textContent;

    let imgVacature8 = document.getElementById("imgVacatureArtikel8");
    imgVacature8.src = allVacatureImages[7].attributes[0].nodeValue;
    let metaVacature8 = document.getElementById("metaVacature8")
    let vacatureMeta8a = document.getElementById("vacatureMeta8a");
    let vacatureMeta8b = document.getElementById("vacatureMeta8b");
    vacatureMeta8a.textContent = allPoster[7].textContent;
    vacatureMeta8b.textContent = " • " + allVacatureLocations[7].textContent + " • " + allDuur[7].textContent;
    let titleVacature8 = document.getElementById("titleVacature8");
    titleVacature8.textContent = allVacatureTitles[8].textContent;
    let descriptionVacature8 = document.getElementById("DescriptionVacature8");
    descriptionVacature8.textContent = allVacatureDescriptions[8].textContent;

    let imgVacature9 = document.getElementById("imgVacatureArtikel9");
    imgVacature9.src = allVacatureImages[8].attributes[0].nodeValue;
    let metaVacature9 = document.getElementById("metaVacature9")
    let vacatureMeta9a = document.getElementById("vacatureMeta9a");
    let vacatureMeta9b = document.getElementById("vacatureMeta9b");
    vacatureMeta9a.textContent = allPoster[8].textContent;
    vacatureMeta9b.textContent = " • " + allVacatureLocations[8].textContent + " • " + allDuur[8].textContent;
    let titleVacature9 = document.getElementById("titleVacature9");
    titleVacature9.textContent = allVacatureTitles[9].textContent;
    let descriptionVacature9 = document.getElementById("DescriptionVacature9");
    descriptionVacature9.textContent = allVacatureDescriptions[9].textContent;

    let imgVacature10 = document.getElementById("imgVacatureArtikel10");
    imgVacature10.src = allVacatureImages[9].attributes[0].nodeValue;
    let metaVacature10 = document.getElementById("metaVacature10")
    let vacatureMeta10a = document.getElementById("vacatureMeta10a");
    let vacatureMeta10b = document.getElementById("vacatureMeta10b");
    vacatureMeta10a.textContent = allPoster[9].textContent;
    vacatureMeta10b.textContent = " • " + allVacatureLocations[9].textContent + " • " + allDuur[9].textContent;
    let titleVacature10 = document.getElementById("titleVacature10");
    titleVacature10.textContent = allVacatureTitles[10].textContent;
    let descriptionVacature10 = document.getElementById("DescriptionVacature10");
    descriptionVacature10.textContent = allVacatureDescriptions[10].textContent;

    let imgVacature11 = document.getElementById("imgVacatureArtikel11");
    imgVacature11.src = allVacatureImages[10].attributes[0].nodeValue;
    let metaVacature11 = document.getElementById("metaVacature11")
    let vacatureMeta11a = document.getElementById("vacatureMeta11a");
    let vacatureMeta11b = document.getElementById("vacatureMeta11b");
    vacatureMeta11a.textContent = allPoster[10].textContent;
    vacatureMeta11b.textContent = " • " + allVacatureLocations[10].textContent + " • " + allDuur[10].textContent;
    let titleVacature11 = document.getElementById("titleVacature11");
    titleVacature11.textContent = allVacatureTitles[11].textContent;
    let descriptionVacature11 = document.getElementById("DescriptionVacature11");
    descriptionVacature11.textContent = allVacatureDescriptions[11].textContent;

    let imgVacature12 = document.getElementById("imgVacatureArtikel12");
    imgVacature12.src = allVacatureImages[11].attributes[0].nodeValue;
    let metaVacature12 = document.getElementById("metaVacature12")
    let vacatureMeta12a = document.getElementById("vacatureMeta12a");
    let vacatureMeta12b = document.getElementById("vacatureMeta12b");
    vacatureMeta12a.textContent = allPoster[11].textContent;
    vacatureMeta12b.textContent = " • " + allVacatureLocations[11].textContent + " • " + allDuur[11].textContent;
    let titleVacature12 = document.getElementById("titleVacature12");
    titleVacature12.textContent = allVacatureTitles[12].textContent;
    let descriptionVacature12 = document.getElementById("DescriptionVacature12");
    descriptionVacature12.textContent = allVacatureDescriptions[12].textContent;

    let imgVacature13 = document.getElementById("imgVacatureArtikel13");
    imgVacature13.src = allVacatureImages[12].attributes[0].nodeValue;
    let metaVacature13 = document.getElementById("metaVacature13")
    let vacatureMeta13a = document.getElementById("vacatureMeta13a");
    let vacatureMeta13b = document.getElementById("vacatureMeta13b");
    vacatureMeta13a.textContent = allPoster[12].textContent;
    vacatureMeta13b.textContent = " • " + allVacatureLocations[12].textContent + " • " + allDuur[12].textContent;
    let titleVacature13 = document.getElementById("titleVacature13");
    titleVacature13.textContent = allVacatureTitles[13].textContent;
    let descriptionVacature13 = document.getElementById("DescriptionVacature13");
    descriptionVacature13.textContent = allVacatureDescriptions[13].textContent;

    let imgVacature14 = document.getElementById("imgVacatureArtikel14");
    imgVacature14.src = allVacatureImages[13].attributes[0].nodeValue;
    let metaVacature14 = document.getElementById("metaVacature14")
    let vacatureMeta14a = document.getElementById("vacatureMeta14a");
    let vacatureMeta14b = document.getElementById("vacatureMeta14b");
    vacatureMeta14a.textContent = allPoster[13].textContent;
    vacatureMeta14b.textContent = " • " + allVacatureLocations[13].textContent + " • " + allDuur[13].textContent;
    let titleVacature14 = document.getElementById("titleVacature14");
    titleVacature14.textContent = allVacatureTitles[14].textContent;
    let descriptionVacature14 = document.getElementById("DescriptionVacature14");
    descriptionVacature14.textContent = allVacatureDescriptions[14].textContent;

    let imgVacature15 = document.getElementById("imgVacatureArtikel15");
    imgVacature15.src = allVacatureImages[14].attributes[0].nodeValue;
    let metaVacature15 = document.getElementById("metaVacature15")
    let vacatureMeta15a = document.getElementById("vacatureMeta15a");
    let vacatureMeta15b = document.getElementById("vacatureMeta15b");
    vacatureMeta15a.textContent = allPoster[14].textContent;
    vacatureMeta15b.textContent = " • " + allVacatureLocations[14].textContent + " • " + allDuur[14].textContent;
    let titleVacature15 = document.getElementById("titleVacature15");
    titleVacature15.textContent = allVacatureTitles[15].textContent;
    let descriptionVacature15 = document.getElementById("DescriptionVacature15");
    descriptionVacature15.textContent = allVacatureDescriptions[15].textContent;

    let imgVacature16 = document.getElementById("imgVacatureArtikel16");
    imgVacature16.src = allVacatureImages[15].attributes[0].nodeValue;
    let metaVacature16 = document.getElementById("metaVacature16")
    let vacatureMeta16a = document.getElementById("vacatureMeta16a");
    let vacatureMeta16b = document.getElementById("vacatureMeta16b");
    vacatureMeta16a.textContent = allPoster[15].textContent;
    vacatureMeta16b.textContent = " • " + allVacatureLocations[15].textContent + " • " + allDuur[15].textContent;
    let titleVacature16 = document.getElementById("titleVacature16");
    titleVacature16.textContent = allVacatureTitles[16].textContent;
    let descriptionVacature16 = document.getElementById("DescriptionVacature16");
    descriptionVacature16.textContent = allVacatureDescriptions[16].textContent;

    let imgVacature17 = document.getElementById("imgVacatureArtikel17");
    imgVacature17.src = allVacatureImages[16].attributes[0].nodeValue;
    let metaVacature17 = document.getElementById("metaVacature17")
    let vacatureMeta17a = document.getElementById("vacatureMeta17a");
    let vacatureMeta17b = document.getElementById("vacatureMeta17b");
    vacatureMeta17a.textContent = allPoster[16].textContent;
    vacatureMeta17b.textContent = " • " + allVacatureLocations[16].textContent + " • " + allDuur[15].textContent;
    let titleVacature17 = document.getElementById("titleVacature17");
    titleVacature17.textContent = allVacatureTitles[17].textContent;
    let descriptionVacature17 = document.getElementById("DescriptionVacature17");
    descriptionVacature17.textContent = allVacatureDescriptions[17].textContent;

    let imgVacature18 = document.getElementById("imgVacatureArtikel18");
    imgVacature18.src = allVacatureImages[17].attributes[0].nodeValue;
    let metaVacature18 = document.getElementById("metaVacature18")
    let vacatureMeta18a = document.getElementById("vacatureMeta18a");
    let vacatureMeta18b = document.getElementById("vacatureMeta18b");
    vacatureMeta18a.textContent = allPoster[17].textContent;
    vacatureMeta18b.textContent = " • " + allVacatureLocations[17].textContent + " • " + allDuur[15].textContent;
    let titleVacature18 = document.getElementById("titleVacature18");
    titleVacature18.textContent = allVacatureTitles[18].textContent;
    let descriptionVacature18 = document.getElementById("DescriptionVacature18");
    descriptionVacature18.textContent = allVacatureDescriptions[18].textContent;

    let imgVacature19 = document.getElementById("imgVacatureArtikel19");
    imgVacature19.src = allVacatureImages[18].attributes[0].nodeValue;
    let metaVacature19 = document.getElementById("metaVacature19")
    let vacatureMeta19a = document.getElementById("vacatureMeta19a");
    let vacatureMeta19b = document.getElementById("vacatureMeta19b");
    vacatureMeta19a.textContent = allPoster[18].textContent;
    vacatureMeta19b.textContent = " • " + allVacatureLocations[18].textContent + " • " + allDuur[15].textContent;
    let titleVacature19 = document.getElementById("titleVacature19");
    titleVacature19.textContent = allVacatureTitles[19].textContent;
    let descriptionVacature19 = document.getElementById("DescriptionVacature19");
    descriptionVacature19.textContent = allVacatureDescriptions[19].textContent;
/* NOG NIET IN FEED
    let imgVacature20 = document.getElementById("imgVacatureArtikel20");
    imgVacature20.src = allVacatureImages[19].attributes[0].nodeValue;
    let metaVacature20 = document.getElementById("metaVacature20")
    let vacatureMeta20a = document.getElementById("vacatureMeta20a");
    let vacatureMeta20b = document.getElementById("vacatureMeta20b");
    vacatureMeta20a.textContent = allPoster[19].textContent;
    vacatureMeta20b.textContent = " • " + allVacatureLocations[19].textContent + " • " + allDuur[15].textContent;
    let titleVacature20 = document.getElementById("titleVacature20");
    titleVacature20.textContent = allVacatureTitles[20].textContent;
    let descriptionVacature20 = document.getElementById("DescriptionVacature20");
    descriptionVacature20.textContent = allVacatureDescriptions[20].textContent;

    let imgVacature21 = document.getElementById("imgVacatureArtikel21");
    imgVacature21.src = allVacatureImages[20].attributes[0].nodeValue;
    let metaVacature21 = document.getElementById("metaVacature21")
    let vacatureMeta21a = document.getElementById("vacatureMeta21a");
    let vacatureMeta21b = document.getElementById("vacatureMeta21b");
    vacatureMeta21a.textContent = allPoster[20].textContent;
    vacatureMeta21b.textContent = " • " + allVacatureLocations[20].textContent + " • " + allDuur[15].textContent;
    let titleVacature21 = document.getElementById("titleVacature21");
    titleVacature21.textContent = allVacatureTitles[21].textContent;
    let descriptionVacature21 = document.getElementById("DescriptionVacature21");
    descriptionVacature21.textContent = allVacatureDescriptions[21].textContent;

    let imgVacature22 = document.getElementById("imgVacatureArtikel22");
    imgVacature22.src = allVacatureImages[21].attributes[0].nodeValue;
    let metaVacature22 = document.getElementById("metaVacature22")
    let vacatureMeta22a = document.getElementById("vacatureMeta22a");
    let vacatureMeta22b = document.getElementById("vacatureMeta22b");
    vacatureMeta22a.textContent = allPoster[21].textContent;
    vacatureMeta22b.textContent = " • " + allVacatureLocations[21].textContent + " • " + allDuur[15].textContent;
    let titleVacature22 = document.getElementById("titleVacature22");
    titleVacature22.textContent = allVacatureTitles[22].textContent;
    let descriptionVacature22 = document.getElementById("DescriptionVacature22");
    descriptionVacature22.textContent = allVacatureDescriptions[22].textContent;

    let imgVacature23 = document.getElementById("imgVacatureArtikel23");
    imgVacature23.src = allVacatureImages[22].attributes[0].nodeValue;
    let metaVacature23 = document.getElementById("metaVacature23")
    let vacatureMeta23a = document.getElementById("vacatureMeta23a");
    let vacatureMeta23b = document.getElementById("vacatureMeta23b");
    vacatureMeta23a.textContent = allPoster[22].textContent;
    vacatureMeta23b.textContent = " • " + allVacatureLocations[22].textContent + " • " + allDuur[15].textContent;
    let titleVacature23 = document.getElementById("titleVacature23");
    titleVacature23.textContent = allVacatureTitles[23].textContent;
    let descriptionVacature23 = document.getElementById("DescriptionVacature23");
    descriptionVacature23.textContent = allVacatureDescriptions[23].textContent;

    let imgVacature24 = document.getElementById("imgVacatureArtikel24");
    imgVacature24.src = allVacatureImages[23].attributes[0].nodeValue;
    let metaVacature24 = document.getElementById("metaVacature24")
    let vacatureMeta24a = document.getElementById("vacatureMeta24a");
    let vacatureMeta24b = document.getElementById("vacatureMeta24b");
    vacatureMeta24a.textContent = allPoster[23].textContent;
    vacatureMeta24b.textContent = " • " + allVacatureLocations[23].textContent + " • " + allDuur[15].textContent;
    let titleVacature24 = document.getElementById("titleVacature24");
    titleVacature24.textContent = allVacatureTitles[24].textContent;
    let descriptionVacature24 = document.getElementById("DescriptionVacature24");
    descriptionVacature24.textContent = allVacatureDescriptions[24].textContent;

    let imgVacature25 = document.getElementById("imgVacatureArtikel25");
    imgVacature25.src = allVacatureImages[24].attributes[0].nodeValue;
    let metaVacature25 = document.getElementById("metaVacature25")
    let vacatureMeta25a = document.getElementById("vacatureMeta25a");
    let vacatureMeta25b = document.getElementById("vacatureMeta25b");
    vacatureMeta25a.textContent = allPoster[24].textContent;
    vacatureMeta25b.textContent = " • " + allVacatureLocations[24].textContent + " • " + allDuur[15].textContent;
    let titleVacature25 = document.getElementById("titleVacature25");
    titleVacature25.textContent = allVacatureTitles[25].textContent;
    let descriptionVacature25 = document.getElementById("DescriptionVacature25");
    descriptionVacature25.textContent = allVacatureDescriptions[25].textContent;
    */
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
document.getElementById('kleinArtikel5').ondragstart = function (event) {
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

document.getElementById('vacature1').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature2').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature3').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature4').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature5').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature6').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature7').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature8').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature9').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature9').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature10').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature11').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
}

document.getElementById('vacature12').ondragstart = function (event) {
  event
    .dataTransfer
    .setData('text/html', event.target.innerHTML);
    console.log(event.target.innerHTML);
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

};
getAllContent();

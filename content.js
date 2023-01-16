// ##  Set local version
let versionid = "3.0.1";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + mm + dd;

var sendDate = today;

var defaultDate = new Date();
var dd = String(defaultDate.getDate()).padStart(2, '0');
var mm = String(defaultDate.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = defaultDate.getFullYear();

defaultDate = dd +"-"+ mm +"-"+ yyyy;

sendDateFormInput.setAttribute("value", defaultDate);

sendDateFormInput.addEventListener("change", getAllContent);

let styleHeadlines = document.getElementsByClassName('headline');
for (var i = 0; i < styleHeadlines.length; i++) {
  styleHeadlines[i].style.fontsize = "12px";
}
let allLinks;

window.onload = function () {
    var input = document.getElementById('dagWeekSwitch');
    var inputList = document.getElementById('switchListSwitch');

    sendDate = document.getElementById("sendDateSelector").value;
    console.log(sendDate);

    function check() {
        dagWeek = input.checked ? "wekelijks" : "dagelijks";
        document.getElementById('dagWeekText').innerHTML = dagWeek;

        listSort = inputList.checked ? "popularity" : "normal";
        //document.getElementById('dagWeekText').innerHTML = listSort;
    }
    input.onchange = check;
    check();
}

// console.log(dagWeek);

function getAllContent(){

sendDate = document.getElementById("sendDateSelector").value;
sendDate = sendDate.replace("-","");
sendDate = sendDate.replace("-","");

// ## buttons

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
  vacatureButtonImg.className = "ButtonImg";
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
  vacatureButtonImg.className = "ButtonImg";
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
  vacatureButtonImg.className = "ButtonImg";
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
  vacatureButtonImg.className = "ButtonImg";
}

document.getElementById('vacatureButton').onclick = function (event6) {
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
  vacatureButtonImg.className = "ButtonImgPressd";
}

// ## LOAD HEADLINES - 8 uur artikel
var futureHeadlineText = 'Voorbeeld';
var futureHeadlineLink = 'https://voorbeeld.frankwatching.com/?';
let headerline1 = document.getElementById('headline1');
headerline1.textContent = futureHeadlineText;
headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);

"use strict";
fetch("https://www.frankwatching.com/feed-nieuwsbrief-v2/?poststatus=future-publish")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {

  const items = data.querySelectorAll("item");

  setTimeout(function() {
    for (var i = 0, len = 4; i < len; i++) {
      headlineFutureItems(items[i]);
    }
  }, 100);

});

function headlineFutureItems(item, index) {
  var json = xml2json(item);
  var jsonpoststatus = (json["poststatus"]);
  var jsonpubdate = (json["pubdate"]);
  var jsontitle = (json["title"]);
  var jsonlink = (json["link"]);

  var today = new Date();
  var tomorrow = new Date();
  var hour = today.getHours();
  if ( hour > 9 )  tomorrow.setDate(tomorrow.getDate() + 1);
  if( today.getDay() == 5 ) tomorrow.setDate(tomorrow.getDate() + 3);
  var dd = String(tomorrow.getDate()).padStart(2, '0');
  var mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
  var yyyy = tomorrow.getFullYear();
  tomorrow = dd + '-' + mm + '-' + yyyy;

  var pubTime =  tomorrow + ' 08:00'; // 8 uur artikel

  if ( jsonpoststatus === 'future' ) {
    if ( jsonpubdate === pubTime ) {
      var futureHeadlineText = jsontitle;
      var futureHeadlineLink = jsonlink;
      let headerline1 = document.getElementById('headline1');
      headerline1.textContent = futureHeadlineText;
      headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    }
  }
}

// ## LOAD HEADLINES
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

    // let headerline1 = document.getElementById('headline1');
    // headerline1.textContent = futureHeadlineText;
    // headerline1.setAttribute("href", futureHeadlineLink + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline1 = document.getElementById('headline1');
    headerline1.textContent = allTitles[1].firstChild.nodeValue;
    headerline1.setAttribute("href", allLinks[1].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline2 = document.getElementById('headline2');
    headerline2.textContent = 'Voorbeeld';
    headerline2.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline3 = document.getElementById('headline3');
    headerline3.textContent = allTitles[2].firstChild.nodeValue;
    headerline3.setAttribute("href", allLinks[2].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline4 = document.getElementById('headline4');
    headerline4.textContent = allTitles[3].firstChild.nodeValue;
    headerline4.setAttribute("href", allLinks[3].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline5 = document.getElementById('headline5');
    headerline5.textContent = 'Voorbeeld';
    headerline5.setAttribute("href", 'https://voorbeeld.frankwatching.com/?' + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);
    let headerline6 = document.getElementById('headline6');
    headerline6.textContent = allTitles[4].firstChild.nodeValue;
    headerline6.setAttribute("href", allLinks[4].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c${sendDate}%7cheadline%7c`);//campagne);
    let headerline7 = document.getElementById('headline7');
    headerline7.textContent = allTitles[5].firstChild.nodeValue;
    headerline7.setAttribute("href", allLinks[5].textContent + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=headline&utm_content=%7c${sendDate}%7cheadline%7c`);

});

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


// ## LOAD AGENDA
"use strict";
fetch("https://www.frankwatching.com/feed/academy/upcoming/")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {

  const items = data.querySelectorAll("item");

  var existAAC = document.getElementById("agendaAcademyContainer");
  if(existAAC){
    // console.log('List agenda items empty');
    existAAC.innerHTML = `<table id="academyTable" width="100%" style="line-height: 22px; margin: 0px;"><tbody></tbody></table>`;

  }

  setTimeout(function() {
    for (var i = 0, len = 35; i < len; i++) {
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

  var item_link = link + `?utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=${campaign}&utm_content=%7c${sendDate}%7cagenda%7c`;

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = `▸`;
  cell1.style.fontSize = "12px";
  cell1.style.fontSize = "#18608b";
  cell1.style.verticalAlign = "top";
  cell2.innerHTML = `<p style="margin: 0px;"><a id="agendaAcademy${postid}" class="agendaItem" href="${item_link}" style="display: inline; margin: 0px; text-decoration: none;"><span class="agendaAcademyTitle" style="color: rgb(24, 96, 139);">${title}</span><span style="font-size: 12px; color: rgb(158, 158, 158);"> ${dateDay} ${dateMonth} | ${location} | ${durration}</span></a></p>`;

}

   /* add category */
   var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';

   const divCat = document.createElement('div');
   divCat.className = 'categoryClass';
   divCat.innerHTML = item_categorie;
   agendaAcademyContainer.appendChild(divCat);

document.getElementById('agendaOverlay').ondragstart = function (event) {
    event
      .dataTransfer
      .setData('text/html', agendaAcademyContainer.innerHTML);
     // console.log('dragstart');
}

newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?poststatus=future-publish';

if ( listSort === 'popularity') {
  newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?popularity';
}

if ( searchID ) {
  newsrss = 'https://www.frankwatching.com/feed-nieuwsbrief-v2/?postid='+ searchID;
}

console.log('RSS:' + newsrss);

// ## LOAD ARTIKELEN
"use strict";
fetch(newsrss)
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {

  const items = data.querySelectorAll("item");

  var existGCC = document.getElementById("artikelenGrootContainerContent");
  if(existGCC){
    existGCC.innerHTML = ``;
  }

  var existKCC = document.getElementById("artikelenKleinContainerContent");
  if(existKCC){
    existKCC.innerHTML = ``;
  }

  if ( listSort === 'popularity') {
    const div = document.createElement('div');
    div.id = 'headingArtikelGroot';
    div.innerHTML =  `Gesorteerd op populariteit`;
    existGCC.appendChild(div);
  }

  setTimeout(function() {
    items.forEach(artikelenGrootItems);
    items.forEach(artikelenKleinItems);
 }, 100);

});

function artikelenGrootItems(item, index) {

  var postid = item.querySelector("postid").innerHTML;
  var item_link = item.querySelector("link").innerHTML + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c${sendDate}%7cartikel%7c`;

  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  var pubdate = item.querySelector("pubdate").innerHTML;
  var poststatus = item.querySelector("poststatus").innerHTML;
  var popularityscore = item.querySelector("popularityscore").innerHTML;

  /* add category */
  var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
  var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
  var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
  var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

  var item_categories = item.querySelector("categoriesName").innerHTML;
  var item_categories_array = removeDuplicates(item_categories.split("|"));
  item_categories_array.forEach(function(element) {
    item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
  });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = item_categorie;
  artikelenGrootContainerContent.appendChild(divCat);

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
   <td id="artikelGroot${postid}TdC" style="padding-bottom: 5px;"><a class="grootArtikelDescription" style="color: #666666; font-size: 16px; display: inline; padding: 0px 0px 0px 0px;" id="ct11_2" href="${item_link}"><span style="font-size: 12pt; color: #333333;">${item.querySelector("description").innerHTML}</span></a><a class="GrootArtikelCTA" style="display: inline; font-size: 16px; text-decoration: none; color: #18608b;"  href="${item_link}"> Lees meer ▸</a></td>
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

  var item_link = item.querySelector("link").innerHTML + `&utm_source=nb-blog-${dagWeek}&utm_medium=email&utm_campaign=artikel&utm_content=%7c${sendDate}%7cartikel%7c`;

  var item_img_groot = item.querySelector("*|afbeelding").innerHTML;
  item_img_groot = item_img_groot.replace("<![CDATA[", "").replace("]]>", "");

  var item_img_klein = item.querySelector("*|foto").innerHTML;
  item_img_klein = item_img_klein.replace("<![CDATA[", "").replace("]]>", "");

  var pubdate = item.querySelector("pubdate").innerHTML;
  var poststatus = item.querySelector("poststatus").innerHTML;
  var popularityscore = item.querySelector("popularityscore").innerHTML;

   /* add category */
   var item_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
   var item_categorie = item_categorie + '<span class="postStatus">'+poststatus[0]+'</span>';
   var item_categorie = item_categorie + '<span class="postPubDate">'+pubdate+'</span>';
   var item_categorie = item_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';
   var item_categorie = item_categorie + '<span class="postScore">&#9733; '+popularityscore+'</span><span class="w100"></span>';

   var item_categories = item.querySelector("categoriesName").innerHTML;
   var item_categories_array = removeDuplicates(item_categories.split("|"));
   item_categories_array.forEach(function(element) {
     item_categorie = item_categorie + '<span class="categoryClassElement categoryClass'+element+'">' + element + '</span>';
   });

   const divCat = document.createElement('div');
   divCat.className = 'categoryClass';
   divCat.innerHTML = item_categorie;
   artikelenKleinContainerContent.appendChild(divCat);

   const div = document.createElement('div');
   div.className = 'kleinArtikel';
   div.id = 'kleinArtikel'+postid;
   div.draggable = 'true';


  div.innerHTML =  `<table class="table1a">
  <tbody>
    <tr>
      <td class="tableDivider1a"><a id="imgKleinArtikel${postid}Link" href="${item_link}"><img id="imgKleinArtikel${postid}a" class="imgKleinArtikela" style="height: auto; width: 100%; display: block;" src="${item_img_groot}" /></a></td>
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
     }

}

// ## LOAD VACATURES
"use strict";
fetch("https://www.frankwatching.com/feed/?post_type=vacature")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {

  const items = data.querySelectorAll("item");

  var existVCC = document.getElementById("vacatureContainerContent");
  if(existVCC){
    existVCC.innerHTML = ``;
  }

  setTimeout(function() {
    items.forEach(functionVacatureItems);
 }, 100);

});


function functionVacatureItems(item, index) {

  var postid = item.querySelector("guid").innerHTML;
  postid = postid.substring(postid.indexOf("p=") + 2);

  var pubdate = item.querySelector("pubDate").innerHTML;
  var pubdateArray = pubdate.split("+");

  var description = item.querySelector("description").innerHTML;
  description = description.replace("<![CDATA[", "").replace("]]>", "");

  var vac_org_naam = item.querySelector("*|vac_org_naam").innerHTML;
  vac_org_naam = htmlDecode(vac_org_naam.replace("<![CDATA[", "").replace("]]>", ""));

  var vac_uur = item.querySelector("*|vac_uur").innerHTML;
  vac_uur = vac_uur.replace("<![CDATA[", "").replace("]]>", "");

  if( ! vac_uur.includes("uur") ) {
   vac_uur = vac_uur + " uur";
  }

  var vac_standplaats = item.querySelector("*|vac_standplaats").innerHTML;
  vac_standplaats = vac_standplaats.replace("<![CDATA[", "").replace("]]>", "");

  var vac_link = item.querySelector("link").innerHTML + `?utm_source=al-jobs-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=vacature&amp;utm_content=%7c${sendDate}%7cvacature%7c`;
  if(dagWeek != 'dagelijks') {
    var vac_link = item.querySelector("link").innerHTML + `?utm_source=nb-jobs-${dagWeek}&amp;utm_medium=email&amp;utm_campaign=vacature&amp;utm_content=%7c${sendDate}%7cvacature%7c`;
  }

  var enclosure_img = item.querySelector("enclosure").getAttribute("url");

  /* add category */
  var vac_categorie = '<span class="categoryClassDag">'+dagWeek[0]+'</span>';
  var vac_categorie = vac_categorie + '<span class="postPubDate">'+pubdateArray[0]+'</span>';
  var vac_categorie = vac_categorie + '<span class="postPostID">&#9783 '+postid+'</span>';



  var vac_categories = item.querySelectorAll("category");
  vac_categories_nodes = Array.prototype.slice.call(vac_categories,0);
  vac_categories_nodes.forEach(function(element) {
    let formName = element;
    vac_categorie = vac_categorie + '<span class="categoryClassElement categoryClass'+formName.textContent+'">' + formName.textContent + '</span>';
  });

  const divCat = document.createElement('div');
  divCat.className = 'categoryClass';
  divCat.innerHTML = vac_categorie;

  const div = document.createElement('div');
   div.className = 'dragrow vacature';
   div.id = 'vacature'+postid;
   div.draggable = 'true';

  var daginzet = '<tr><td id="vacatureTD' + postid + 'bMob" class="vacaturetd_mobile" style="display: none;"><a  style="display: none;" id="vacatureImgLink' + postid + '" class="vacatureImgLink_mob" href="'+vac_link+'"><img id="imgVacatureArtikel'+postid+'mob" class="imgVacature_mobile" style="display: none;" src="'+enclosure_img+'" /></a></td></tr> ';
   if(dagWeek != 'dagelijks') {
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
   vacatureContainerContent.appendChild(divCat);
   vacatureContainerContent.appendChild(div);

   document.getElementById('vacature' + postid).ondragstart = function (event) {
       event
         .dataTransfer
         .setData('text/html', event.target.innerHTML);
     }
}


// Check version extension
"use strict";
fetch("https://raw.githubusercontent.com/ThomasSonneveld/Act-On-External-Content/master/version.txt")
  .then(response => response.text())
    .then((out) => {
        var text = `Lokale versie: ${versionid}<br>
                    Online versie: ${out}<br>`;
        const versiediv = document.createElement('div');
        versiediv.id = 'versiondiv';
        if(versionid < out) {
          versiediv.className = 'versiondiv-update';
          text = `Lokale versie: ${versionid}<br>`;
          text = text + '<a href="https://github.com/ThomasSonneveld/Act-On-External-Content" target="_blank">Nu updaten naar: ' + out + '</a>';
        }
        versiediv.innerHTML = text;

      credits.appendChild(versiediv);

}).catch(err => console.error(err));

};

//hier werd eerst getAllContent aangeroepen

// RSS/XML omzetten
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

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};

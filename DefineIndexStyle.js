let canvasWidth = "18%";
let canvsMinWidth = "100px";

createCanvas.id = 'canvas';
createCanvas.style.position = 'fixed';
createCanvas.style.top = '49px';
createCanvas.style.left = '0px';
createCanvas.style.width = canvasWidth;
createCanvas.style.minWidth= canvsMinWidth;
createCanvas.style.bottom = '51px';
createCanvas.style.backgroundColor = '#f5f5f5';
createCanvas.style.display = "block";
createCanvas.style.zIndex = "19000";

contentFeed.id = 'contentStyle';
contentFeed.style.position = 'fixed';
contentFeed.style.top = '0px';
contentFeed.style.left = '100px';
contentFeed.style.width = canvasWidth;
contentFeed.style.minWidth= canvsMinWidth;
contentFeed.style.height = '49px';
contentFeed.style.backgroundColor = '#f8f8f8';
contentFeed.style.display = "block";

choises.style.width = "100%";
choises.style.height = '49px';
choises.style.minWidth = canvsMinWidth;
choises.className = "choises";
choises.cssFloat = "left";
choises.style.display = "inline";

headlinesButton.style.width = "25%"
headlinesButton.style.height = '49px';
headlinesButton.style.backgroundColor = "#fafafa";
headlinesButton.style.color = "#000";
headlinesButton.style.display = "block";
headlinesButton.style.cssFloat="left"
headlinesButton.id = "headlinesButton"
headlinesButtonImg.textContent = "Headlines";
headlinesButtonImg.style.textAlign = "center";
headlinesButtonImg.style.display = "block";
headlinesButtonImg.className = "ButtonImg";
headlinesButtonImg.style.width = "100%";
headlinesButtonImg.style.marginLeft="auto";
headlinesButtonImg.style.marginRight="auto";
headlinesButtonImg.style.verticalAlign = "center";
headlinesButtonImg.style.color = "#cccccc";
headlinesButtonImg.style.fontFamily = "Helvetiva, Arial";
headlinesButtonImg.style.fontSize= "14px";
headlinesButtonImg.style.fontWeight= "bold";
headlinesButtonImg.style.top= "0px";
headlinesButtonImg.style.height= "29px"


artikelGrootButton.style.width = "25%"
artikelGrootButton.style.height = '49px';
artikelGrootButton.style.backgroundColor = "#fafafa";
artikelGrootButton.style.color = "#000";
artikelGrootButton.style.display = "block";
artikelGrootButton.style.cssFloat="left"
artikelGrootButton.id = "artikelGrootButton"
artikelGrootButtonImg.textContent = "Artikels";
artikelGrootButtonImg.style.textAlign = "center";
artikelGrootButtonImg.style.display = "block";
artikelGrootButtonImg.className = "ButtonImg";
artikelGrootButtonImg.style.width = "100%";
artikelGrootButtonImg.style.marginLeft="auto";
artikelGrootButtonImg.style.marginRight="auto";
artikelGrootButtonImg.style.verticalAlign = "center";
artikelGrootButtonImg.style.color = "#cccccc";
artikelGrootButtonImg.style.fontFamily = "Helvetiva, Arial";
artikelGrootButtonImg.style.fontSize= "14px";
artikelGrootButtonImg.style.fontWeight= "bold";
artikelGrootButtonImg.style.top= "0px";
artikelGrootButtonImg.style.height= "29px"

agendaAcademyButton.style.width = "25%";
agendaAcademyButton.style.height = '49px';
agendaAcademyButton.style.backgroundColor = "#fafafa";
agendaAcademyButton.style.color = "#000";
agendaAcademyButton.style.display = "block";
agendaAcademyButton.style.cssFloat="left"
agendaAcademyButton.id = "agendaAcademyButton"
agendaAcademyButtonImg.textContent = "Agenda";
agendaAcademyButtonImg.style.textAlign = "center";
agendaAcademyButtonImg.style.display = "block";
agendaAcademyButtonImg.className = "ButtonImg";
agendaAcademyButtonImg.style.width = "100%";
agendaAcademyButtonImg.style.marginLeft="auto"
agendaAcademyButtonImg.style.marginRight="auto"
agendaAcademyButtonImg.style.verticalAlign = "center";
agendaAcademyButtonImg.style.color = "#cccccc";
agendaAcademyButtonImg.style.fontFamily = "Helvetiva, Arial";
agendaAcademyButtonImg.style.fontSize= "14px";
agendaAcademyButtonImg.style.fontWeight= "bold";
agendaAcademyButtonImg.style.top= "0px";
agendaAcademyButtonImg.style.height= "29px"


artikelKleinButton.style.width = "25%"
artikelKleinButton.style.height = '49px';
artikelKleinButton.style.backgroundColor = "#fafafa";
artikelKleinButton.style.color = "#000";
artikelKleinButton.style.display = "block";
artikelKleinButton.style.cssFloat="left"
artikelKleinButton.id="artikelKleinButton"
artikelKleinButtonImg.textContent = "Items";
artikelKleinButtonImg.style.textAlign = "center";
artikelKleinButtonImg.style.display = "block";
artikelKleinButtonImg.className = "ButtonImg";
artikelKleinButtonImg.style.width = "100%";
artikelKleinButtonImg.style.marginLeft="auto"
artikelKleinButtonImg.style.marginRight="auto"
artikelKleinButtonImg.style.verticalAlign = "center";
artikelKleinButtonImg.style.color = "#cccccc";
artikelKleinButtonImg.style.fontFamily = "Helvetiva, Arial";
artikelKleinButtonImg.style.fontSize= "14px";
artikelKleinButtonImg.style.fontWeight= "bold";
artikelKleinButtonImg.style.top= "0px";
artikelKleinButtonImg.style.height= "29px"


contentIndex.id = 'contentIndex';
contentIndex.style.position = 'fixed';
contentIndex.style.top = '50px';
contentIndex.style.left = '0px';
contentIndex.style.width = canvasWidth;
contentIndex.style.minWidth= canvsMinWidth;
contentIndex.style.bottom = '51px';
contentIndex.style.backgroundColor = '#f5f5f5';
contentIndex.style.display = 'block';
contentIndex.style.overflowY = 'scroll';


agendaAcademyContainer.style.position = "absolute";
agendaAcademyContainer.id = "agendaAcademyContainer";
agendaAcademyContainer.draggable = "true";
agendaAcademyContainer.style.display = "none";

agendaOverlay.style.position = "absolute";
agendaOverlay.style.height = "100%"
agendaOverlay.style.width = "100%"
agendaOverlay.id = "agendaOverlay";
agendaOverlay.draggable = "true";
agendaOverlay.ondragstart='onDragStart(event);'
agendaOverlay.style.display = "none";
agendaOverlay.style.zIndex = "19300";

  aa1.id = "agendaAcademy1";
  aa1.style.display = "block";
  aa1.className = "headline";
  aa1.style.margin = "0px";

  aa2.id = "agendaAcademy2";
  aa2.style.display = "block";
  aa2.className = "headline";
  aa2.style.margin = "0px";

  aa3.id = "agendaAcademy3";
  aa3.style.display = "block";
  aa3.className = "headline";
  aa3.style.margin = "0px";

  aa4.id = "agendaAcademy4";
  aa4.style.display = "block";
  aa4.className = "headline";
  aa4.style.margin = "0px";

  aa5.id = "agendaAcademy5";
  aa5.style.display = "block";
  aa5.className = "headline";
  aa5.style.margin = "0px";


artikelenKleinContainer.style.position = "absolute";
artikelenKleinContainer.style.display = "none";
artikelenGrootContainer.style.position = "absolute";
artikelenGrootContainer.style.display = "none";

//changable style
contentIndex.style.color = "2d2d2d";
contentIndex.style.fontSize = "14px";

credits.id = 'credits';
credits.style.position = 'fixed';
credits.style.height = '50px';
credits.style.left = '0px';
credits.style.width = canvasWidth;
credits.style.minWidth= canvsMinWidth;
credits.style.bottom = '0Px';
credits.style.backgroundColor = '#f8f8f8';
credits.style.display = "block";


headlinesContainer.style.position = "absolute";
headlinesContainer.id = "headlinesContainer";
headlinesContainer.draggable = "false";
headlinesContainer.style.display = "none";

headlinesOverlay.style.position = "absolute";
headlinesOverlay.style.height = "100%"
headlinesOverlay.style.width = "100%"
headlinesOverlay.id = "headlinesOverlay";
headlinesOverlay.draggable = "true";
headlinesOverlay.ondragstart='onDragStart(event);'
headlinesOverlay.style.display = "none";
headlinesOverlay.style.zIndex = "19300";


  hl1.id = "headline1";
  hl1.style.display = "block";
  hl1.className = "headline";
  hl1.style.margin = "0px";

  phl1.id = "pheadline1";
  phl1.style.display = "block";
  phl1.className = "headline";
  phl1.style.margin = "0px";

  hl2.id = "headline2";
  hl2.style.display = "block";
  hl2.className = "headline";
  hl2.style.margin = "0px";

  phl2.id = "pheadline2";
  phl2.style.display = "block";
  phl2.className = "headline";
  phl2.style.margin = "0px";

  hl3.id = "headline3";
  hl3.style.display = "block";
  hl3.className = "headline";
  hl3.style.margin = "0px";

  phl3.id = "pheadline3";
  phl3.style.display = "block";
  phl3.className = "headline";
  phl3.style.margin = "0px";

  hl4.id = "headline4";
  hl4.style.display = "block";
  hl4.className = "headline";
  hl4.style.margin = "0px";

  phl4.id = "pheadline4";
  phl4.style.display = "block";
  phl4.className = "headline";
  phl4.style.margin = "0px";

  hl5.id = "headline5";
  hl5.style.display = "block";
  hl5.className = "headline";
  hl5.style.margin = "0px";

  phl5.id = "pheadline5";
  phl5.style.display = "block";
  phl5.className = "headline";
  phl5.style.margin = "0px";

  hl6.id = "headline6";
  hl6.style.display = "block";
  hl6.className = "headline";
  hl6.style.margin = "0px";

  phl6.id = "pheadline6";
  phl6.style.display = "block";
  phl6.className = "headline";
  phl6.style.margin = "0px";




artikelKlein1.id = "kleinArtikel1";
artikelKlein1.className = 'kleinArtikel';
artikelKlein1.draggable = "true";
artikelKlein1.ondragstart ='onDragStart(event);';
artikelKlein1.position - "absolute"

  artikelKleinTable1.className = "table"
  artikelKleinTable1.style.tableLayout="fixed"
  artikelKleinTable1.style.overflow = "hidden";

    artikelKleinImg12.id = "imgKleinArtikel12";
    artikelKleinImg12.className = "imgArtikel";
    artikelKleinImg12.style.height = "auto";
    artikelKleinImg12.style.width = "600px";

    artikelKlein1TD1.className = "tableDivider1";
    artikelKlein1TD1.display = "block";
    artikelKlein1TD1.width = "30%";
    artikelKlein1TD1.height = "150px";
    artikelKlein1TD1.style.overflow = "hidden";
    artikelKlein1TD1.style.tableLayout="fixed"

      artikelKlein1TDDiv.className = "tdDiv";
      artikelKlein1TDDiv.width = "150px";
      artikelKlein1TDDiv.height = "150px";
      artikelKlein1TDDiv.style.overflow = "hidden";
      artikelKlein1TDDiv.style.position = "relative";

        artikelKleinImg1.id = "imgKleinArtikel1";
        artikelKleinImg1.style.display = "block";
        artikelKleinImg1.className = "imgKleinArtikel";
        artikelKleinImg1.style.height = "150px";
        artikelKleinImg1.style.width = "150px";

      artikelKlein1TD2.className= "tableDivider2";
      artikelKlein1TD2.height = "150px";
      artikelKlein1TD2.width = "auto";

        artikelKleinTitle1.id = "titleKleinArtikel1";
        artikelKleinTitle1.style.display = "block";
        artikelKleinTitle1.className = "titleKleinArtikel";
        artikelKleinTitle1.style.top = "0px";
        artikelKleinTitle1.style.display = "block";
        artikelKleinTitle1.style.fontSize = "14pt";
        artikelKleinTitle1.style.fontWeight = "regular";
        artikelKleinTitle1.style.fontFamily = "Arial";

        artikelKleinDescription1.id = "DescriptionKleinArtikel1";
        artikelKleinDescription1.style.display = "block";
        artikelKleinDescription1.className = "DescriptionKleinArtikel";
        artikelKleinDescription1.style.fontSize = "10pt";
        artikelKleinDescription1.style.fontWeight = "regular";
        artikelKleinDescription1.style.fontFamily = "Arial";

artikelKlein2.id = "kleinArtikel2";
artikelKlein2.className = 'kleinArtikel';
artikelKlein2.draggable = "true";
artikelKlein2.ondragstart ='onDragStart(event);';
artikelKlein2.position - "absolute"

artikelKleinImg22.id = "imgKleinArtikel22";
artikelKleinImg22.style.display = "block";
artikelKleinImg22.className = "imgKleinArtike22";
artikelKleinImg22.style.height = "auto";
artikelKleinImg22.style.width = "600px";

    artikelKlein2TD1.className = "tableDivider1";
    artikelKlein2TD1.display = "block";
    artikelKlein2TD1.width = "30%";
    artikelKlein2TD1.height = "150px";

      artikelKlein2TDDiv.className = "tdDiv";
      artikelKlein2TDDiv.width = "150px";
      artikelKlein2TDDiv.height = "150px";

        artikelKleinImg2.id = "imgKleinArtikel2";
        artikelKleinImg2.style.display = "block";
        artikelKleinImg2.className = "imgKleinArtikel";
        artikelKleinImg2.style.height = "150px";
        artikelKleinImg2.style.width = "150px";

    artikelKlein2TD2.className= "tableDivider2";
    artikelKlein2TD2.height = "150px";
    artikelKlein2TD2.width = "auto";

        artikelKleinTitle2.id = "titleKleinArtikel2";
        artikelKleinTitle2.style.display = "block";
        artikelKleinTitle2.className = "titleKleinArtikel";
        artikelKleinTitle2.style.top = "0px";
        artikelKleinTitle2.setAttribute("style", "top: 0px; display: block; font-size: 14pt; font-weight: regular; font-familyL: Arial; ");

        artikelKleinDescription2.id = "DescriptionKleinArtikel2";
        artikelKleinDescription2.style.display = "block";
        artikelKleinDescription2.className = "DescriptionKleinArtikel";
        artikelKleinDescription2.setAttribute("style", "display: block; font-size: 10pt; font-weight: regular; font-familyL: Arial; ");


artikelKlein3.id = "kleinArtikel3";
artikelKlein3.className = 'kleinArtikel';
artikelKlein3.draggable = "true";
artikelKlein3.ondragstart ='onDragStart(event);';
artikelKlein3.position - "absolute"

    artikelKlein3TD1.className = "tableDivider1";
    artikelKlein3TD1.display = "block";
    artikelKlein3TD1.width = "30%";
    artikelKlein3TD1.height = "150px";

      artikelKlein3TDDiv.className = "tdDiv";
      artikelKlein3TDDiv.width = "150px";
      artikelKlein3TDDiv.height = "150px";

        artikelKleinImg3.id = "imgKleinArtikel3";
        artikelKleinImg3.style.display = "block";
        artikelKleinImg3.className = "imgKleinArtikel";
        artikelKleinImg3.style.height = "150px";
        artikelKleinImg3.style.width = "150px";

      artikelKlein3TD2.className= "tableDivider2";
      artikelKlein3TD2.height = "150px";
      artikelKlein3TD2.width = "auto";

        artikelKleinTitle3.id = "titleKleinArtikel3";
        artikelKleinTitle3.style.display = "block";
        artikelKleinTitle3.className = "titleKleinArtikel";
        artikelKleinTitle3.style.top = "0px";
        artikelKleinTitle3.setAttribute("style", "top: 0px; display: block; font-size: 14pt; font-weight: regular; font-familyL: Arial; ");

        artikelKleinDescription3.id = "DescriptionKleinArtikel3";
        artikelKleinDescription3.style.display = "block";
        artikelKleinDescription3.className = "DescriptionKleinArtikel";
        artikelKleinDescription3.setAttribute("style", "display: block; font-size: 10pt; font-weight: regular; font-familyL: Arial; ");

artikelKlein4.id = "kleinArtikel4";
artikelKlein4.className = 'kleinArtikel';
artikelKlein4.draggable = "true";
artikelKlein4.ondragstart ='onDragStart(event);';
artikelKlein4.position - "absolute"

    artikelKlein4TD1.className = "tableDivider1";
    artikelKlein4TD1.display = "block";
    artikelKlein4TD1.width = "30%";
    artikelKlein4TD1.height = "150px";

      artikelKlein4TDDiv.className = "tdDiv";
      artikelKlein4TDDiv.width = "150px";
      artikelKlein4TDDiv.height = "150px";

        artikelKleinImg4.id = "imgKleinArtikel4";
        artikelKleinImg4.style.display = "block";
        artikelKleinImg4.className = "imgKleinArtikel";
        artikelKleinImg4.style.height = "150px";
        artikelKleinImg4.style.width = "150px";

    artikelKlein4TD2.className= "tableDivider2";
    artikelKlein4TD2.height = "150px";
    artikelKlein4TD2.width = "auto";

      artikelKleinTitle4.id = "titleKleinArtikel4";
      artikelKleinTitle4.style.display = "block";
      artikelKleinTitle4.className = "titleKleinArtikel";
      artikelKleinTitle4.style.top = "0px";
      artikelKleinTitle4.setAttribute("style", "top: 0px; display: block; font-size: 14pt; font-weight: regular; font-familyL: Arial; ");

      artikelKleinDescription4.id = "DescriptionKleinArtikel4";
      artikelKleinDescription4.style.display = "block";
      artikelKleinDescription4.className = "DescriptionKleinArtikel";
      artikelKleinDescription4.setAttribute("style", "display: block; font-size: 10pt; font-weight: regular; font-familyL: Arial; ");



artikelKlein5.id = "kleinArtikel5";
artikelKlein5.className = 'kleinArtikel';
artikelKlein5.draggable = "true";
artikelKlein5.ondragstart ='onDragStart(event);';
artikelKlein5.position - "absolute"

    artikelKlein5TD1.className = "tableDivider1";
    artikelKlein5TD1.display = "block";
    artikelKlein5TD1.width = "30%";
    artikelKlein5TD1.height = "150px";

      artikelKlein5TDDiv.className = "tdDiv";
      artikelKlein5TDDiv.width = "150px";
      artikelKlein5TDDiv.height = "150px";

        artikelKleinImg5.id = "imgKleinArtikel5";
        artikelKleinImg5.style.display = "block";
        artikelKleinImg5.style.height = "150px";
        artikelKleinImg5.style.width = "150px";
        artikelKleinImg5.className = "imgKleinArtikel";


    artikelKlein5TD2.className= "tableDivider2";
    artikelKlein5TD2.height = "150px";
    artikelKlein5TD2.width = "auto";

      artikelKleinTitle5.id = "titleKleinArtikel5";
      artikelKleinTitle5.style.display = "block";
      artikelKleinTitle5.className = "titleKleinArtikel";
      artikelKleinTitle5.style.top = "0px";
      artikelKleinTitle5.setAttribute("style", "top: 0px; display: block; font-size: 14pt; font-weight: regular; font-familyL: Arial; ");

      artikelKleinDescription5.id = "DescriptionKleinArtikel5";
      artikelKleinDescription5.style.display = "block";
      artikelKleinDescription5.className = "DescriptionKleinArtikel";
      artikelKleinDescription5.setAttribute("style", "display: block; font-size: 10pt; font-weight: regular; font-familyL: Arial; ");


artikelKlein6.id = "kleinArtikel6";
artikelKlein6.className = 'kleinArtikel';
artikelKlein6.draggable = "true";
artikelKlein6.ondragstart ='onDragStart(event);';
artikelKlein6.position - "absolute"

    artikelKlein6TD1.className = "tableDivider1";
    artikelKlein6TD1.display = "block";
    artikelKlein6TD1.width = "30%";
    artikelKlein6TD1.height = "150px";

      artikelKlein6TDDiv.className = "tdDiv";
      artikelKlein6TDDiv.width = "150px";
      artikelKlein6TDDiv.height = "150px";

        artikelKleinImg6.id = "imgKleinArtikel6";
        artikelKleinImg6.style.display = "block";
        artikelKleinImg6.className = "imgKleinArtikel";
        artikelKleinImg6.style.height = "150px";
        artikelKleinImg6.style.width = "150px";

    artikelKlein6TD2.className= "tableDivider2";
    artikelKlein6TD2.height = "150px";
    artikelKlein6TD2.width = "auto";

      artikelKleinTitle6.id = "titleKleinArtikel6";
      artikelKleinTitle6.style.display = "block";
      artikelKleinTitle6.className = "titleKleinArtikel";
      artikelKleinTitle6.style.top = "0px";
      artikelKleinTitle6.setAttribute("style", "top: 0px; display: block; font-size: 14pt; font-weight: regular; font-familyL: Arial; ");

      artikelKleinDescription6.id = "DescriptionKleinArtikel6";
      artikelKleinDescription6.style.display = "block";
      artikelKleinDescription6.className = "DescriptionKleinArtikel";
      artikelKleinDescription6.setAttribute("style", "display: block; font-size: 10pt; font-weight: regular; font-familyL: Arial; ");



artikelGroot1.id = "grootArtikel1";
artikelGroot1.className = 'grootArtikel';
artikelGroot1.draggable = "true";
artikelGroot1.ondragstart ='onDragStart(event);';
artikelGroot1.position - "absolute";
artikelGroot1.style.border="1px solid #b8b8b8";

  artikelGrootAuthor1.id = "grootArtikelAuthor1";
  artikelGrootAuthor1.className = "grootArtikelAuthor";
  artikelGrootAuthor1.setAttribute("style", "display: block; font-size: 10pt; color: #9e9e9e; padding: 0px 15px 0px 15px; ");

  artikelGrootTitle1.id = "grootArtikelTitle1";
  artikelGrootTitle1.className = "grootArtikelTitle";
  artikelGrootTitle1.setAttribute("style", "display: block; font-size: 14pt; padding: 0px 15px 0px 15px; ");

  artikelGrootImg1.id =  "grootArtikelImg1";
  artikelGrootImg1.className =  "grootArtikelImg";
  artikelGrootImg1.style.display = "block";
  artikelGrootImg1.style.width = "100%";

  artikelGrootDescription1.id = "grootArtikelDescription1";
  artikelGrootDescription1.className = "grootArtikelDescription";
  artikelGrootDescription1.style.display = "block";
  artikelGrootDescription1.style.fontSize = "10pt";
  artikelGrootDescription1.setAttribute("style", "display: block; padding: 0px 15px 0px 15px; ");

artikelGroot2.id = "grootArtikel2";
artikelGroot2.className = 'grootArtikel';
artikelGroot2.draggable = "true";
artikelGroot2.ondragstart ='onDragStart(event);';
artikelGroot2.position - "absolute";
artikelGroot2.style.border="1px solid #b8b8b8";

  artikelGrootAuthor2.id = "grootArtikelAuthor2";
  artikelGrootAuthor2.className = "grootArtikelAuthor";
  artikelGrootAuthor2.setAttribute("style", "display: block; font-size: 10pt; color: #9e9e9e; padding: 0px 15px 0px 15px; ");

  artikelGrootTitle2.id = "grootArtikelTitle2";
  artikelGrootTitle2.className = "grootArtikelTitle";
  artikelGrootTitle2.setAttribute("style", "display: block; font-size: 14pt; padding: 0px 15px 0px 15px; ");

  artikelGrootImg2.id =  "grootArtikelImg2";
  artikelGrootImg2.className =  "grootArtikelImg";
  artikelGrootImg2.style.display = "block";
  artikelGrootImg2.style.width = "100%";

  artikelGrootDescription2.id = "grootArtikelDescription2";
  artikelGrootDescription2.className = "grootArtikelDescription";
  artikelGrootDescription2.style.display = "block";
  artikelGrootDescription2.style.fontSize = "10pt";
  artikelGrootDescription2.setAttribute("style", "display: block; padding: 0px 15px 0px 15px; ");

artikelGroot3.id = "grootArtikel3";
artikelGroot3.className = 'grootArtikel';
artikelGroot3.draggable = "true";
artikelGroot3.ondragstart ='onDragStart(event);';
artikelGroot3.position - "absolute";
artikelGroot3.style.border="1px solid #b8b8b8";
artikelGroot3.onmousehover = "hoverColor();";

  artikelGrootAuthor3.id = "grootArtikelAuthor3";
  artikelGrootAuthor3.className = "grootArtikelAuthor";
  artikelGrootAuthor3.setAttribute("style", "display: block; font-size: 10pt; color: #9e9e9e; padding: 0px 15px 0px 15px; ");

  artikelGrootTitle3.id = "grootArtikelTitle3";
  artikelGrootTitle3.className = "grootArtikelTitle";
  artikelGrootTitle3.setAttribute("style", "display: block; font-size: 14pt; padding: 0px 15px 0px 15px; ");

  artikelGrootImg3.id =  "grootArtikelImg3";
  artikelGrootImg3.className =  "grootArtikelImg";
  artikelGrootImg3.style.display = "block";
  artikelGrootImg3.style.width = "100%";

  artikelGrootDescription3.id = "grootArtikelDescription3";
  artikelGrootDescription3.className = "grootArtikelDescription";
  artikelGrootDescription3.style.display = "block";
  artikelGrootDescription3.style.fontSize = "10pt";
  artikelGrootDescription3.setAttribute("style", "display: block; padding: 0px 15px 0px 15px; ");

artikelGroot4.id = "grootArtikel4";
artikelGroot4.className = 'grootArtikel';
artikelGroot4.draggable = "true";
artikelGroot4.ondragstart ='onDragStart(event);';
artikelGroot4.position - "absolute";
artikelGroot4.border - "absolute";
artikelGroot4.style.border="1px solid #b8b8b8";

  artikelGrootAuthor4.id = "grootArtikelAuthor4";
  artikelGrootAuthor4.className = "grootArtikelAuthor";
  artikelGrootAuthor4.setAttribute("style", "display: block; font-size: 10pt; color: #9e9e9e; padding: 0px 15px 0px 15px; ");

  artikelGrootTitle4.id = "grootArtikelTitle4";
  artikelGrootTitle4.className = "grootArtikelTitle";
  artikelGrootTitle4.setAttribute("style", "display: block; font-size: 14pt; padding: 0px 15px 0px 15px; ");

  artikelGrootImg4.id =  "grootArtikelImg4";
  artikelGrootImg4.className =  "grootArtikelImg";
  artikelGrootImg4.style.display = "block";
  artikelGrootImg4.style.width = "100%";

  artikelGrootDescription4.id = "grootArtikelDescription4";
  artikelGrootDescription4.className = "grootArtikelDescription";
  artikelGrootDescription4.style.display = "block";
  artikelGrootDescription4.style.fontSize = "10pt";
  artikelGrootDescription4.setAttribute("style", "display: block; padding: 0px 15px 0px 15px; ");

artikelGroot5.id = "grootArtikel5";
artikelGroot5.className = 'grootArtikel';
artikelGroot5.draggable = "true";
artikelGroot5.ondragstart ='onDragStart(event);';
artikelGroot5.position - "absolute";
artikelGroot5.style.border="1px solid #b8b8b8";

  artikelGrootAuthor5.id = "grootArtikelAuthor5";
  artikelGrootAuthor5.className = "grootArtikelAuthor";
  artikelGrootAuthor5.setAttribute("style", "display: block; font-size: 10pt; color: #9e9e9e; padding: 0px 15px 0px 15px; ");

  artikelGrootTitle5.id = "grootArtikelTitle5";
  artikelGrootTitle5.className = "grootArtikelTitle";
  artikelGrootTitle5.setAttribute("style", "display: block; font-size: 14pt; padding: 0px 15px 0px 15px; ");

  artikelGrootImg5.id =  "grootArtikelImg5";
  artikelGrootImg5.className =  "grootArtikelImg";
  artikelGrootImg5.style.display = "block";
  artikelGrootImg5.style.width = "100%";

  artikelGrootDescription5.id = "grootArtikelDescription5";
  artikelGrootDescription5.className = "grootArtikelDescription";
  artikelGrootDescription5.style.display = "block";
  artikelGrootDescription5.style.fontSize = "10pt";

artikelGroot6.id = "grootArtikel6";
artikelGroot6.className = 'grootArtikel';
artikelGroot6.draggable = "true";
artikelGroot6.ondragstart ='onDragStart(event);';
artikelGroot6.position - "absolute";
artikelGroot6.style.border="1px solid #b8b8b8";

  artikelGrootAuthor6.id = "grootArtikelAuthor6";
  artikelGrootAuthor6.className = "grootArtikelAuthor";
  artikelGrootAuthor6.setAttribute("style", "display: block; font-size: 10pt; color: #9e9e9e; padding: 0px 15px 0px 15px; ");

  artikelGrootTitle6.id = "grootArtikelTitle6";
  artikelGrootTitle6.className = "grootArtikelTitle";
  artikelGrootTitle6.setAttribute("style", "display: block; font-size: 14pt; padding: 0px 15px 0px 15px; ");

  artikelGrootImg6.id =  "grootArtikelImg6";
  artikelGrootImg6.className =  "grootArtikelImg";
  artikelGrootImg6.style.display = "block";
  artikelGrootImg6.style.width = "100%";

  artikelGrootDescription6.id = "grootArtikelDescription6";
  artikelGrootDescription6.className = "grootArtikelDescription";
  artikelGrootDescription6.style.display = "block";
  artikelGrootDescription6.style.fontSize = "10pt";
  artikelGrootDescription6.setAttribute("style", "display: block; padding: 0px 15px 0px 15px; ");


categorySEO.id = "categroySEO";
categorySEO.style.width = "100%";
categorySEO.style.height = "100%";
categorySEO.style.display = "none";
categorySEO.style.backgroundColor = "#ffffba";

categoryConversie.id = "categoryConversie";
categoryConversie.style.width = "100%";
categoryConversie.style.height = "100%";
categoryConversie.style.display = "none";
categoryConversie.style.backgroundColor = "#bae1ff";

categoryAdvertising.id = "categoryAdvertising";
categoryAdvertising.style.width = "100%";
categoryAdvertising.style.height = "100%";
categoryAdvertising.style.display = "none";
categoryAdvertising.style.backgroundColor = "#ffb3ba";

categoryContent.id = "categoryContent";
categoryContent.style.width = "100%";
categoryContent.style.height = "100%";
categoryContent.style.display = "none";
categoryContent.style.backgroundColor = "#eecbff";

categoryCommunicatie.id = "categoryCommunicatie";
categoryCommunicatie.style.width = "100%";
categoryCommunicatie.style.height = "100%";
categoryCommunicatie.style.display = "none";
categoryCommunicatie.style.backgroundColor = "#baffc9";

categorySocial.id = "categorySocial";
categorySocial.style.width = "100%";
categorySocial.style.height = "100%";
categorySocial.style.display = "none";
categorySocial.style.backgroundColor = "#d4ffea";

categoryUX.id = "categoryUX";
categoryUX.style.width = "100%";
categoryUX.style.height = "100%";
categoryUX.style.display = "none";
categoryUX.style.backgroundColor = "#a8e6cf";

categoryTech.id = "categoryTech";
categoryTech.style.width = "100%";
categoryTech.style.height = "100%";
categoryTech.style.display = "none";
categoryTech.style.backgroundColor = "#ff8b94";

categoryHR.id = "categoryHR";
categoryHR.style.width = "100%";
categoryHR.style.height = "100%";
categoryHR.style.display = "none";
categoryHR.style.backgroundColor = "#dfa290";

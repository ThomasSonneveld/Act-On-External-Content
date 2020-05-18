console.log("content runs");

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var createCanvas = document.createElement( 'div' );
var contentFeed = document.createElement( 'div' );
var contentIndex = document.createElement( 'div' );
var credits = document.createElement( 'div' );

var headlinesContainer = document.createElement( 'div' );
var artikelenKleinContainer = document.createElement( 'div' );
var artikelenGrootContainer = document.createElement( 'div' );
var agendaAcademyContainer = document.createElement( 'div' );

var artikelKlein1 = document.createElement( 'div' );
var artikelKlein2 = document.createElement( 'div' );
var artikelKlein3 = document.createElement( 'div' );
var artikelKlein4 = document.createElement( 'div' );
var artikelKlein5 = document.createElement( 'div' );
var artikelKlein6 = document.createElement( 'div' );

var artikelKleinTable1 = document.createElement( 'table' );
var artikelKleinTBody1 = document.createElement( 'tbody');
var artikelKleinTR1 = document.createElement( 'tr');
var artikelKlein1TD1 = document.createElement( 'td' );
var artikelKlein1TD2 = document.createElement( 'td' );
var artikelKlein1TDDiv = document.createElement( 'div' );

var artikelKleinTable2 = document.createElement( 'table' );
var artikelKleinTBody2 = document.createElement( 'tbody');
var artikelKleinTR2 = document.createElement( 'tr');
var artikelKlein2TD1 = document.createElement( 'td' );
var artikelKlein2TD2 = document.createElement( 'td' );
var artikelKlein2TDDiv = document.createElement( 'div' );

var artikelKleinTable3 = document.createElement( 'table' );
var artikelKleinTBody3 = document.createElement( 'tbody');
var artikelKleinTR3 = document.createElement( 'tr');
var artikelKlein3TD1 = document.createElement( 'td' );
var artikelKlein3TD2 = document.createElement( 'td' );
var artikelKlein3TDDiv = document.createElement( 'div' );

var artikelKleinTable4 = document.createElement( 'table' );
var artikelKleinTBody4 = document.createElement( 'tbody');
var artikelKleinTR4 = document.createElement( 'tr');
var artikelKlein4TD1 = document.createElement( 'td' );
var artikelKlein4TD2 = document.createElement( 'td' );
var artikelKlein4TDDiv = document.createElement( 'div' );

var artikelKleinTable5 = document.createElement( 'table' );
var artikelKleinTBody5 = document.createElement( 'tbody');
var artikelKleinTR5 = document.createElement( 'tr');
var artikelKlein5TD1 = document.createElement( 'td' );
var artikelKlein5TD2 = document.createElement( 'td' );
var artikelKlein5TDDiv = document.createElement( 'div' );

var artikelKleinTable6 = document.createElement( 'table' );
var artikelKleinTBody6 = document.createElement( 'tbody');
var artikelKleinTR6 = document.createElement( 'tr');
var artikelKlein6TD1 = document.createElement( 'td' );
var artikelKlein6TD2 = document.createElement( 'td' );
var artikelKlein6TDDiv = document.createElement( 'div' );

var artikelKleinImg1 = document.createElement ( 'img' );
var artikelKleinImg2 = document.createElement ( 'img' );
var artikelKleinImg3 = document.createElement ( 'img' );
var artikelKleinImg4 = document.createElement ( 'img' );
var artikelKleinImg5 = document.createElement ( 'img' );
var artikelKleinImg6 = document.createElement ( 'img' );

var artikelKleinImg12 = document.createElement ( 'img' );
var artikelKleinImg22 = document.createElement ( 'img' );
var artikelKleinImg32 = document.createElement ( 'img' );
var artikelKleinImg42 = document.createElement ( 'img' );
var artikelKleinImg52 = document.createElement ( 'img' );
var artikelKleinImg62 = document.createElement ( 'img' );

var artikelKleinTitle1 = document.createElement ( 'p' );
var artikelKleinTitle2 = document.createElement ( 'p' );
var artikelKleinTitle3 = document.createElement ( 'p' );
var artikelKleinTitle4 = document.createElement ( 'p' );
var artikelKleinTitle5 = document.createElement ( 'p' );
var artikelKleinTitle6 = document.createElement ( 'p' );

var artikelKleinDescription1 = document.createElement ( 'p' );
var artikelKleinDescription2 = document.createElement ( 'p' );
var artikelKleinDescription3 = document.createElement ( 'p' );
var artikelKleinDescription4 = document.createElement ( 'p' );
var artikelKleinDescription5 = document.createElement ( 'p' );
var artikelKleinDescription6 = document.createElement ( 'p' );

var artikelKleinCTA1 = document.createElement ( 'p' );
var artikelKleinCTA2 = document.createElement ( 'p' );
var artikelKleinCTA3 = document.createElement ( 'p' );
var artikelKleinCTA4 = document.createElement ( 'p' );
var artikelKleinCTA5 = document.createElement ( 'p' );
var artikelKleinCTA6 = document.createElement ( 'p' );



//Artikelen Groot

var artikelGroot1 = document.createElement( 'div' );
var artikelGroot2 = document.createElement( 'div' );
var artikelGroot3 = document.createElement( 'div' );
var artikelGroot4 = document.createElement( 'div' );
var artikelGroot5 = document.createElement( 'div' );
var artikelGroot6 = document.createElement( 'div' );

var artikelGrootAuthor1 = document.createElement ( 'p' );
var artikelGrootAuthor2 = document.createElement ( 'p' );
var artikelGrootAuthor3 = document.createElement ( 'p' );
var artikelGrootAuthor4 = document.createElement ( 'p' );
var artikelGrootAuthor5 = document.createElement ( 'p' );
var artikelGrootAuthor6 = document.createElement ( 'p' );

var artikelGrootAuthor1 = document.createElement ( 'p' );
var artikelGrootAuthor2 = document.createElement ( 'p' );
var artikelGrootAuthor3 = document.createElement ( 'p' );
var artikelGrootAuthor4 = document.createElement ( 'p' );
var artikelGrootAuthor5 = document.createElement ( 'p' );
var artikelGrootAuthor6 = document.createElement ( 'p' );

var artikelGrootTitle1 = document.createElement ( 'p' );
var artikelGrootTitle2 = document.createElement ( 'p' );
var artikelGrootTitle3 = document.createElement ( 'p' );
var artikelGrootTitle4 = document.createElement ( 'p' );
var artikelGrootTitle5 = document.createElement ( 'p' );
var artikelGrootTitle6 = document.createElement ( 'p' );

var artikelGrootTitle1 = document.createElement ( 'p' );
var artikelGrootTitle2 = document.createElement ( 'p' );
var artikelGrootTitle3 = document.createElement ( 'p' );
var artikelGrootTitle4 = document.createElement ( 'p' );
var artikelGrootTitle5 = document.createElement ( 'p' );
var artikelGrootTitle6 = document.createElement ( 'p' );

var artikelGrootImg1 = document.createElement ( 'img' );
var artikelGrootImg2 = document.createElement ( 'img' );
var artikelGrootImg3 = document.createElement ( 'img' );
var artikelGrootImg4 = document.createElement ( 'img' );
var artikelGrootImg5 = document.createElement ( 'img' );
var artikelGrootImg6 = document.createElement ( 'img' );

var artikelGrootDescription1 = document.createElement ( 'p' );
var artikelGrootDescription2 = document.createElement ( 'p' );
var artikelGrootDescription3 = document.createElement ( 'p' );
var artikelGrootDescription4 = document.createElement ( 'p' );
var artikelGrootDescription5 = document.createElement ( 'p' );
var artikelGrootDescription6 = document.createElement ( 'p' );

var artikelGrootDescription1 = document.createElement ( 'p' );
var artikelGrootDescription2 = document.createElement ( 'p' );
var artikelGrootDescription3 = document.createElement ( 'p' );
var artikelGrootDescription4 = document.createElement ( 'p' );
var artikelGrootDescription5 = document.createElement ( 'p' );
var artikelGrootDescription6 = document.createElement ( 'p' );

var artikelGrootCTA1 = document.createElement ( 'p' );
var artikelGrootCTA2 = document.createElement ( 'p' );
var artikelGrootCTA3 = document.createElement ( 'p' );
var artikelGrootCTA4 = document.createElement ( 'p' );
var artikelGrootCTA5 = document.createElement ( 'p' );
var artikelGrootCTA6 = document.createElement ( 'p' );

var artikelGrootCTA1 = document.createElement ( 'p' );
var artikelGrootCTA2 = document.createElement ( 'p' );
var artikelGrootCTA3 = document.createElement ( 'p' );
var artikelGrootCTA4 = document.createElement ( 'p' );
var artikelGrootCTA5 = document.createElement ( 'p' );
var artikelGrootCTA6 = document.createElement ( 'p' );

//headlines

var headlinesOverlay = document.createElement ( "div" );
var phl1 = document.createElement ( 'p' );
var hl1 = document.createElement ( 'a' );
var phl2 = document.createElement ( 'p' );
var hl2 = document.createElement ( 'a' );
var phl3 = document.createElement ( 'p' );
var hl3 = document.createElement ( 'a' );
var phl4 = document.createElement ( 'p' );
var hl4 = document.createElement ( 'a' );
var phl5 = document.createElement ( 'p' );
var hl5 = document.createElement ( 'a' );
var phl6 = document.createElement ( 'p' );
var hl6 = document.createElement ( 'a' );

var agendaOverlay = document.createElement ( "div" );
var paa1 = document.createElement ( 'p' );
var aa1 = document.createElement ( 'a' );
var saa1 = document.createElement ( 'span' );
var saa12 = document.createElement ( 'span' );
var paa2 = document.createElement ( 'p' );
var aa2 = document.createElement ( 'a' );
var saa2 = document.createElement ( 'span' );
var saa22 = document.createElement ( 'span' );
var paa3 = document.createElement ( 'p' );
var aa3 = document.createElement ( 'a' );
var saa3 = document.createElement ( 'span' );
var saa32 = document.createElement ( 'span' );
var paa4 = document.createElement ( 'p' );
var aa4 = document.createElement ( 'a' );
var saa4 = document.createElement ( 'span' );
var saa42 = document.createElement ( 'span' );
var paa5 = document.createElement ( 'p' );
var aa5 = document.createElement ( 'a' );
var saa5 = document.createElement ( 'span' );
var saa52 = document.createElement ( 'span' );

var choises = document.createElement ('div');
var headlinesButton = document.createElement ('div');
var headlinesButtonImg = document.createElement ('p');
var artikelGrootButton = document.createElement ('div');
var artikelGrootButtonImg = document.createElement ('p');
var agendaAcademyButton = document.createElement ('div');
var agendaAcademyButtonImg = document.createElement ('p');
var artikelKleinButton = document.createElement ('div');
var artikelKleinButtonImg = document.createElement ('p');

var categorySEO = document.createElement ('div');
var categoryConversie = document.createElement ('div');
var categoryAdvertising = document.createElement ('div');
var categoryContent = document.createElement ('div');
var categoryCommunicatie = document.createElement ('div');
var categorySocial = document.createElement ('div');
var categoryUX = document.createElement ('div');
var categoryTech = document.createElement ('div');
var categoryHR = document.createElement ('div');

var categorySEOText = document.createElement ('p');
var categoryConversieText = document.createElement ('p');
var categoryAdvertisingText = document.createElement ('p');
var categoryContentText = document.createElement ('p');
var categoryCommunicatieText = document.createElement ('p');
var categorySocialText = document.createElement ('p');
var categoryUXText = document.createElement ('p');
var categoryTechText = document.createElement ('p');
var categoryHRText = document.createElement ('p');

categorySEOText.innerHTML = "Marketing & SEO!";
categoryConversieText.innerHTML = "Analytics en Conversie";
categoryAdvertisingText.innerHTML = "Advertising en Ecommerce";
categoryContentText.innerHTML = "Content en contentmarketing";
categoryCommunicatieText.innerHTML = "Communicatie en branding";
categorySocialText.innerHTML = "Social media en conversational";
categoryUXText.innerHTML = "UX en design";
categoryTechText.innerHTML = "Digital Business en tech";
categoryHRText.innerHTML = "Carrier en HR";
//append all elements

document.body.appendChild( createCanvas );
createCanvas.appendChild( contentFeed );
createCanvas.appendChild( contentIndex );
createCanvas.appendChild( credits );

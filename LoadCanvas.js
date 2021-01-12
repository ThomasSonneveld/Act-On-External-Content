console.log("content runs");

document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var createCanvas = document.createElement( 'div' );
var contentFeed = document.createElement( 'div' );
var dagWeekSelect = document.createElement( 'div' );
var contentIndex = document.createElement( 'div' );
var credits = document.createElement( 'div' );
var inOutSelect =document.createElement( 'div' );

var headlinesContainer = document.createElement( 'div' );

var artikelenKleinContainer = document.createElement( 'div' );
artikelenKleinContainer.id = 'artikelenKleinContainer';
var artikelenKleinContainerContent = document.createElement( 'div' );
artikelenKleinContainerContent.id = 'artikelenKleinContainerContent';

var artikelenGrootContainer = document.createElement( 'div' );
artikelenGrootContainer.id = 'artikelenGrootContainer';
var artikelenGrootContainerContent = document.createElement( 'div' );
artikelenGrootContainerContent.id = 'artikelenGrootContainerContent';

var agendaAcademyContainer = document.createElement( 'div' );

var vacatureContainer = document.createElement( 'div' );
vacatureContainer.id = 'vacatureContainer';
var vacatureContainerContent = document.createElement( 'div' );
vacatureContainerContent.id = 'vacatureContainerContent';

//headlines
var headlinesOverlay = document.createElement ( "div" );
var phl1 = document.createElement ( 'p' );
var hl1 = document.createElement ( 'a' );
var phl2 = document.createElement ( 'p' );
var shl2b = document.createElement ( 'span' );
var hl2 = document.createElement ( 'a' );
var phl3 = document.createElement ( 'p' );
var hl3 = document.createElement ( 'a' );
var phl4 = document.createElement ( 'p' );
var hl4 = document.createElement ( 'a' );
var phl5 = document.createElement ( 'p' );
var shl5b = document.createElement ( 'span' );
var hl5 = document.createElement ( 'a' );
var phl6 = document.createElement ( 'p' );
var hl6 = document.createElement ( 'a' );
var phl7 = document.createElement ( 'p' );
var hl7 = document.createElement ( 'a' );

var headlineTable = document.createElement( 'table' );
var headlineTbody = document.createElement( 'tbody');
var headlineTr1 = document.createElement( 'tr');
var headlines1Td1 = document.createElement( 'td' );
var headlines1Td2 = document.createElement( 'td' );
var headlines1Td3 = document.createElement( 'td' );
var headlineTr2 = document.createElement( 'tr');
var headlines2Td1 = document.createElement( 'td' );
var headlines2Td2 = document.createElement( 'td' );
var headlines2Td3 = document.createElement( 'td' );
var headlineTr3 = document.createElement( 'tr');
var headlines3Td1 = document.createElement( 'td' );
var headlines3Td2 = document.createElement( 'td' );
var headlines3Td3 = document.createElement( 'td' );
var headlineTr4 = document.createElement( 'tr');
var headlines4Td1 = document.createElement( 'td' );
var headlines4Td2 = document.createElement( 'td' );
var headlines4Td3 = document.createElement( 'td' );
var headlineTr5 = document.createElement( 'tr');
var headlines5Td1 = document.createElement( 'td' );
var headlines5Td2 = document.createElement( 'td' );
var headlines5Td3 = document.createElement( 'td' );
var headlineTr6 = document.createElement( 'tr');
var headlines6Td1 = document.createElement( 'td' );
var headlines6Td2 = document.createElement( 'td' );
var headlines6Td3 = document.createElement( 'td' );
var headlineTr7 = document.createElement( 'tr');
var headlines7Td1 = document.createElement( 'td' );
var headlines7Td2 = document.createElement( 'td' );
var headlines7Td3 = document.createElement( 'td' );


var agendaOverlay = document.createElement ( "div" );

var choises = document.createElement ('div');
var headlinesButton = document.createElement ('div');
var headlinesButtonImg = document.createElement ('p');
var artikelGrootButton = document.createElement ('div');
var artikelGrootButtonImg = document.createElement ('p');
var agendaAcademyButton = document.createElement ('div');
var agendaAcademyButtonImg = document.createElement ('p');
var artikelKleinButton = document.createElement ('div');
var artikelKleinButtonImg = document.createElement ('p');
var vacatureButton = document.createElement ('div');
var vacatureButtonImg = document.createElement ('p');

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

var dagWeekForm = document.createElement('form');
var dagWeekFormDiv = document.createElement('div');
var dagWeekFormLabel = document.createElement('label');
var dagWeekFormInput = document.createElement('input');
var dagWeekFormSpan = document.createElement('span');
var dagWeekFormText = document.createElement('span');


let dagWeek = "dag";

var inOutForm = document.createElement('form');
var inOutFormDiv = document.createElement('div');
var inOutFormLabel = document.createElement('label');
var inOutFormInput = document.createElement('input');
var inOutFormSpan = document.createElement('span');

let inOut = "out";

//append all elements

document.body.appendChild( createCanvas );
createCanvas.appendChild( contentFeed );
createCanvas.appendChild( dagWeekSelect );
dagWeekSelect.appendChild( dagWeekForm );
dagWeekForm.appendChild( dagWeekFormDiv );
dagWeekFormDiv.appendChild( dagWeekFormLabel );
dagWeekFormDiv.appendChild( dagWeekFormText );
dagWeekFormLabel.appendChild( dagWeekFormInput );
dagWeekFormLabel.appendChild( dagWeekFormSpan );

document.body.appendChild( inOutSelect );
inOutSelect.appendChild( inOutForm );
inOutForm.appendChild( inOutFormDiv );
inOutFormDiv.appendChild( inOutFormLabel );
inOutFormLabel.appendChild( inOutFormInput );
inOutFormLabel.appendChild( inOutFormSpan );


createCanvas.appendChild( contentIndex );
createCanvas.appendChild( credits );


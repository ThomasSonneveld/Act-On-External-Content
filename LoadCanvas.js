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
/*
var agendaAcademyContainerContent = document.createElement( 'div' );
agendaAcademyContainerContent.id = 'agendaAcademyContainerContent';
agendaAcademyContainerContent.draggable = 'true';
*/



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
/*
var paa1 = document.createElement ( 'p' );
var aa1 = document.createElement ( 'a' );
var saa1a = document.createElement ( 'span' );
var saa1b = document.createElement ( 'span' );
var paa2 = document.createElement ( 'p' );
var aa2 = document.createElement ( 'a' );
var saa2a = document.createElement ( 'span' );
var saa2b = document.createElement ( 'span' );
var paa3 = document.createElement ( 'p' );
var aa3 = document.createElement ( 'a' );
var saa3a = document.createElement ( 'span' );
var saa3b = document.createElement ( 'span' );
var paa4 = document.createElement ( 'p' );
var aa4 = document.createElement ( 'a' );
var saa4a = document.createElement ( 'span' );
var saa4b = document.createElement ( 'span' );
var paa5 = document.createElement ( 'p' );
var aa5 = document.createElement ( 'a' );
var saa5a = document.createElement ( 'span' );
var saa5b = document.createElement ( 'span' );
var paa6 = document.createElement ( 'p' );
var aa6 = document.createElement ( 'a' );
var saa6a = document.createElement ( 'span' );
var saa6b = document.createElement ( 'span' );
var paa7 = document.createElement ( 'p' );
var aa7 = document.createElement ( 'a' );
var saa7a = document.createElement ( 'span' );
var saa7b = document.createElement ( 'span' );
var paa8 = document.createElement ( 'p' );
var aa8 = document.createElement ( 'a' );
var saa8a = document.createElement ( 'span' );
var saa8b = document.createElement ( 'span' );
var paa9 = document.createElement ( 'p' );
var aa9 = document.createElement ( 'a' );
var saa9a = document.createElement ( 'span' );
var saa9b = document.createElement ( 'span' );
var paa10 = document.createElement ( 'p' );
var aa10 = document.createElement ( 'a' );
var saa10a = document.createElement ( 'span' );
var saa10b = document.createElement ( 'span' );
var paa11 = document.createElement ( 'p' );
var aa11 = document.createElement ( 'a' );
var saa11a = document.createElement ( 'span' );
var saa11b = document.createElement ( 'span' );
var paa12 = document.createElement ( 'p' );
var aa12 = document.createElement ( 'a' );
var saa12a = document.createElement ( 'span' );
var saa12b = document.createElement ( 'span' );
var paa13 = document.createElement ( 'p' );
var aa13 = document.createElement ( 'a' );
var saa13a = document.createElement ( 'span' );
var saa13b = document.createElement ( 'span' );
var paa14 = document.createElement ( 'p' );
var aa14 = document.createElement ( 'a' );
var saa14a = document.createElement ( 'span' );
var saa14b = document.createElement ( 'span' );
var paa15 = document.createElement ( 'p' );
var aa15 = document.createElement ( 'a' );
var saa15a = document.createElement ( 'span' );
var saa15b = document.createElement ( 'span' );
var paa16 = document.createElement ( 'p' );
var aa16 = document.createElement ( 'a' );
var saa16a = document.createElement ( 'span' );
var saa16b = document.createElement ( 'span' );
var paa17 = document.createElement ( 'p' );
var aa17 = document.createElement ( 'a' );
var saa17a = document.createElement ( 'span' );
var saa17b = document.createElement ( 'span' );
var paa18 = document.createElement ( 'p' );
var aa18 = document.createElement ( 'a' );
var saa18a = document.createElement ( 'span' );
var saa18b = document.createElement ( 'span' );
var paa19 = document.createElement ( 'p' );
var aa19 = document.createElement ( 'a' );
var saa19a = document.createElement ( 'span' );
var saa19b = document.createElement ( 'span' );
var paa20 = document.createElement ( 'p' );
var aa20 = document.createElement ( 'a' );
var saa20a = document.createElement ( 'span' );
var saa20b = document.createElement ( 'span' );

var agendaTable = document.createElement( 'table' );
var agendaTbody = document.createElement( 'tbody');
var agendaTr1 = document.createElement( 'tr');
var agenda1Td1 = document.createElement( 'td' );
var agenda1Td2 = document.createElement( 'td' );
var agendaTr2 = document.createElement( 'tr');
var agenda2Td1 = document.createElement( 'td' );
var agenda2Td2 = document.createElement( 'td' );
var agenda2Td3 = document.createElement( 'td' );
var agendaTr3 = document.createElement( 'tr');
var agenda3Td1 = document.createElement( 'td' );
var agenda3Td2 = document.createElement( 'td' );
var agendaTr4 = document.createElement( 'tr');
var agenda4Td1 = document.createElement( 'td' );
var agenda4Td2 = document.createElement( 'td' );
var agenda4Td3 = document.createElement( 'td' );
var agendaTr5 = document.createElement( 'tr');
var agenda5Td1 = document.createElement( 'td' );
var agenda5Td2 = document.createElement( 'td' );
var agendaTr6 = document.createElement( 'tr');
var agenda6Td1 = document.createElement( 'td' );
var agenda6Td2 = document.createElement( 'td' );
var agendaTr7 = document.createElement( 'tr');
var agenda7Td1 = document.createElement( 'td' );
var agenda7Td2 = document.createElement( 'td' );
var agendaTr8 = document.createElement( 'tr');
var agenda8Td1 = document.createElement( 'td' );
var agenda8Td2 = document.createElement( 'td' );
var agendaTr9 = document.createElement( 'tr');
var agenda9Td1 = document.createElement( 'td' );
var agenda9Td2 = document.createElement( 'td' );
var agendaTr10 = document.createElement( 'tr');
var agenda10Td1 = document.createElement( 'td' );
var agenda10Td2 = document.createElement( 'td' );
var agendaTr11 = document.createElement( 'tr');
var agenda11Td1 = document.createElement( 'td' );
var agenda11Td2 = document.createElement( 'td' );
var agendaTr12 = document.createElement( 'tr');
var agenda12Td1 = document.createElement( 'td' );
var agenda12Td2 = document.createElement( 'td' );
var agendaTr13 = document.createElement( 'tr');
var agenda13Td1 = document.createElement( 'td' );
var agenda13Td2 = document.createElement( 'td' );
var agendaTr14 = document.createElement( 'tr');
var agenda14Td1 = document.createElement( 'td' );
var agenda14Td2 = document.createElement( 'td' );
var agendaTr15 = document.createElement( 'tr');
var agenda15Td1 = document.createElement( 'td' );
var agenda15Td2 = document.createElement( 'td' );
var agendaTr16 = document.createElement( 'tr');
var agenda16Td1 = document.createElement( 'td' );
var agenda16Td2 = document.createElement( 'td' );
var agendaTr17 = document.createElement( 'tr');
var agenda17Td1 = document.createElement( 'td' );
var agenda17Td2 = document.createElement( 'td' );
var agendaTr18 = document.createElement( 'tr');
var agenda18Td1 = document.createElement( 'td' );
var agenda18Td2 = document.createElement( 'td' );
var agendaTr19 = document.createElement( 'tr');
var agenda19Td1 = document.createElement( 'td' );
var agenda19Td2 = document.createElement( 'td' );
var agendaTr20 = document.createElement( 'tr');
var agenda20Td1 = document.createElement( 'td' );
var agenda20Td2 = document.createElement( 'td' );
*/
// Vacature Items

/*
var vacature1 = document.createElement( 'div' );

var vacatureTable1 = document.createElement( 'table' );
var vacatureTBody1 = document.createElement( 'tbody');
var vacatureTR1  = document.createElement( 'tr');
var vacature1TDa = document.createElement( 'td' );
var vacature1TDb = document.createElement( 'td' );
var vacature1TDImgLink = document.createElement( 'a' );

var vacatureTable1b = document.createElement( 'table' );
var vacatureTBody1b = document.createElement( 'tbody');
var vacatureTR1bA = document.createElement( 'tr');
var vacatureTD1bA = document.createElement( 'td' );
var vacatureTR1bB = document.createElement( 'tr');
var vacatureTD1bB = document.createElement( 'td' );
var vacatureTR1bC = document.createElement( 'tr');
var vacatureTD1bC = document.createElement( 'td' );

var vacatureImg1 = document.createElement ( 'img' );
var vacatureLink1TDa = document.createElement ( 'a' );
var vacatureLink1Meta = document.createElement ( 'a' );
var vacatureLink1title = document.createElement ( 'a' );
var vacatureLink1description = document.createElement ( 'a' );

var vacatureMeta1 = document.createElement ( 'a' );
var vspan1a = document.createElement ( 'span' );
var vspan1b = document.createElement ( 'span' );
var vacatureTitle1 = document.createElement ( 'a' );
var vacatureDescription1 = document.createElement ( 'a' );


var vacature2 = document.createElement( 'div' );

var vacatureTable2 = document.createElement( 'table' );
var vacatureTBody2 = document.createElement( 'tbody');
var vacatureTR2  = document.createElement( 'tr');
var vacature2TDa = document.createElement( 'td' );
var vacature2TDb = document.createElement( 'td' );
var vacature2TDImgLink = document.createElement( 'a' );

var vacatureTable2b = document.createElement( 'table' );
var vacatureTBody2b = document.createElement( 'tbody');
var vacatureTR2bA = document.createElement( 'tr');
var vacatureTD2bA = document.createElement( 'td' );
var vacatureTR2bB = document.createElement( 'tr');
var vacatureTD2bB = document.createElement( 'td' );
var vacatureTR2bC = document.createElement( 'tr');
var vacatureTD2bC = document.createElement( 'td' );

var vacatureImg2 = document.createElement ( 'img' );
var vacatureLink2TDa = document.createElement ( 'a' );
var vacatureLink2Meta = document.createElement ( 'a' );
var vacatureLink2title = document.createElement ( 'a' );
var vacatureLink2description = document.createElement ( 'a' );

var vacatureMeta2 = document.createElement ( 'a' );
var vspan2a = document.createElement ( 'span' );
var vspan2b = document.createElement ( 'span' );
var vacatureTitle2 = document.createElement ( 'a' );
var vacatureDescription2 = document.createElement ( 'a' );


var vacature3 = document.createElement( 'div' );

var vacatureTable3 = document.createElement( 'table' );
var vacatureTBody3 = document.createElement( 'tbody');
var vacatureTR3  = document.createElement( 'tr');
var vacature3TDa = document.createElement( 'td' );
var vacature3TDb = document.createElement( 'td' );
var vacature3TDImgLink = document.createElement( 'a' );

var vacatureTable3b = document.createElement( 'table' );
var vacatureTBody3b = document.createElement( 'tbody');
var vacatureTR3bA = document.createElement( 'tr');
var vacatureTD3bA = document.createElement( 'td' );
var vacatureTR3bB = document.createElement( 'tr');
var vacatureTD3bB = document.createElement( 'td' );
var vacatureTR3bC = document.createElement( 'tr');
var vacatureTD3bC = document.createElement( 'td' );

var vacatureImg3 = document.createElement ( 'img' );
var vacatureLink3TDa = document.createElement ( 'a' );
var vacatureLink3Meta = document.createElement ( 'a' );
var vacatureLink3title = document.createElement ( 'a' );
var vacatureLink3description = document.createElement ( 'a' );

var vacatureMeta3 = document.createElement ( 'a' );
var vspan3a = document.createElement ( 'span' );
var vspan3b = document.createElement ( 'span' );
var vacatureTitle3 = document.createElement ( 'a' );
var vacatureDescription3 = document.createElement ( 'a' );


var vacature4 = document.createElement( 'div' );

var vacatureTable4 = document.createElement( 'table' );
var vacatureTBody4 = document.createElement( 'tbody');
var vacatureTR4  = document.createElement( 'tr');
var vacature4TDa = document.createElement( 'td' );
var vacature4TDb = document.createElement( 'td' );
var vacature4TDImgLink = document.createElement( 'a' );

var vacatureTable4b = document.createElement( 'table' );
var vacatureTBody4b = document.createElement( 'tbody');
var vacatureTR4bA = document.createElement( 'tr');
var vacatureTD4bA = document.createElement( 'td' );
var vacatureTR4bB = document.createElement( 'tr');
var vacatureTD4bB = document.createElement( 'td' );
var vacatureTR4bC = document.createElement( 'tr');
var vacatureTD4bC = document.createElement( 'td' );

var vacatureImg4 = document.createElement ( 'img' );
var vacatureLink4TDa = document.createElement ( 'a' );
var vacatureLink4Meta = document.createElement ( 'a' );
var vacatureLink4title = document.createElement ( 'a' );
var vacatureLink4description = document.createElement ( 'a' );

var vacatureMeta4 = document.createElement ( 'a' );
var vspan4a = document.createElement ( 'span' );
var vspan4b = document.createElement ( 'span' );
var vacatureTitle4 = document.createElement ( 'a' );
var vacatureDescription4 = document.createElement ( 'a' );


var vacature5 = document.createElement( 'div' );

var vacatureTable5 = document.createElement( 'table' );
var vacatureTBody5 = document.createElement( 'tbody');
var vacatureTR5  = document.createElement( 'tr');
var vacature5TDa = document.createElement( 'td' );
var vacature5TDb = document.createElement( 'td' );
var vacature5TDImgLink = document.createElement( 'a' );

var vacatureTable5b = document.createElement( 'table' );
var vacatureTBody5b = document.createElement( 'tbody');
var vacatureTR5bA = document.createElement( 'tr');
var vacatureTD5bA = document.createElement( 'td' );
var vacatureTR5bB = document.createElement( 'tr');
var vacatureTD5bB = document.createElement( 'td' );
var vacatureTR5bC = document.createElement( 'tr');
var vacatureTD5bC = document.createElement( 'td' );

var vacatureImg5 = document.createElement ( 'img' );
var vacatureLink5TDa = document.createElement ( 'a' );
var vacatureLink5Meta = document.createElement ( 'a' );
var vacatureLink5title = document.createElement ( 'a' );
var vacatureLink5description = document.createElement ( 'a' );

var vacatureMeta5 = document.createElement ( 'a' );
var vspan5a = document.createElement ( 'span' );
var vspan5b = document.createElement ( 'span' );
var vacatureTitle5 = document.createElement ( 'a' );
var vacatureDescription5 = document.createElement ( 'a' );


var vacature6 = document.createElement( 'div' );

var vacatureTable6 = document.createElement( 'table' );
var vacatureTBody6 = document.createElement( 'tbody');
var vacatureTR6  = document.createElement( 'tr');
var vacature6TDa = document.createElement( 'td' );
var vacature6TDb = document.createElement( 'td' );
var vacature6TDImgLink = document.createElement( 'a' );

var vacatureTable6b = document.createElement( 'table' );
var vacatureTBody6b = document.createElement( 'tbody');
var vacatureTR6bA = document.createElement( 'tr');
var vacatureTD6bA = document.createElement( 'td' );
var vacatureTR6bB = document.createElement( 'tr');
var vacatureTD6bB = document.createElement( 'td' );
var vacatureTR6bC = document.createElement( 'tr');
var vacatureTD6bC = document.createElement( 'td' );

var vacatureImg6 = document.createElement ( 'img' );
var vacatureLink6TDa = document.createElement ( 'a' );
var vacatureLink6Meta = document.createElement ( 'a' );
var vacatureLink6title = document.createElement ( 'a' );
var vacatureLink6description = document.createElement ( 'a' );

var vacatureMeta6 = document.createElement ( 'a' );
var vspan6a = document.createElement ( 'span' );
var vspan6b = document.createElement ( 'span' );
var vacatureTitle6 = document.createElement ( 'a' );
var vacatureDescription6 = document.createElement ( 'a' );


var vacature7 = document.createElement( 'div' );

var vacatureTable7 = document.createElement( 'table' );
var vacatureTBody7 = document.createElement( 'tbody');
var vacatureTR7  = document.createElement( 'tr');
var vacature7TDa = document.createElement( 'td' );
var vacature7TDb = document.createElement( 'td' );
var vacature7TDImgLink = document.createElement( 'a' );

var vacatureTable7b = document.createElement( 'table' );
var vacatureTBody7b = document.createElement( 'tbody');
var vacatureTR7bA = document.createElement( 'tr');
var vacatureTD7bA = document.createElement( 'td' );
var vacatureTR7bB = document.createElement( 'tr');
var vacatureTD7bB = document.createElement( 'td' );
var vacatureTR7bC = document.createElement( 'tr');
var vacatureTD7bC = document.createElement( 'td' );

var vacatureImg7 = document.createElement ( 'img' );
var vacatureLink7TDa = document.createElement ( 'a' );
var vacatureLink7Meta = document.createElement ( 'a' );
var vacatureLink7title = document.createElement ( 'a' );
var vacatureLink7description = document.createElement ( 'a' );

var vacatureMeta7 = document.createElement ( 'a' );
var vspan7a = document.createElement ( 'span' );
var vspan7b = document.createElement ( 'span' );
var vacatureTitle7 = document.createElement ( 'a' );
var vacatureDescription7 = document.createElement ( 'a' );


var vacature8 = document.createElement( 'div' );

var vacatureTable8 = document.createElement( 'table' );
var vacatureTBody8 = document.createElement( 'tbody');
var vacatureTR8  = document.createElement( 'tr');
var vacature8TDa = document.createElement( 'td' );
var vacature8TDb = document.createElement( 'td' );
var vacature8TDImgLink = document.createElement( 'a' );

var vacatureTable8b = document.createElement( 'table' );
var vacatureTBody8b = document.createElement( 'tbody');
var vacatureTR8bA = document.createElement( 'tr');
var vacatureTD8bA = document.createElement( 'td' );
var vacatureTR8bB = document.createElement( 'tr');
var vacatureTD8bB = document.createElement( 'td' );
var vacatureTR8bC = document.createElement( 'tr');
var vacatureTD8bC = document.createElement( 'td' );

var vacatureImg8 = document.createElement ( 'img' );
var vacatureLink8TDa = document.createElement ( 'a' );
var vacatureLink8Meta = document.createElement ( 'a' );
var vacatureLink8title = document.createElement ( 'a' );
var vacatureLink8description = document.createElement ( 'a' );

var vacatureMeta8 = document.createElement ( 'a' );
var vspan8a = document.createElement ( 'span' );
var vspan8b = document.createElement ( 'span' );
var vacatureTitle8 = document.createElement ( 'a' );
var vacatureDescription8 = document.createElement ( 'a' );


var vacature9 = document.createElement( 'div' );

var vacatureTable9 = document.createElement( 'table' );
var vacatureTBody9 = document.createElement( 'tbody');
var vacatureTR9  = document.createElement( 'tr');
var vacature9TDa = document.createElement( 'td' );
var vacature9TDb = document.createElement( 'td' );
var vacature9TDImgLink = document.createElement( 'a' );

var vacatureTable9b = document.createElement( 'table' );
var vacatureTBody9b = document.createElement( 'tbody');
var vacatureTR9bA = document.createElement( 'tr');
var vacatureTD9bA = document.createElement( 'td' );
var vacatureTR9bB = document.createElement( 'tr');
var vacatureTD9bB = document.createElement( 'td' );
var vacatureTR9bC = document.createElement( 'tr');
var vacatureTD9bC = document.createElement( 'td' );

var vacatureImg9 = document.createElement ( 'img' );
var vacatureLink9TDa = document.createElement ( 'a' );
var vacatureLink9Meta = document.createElement ( 'a' );
var vacatureLink9title = document.createElement ( 'a' );
var vacatureLink9description = document.createElement ( 'a' );

var vacatureMeta9 = document.createElement ( 'a' );
var vspan9a = document.createElement ( 'span' );
var vspan9b = document.createElement ( 'span' );
var vacatureTitle9 = document.createElement ( 'a' );
var vacatureDescription9 = document.createElement ( 'a' );


var vacature10 = document.createElement( 'div' );

var vacatureTable10 = document.createElement( 'table' );
var vacatureTBody10 = document.createElement( 'tbody');
var vacatureTR10  = document.createElement( 'tr');
var vacature10TDa = document.createElement( 'td' );
var vacature10TDb = document.createElement( 'td' );
var vacature10TDImgLink = document.createElement( 'a' );

var vacatureTable10b = document.createElement( 'table' );
var vacatureTBody10b = document.createElement( 'tbody');
var vacatureTR10bA = document.createElement( 'tr');
var vacatureTD10bA = document.createElement( 'td' );
var vacatureTR10bB = document.createElement( 'tr');
var vacatureTD10bB = document.createElement( 'td' );
var vacatureTR10bC = document.createElement( 'tr');
var vacatureTD10bC = document.createElement( 'td' );

var vacatureImg10 = document.createElement ( 'img' );
var vacatureLink10TDa = document.createElement ( 'a' );
var vacatureLink10Meta = document.createElement ( 'a' );
var vacatureLink10title = document.createElement ( 'a' );
var vacatureLink10description = document.createElement ( 'a' );

var vacatureMeta10 = document.createElement ( 'a' );
var vspan10a = document.createElement ( 'span' );
var vspan10b = document.createElement ( 'span' );
var vacatureTitle10 = document.createElement ( 'a' );
var vacatureDescription10 = document.createElement ( 'a' );


var vacature11 = document.createElement( 'div' );

var vacatureTable11 = document.createElement( 'table' );
var vacatureTBody11 = document.createElement( 'tbody');
var vacatureTR11  = document.createElement( 'tr');
var vacature11TDa = document.createElement( 'td' );
var vacature11TDb = document.createElement( 'td' );
var vacature11TDImgLink = document.createElement( 'a' );

var vacatureTable11b = document.createElement( 'table' );
var vacatureTBody11b = document.createElement( 'tbody');
var vacatureTR11bA = document.createElement( 'tr');
var vacatureTD11bA = document.createElement( 'td' );
var vacatureTR11bB = document.createElement( 'tr');
var vacatureTD11bB = document.createElement( 'td' );
var vacatureTR11bC = document.createElement( 'tr');
var vacatureTD11bC = document.createElement( 'td' );

var vacatureImg11 = document.createElement ( 'img' );
var vacatureLink11TDa = document.createElement ( 'a' );
var vacatureLink11Meta = document.createElement ( 'a' );
var vacatureLink11title = document.createElement ( 'a' );
var vacatureLink11description = document.createElement ( 'a' );

var vacatureMeta11 = document.createElement ( 'a' );
var vspan11a = document.createElement ( 'span' );
var vspan11b = document.createElement ( 'span' );
var vacatureTitle11 = document.createElement ( 'a' );
var vacatureDescription11 = document.createElement ( 'a' );


var vacature12 = document.createElement( 'div' );

var vacatureTable12 = document.createElement( 'table' );
var vacatureTBody12 = document.createElement( 'tbody');
var vacatureTR12  = document.createElement( 'tr');
var vacature12TDa = document.createElement( 'td' );
var vacature12TDb = document.createElement( 'td' );
var vacature12TDImgLink = document.createElement( 'a' );

var vacatureTable12b = document.createElement( 'table' );
var vacatureTBody12b = document.createElement( 'tbody');
var vacatureTR12bA = document.createElement( 'tr');
var vacatureTD12bA = document.createElement( 'td' );
var vacatureTR12bB = document.createElement( 'tr');
var vacatureTD12bB = document.createElement( 'td' );
var vacatureTR12bC = document.createElement( 'tr');
var vacatureTD12bC = document.createElement( 'td' );

var vacatureImg12 = document.createElement ( 'img' );
var vacatureLink12TDa = document.createElement ( 'a' );
var vacatureLink12Meta = document.createElement ( 'a' );
var vacatureLink12title = document.createElement ( 'a' );
var vacatureLink12description = document.createElement ( 'a' );

var vacatureMeta12 = document.createElement ( 'a' );
var vspan12a = document.createElement ( 'span' );
var vspan12b = document.createElement ( 'span' );
var vacatureTitle12 = document.createElement ( 'a' );
var vacatureDescription12 = document.createElement ( 'a' );


var vacature13 = document.createElement( 'div' );

var vacatureTable13 = document.createElement( 'table' );
var vacatureTBody13 = document.createElement( 'tbody');
var vacatureTR13  = document.createElement( 'tr');
var vacature13TDa = document.createElement( 'td' );
var vacature13TDb = document.createElement( 'td' );
var vacature13TDImgLink = document.createElement( 'a' );

var vacatureTable13b = document.createElement( 'table' );
var vacatureTBody13b = document.createElement( 'tbody');
var vacatureTR13bA = document.createElement( 'tr');
var vacatureTD13bA = document.createElement( 'td' );
var vacatureTR13bB = document.createElement( 'tr');
var vacatureTD13bB = document.createElement( 'td' );
var vacatureTR13bC = document.createElement( 'tr');
var vacatureTD13bC = document.createElement( 'td' );

var vacatureImg13 = document.createElement ( 'img' );
var vacatureLink13TDa = document.createElement ( 'a' );
var vacatureLink13Meta = document.createElement ( 'a' );
var vacatureLink13title = document.createElement ( 'a' );
var vacatureLink13description = document.createElement ( 'a' );

var vacatureMeta13 = document.createElement ( 'a' );
var vspan13a = document.createElement ( 'span' );
var vspan13b = document.createElement ( 'span' );
var vacatureTitle13 = document.createElement ( 'a' );
var vacatureDescription13 = document.createElement ( 'a' );


var vacature14 = document.createElement( 'div' );

var vacatureTable14 = document.createElement( 'table' );
var vacatureTBody14 = document.createElement( 'tbody');
var vacatureTR14  = document.createElement( 'tr');
var vacature14TDa = document.createElement( 'td' );
var vacature14TDb = document.createElement( 'td' );
var vacature14TDImgLink = document.createElement( 'a' );

var vacatureTable14b = document.createElement( 'table' );
var vacatureTBody14b = document.createElement( 'tbody');
var vacatureTR14bA = document.createElement( 'tr');
var vacatureTD14bA = document.createElement( 'td' );
var vacatureTR14bB = document.createElement( 'tr');
var vacatureTD14bB = document.createElement( 'td' );
var vacatureTR14bC = document.createElement( 'tr');
var vacatureTD14bC = document.createElement( 'td' );

var vacatureImg14 = document.createElement ( 'img' );
var vacatureLink14TDa = document.createElement ( 'a' );
var vacatureLink14Meta = document.createElement ( 'a' );
var vacatureLink14title = document.createElement ( 'a' );
var vacatureLink14description = document.createElement ( 'a' );

var vacatureMeta14 = document.createElement ( 'a' );
var vspan14a = document.createElement ( 'span' );
var vspan14b = document.createElement ( 'span' );
var vacatureTitle14 = document.createElement ( 'a' );
var vacatureDescription14 = document.createElement ( 'a' );


var vacature15 = document.createElement( 'div' );

var vacatureTable15 = document.createElement( 'table' );
var vacatureTBody15 = document.createElement( 'tbody');
var vacatureTR15  = document.createElement( 'tr');
var vacature15TDa = document.createElement( 'td' );
var vacature15TDb = document.createElement( 'td' );
var vacature15TDImgLink = document.createElement( 'a' );

var vacatureTable15b = document.createElement( 'table' );
var vacatureTBody15b = document.createElement( 'tbody');
var vacatureTR15bA = document.createElement( 'tr');
var vacatureTD15bA = document.createElement( 'td' );
var vacatureTR15bB = document.createElement( 'tr');
var vacatureTD15bB = document.createElement( 'td' );
var vacatureTR15bC = document.createElement( 'tr');
var vacatureTD15bC = document.createElement( 'td' );

var vacatureImg15 = document.createElement ( 'img' );
var vacatureLink15TDa = document.createElement ( 'a' );
var vacatureLink15Meta = document.createElement ( 'a' );
var vacatureLink15title = document.createElement ( 'a' );
var vacatureLink15description = document.createElement ( 'a' );

var vacatureMeta15 = document.createElement ( 'a' );
var vspan15a = document.createElement ( 'span' );
var vspan15b = document.createElement ( 'span' );
var vacatureTitle15 = document.createElement ( 'a' );
var vacatureDescription15 = document.createElement ( 'a' );


var vacature16 = document.createElement( 'div' );

var vacatureTable16 = document.createElement( 'table' );
var vacatureTBody16 = document.createElement( 'tbody');
var vacatureTR16  = document.createElement( 'tr');
var vacature16TDa = document.createElement( 'td' );
var vacature16TDb = document.createElement( 'td' );
var vacature16TDImgLink = document.createElement( 'a' );

var vacatureTable16b = document.createElement( 'table' );
var vacatureTBody16b = document.createElement( 'tbody');
var vacatureTR16bA = document.createElement( 'tr');
var vacatureTD16bA = document.createElement( 'td' );
var vacatureTR16bB = document.createElement( 'tr');
var vacatureTD16bB = document.createElement( 'td' );
var vacatureTR16bC = document.createElement( 'tr');
var vacatureTD16bC = document.createElement( 'td' );

var vacatureImg16 = document.createElement ( 'img' );
var vacatureLink16TDa = document.createElement ( 'a' );
var vacatureLink16Meta = document.createElement ( 'a' );
var vacatureLink16title = document.createElement ( 'a' );
var vacatureLink16description = document.createElement ( 'a' );

var vacatureMeta16 = document.createElement ( 'a' );
var vspan16a = document.createElement ( 'span' );
var vspan16b = document.createElement ( 'span' );
var vacatureTitle16 = document.createElement ( 'a' );
var vacatureDescription16 = document.createElement ( 'a' );


var vacature17 = document.createElement( 'div' );

var vacatureTable17 = document.createElement( 'table' );
var vacatureTBody17 = document.createElement( 'tbody');
var vacatureTR17  = document.createElement( 'tr');
var vacature17TDa = document.createElement( 'td' );
var vacature17TDb = document.createElement( 'td' );
var vacature17TDImgLink = document.createElement( 'a' );

var vacatureTable17b = document.createElement( 'table' );
var vacatureTBody17b = document.createElement( 'tbody');
var vacatureTR17bA = document.createElement( 'tr');
var vacatureTD17bA = document.createElement( 'td' );
var vacatureTR17bB = document.createElement( 'tr');
var vacatureTD17bB = document.createElement( 'td' );
var vacatureTR17bC = document.createElement( 'tr');
var vacatureTD17bC = document.createElement( 'td' );

var vacatureImg17 = document.createElement ( 'img' );
var vacatureLink17TDa = document.createElement ( 'a' );
var vacatureLink17Meta = document.createElement ( 'a' );
var vacatureLink17title = document.createElement ( 'a' );
var vacatureLink17description = document.createElement ( 'a' );

var vacatureMeta17 = document.createElement ( 'a' );
var vspan17a = document.createElement ( 'span' );
var vspan17b = document.createElement ( 'span' );
var vacatureTitle17 = document.createElement ( 'a' );
var vacatureDescription17 = document.createElement ( 'a' );


var vacature18 = document.createElement( 'div' );

var vacatureTable18 = document.createElement( 'table' );
var vacatureTBody18 = document.createElement( 'tbody');
var vacatureTR18  = document.createElement( 'tr');
var vacature18TDa = document.createElement( 'td' );
var vacature18TDb = document.createElement( 'td' );
var vacature18TDImgLink = document.createElement( 'a' );

var vacatureTable18b = document.createElement( 'table' );
var vacatureTBody18b = document.createElement( 'tbody');
var vacatureTR18bA = document.createElement( 'tr');
var vacatureTD18bA = document.createElement( 'td' );
var vacatureTR18bB = document.createElement( 'tr');
var vacatureTD18bB = document.createElement( 'td' );
var vacatureTR18bC = document.createElement( 'tr');
var vacatureTD18bC = document.createElement( 'td' );

var vacatureImg18 = document.createElement ( 'img' );
var vacatureLink18TDa = document.createElement ( 'a' );
var vacatureLink18Meta = document.createElement ( 'a' );
var vacatureLink18title = document.createElement ( 'a' );
var vacatureLink18description = document.createElement ( 'a' );

var vacatureMeta18 = document.createElement ( 'a' );
var vspan18a = document.createElement ( 'span' );
var vspan18b = document.createElement ( 'span' );
var vacatureTitle18 = document.createElement ( 'a' );
var vacatureDescription18 = document.createElement ( 'a' );


var vacature19 = document.createElement( 'div' );

var vacatureTable19 = document.createElement( 'table' );
var vacatureTBody19 = document.createElement( 'tbody');
var vacatureTR19  = document.createElement( 'tr');
var vacature19TDa = document.createElement( 'td' );
var vacature19TDb = document.createElement( 'td' );
var vacature19TDImgLink = document.createElement( 'a' );

var vacatureTable19b = document.createElement( 'table' );
var vacatureTBody19b = document.createElement( 'tbody');
var vacatureTR19bA = document.createElement( 'tr');
var vacatureTD19bA = document.createElement( 'td' );
var vacatureTR19bB = document.createElement( 'tr');
var vacatureTD19bB = document.createElement( 'td' );
var vacatureTR19bC = document.createElement( 'tr');
var vacatureTD19bC = document.createElement( 'td' );

var vacatureImg19 = document.createElement ( 'img' );
var vacatureLink19TDa = document.createElement ( 'a' );
var vacatureLink19Meta = document.createElement ( 'a' );
var vacatureLink19title = document.createElement ( 'a' );
var vacatureLink19description = document.createElement ( 'a' );

var vacatureMeta19 = document.createElement ( 'a' );
var vspan19a = document.createElement ( 'span' );
var vspan19b = document.createElement ( 'span' );
var vacatureTitle19 = document.createElement ( 'a' );
var vacatureDescription19 = document.createElement ( 'a' );


var vacature20 = document.createElement( 'div' );

var vacatureTable20 = document.createElement( 'table' );
var vacatureTBody20 = document.createElement( 'tbody');
var vacatureTR20  = document.createElement( 'tr');
var vacature20TDa = document.createElement( 'td' );
var vacature20TDb = document.createElement( 'td' );
var vacature20TDImgLink = document.createElement( 'a' );

var vacatureTable20b = document.createElement( 'table' );
var vacatureTBody20b = document.createElement( 'tbody');
var vacatureTR20bA = document.createElement( 'tr');
var vacatureTD20bA = document.createElement( 'td' );
var vacatureTR20bB = document.createElement( 'tr');
var vacatureTD20bB = document.createElement( 'td' );
var vacatureTR20bC = document.createElement( 'tr');
var vacatureTD20bC = document.createElement( 'td' );

var vacatureImg20 = document.createElement ( 'img' );
var vacatureLink20TDa = document.createElement ( 'a' );
var vacatureLink20Meta = document.createElement ( 'a' );
var vacatureLink20title = document.createElement ( 'a' );
var vacatureLink20description = document.createElement ( 'a' );

var vacatureMeta20 = document.createElement ( 'a' );
var vspan20a = document.createElement ( 'span' );
var vspan20b = document.createElement ( 'span' );
var vacatureTitle20 = document.createElement ( 'a' );
var vacatureDescription20 = document.createElement ( 'a' );


var vacature21 = document.createElement( 'div' );

var vacatureTable21 = document.createElement( 'table' );
var vacatureTBody21 = document.createElement( 'tbody');
var vacatureTR21  = document.createElement( 'tr');
var vacature21TDa = document.createElement( 'td' );
var vacature21TDb = document.createElement( 'td' );
var vacature21TDImgLink = document.createElement( 'a' );

var vacatureTable21b = document.createElement( 'table' );
var vacatureTBody21b = document.createElement( 'tbody');
var vacatureTR21bA = document.createElement( 'tr');
var vacatureTD21bA = document.createElement( 'td' );
var vacatureTR21bB = document.createElement( 'tr');
var vacatureTD21bB = document.createElement( 'td' );
var vacatureTR21bC = document.createElement( 'tr');
var vacatureTD21bC = document.createElement( 'td' );

var vacatureImg21 = document.createElement ( 'img' );
var vacatureLink21TDa = document.createElement ( 'a' );
var vacatureLink21Meta = document.createElement ( 'a' );
var vacatureLink21title = document.createElement ( 'a' );
var vacatureLink21description = document.createElement ( 'a' );

var vacatureMeta21 = document.createElement ( 'a' );
var vspan21a = document.createElement ( 'span' );
var vspan21b = document.createElement ( 'span' );
var vacatureTitle21 = document.createElement ( 'a' );
var vacatureDescription21 = document.createElement ( 'a' );


var vacature22 = document.createElement( 'div' );

var vacatureTable22 = document.createElement( 'table' );
var vacatureTBody22 = document.createElement( 'tbody');
var vacatureTR22  = document.createElement( 'tr');
var vacature22TDa = document.createElement( 'td' );
var vacature22TDb = document.createElement( 'td' );
var vacature22TDImgLink = document.createElement( 'a' );

var vacatureTable22b = document.createElement( 'table' );
var vacatureTBody22b = document.createElement( 'tbody');
var vacatureTR22bA = document.createElement( 'tr');
var vacatureTD22bA = document.createElement( 'td' );
var vacatureTR22bB = document.createElement( 'tr');
var vacatureTD22bB = document.createElement( 'td' );
var vacatureTR22bC = document.createElement( 'tr');
var vacatureTD22bC = document.createElement( 'td' );

var vacatureImg22 = document.createElement ( 'img' );
var vacatureLink22TDa = document.createElement ( 'a' );
var vacatureLink22Meta = document.createElement ( 'a' );
var vacatureLink22title = document.createElement ( 'a' );
var vacatureLink22description = document.createElement ( 'a' );

var vacatureMeta22 = document.createElement ( 'a' );
var vspan22a = document.createElement ( 'span' );
var vspan22b = document.createElement ( 'span' );
var vacatureTitle22 = document.createElement ( 'a' );
var vacatureDescription22 = document.createElement ( 'a' );


var vacature23 = document.createElement( 'div' );

var vacatureTable23 = document.createElement( 'table' );
var vacatureTBody23 = document.createElement( 'tbody');
var vacatureTR23  = document.createElement( 'tr');
var vacature23TDa = document.createElement( 'td' );
var vacature23TDb = document.createElement( 'td' );
var vacature23TDImgLink = document.createElement( 'a' );

var vacatureTable23b = document.createElement( 'table' );
var vacatureTBody23b = document.createElement( 'tbody');
var vacatureTR23bA = document.createElement( 'tr');
var vacatureTD23bA = document.createElement( 'td' );
var vacatureTR23bB = document.createElement( 'tr');
var vacatureTD23bB = document.createElement( 'td' );
var vacatureTR23bC = document.createElement( 'tr');
var vacatureTD23bC = document.createElement( 'td' );

var vacatureImg23 = document.createElement ( 'img' );
var vacatureLink23TDa = document.createElement ( 'a' );
var vacatureLink23Meta = document.createElement ( 'a' );
var vacatureLink23title = document.createElement ( 'a' );
var vacatureLink23description = document.createElement ( 'a' );

var vacatureMeta23 = document.createElement ( 'a' );
var vspan23a = document.createElement ( 'span' );
var vspan23b = document.createElement ( 'span' );
var vacatureTitle23 = document.createElement ( 'a' );
var vacatureDescription23 = document.createElement ( 'a' );


var vacature24 = document.createElement( 'div' );

var vacatureTable24 = document.createElement( 'table' );
var vacatureTBody24 = document.createElement( 'tbody');
var vacatureTR24  = document.createElement( 'tr');
var vacature24TDa = document.createElement( 'td' );
var vacature24TDb = document.createElement( 'td' );
var vacature24TDImgLink = document.createElement( 'a' );

var vacatureTable24b = document.createElement( 'table' );
var vacatureTBody24b = document.createElement( 'tbody');
var vacatureTR24bA = document.createElement( 'tr');
var vacatureTD24bA = document.createElement( 'td' );
var vacatureTR24bB = document.createElement( 'tr');
var vacatureTD24bB = document.createElement( 'td' );
var vacatureTR24bC = document.createElement( 'tr');
var vacatureTD24bC = document.createElement( 'td' );

var vacatureImg24 = document.createElement ( 'img' );
var vacatureLink24TDa = document.createElement ( 'a' );
var vacatureLink24Meta = document.createElement ( 'a' );
var vacatureLink24title = document.createElement ( 'a' );
var vacatureLink24description = document.createElement ( 'a' );

var vacatureMeta24 = document.createElement ( 'a' );
var vspan24a = document.createElement ( 'span' );
var vspan24b = document.createElement ( 'span' );
var vacatureTitle24 = document.createElement ( 'a' );
var vacatureDescription24 = document.createElement ( 'a' );


var vacature25 = document.createElement( 'div' );

var vacatureTable25 = document.createElement( 'table' );
var vacatureTBody25 = document.createElement( 'tbody');
var vacatureTR25  = document.createElement( 'tr');
var vacature25TDa = document.createElement( 'td' );
var vacature25TDb = document.createElement( 'td' );
var vacature25TDImgLink = document.createElement( 'a' );

var vacatureTable25b = document.createElement( 'table' );
var vacatureTBody25b = document.createElement( 'tbody');
var vacatureTR25bA = document.createElement( 'tr');
var vacatureTD25bA = document.createElement( 'td' );
var vacatureTR25bB = document.createElement( 'tr');
var vacatureTD25bB = document.createElement( 'td' );
var vacatureTR25bC = document.createElement( 'tr');
var vacatureTD25bC = document.createElement( 'td' );

var vacatureImg25 = document.createElement ( 'img' );
var vacatureLink25TDa = document.createElement ( 'a' );
var vacatureLink25Meta = document.createElement ( 'a' );
var vacatureLink25title = document.createElement ( 'a' );
var vacatureLink25description = document.createElement ( 'a' );

var vacatureMeta25 = document.createElement ( 'a' );
var vspan25a = document.createElement ( 'span' );
var vspan25b = document.createElement ( 'span' );
var vacatureTitle25 = document.createElement ( 'a' );
var vacatureDescription25 = document.createElement ( 'a' );
*/


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

//test Vacature Items

var vacature99 = document.createElement( 'div' );

var vacatureTable99 = document.createElement( 'table' );
var vacatureTBody99 = document.createElement( 'tbody');
var vacatureTR99  = document.createElement( 'tr');
var vacature99TDa = document.createElement( 'td' );
var vacature99TDb = document.createElement( 'td' );
var vacature99TDImgLink = document.createElement( 'a' );

var vacatureTable99b = document.createElement( 'table' );
var vacatureTBody99b = document.createElement( 'tbody');
var vacatureTR99bA = document.createElement( 'tr');
var vacatureTD99bA = document.createElement( 'td' );
var vacatureTR99bB = document.createElement( 'tr');
var vacatureTD99bB = document.createElement( 'td' );
var vacatureTR99bC = document.createElement( 'tr');
var vacatureTD99bC = document.createElement( 'td' );

var vacatureImg99 = document.createElement ( 'img' );
var vacatureLink99TDa = document.createElement ( 'a' );
var vacatureLink99Meta = document.createElement ( 'a' );
var vacatureLink99title = document.createElement ( 'a' );
var vacatureLink99description = document.createElement ( 'a' );

var vacatureMeta99 = document.createElement ( 'a' );
var vspan99a = document.createElement ( 'span' );
var vspan99b = document.createElement ( 'span' );
var vacatureTitle99 = document.createElement ( 'a' );
var vacatureDescription99 = document.createElement ( 'a' );

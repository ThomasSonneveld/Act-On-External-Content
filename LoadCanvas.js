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
var artikelenGrootContainer = document.createElement( 'div' );
var agendaAcademyContainer = document.createElement( 'div' );
var vacatureContainer = document.createElement( 'div' );
vacatureContainer.id = 'vacatureContainer';
var vacatureContainerContent = document.createElement( 'div' );
vacatureContainerContent.id = 'vacatureContainerContent';


//Arikelen Klein

var artikelKlein1 = document.createElement( 'div' );

var artikelKleinTable1a = document.createElement( 'table' );
var artikelKleinTBody1a = document.createElement( 'tbody');
var artikelKleinTR1a = document.createElement( 'tr');
var artikelKlein1TDa = document.createElement( 'td' );

var artikelKleinTable1b = document.createElement( 'table' );
var artikelKleinTBody1b = document.createElement( 'tbody');
var artikelKleinTR1b = document.createElement( 'tr');
var artikelKlein1TDbA = document.createElement( 'td' );
var artikelKlein1TDbB = document.createElement( 'td' );
var artikelKlein1TDDiv = document.createElement( 'div' );

var artikelKleinTable1c = document.createElement( 'table' );
var artikelKleinTBody1c = document.createElement( 'tbody');
var artikelKleinTR1cA = document.createElement( 'tr');
var artikelKlein1TDcA = document.createElement( 'td' );
var artikelKleinTR1cB = document.createElement( 'tr');
var artikelKlein1TDcB = document.createElement( 'td' );

var artikelKleinImg1 = document.createElement ( 'img' );
var artikelKleinImg1Link = document.createElement ( 'a' );
var artikelKleinImg1a = document.createElement ( 'img' );
var artikelKleinImg1aLink = document.createElement ( 'a' );
var artikelKleinTitle1Link = document.createElement ( 'a' );
var artikelKleinDescription1 = document.createElement ( 'a' );
var artikelKleinCTA1 = document.createElement ( 'a' );


var artikelKlein2 = document.createElement( 'div' );

var artikelKleinTable2a = document.createElement( 'table' );
var artikelKleinTBody2a = document.createElement( 'tbody');
var artikelKleinTR2a = document.createElement( 'tr');
var artikelKlein2TDa = document.createElement( 'td' );

var artikelKleinTable2b = document.createElement( 'table' );
var artikelKleinTBody2b = document.createElement( 'tbody');
var artikelKleinTR2b = document.createElement( 'tr');
var artikelKlein2TDbA = document.createElement( 'td' );
var artikelKlein2TDbB = document.createElement( 'td' );
var artikelKlein2TDDiv = document.createElement( 'div' );

var artikelKleinTable2c = document.createElement( 'table' );
var artikelKleinTBody2c = document.createElement( 'tbody');
var artikelKleinTR2cA = document.createElement( 'tr');
var artikelKlein2TDcA = document.createElement( 'td' );
var artikelKleinTR2cB = document.createElement( 'tr');
var artikelKlein2TDcB = document.createElement( 'td' );

var artikelKleinImg2 = document.createElement ( 'img' );
var artikelKleinImg2Link = document.createElement ( 'a' );
var artikelKleinImg2a = document.createElement ( 'img' );
var artikelKleinImg2aLink = document.createElement ( 'a' );
var artikelKleinTitle2Link = document.createElement ( 'a' );
var artikelKleinDescription2 = document.createElement ( 'a' );
var artikelKleinCTA2 = document.createElement ( 'a' );


var artikelKlein3 = document.createElement( 'div' );

var artikelKleinTable3a = document.createElement( 'table' );
var artikelKleinTBody3a = document.createElement( 'tbody');
var artikelKleinTR3a = document.createElement( 'tr');
var artikelKlein3TDa = document.createElement( 'td' );

var artikelKleinTable3b = document.createElement( 'table' );
var artikelKleinTBody3b = document.createElement( 'tbody');
var artikelKleinTR3b = document.createElement( 'tr');
var artikelKlein3TDbA = document.createElement( 'td' );
var artikelKlein3TDbB = document.createElement( 'td' );
var artikelKlein3TDDiv = document.createElement( 'div' );

var artikelKleinTable3c = document.createElement( 'table' );
var artikelKleinTBody3c = document.createElement( 'tbody');
var artikelKleinTR3cA = document.createElement( 'tr');
var artikelKlein3TDcA = document.createElement( 'td' );
var artikelKleinTR3cB = document.createElement( 'tr');
var artikelKlein3TDcB = document.createElement( 'td' );

var artikelKleinImg3 = document.createElement ( 'img' );
var artikelKleinImg3Link = document.createElement ( 'a' );
var artikelKleinImg3a = document.createElement ( 'img' );
var artikelKleinImg3aLink = document.createElement ( 'a' );
var artikelKleinTitle3Link = document.createElement ( 'a' );
var artikelKleinDescription3 = document.createElement ( 'a' );
var artikelKleinCTA3 = document.createElement ( 'a' );


var artikelKlein4 = document.createElement( 'div' );

var artikelKleinTable4a = document.createElement( 'table' );
var artikelKleinTBody4a = document.createElement( 'tbody');
var artikelKleinTR4a = document.createElement( 'tr');
var artikelKlein4TDa = document.createElement( 'td' );

var artikelKleinTable4b = document.createElement( 'table' );
var artikelKleinTBody4b = document.createElement( 'tbody');
var artikelKleinTR4b = document.createElement( 'tr');
var artikelKlein4TDbA = document.createElement( 'td' );
var artikelKlein4TDbB = document.createElement( 'td' );
var artikelKlein4TDDiv = document.createElement( 'div' );

var artikelKleinTable4c = document.createElement( 'table' );
var artikelKleinTBody4c = document.createElement( 'tbody');
var artikelKleinTR4cA = document.createElement( 'tr');
var artikelKlein4TDcA = document.createElement( 'td' );
var artikelKleinTR4cB = document.createElement( 'tr');
var artikelKlein4TDcB = document.createElement( 'td' );

var artikelKleinImg4 = document.createElement ( 'img' );
var artikelKleinImg4Link = document.createElement ( 'a' );
var artikelKleinImg4a = document.createElement ( 'img' );
var artikelKleinImg4aLink = document.createElement ( 'a' );
var artikelKleinTitle4Link = document.createElement ( 'a' );
var artikelKleinDescription4 = document.createElement ( 'a' );
var artikelKleinCTA4 = document.createElement ( 'a' );


var artikelKlein5 = document.createElement( 'div' );

var artikelKleinTable5a = document.createElement( 'table' );
var artikelKleinTBody5a = document.createElement( 'tbody');
var artikelKleinTR5a = document.createElement( 'tr');
var artikelKlein5TDa = document.createElement( 'td' );

var artikelKleinTable5b = document.createElement( 'table' );
var artikelKleinTBody5b = document.createElement( 'tbody');
var artikelKleinTR5b = document.createElement( 'tr');
var artikelKlein5TDbA = document.createElement( 'td' );
var artikelKlein5TDbB = document.createElement( 'td' );
var artikelKlein5TDDiv = document.createElement( 'div' );

var artikelKleinTable5c = document.createElement( 'table' );
var artikelKleinTBody5c = document.createElement( 'tbody');
var artikelKleinTR5cA = document.createElement( 'tr');
var artikelKlein5TDcA = document.createElement( 'td' );
var artikelKleinTR5cB = document.createElement( 'tr');
var artikelKlein5TDcB = document.createElement( 'td' );

var artikelKleinImg5 = document.createElement ( 'img' );
var artikelKleinImg5Link = document.createElement ( 'a' );
var artikelKleinImg5a = document.createElement ( 'img' );
var artikelKleinImg5aLink = document.createElement ( 'a' );
var artikelKleinTitle5Link = document.createElement ( 'a' );
var artikelKleinDescription5 = document.createElement ( 'a' );
var artikelKleinCTA5 = document.createElement ( 'a' );


var artikelKlein6 = document.createElement( 'div' );

var artikelKleinTable6a = document.createElement( 'table' );
var artikelKleinTBody6a = document.createElement( 'tbody');
var artikelKleinTR6a = document.createElement( 'tr');
var artikelKlein6TDa = document.createElement( 'td' );

var artikelKleinTable6b = document.createElement( 'table' );
var artikelKleinTBody6b = document.createElement( 'tbody');
var artikelKleinTR6b = document.createElement( 'tr');
var artikelKlein6TDbA = document.createElement( 'td' );
var artikelKlein6TDbB = document.createElement( 'td' );
var artikelKlein6TDDiv = document.createElement( 'div' );

var artikelKleinTable6c = document.createElement( 'table' );
var artikelKleinTBody6c = document.createElement( 'tbody');
var artikelKleinTR6cA = document.createElement( 'tr');
var artikelKlein6TDcA = document.createElement( 'td' );
var artikelKleinTR6cB = document.createElement( 'tr');
var artikelKlein6TDcB = document.createElement( 'td' );

var artikelKleinImg6 = document.createElement ( 'img' );
var artikelKleinImg6Link = document.createElement ( 'a' );
var artikelKleinImg6a = document.createElement ( 'img' );
var artikelKleinImg6aLink = document.createElement ( 'a' );
var artikelKleinTitle6Link = document.createElement ( 'a' );
var artikelKleinDescription6 = document.createElement ( 'a' );
var artikelKleinCTA6 = document.createElement ( 'a' );


var artikelKlein7 = document.createElement( 'div' );

var artikelKleinTable7a = document.createElement( 'table' );
var artikelKleinTBody7a = document.createElement( 'tbody');
var artikelKleinTR7a = document.createElement( 'tr');
var artikelKlein7TDa = document.createElement( 'td' );

var artikelKleinTable7b = document.createElement( 'table' );
var artikelKleinTBody7b = document.createElement( 'tbody');
var artikelKleinTR7b = document.createElement( 'tr');
var artikelKlein7TDbA = document.createElement( 'td' );
var artikelKlein7TDbB = document.createElement( 'td' );
var artikelKlein7TDDiv = document.createElement( 'div' );

var artikelKleinTable7c = document.createElement( 'table' );
var artikelKleinTBody7c = document.createElement( 'tbody');
var artikelKleinTR7cA = document.createElement( 'tr');
var artikelKlein7TDcA = document.createElement( 'td' );
var artikelKleinTR7cB = document.createElement( 'tr');
var artikelKlein7TDcB = document.createElement( 'td' );

var artikelKleinImg7 = document.createElement ( 'img' );
var artikelKleinImg7Link = document.createElement ( 'a' );
var artikelKleinImg7a = document.createElement ( 'img' );
var artikelKleinImg7aLink = document.createElement ( 'a' );
var artikelKleinTitle7Link = document.createElement ( 'a' );
var artikelKleinDescription7 = document.createElement ( 'a' );
var artikelKleinCTA7 = document.createElement ( 'a' );


var artikelKlein8 = document.createElement( 'div' );

var artikelKleinTable8a = document.createElement( 'table' );
var artikelKleinTBody8a = document.createElement( 'tbody');
var artikelKleinTR8a = document.createElement( 'tr');
var artikelKlein8TDa = document.createElement( 'td' );

var artikelKleinTable8b = document.createElement( 'table' );
var artikelKleinTBody8b = document.createElement( 'tbody');
var artikelKleinTR8b = document.createElement( 'tr');
var artikelKlein8TDbA = document.createElement( 'td' );
var artikelKlein8TDbB = document.createElement( 'td' );
var artikelKlein8TDDiv = document.createElement( 'div' );

var artikelKleinTable8c = document.createElement( 'table' );
var artikelKleinTBody8c = document.createElement( 'tbody');
var artikelKleinTR8cA = document.createElement( 'tr');
var artikelKlein8TDcA = document.createElement( 'td' );
var artikelKleinTR8cB = document.createElement( 'tr');
var artikelKlein8TDcB = document.createElement( 'td' );

var artikelKleinImg8 = document.createElement ( 'img' );
var artikelKleinImg8Link = document.createElement ( 'a' );
var artikelKleinImg8a = document.createElement ( 'img' );
var artikelKleinImg8aLink = document.createElement ( 'a' );
var artikelKleinTitle8Link = document.createElement ( 'a' );
var artikelKleinDescription8 = document.createElement ( 'a' );
var artikelKleinCTA8 = document.createElement ( 'a' );


var artikelKlein9 = document.createElement( 'div' );

var artikelKleinTable9a = document.createElement( 'table' );
var artikelKleinTBody9a = document.createElement( 'tbody');
var artikelKleinTR9a = document.createElement( 'tr');
var artikelKlein9TDa = document.createElement( 'td' );

var artikelKleinTable9b = document.createElement( 'table' );
var artikelKleinTBody9b = document.createElement( 'tbody');
var artikelKleinTR9b = document.createElement( 'tr');
var artikelKlein9TDbA = document.createElement( 'td' );
var artikelKlein9TDbB = document.createElement( 'td' );
var artikelKlein9TDDiv = document.createElement( 'div' );

var artikelKleinTable9c = document.createElement( 'table' );
var artikelKleinTBody9c = document.createElement( 'tbody');
var artikelKleinTR9cA = document.createElement( 'tr');
var artikelKlein9TDcA = document.createElement( 'td' );
var artikelKleinTR9cB = document.createElement( 'tr');
var artikelKlein9TDcB = document.createElement( 'td' );

var artikelKleinImg9 = document.createElement ( 'img' );
var artikelKleinImg9Link = document.createElement ( 'a' );
var artikelKleinImg9a = document.createElement ( 'img' );
var artikelKleinImg9aLink = document.createElement ( 'a' );
var artikelKleinTitle9Link = document.createElement ( 'a' );
var artikelKleinDescription9 = document.createElement ( 'a' );
var artikelKleinCTA9 = document.createElement ( 'a' );


var artikelKlein10 = document.createElement( 'div' );

var artikelKleinTable10a = document.createElement( 'table' );
var artikelKleinTBody10a = document.createElement( 'tbody');
var artikelKleinTR10a = document.createElement( 'tr');
var artikelKlein10TDa = document.createElement( 'td' );

var artikelKleinTable10b = document.createElement( 'table' );
var artikelKleinTBody10b = document.createElement( 'tbody');
var artikelKleinTR10b = document.createElement( 'tr');
var artikelKlein10TDbA = document.createElement( 'td' );
var artikelKlein10TDbB = document.createElement( 'td' );
var artikelKlein10TDDiv = document.createElement( 'div' );

var artikelKleinTable10c = document.createElement( 'table' );
var artikelKleinTBody10c = document.createElement( 'tbody');
var artikelKleinTR10cA = document.createElement( 'tr');
var artikelKlein10TDcA = document.createElement( 'td' );
var artikelKleinTR10cB = document.createElement( 'tr');
var artikelKlein10TDcB = document.createElement( 'td' );

var artikelKleinImg10 = document.createElement ( 'img' );
var artikelKleinImg10Link = document.createElement ( 'a' );
var artikelKleinImg10a = document.createElement ( 'img' );
var artikelKleinImg10aLink = document.createElement ( 'a' );
var artikelKleinTitle10Link = document.createElement ( 'a' );
var artikelKleinDescription10 = document.createElement ( 'a' );
var artikelKleinCTA10 = document.createElement ( 'a' );


var artikelKlein11 = document.createElement( 'div' );

var artikelKleinTable11a = document.createElement( 'table' );
var artikelKleinTBody11a = document.createElement( 'tbody');
var artikelKleinTR11a = document.createElement( 'tr');
var artikelKlein11TDa = document.createElement( 'td' );

var artikelKleinTable11b = document.createElement( 'table' );
var artikelKleinTBody11b = document.createElement( 'tbody');
var artikelKleinTR11b = document.createElement( 'tr');
var artikelKlein11TDbA = document.createElement( 'td' );
var artikelKlein11TDbB = document.createElement( 'td' );
var artikelKlein11TDDiv = document.createElement( 'div' );

var artikelKleinTable11c = document.createElement( 'table' );
var artikelKleinTBody11c = document.createElement( 'tbody');
var artikelKleinTR11cA = document.createElement( 'tr');
var artikelKlein11TDcA = document.createElement( 'td' );
var artikelKleinTR11cB = document.createElement( 'tr');
var artikelKlein11TDcB = document.createElement( 'td' );

var artikelKleinImg11 = document.createElement ( 'img' );
var artikelKleinImg11Link = document.createElement ( 'a' );
var artikelKleinImg11a = document.createElement ( 'img' );
var artikelKleinImg11aLink = document.createElement ( 'a' );
var artikelKleinTitle11Link = document.createElement ( 'a' );
var artikelKleinDescription11 = document.createElement ( 'a' );
var artikelKleinCTA11 = document.createElement ( 'a' );


var artikelKlein12 = document.createElement( 'div' );

var artikelKleinTable12a = document.createElement( 'table' );
var artikelKleinTBody12a = document.createElement( 'tbody');
var artikelKleinTR12a = document.createElement( 'tr');
var artikelKlein12TDa = document.createElement( 'td' );

var artikelKleinTable12b = document.createElement( 'table' );
var artikelKleinTBody12b = document.createElement( 'tbody');
var artikelKleinTR12b = document.createElement( 'tr');
var artikelKlein12TDbA = document.createElement( 'td' );
var artikelKlein12TDbB = document.createElement( 'td' );
var artikelKlein12TDDiv = document.createElement( 'div' );

var artikelKleinTable12c = document.createElement( 'table' );
var artikelKleinTBody12c = document.createElement( 'tbody');
var artikelKleinTR12cA = document.createElement( 'tr');
var artikelKlein12TDcA = document.createElement( 'td' );
var artikelKleinTR12cB = document.createElement( 'tr');
var artikelKlein12TDcB = document.createElement( 'td' );

var artikelKleinImg12 = document.createElement ( 'img' );
var artikelKleinImg12Link = document.createElement ( 'a' );
var artikelKleinImg12a = document.createElement ( 'img' );
var artikelKleinImg12aLink = document.createElement ( 'a' );
var artikelKleinTitle12Link = document.createElement ( 'a' );
var artikelKleinDescription12 = document.createElement ( 'a' );
var artikelKleinCTA12 = document.createElement ( 'a' );


var artikelKlein13 = document.createElement( 'div' );

var artikelKleinTable13a = document.createElement( 'table' );
var artikelKleinTBody13a = document.createElement( 'tbody');
var artikelKleinTR13a = document.createElement( 'tr');
var artikelKlein13TDa = document.createElement( 'td' );

var artikelKleinTable13b = document.createElement( 'table' );
var artikelKleinTBody13b = document.createElement( 'tbody');
var artikelKleinTR13b = document.createElement( 'tr');
var artikelKlein13TDbA = document.createElement( 'td' );
var artikelKlein13TDbB = document.createElement( 'td' );
var artikelKlein13TDDiv = document.createElement( 'div' );

var artikelKleinTable13c = document.createElement( 'table' );
var artikelKleinTBody13c = document.createElement( 'tbody');
var artikelKleinTR13cA = document.createElement( 'tr');
var artikelKlein13TDcA = document.createElement( 'td' );
var artikelKleinTR13cB = document.createElement( 'tr');
var artikelKlein13TDcB = document.createElement( 'td' );

var artikelKleinImg13 = document.createElement ( 'img' );
var artikelKleinImg13Link = document.createElement ( 'a' );
var artikelKleinImg13a = document.createElement ( 'img' );
var artikelKleinImg13aLink = document.createElement ( 'a' );
var artikelKleinTitle13Link = document.createElement ( 'a' );
var artikelKleinDescription13 = document.createElement ( 'a' );
var artikelKleinCTA13 = document.createElement ( 'a' );


var artikelKlein14 = document.createElement( 'div' );

var artikelKleinTable14a = document.createElement( 'table' );
var artikelKleinTBody14a = document.createElement( 'tbody');
var artikelKleinTR14a = document.createElement( 'tr');
var artikelKlein14TDa = document.createElement( 'td' );

var artikelKleinTable14b = document.createElement( 'table' );
var artikelKleinTBody14b = document.createElement( 'tbody');
var artikelKleinTR14b = document.createElement( 'tr');
var artikelKlein14TDbA = document.createElement( 'td' );
var artikelKlein14TDbB = document.createElement( 'td' );
var artikelKlein14TDDiv = document.createElement( 'div' );

var artikelKleinTable14c = document.createElement( 'table' );
var artikelKleinTBody14c = document.createElement( 'tbody');
var artikelKleinTR14cA = document.createElement( 'tr');
var artikelKlein14TDcA = document.createElement( 'td' );
var artikelKleinTR14cB = document.createElement( 'tr');
var artikelKlein14TDcB = document.createElement( 'td' );

var artikelKleinImg14 = document.createElement ( 'img' );
var artikelKleinImg14Link = document.createElement ( 'a' );
var artikelKleinImg14a = document.createElement ( 'img' );
var artikelKleinImg14aLink = document.createElement ( 'a' );
var artikelKleinTitle14Link = document.createElement ( 'a' );
var artikelKleinDescription14 = document.createElement ( 'a' );
var artikelKleinCTA14 = document.createElement ( 'a' );


var artikelKlein15 = document.createElement( 'div' );

var artikelKleinTable15a = document.createElement( 'table' );
var artikelKleinTBody15a = document.createElement( 'tbody');
var artikelKleinTR15a = document.createElement( 'tr');
var artikelKlein15TDa = document.createElement( 'td' );

var artikelKleinTable15b = document.createElement( 'table' );
var artikelKleinTBody15b = document.createElement( 'tbody');
var artikelKleinTR15b = document.createElement( 'tr');
var artikelKlein15TDbA = document.createElement( 'td' );
var artikelKlein15TDbB = document.createElement( 'td' );
var artikelKlein15TDDiv = document.createElement( 'div' );

var artikelKleinTable15c = document.createElement( 'table' );
var artikelKleinTBody15c = document.createElement( 'tbody');
var artikelKleinTR15cA = document.createElement( 'tr');
var artikelKlein15TDcA = document.createElement( 'td' );
var artikelKleinTR15cB = document.createElement( 'tr');
var artikelKlein15TDcB = document.createElement( 'td' );

var artikelKleinImg15 = document.createElement ( 'img' );
var artikelKleinImg15Link = document.createElement ( 'a' );
var artikelKleinImg15a = document.createElement ( 'img' );
var artikelKleinImg15aLink = document.createElement ( 'a' );
var artikelKleinTitle15Link = document.createElement ( 'a' );
var artikelKleinDescription15 = document.createElement ( 'a' );
var artikelKleinCTA15 = document.createElement ( 'a' );

var artikelKlein16 = document.createElement( 'div' );

var artikelKleinTable16a = document.createElement( 'table' );
var artikelKleinTBody16a = document.createElement( 'tbody');
var artikelKleinTR16a = document.createElement( 'tr');
var artikelKlein16TDa = document.createElement( 'td' );

var artikelKleinTable16b = document.createElement( 'table' );
var artikelKleinTBody16b = document.createElement( 'tbody');
var artikelKleinTR16b = document.createElement( 'tr');
var artikelKlein16TDbA = document.createElement( 'td' );
var artikelKlein16TDbB = document.createElement( 'td' );
var artikelKlein16TDDiv = document.createElement( 'div' );

var artikelKleinTable16c = document.createElement( 'table' );
var artikelKleinTBody16c = document.createElement( 'tbody');
var artikelKleinTR16cA = document.createElement( 'tr');
var artikelKlein16TDcA = document.createElement( 'td' );
var artikelKleinTR16cB = document.createElement( 'tr');
var artikelKlein16TDcB = document.createElement( 'td' );

var artikelKleinImg16 = document.createElement ( 'img' );
var artikelKleinImg16Link = document.createElement ( 'a' );
var artikelKleinImg16a = document.createElement ( 'img' );
var artikelKleinImg16aLink = document.createElement ( 'a' );
var artikelKleinTitle16Link = document.createElement ( 'a' );
var artikelKleinDescription16 = document.createElement ( 'a' );
var artikelKleinCTA16 = document.createElement ( 'a' );

var artikelKlein17 = document.createElement( 'div' );

var artikelKleinTable17a = document.createElement( 'table' );
var artikelKleinTBody17a = document.createElement( 'tbody');
var artikelKleinTR17a = document.createElement( 'tr');
var artikelKlein17TDa = document.createElement( 'td' );

var artikelKleinTable17b = document.createElement( 'table' );
var artikelKleinTBody17b = document.createElement( 'tbody');
var artikelKleinTR17b = document.createElement( 'tr');
var artikelKlein17TDbA = document.createElement( 'td' );
var artikelKlein17TDbB = document.createElement( 'td' );
var artikelKlein17TDDiv = document.createElement( 'div' );

var artikelKleinTable17c = document.createElement( 'table' );
var artikelKleinTBody17c = document.createElement( 'tbody');
var artikelKleinTR17cA = document.createElement( 'tr');
var artikelKlein17TDcA = document.createElement( 'td' );
var artikelKleinTR17cB = document.createElement( 'tr');
var artikelKlein17TDcB = document.createElement( 'td' );

var artikelKleinImg17 = document.createElement ( 'img' );
var artikelKleinImg17Link = document.createElement ( 'a' );
var artikelKleinImg17a = document.createElement ( 'img' );
var artikelKleinImg17aLink = document.createElement ( 'a' );
var artikelKleinTitle17Link = document.createElement ( 'a' );
var artikelKleinDescription17 = document.createElement ( 'a' );
var artikelKleinCTA17 = document.createElement ( 'a' );

var artikelKlein18 = document.createElement( 'div' );

var artikelKleinTable18a = document.createElement( 'table' );
var artikelKleinTBody18a = document.createElement( 'tbody');
var artikelKleinTR18a = document.createElement( 'tr');
var artikelKlein18TDa = document.createElement( 'td' );

var artikelKleinTable18b = document.createElement( 'table' );
var artikelKleinTBody18b = document.createElement( 'tbody');
var artikelKleinTR18b = document.createElement( 'tr');
var artikelKlein18TDbA = document.createElement( 'td' );
var artikelKlein18TDbB = document.createElement( 'td' );
var artikelKlein18TDDiv = document.createElement( 'div' );

var artikelKleinTable18c = document.createElement( 'table' );
var artikelKleinTBody18c = document.createElement( 'tbody');
var artikelKleinTR18cA = document.createElement( 'tr');
var artikelKlein18TDcA = document.createElement( 'td' );
var artikelKleinTR18cB = document.createElement( 'tr');
var artikelKlein18TDcB = document.createElement( 'td' );

var artikelKleinImg18 = document.createElement ( 'img' );
var artikelKleinImg18Link = document.createElement ( 'a' );
var artikelKleinImg18a = document.createElement ( 'img' );
var artikelKleinImg18aLink = document.createElement ( 'a' );
var artikelKleinTitle18Link = document.createElement ( 'a' );
var artikelKleinDescription18 = document.createElement ( 'a' );
var artikelKleinCTA18 = document.createElement ( 'a' );

var artikelKlein19 = document.createElement( 'div' );

var artikelKleinTable19a = document.createElement( 'table' );
var artikelKleinTBody19a = document.createElement( 'tbody');
var artikelKleinTR19a = document.createElement( 'tr');
var artikelKlein19TDa = document.createElement( 'td' );

var artikelKleinTable19b = document.createElement( 'table' );
var artikelKleinTBody19b = document.createElement( 'tbody');
var artikelKleinTR19b = document.createElement( 'tr');
var artikelKlein19TDbA = document.createElement( 'td' );
var artikelKlein19TDbB = document.createElement( 'td' );
var artikelKlein19TDDiv = document.createElement( 'div' );

var artikelKleinTable19c = document.createElement( 'table' );
var artikelKleinTBody19c = document.createElement( 'tbody');
var artikelKleinTR19cA = document.createElement( 'tr');
var artikelKlein19TDcA = document.createElement( 'td' );
var artikelKleinTR19cB = document.createElement( 'tr');
var artikelKlein19TDcB = document.createElement( 'td' );

var artikelKleinImg19 = document.createElement ( 'img' );
var artikelKleinImg19Link = document.createElement ( 'a' );
var artikelKleinImg19a = document.createElement ( 'img' );
var artikelKleinImg19aLink = document.createElement ( 'a' );
var artikelKleinTitle19Link = document.createElement ( 'a' );
var artikelKleinDescription19 = document.createElement ( 'a' );
var artikelKleinCTA19 = document.createElement ( 'a' );

var artikelKlein20 = document.createElement( 'div' );

var artikelKleinTable20a = document.createElement( 'table' );
var artikelKleinTBody20a = document.createElement( 'tbody');
var artikelKleinTR20a = document.createElement( 'tr');
var artikelKlein20TDa = document.createElement( 'td' );

var artikelKleinTable20b = document.createElement( 'table' );
var artikelKleinTBody20b = document.createElement( 'tbody');
var artikelKleinTR20b = document.createElement( 'tr');
var artikelKlein20TDbA = document.createElement( 'td' );
var artikelKlein20TDbB = document.createElement( 'td' );
var artikelKlein20TDDiv = document.createElement( 'div' );

var artikelKleinTable20c = document.createElement( 'table' );
var artikelKleinTBody20c = document.createElement( 'tbody');
var artikelKleinTR20cA = document.createElement( 'tr');
var artikelKlein20TDcA = document.createElement( 'td' );
var artikelKleinTR20cB = document.createElement( 'tr');
var artikelKlein20TDcB = document.createElement( 'td' );

var artikelKleinImg20 = document.createElement ( 'img' );
var artikelKleinImg20Link = document.createElement ( 'a' );
var artikelKleinImg20a = document.createElement ( 'img' );
var artikelKleinImg20aLink = document.createElement ( 'a' );
var artikelKleinTitle20Link = document.createElement ( 'a' );
var artikelKleinDescription20 = document.createElement ( 'a' );
var artikelKleinCTA20 = document.createElement ( 'a' );

var artikelKlein21 = document.createElement( 'div' );

var artikelKleinTable21a = document.createElement( 'table' );
var artikelKleinTBody21a = document.createElement( 'tbody');
var artikelKleinTR21a = document.createElement( 'tr');
var artikelKlein21TDa = document.createElement( 'td' );

var artikelKleinTable21b = document.createElement( 'table' );
var artikelKleinTBody21b = document.createElement( 'tbody');
var artikelKleinTR21b = document.createElement( 'tr');
var artikelKlein21TDbA = document.createElement( 'td' );
var artikelKlein21TDbB = document.createElement( 'td' );
var artikelKlein21TDDiv = document.createElement( 'div' );

var artikelKleinTable21c = document.createElement( 'table' );
var artikelKleinTBody21c = document.createElement( 'tbody');
var artikelKleinTR21cA = document.createElement( 'tr');
var artikelKlein21TDcA = document.createElement( 'td' );
var artikelKleinTR21cB = document.createElement( 'tr');
var artikelKlein21TDcB = document.createElement( 'td' );

var artikelKleinImg21 = document.createElement ( 'img' );
var artikelKleinImg21Link = document.createElement ( 'a' );
var artikelKleinImg21a = document.createElement ( 'img' );
var artikelKleinImg21aLink = document.createElement ( 'a' );
var artikelKleinTitle21Link = document.createElement ( 'a' );
var artikelKleinDescription21 = document.createElement ( 'a' );
var artikelKleinCTA21 = document.createElement ( 'a' );

var artikelKlein22 = document.createElement( 'div' );

var artikelKleinTable22a = document.createElement( 'table' );
var artikelKleinTBody22a = document.createElement( 'tbody');
var artikelKleinTR22a = document.createElement( 'tr');
var artikelKlein22TDa = document.createElement( 'td' );

var artikelKleinTable22b = document.createElement( 'table' );
var artikelKleinTBody22b = document.createElement( 'tbody');
var artikelKleinTR22b = document.createElement( 'tr');
var artikelKlein22TDbA = document.createElement( 'td' );
var artikelKlein22TDbB = document.createElement( 'td' );
var artikelKlein22TDDiv = document.createElement( 'div' );

var artikelKleinTable22c = document.createElement( 'table' );
var artikelKleinTBody22c = document.createElement( 'tbody');
var artikelKleinTR22cA = document.createElement( 'tr');
var artikelKlein22TDcA = document.createElement( 'td' );
var artikelKleinTR22cB = document.createElement( 'tr');
var artikelKlein22TDcB = document.createElement( 'td' );

var artikelKleinImg22 = document.createElement ( 'img' );
var artikelKleinImg22Link = document.createElement ( 'a' );
var artikelKleinImg22a = document.createElement ( 'img' );
var artikelKleinImg22aLink = document.createElement ( 'a' );
var artikelKleinTitle22Link = document.createElement ( 'a' );
var artikelKleinDescription22 = document.createElement ( 'a' );
var artikelKleinCTA22 = document.createElement ( 'a' );

var artikelKlein23 = document.createElement( 'div' );

var artikelKleinTable23a = document.createElement( 'table' );
var artikelKleinTBody23a = document.createElement( 'tbody');
var artikelKleinTR23a = document.createElement( 'tr');
var artikelKlein23TDa = document.createElement( 'td' );

var artikelKleinTable23b = document.createElement( 'table' );
var artikelKleinTBody23b = document.createElement( 'tbody');
var artikelKleinTR23b = document.createElement( 'tr');
var artikelKlein23TDbA = document.createElement( 'td' );
var artikelKlein23TDbB = document.createElement( 'td' );
var artikelKlein23TDDiv = document.createElement( 'div' );

var artikelKleinTable23c = document.createElement( 'table' );
var artikelKleinTBody23c = document.createElement( 'tbody');
var artikelKleinTR23cA = document.createElement( 'tr');
var artikelKlein23TDcA = document.createElement( 'td' );
var artikelKleinTR23cB = document.createElement( 'tr');
var artikelKlein23TDcB = document.createElement( 'td' );

var artikelKleinImg23 = document.createElement ( 'img' );
var artikelKleinImg23Link = document.createElement ( 'a' );
var artikelKleinImg23a = document.createElement ( 'img' );
var artikelKleinImg23aLink = document.createElement ( 'a' );
var artikelKleinTitle23Link = document.createElement ( 'a' );
var artikelKleinDescription23 = document.createElement ( 'a' );
var artikelKleinCTA23 = document.createElement ( 'a' );

var artikelKlein24 = document.createElement( 'div' );

var artikelKleinTable24a = document.createElement( 'table' );
var artikelKleinTBody24a = document.createElement( 'tbody');
var artikelKleinTR24a = document.createElement( 'tr');
var artikelKlein24TDa = document.createElement( 'td' );

var artikelKleinTable24b = document.createElement( 'table' );
var artikelKleinTBody24b = document.createElement( 'tbody');
var artikelKleinTR24b = document.createElement( 'tr');
var artikelKlein24TDbA = document.createElement( 'td' );
var artikelKlein24TDbB = document.createElement( 'td' );
var artikelKlein24TDDiv = document.createElement( 'div' );

var artikelKleinTable24c = document.createElement( 'table' );
var artikelKleinTBody24c = document.createElement( 'tbody');
var artikelKleinTR24cA = document.createElement( 'tr');
var artikelKlein24TDcA = document.createElement( 'td' );
var artikelKleinTR24cB = document.createElement( 'tr');
var artikelKlein24TDcB = document.createElement( 'td' );

var artikelKleinImg24 = document.createElement ( 'img' );
var artikelKleinImg24Link = document.createElement ( 'a' );
var artikelKleinImg24a = document.createElement ( 'img' );
var artikelKleinImg24aLink = document.createElement ( 'a' );
var artikelKleinTitle24Link = document.createElement ( 'a' );
var artikelKleinDescription24 = document.createElement ( 'a' );
var artikelKleinCTA24 = document.createElement ( 'a' );

var artikelKlein25 = document.createElement( 'div' );

var artikelKleinTable25a = document.createElement( 'table' );
var artikelKleinTBody25a = document.createElement( 'tbody');
var artikelKleinTR25a = document.createElement( 'tr');
var artikelKlein25TDa = document.createElement( 'td' );

var artikelKleinTable25b = document.createElement( 'table' );
var artikelKleinTBody25b = document.createElement( 'tbody');
var artikelKleinTR25b = document.createElement( 'tr');
var artikelKlein25TDbA = document.createElement( 'td' );
var artikelKlein25TDbB = document.createElement( 'td' );
var artikelKlein25TDDiv = document.createElement( 'div' );

var artikelKleinTable25c = document.createElement( 'table' );
var artikelKleinTBody25c = document.createElement( 'tbody');
var artikelKleinTR25cA = document.createElement( 'tr');
var artikelKlein25TDcA = document.createElement( 'td' );
var artikelKleinTR25cB = document.createElement( 'tr');
var artikelKlein25TDcB = document.createElement( 'td' );

var artikelKleinImg25 = document.createElement ( 'img' );
var artikelKleinImg25Link = document.createElement ( 'a' );
var artikelKleinImg25a = document.createElement ( 'img' );
var artikelKleinImg25aLink = document.createElement ( 'a' );
var artikelKleinTitle25Link = document.createElement ( 'a' );
var artikelKleinDescription25 = document.createElement ( 'a' );
var artikelKleinCTA25 = document.createElement ( 'a' );

//Artikelen Groot

var artikelGroot1D = document.createElement ( 'div' );
var artikelGroot2D = document.createElement ( 'div' );
var artikelGroot3D = document.createElement ( 'div' );
var artikelGroot4D = document.createElement ( 'div' );
var artikelGroot5D = document.createElement ( 'div' );
var artikelGroot6D = document.createElement ( 'div' );
var artikelGroot7D = document.createElement ( 'div' );
var artikelGroot8D = document.createElement ( 'div' );
var artikelGroot9D = document.createElement ( 'div' );
var artikelGroot10D = document.createElement ( 'div' );
var artikelGroot11D = document.createElement ( 'div' );
var artikelGroot12D = document.createElement ( 'div' );
var artikelGroot13D = document.createElement ( 'div' );
var artikelGroot14D = document.createElement ( 'div' );
var artikelGroot15D = document.createElement ( 'div' );
var artikelGroot16D = document.createElement ( 'div' );
var artikelGroot17D = document.createElement ( 'div' );
var artikelGroot18D = document.createElement ( 'div' );
var artikelGroot19D = document.createElement ( 'div' );
var artikelGroot20D = document.createElement ( 'div' );
var artikelGroot21D = document.createElement ( 'div' );
var artikelGroot22D = document.createElement ( 'div' );
var artikelGroot23D = document.createElement ( 'div' );
var artikelGroot24D = document.createElement ( 'div' );
var artikelGroot25D = document.createElement ( 'div' );

var artikelGroot1T = document.createElement ( 'table' );
var artikelGroot2T = document.createElement ( 'table' );
var artikelGroot3T = document.createElement ( 'table' );
var artikelGroot4T = document.createElement ( 'table' );
var artikelGroot5T = document.createElement ( 'table' );
var artikelGroot6T = document.createElement ( 'table' );
var artikelGroot7T = document.createElement ( 'table' );
var artikelGroot8T = document.createElement ( 'table' );
var artikelGroot9T = document.createElement ( 'table' );
var artikelGroot10T = document.createElement ( 'table' );
var artikelGroot11T = document.createElement ( 'table' );
var artikelGroot12T = document.createElement ( 'table' );
var artikelGroot13T = document.createElement ( 'table' );
var artikelGroot14T = document.createElement ( 'table' );
var artikelGroot15T = document.createElement ( 'table' );
var artikelGroot16T = document.createElement ( 'table' );
var artikelGroot17T = document.createElement ( 'table' );
var artikelGroot18T = document.createElement ( 'table' );
var artikelGroot19T = document.createElement ( 'table' );
var artikelGroot20T = document.createElement ( 'table' );
var artikelGroot21T = document.createElement ( 'table' );
var artikelGroot22T = document.createElement ( 'table' );
var artikelGroot23T = document.createElement ( 'table' );
var artikelGroot24T = document.createElement ( 'table' );
var artikelGroot25T = document.createElement ( 'table' );

var artikelGroot1Tb = document.createElement ( 'tbody' );
var artikelGroot2Tb = document.createElement ( 'tbody' );
var artikelGroot3Tb = document.createElement ( 'tbody' );
var artikelGroot4Tb = document.createElement ( 'tbody' );
var artikelGroot5Tb = document.createElement ( 'tbody' );
var artikelGroot6Tb = document.createElement ( 'tbody' );
var artikelGroot7Tb = document.createElement ( 'tbody' );
var artikelGroot8Tb = document.createElement ( 'tbody' );
var artikelGroot9Tb = document.createElement ( 'tbody' );
var artikelGroot10Tb = document.createElement ( 'tbody' );
var artikelGroot11Tb = document.createElement ( 'tbody' );
var artikelGroot12Tb = document.createElement ( 'tbody' );
var artikelGroot13Tb = document.createElement ( 'tbody' );
var artikelGroot14Tb = document.createElement ( 'tbody' );
var artikelGroot15Tb = document.createElement ( 'tbody' );
var artikelGroot16Tb = document.createElement ( 'tbody' );
var artikelGroot17Tb = document.createElement ( 'tbody' );
var artikelGroot18Tb = document.createElement ( 'tbody' );
var artikelGroot19Tb = document.createElement ( 'tbody' );
var artikelGroot20Tb = document.createElement ( 'tbody' );
var artikelGroot21Tb = document.createElement ( 'tbody' );
var artikelGroot22Tb = document.createElement ( 'tbody' );
var artikelGroot23Tb = document.createElement ( 'tbody' );
var artikelGroot24Tb = document.createElement ( 'tbody' );
var artikelGroot25Tb = document.createElement ( 'tbody' );

var artikelGroot1TrA = document.createElement ( 'tr' );
var artikelGroot2TrA = document.createElement ( 'tr' );
var artikelGroot3TrA = document.createElement ( 'tr' );
var artikelGroot4TrA = document.createElement ( 'tr' );
var artikelGroot5TrA = document.createElement ( 'tr' );
var artikelGroot6TrA = document.createElement ( 'tr' );
var artikelGroot7TrA = document.createElement ( 'tr' );
var artikelGroot8TrA = document.createElement ( 'tr' );
var artikelGroot9TrA = document.createElement ( 'tr' );
var artikelGroot10TrA = document.createElement ( 'tr' );
var artikelGroot11TrA = document.createElement ( 'tr' );
var artikelGroot12TrA = document.createElement ( 'tr' );
var artikelGroot13TrA = document.createElement ( 'tr' );
var artikelGroot14TrA = document.createElement ( 'tr' );
var artikelGroot15TrA = document.createElement ( 'tr' );
var artikelGroot16TrA = document.createElement ( 'tr' );
var artikelGroot17TrA = document.createElement ( 'tr' );
var artikelGroot18TrA = document.createElement ( 'tr' );
var artikelGroot19TrA = document.createElement ( 'tr' );
var artikelGroot20TrA = document.createElement ( 'tr' );
var artikelGroot21TrA = document.createElement ( 'tr' );
var artikelGroot22TrA = document.createElement ( 'tr' );
var artikelGroot23TrA = document.createElement ( 'tr' );
var artikelGroot24TrA = document.createElement ( 'tr' );
var artikelGroot25TrA = document.createElement ( 'tr' );

var artikelGroot1TrB = document.createElement ( 'tr' );
var artikelGroot2TrB = document.createElement ( 'tr' );
var artikelGroot3TrB = document.createElement ( 'tr' );
var artikelGroot4TrB = document.createElement ( 'tr' );
var artikelGroot5TrB = document.createElement ( 'tr' );
var artikelGroot6TrB = document.createElement ( 'tr' );
var artikelGroot7TrB = document.createElement ( 'tr' );
var artikelGroot8TrB = document.createElement ( 'tr' );
var artikelGroot9TrB = document.createElement ( 'tr' );
var artikelGroot10TrB = document.createElement ( 'tr' );
var artikelGroot11TrB = document.createElement ( 'tr' );
var artikelGroot12TrB = document.createElement ( 'tr' );
var artikelGroot13TrB = document.createElement ( 'tr' );
var artikelGroot14TrB = document.createElement ( 'tr' );
var artikelGroot15TrB = document.createElement ( 'tr' );
var artikelGroot16TrB = document.createElement ( 'tr' );
var artikelGroot17TrB = document.createElement ( 'tr' );
var artikelGroot18TrB = document.createElement ( 'tr' );
var artikelGroot19TrB = document.createElement ( 'tr' );
var artikelGroot20TrB = document.createElement ( 'tr' );
var artikelGroot21TrB = document.createElement ( 'tr' );
var artikelGroot22TrB = document.createElement ( 'tr' );
var artikelGroot23TrB = document.createElement ( 'tr' );
var artikelGroot24TrB = document.createElement ( 'tr' );
var artikelGroot25TrB = document.createElement ( 'tr' );

var artikelGroot1TrC = document.createElement ( 'tr' );
var artikelGroot2TrC = document.createElement ( 'tr' );
var artikelGroot3TrC = document.createElement ( 'tr' );
var artikelGroot4TrC = document.createElement ( 'tr' );
var artikelGroot5TrC = document.createElement ( 'tr' );
var artikelGroot6TrC = document.createElement ( 'tr' );
var artikelGroot7TrC = document.createElement ( 'tr' );
var artikelGroot8TrC = document.createElement ( 'tr' );
var artikelGroot9TrC = document.createElement ( 'tr' );
var artikelGroot10TrC = document.createElement ( 'tr' );
var artikelGroot11TrC = document.createElement ( 'tr' );
var artikelGroot12TrC = document.createElement ( 'tr' );
var artikelGroot13TrC = document.createElement ( 'tr' );
var artikelGroot14TrC = document.createElement ( 'tr' );
var artikelGroot15TrC = document.createElement ( 'tr' );
var artikelGroot16TrC = document.createElement ( 'tr' );
var artikelGroot17TrC = document.createElement ( 'tr' );
var artikelGroot18TrC = document.createElement ( 'tr' );
var artikelGroot19TrC = document.createElement ( 'tr' );
var artikelGroot20TrC = document.createElement ( 'tr' );
var artikelGroot21TrC = document.createElement ( 'tr' );
var artikelGroot22TrC = document.createElement ( 'tr' );
var artikelGroot23TrC = document.createElement ( 'tr' );
var artikelGroot24TrC = document.createElement ( 'tr' );
var artikelGroot25TrC = document.createElement ( 'tr' );

var artikelGroot1TdA = document.createElement ( 'td' );
var artikelGroot2TdA = document.createElement ( 'td' );
var artikelGroot3TdA = document.createElement ( 'td' );
var artikelGroot4TdA = document.createElement ( 'td' );
var artikelGroot5TdA = document.createElement ( 'td' );
var artikelGroot6TdA = document.createElement ( 'td' );
var artikelGroot7TdA = document.createElement ( 'td' );
var artikelGroot8TdA = document.createElement ( 'td' );
var artikelGroot9TdA = document.createElement ( 'td' );
var artikelGroot10TdA = document.createElement ( 'td' );
var artikelGroot11TdA = document.createElement ( 'td' );
var artikelGroot12TdA = document.createElement ( 'td' );
var artikelGroot13TdA = document.createElement ( 'td' );
var artikelGroot14TdA = document.createElement ( 'td' );
var artikelGroot15TdA = document.createElement ( 'td' );
var artikelGroot16TdA = document.createElement ( 'td' );
var artikelGroot17TdA = document.createElement ( 'td' );
var artikelGroot18TdA = document.createElement ( 'td' );
var artikelGroot19TdA = document.createElement ( 'td' );
var artikelGroot20TdA = document.createElement ( 'td' );
var artikelGroot21TdA = document.createElement ( 'td' );
var artikelGroot22TdA = document.createElement ( 'td' );
var artikelGroot23TdA = document.createElement ( 'td' );
var artikelGroot24TdA = document.createElement ( 'td' );
var artikelGroot25TdA = document.createElement ( 'td' );

var artikelGroot1TdB = document.createElement ( 'td' );
var artikelGroot2TdB = document.createElement ( 'td' );
var artikelGroot3TdB = document.createElement ( 'td' );
var artikelGroot4TdB = document.createElement ( 'td' );
var artikelGroot5TdB = document.createElement ( 'td' );
var artikelGroot6TdB = document.createElement ( 'td' );
var artikelGroot7TdB = document.createElement ( 'td' );
var artikelGroot8TdB = document.createElement ( 'td' );
var artikelGroot9TdB = document.createElement ( 'td' );
var artikelGroot10TdB = document.createElement ( 'td' );
var artikelGroot11TdB = document.createElement ( 'td' );
var artikelGroot12TdB = document.createElement ( 'td' );
var artikelGroot13TdB = document.createElement ( 'td' );
var artikelGroot14TdB = document.createElement ( 'td' );
var artikelGroot15TdB = document.createElement ( 'td' );
var artikelGroot16TdB = document.createElement ( 'td' );
var artikelGroot17TdB = document.createElement ( 'td' );
var artikelGroot18TdB = document.createElement ( 'td' );
var artikelGroot19TdB = document.createElement ( 'td' );
var artikelGroot20TdB = document.createElement ( 'td' );
var artikelGroot21TdB = document.createElement ( 'td' );
var artikelGroot22TdB = document.createElement ( 'td' );
var artikelGroot23TdB = document.createElement ( 'td' );
var artikelGroot24TdB = document.createElement ( 'td' );
var artikelGroot25TdB = document.createElement ( 'td' );

var artikelGroot1TdC = document.createElement ( 'td' );
var artikelGroot2TdC = document.createElement ( 'td' );
var artikelGroot3TdC = document.createElement ( 'td' );
var artikelGroot4TdC = document.createElement ( 'td' );
var artikelGroot5TdC = document.createElement ( 'td' );
var artikelGroot6TdC = document.createElement ( 'td' );
var artikelGroot7TdC = document.createElement ( 'td' );
var artikelGroot8TdC = document.createElement ( 'td' );
var artikelGroot9TdC = document.createElement ( 'td' );
var artikelGroot10TdC = document.createElement ( 'td' );
var artikelGroot11TdC = document.createElement ( 'td' );
var artikelGroot12TdC = document.createElement ( 'td' );
var artikelGroot13TdC = document.createElement ( 'td' );
var artikelGroot14TdC = document.createElement ( 'td' );
var artikelGroot15TdC = document.createElement ( 'td' );
var artikelGroot16TdC = document.createElement ( 'td' );
var artikelGroot17TdC = document.createElement ( 'td' );
var artikelGroot18TdC = document.createElement ( 'td' );
var artikelGroot19TdC = document.createElement ( 'td' );
var artikelGroot20TdC = document.createElement ( 'td' );
var artikelGroot21TdC = document.createElement ( 'td' );
var artikelGroot22TdC = document.createElement ( 'td' );
var artikelGroot23TdC = document.createElement ( 'td' );
var artikelGroot24TdC = document.createElement ( 'td' );
var artikelGroot25TdC = document.createElement ( 'td' );

var artikelGroot1 = document.createElement( 'div' );
var artikelGroot2 = document.createElement( 'div' );
var artikelGroot3 = document.createElement( 'div' );
var artikelGroot4 = document.createElement( 'div' );
var artikelGroot5 = document.createElement( 'div' );
var artikelGroot6 = document.createElement( 'div' );
var artikelGroot7 = document.createElement( 'div' );
var artikelGroot8 = document.createElement( 'div' );
var artikelGroot9 = document.createElement( 'div' );
var artikelGroot10 = document.createElement( 'div' );
var artikelGroot11 = document.createElement( 'div' );
var artikelGroot12 = document.createElement( 'div' );
var artikelGroot13 = document.createElement( 'div' );
var artikelGroot14 = document.createElement( 'div' );
var artikelGroot15 = document.createElement( 'div' );
var artikelGroot16 = document.createElement( 'div' );
var artikelGroot17 = document.createElement( 'div' );
var artikelGroot18 = document.createElement( 'div' );
var artikelGroot19 = document.createElement( 'div' );
var artikelGroot20 = document.createElement( 'div' );
var artikelGroot21 = document.createElement( 'div' );
var artikelGroot22 = document.createElement( 'div' );
var artikelGroot23 = document.createElement( 'div' );
var artikelGroot24 = document.createElement( 'div' );
var artikelGroot25 = document.createElement( 'div' );

/*var artikelGrootAuthor1 = document.createElement ( 'p' );
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
*/

var artikelGrootTitle1 = document.createElement ( 'p' );
var artikelGrootTitle2 = document.createElement ( 'p' );
var artikelGrootTitle3 = document.createElement ( 'p' );
var artikelGrootTitle4 = document.createElement ( 'p' );
var artikelGrootTitle5 = document.createElement ( 'p' );
var artikelGrootTitle6 = document.createElement ( 'p' );
var artikelGrootTitle7 = document.createElement ( 'p' );
var artikelGrootTitle8 = document.createElement ( 'p' );
var artikelGrootTitle9 = document.createElement ( 'p' );
var artikelGrootTitle10 = document.createElement ( 'p' );
var artikelGrootTitle11 = document.createElement ( 'p' );
var artikelGrootTitle12 = document.createElement ( 'p' );
var artikelGrootTitle13 = document.createElement ( 'p' );
var artikelGrootTitle14 = document.createElement ( 'p' );
var artikelGrootTitle15 = document.createElement ( 'p' );
var artikelGrootTitle16 = document.createElement ( 'p' );
var artikelGrootTitle17 = document.createElement ( 'p' );
var artikelGrootTitle18 = document.createElement ( 'p' );
var artikelGrootTitle19 = document.createElement ( 'p' );
var artikelGrootTitle20 = document.createElement ( 'p' );
var artikelGrootTitle21 = document.createElement ( 'p' );
var artikelGrootTitle22 = document.createElement ( 'p' );
var artikelGrootTitle23 = document.createElement ( 'p' );
var artikelGrootTitle24 = document.createElement ( 'p' );
var artikelGrootTitle25 = document.createElement ( 'p' );

var artikelGrootTitle1 = document.createElement ( 'a' );
var artikelGrootTitle2 = document.createElement ( 'a' );
var artikelGrootTitle3 = document.createElement ( 'a' );
var artikelGrootTitle4 = document.createElement ( 'a' );
var artikelGrootTitle5 = document.createElement ( 'a' );
var artikelGrootTitle6 = document.createElement ( 'a' );
var artikelGrootTitle7 = document.createElement ( 'a' );
var artikelGrootTitle8 = document.createElement ( 'a' );
var artikelGrootTitle9 = document.createElement ( 'a' );
var artikelGrootTitle10 = document.createElement ( 'a' );
var artikelGrootTitle11 = document.createElement ( 'a' );
var artikelGrootTitle12 = document.createElement ( 'a' );
var artikelGrootTitle13 = document.createElement ( 'a' );
var artikelGrootTitle14 = document.createElement ( 'a' );
var artikelGrootTitle15 = document.createElement ( 'a' );
var artikelGrootTitle16 = document.createElement ( 'a' );
var artikelGrootTitle17 = document.createElement ( 'a' );
var artikelGrootTitle18 = document.createElement ( 'a' );
var artikelGrootTitle19 = document.createElement ( 'a' );
var artikelGrootTitle20 = document.createElement ( 'a' );
var artikelGrootTitle21 = document.createElement ( 'a' );
var artikelGrootTitle22 = document.createElement ( 'a' );
var artikelGrootTitle23 = document.createElement ( 'a' );
var artikelGrootTitle24 = document.createElement ( 'a' );
var artikelGrootTitle25 = document.createElement ( 'a' );

var artikelGrootTitleBr1 = document.createElement ( 'br' );
var artikelGrootTitleBr2 = document.createElement ( 'br' );
var artikelGrootTitleBr3 = document.createElement ( 'br' );
var artikelGrootTitleBr4 = document.createElement ( 'br' );
var artikelGrootTitleBr5 = document.createElement ( 'br' );
var artikelGrootTitleBr6 = document.createElement ( 'br' );
var artikelGrootTitleBr7 = document.createElement ( 'br' );
var artikelGrootTitleBr8 = document.createElement ( 'br' );
var artikelGrootTitleBr9 = document.createElement ( 'br' );
var artikelGrootTitleBr10 = document.createElement ( 'br' );
var artikelGrootTitleBr11 = document.createElement ( 'br' );
var artikelGrootTitleBr12 = document.createElement ( 'br' );
var artikelGrootTitleBr13 = document.createElement ( 'br' );
var artikelGrootTitleBr14 = document.createElement ( 'br' );
var artikelGrootTitleBr15 = document.createElement ( 'br' );
var artikelGrootTitleBr16 = document.createElement ( 'br' );
var artikelGrootTitleBr17 = document.createElement ( 'br' );
var artikelGrootTitleBr18 = document.createElement ( 'br' );
var artikelGrootTitleBr19 = document.createElement ( 'br' );
var artikelGrootTitleBr20 = document.createElement ( 'br' );
var artikelGrootTitleBr21 = document.createElement ( 'br' );
var artikelGrootTitleBr22 = document.createElement ( 'br' );
var artikelGrootTitleBr23 = document.createElement ( 'br' );
var artikelGrootTitleBr24 = document.createElement ( 'br' );
var artikelGrootTitleBr25 = document.createElement ( 'br' );

var artikelGrootImg1Link = document.createElement ( 'a' );
var artikelGrootImg2Link = document.createElement ( 'a' );
var artikelGrootImg3Link = document.createElement ( 'a' );
var artikelGrootImg4Link = document.createElement ( 'a' );
var artikelGrootImg5Link = document.createElement ( 'a' );
var artikelGrootImg6Link = document.createElement ( 'a' );
var artikelGrootImg1Link = document.createElement ( 'a' );
var artikelGrootImg2Link = document.createElement ( 'a' );
var artikelGrootImg3Link = document.createElement ( 'a' );
var artikelGrootImg4Link = document.createElement ( 'a' );
var artikelGrootImg5Link = document.createElement ( 'a' );
var artikelGrootImg6Link = document.createElement ( 'a' );
var artikelGrootImg7Link = document.createElement ( 'a' );
var artikelGrootImg8Link = document.createElement ( 'a' );
var artikelGrootImg9Link = document.createElement ( 'a' );
var artikelGrootImg10Link = document.createElement ( 'a' );
var artikelGrootImg11Link = document.createElement ( 'a' );
var artikelGrootImg12Link = document.createElement ( 'a' );
var artikelGrootImg13Link = document.createElement ( 'a' );
var artikelGrootImg14Link = document.createElement ( 'a' );
var artikelGrootImg15Link = document.createElement ( 'a' );
var artikelGrootImg16Link = document.createElement ( 'a' );
var artikelGrootImg17Link = document.createElement ( 'a' );
var artikelGrootImg18Link = document.createElement ( 'a' );
var artikelGrootImg19Link = document.createElement ( 'a' );
var artikelGrootImg20Link = document.createElement ( 'a' );
var artikelGrootImg21Link = document.createElement ( 'a' );
var artikelGrootImg22Link = document.createElement ( 'a' );
var artikelGrootImg23Link = document.createElement ( 'a' );
var artikelGrootImg24Link = document.createElement ( 'a' );
var artikelGrootImg25Link = document.createElement ( 'a' );

var artikelGrootImg1 = document.createElement ( 'img' );
var artikelGrootImg2 = document.createElement ( 'img' );
var artikelGrootImg3 = document.createElement ( 'img' );
var artikelGrootImg4 = document.createElement ( 'img' );
var artikelGrootImg5 = document.createElement ( 'img' );
var artikelGrootImg6 = document.createElement ( 'img' );
var artikelGrootImg7 = document.createElement ( 'img' );
var artikelGrootImg8 = document.createElement ( 'img' );
var artikelGrootImg9 = document.createElement ( 'img' );
var artikelGrootImg10 = document.createElement ( 'img' );
var artikelGrootImg11 = document.createElement ( 'img' );
var artikelGrootImg12 = document.createElement ( 'img' );
var artikelGrootImg13 = document.createElement ( 'img' );
var artikelGrootImg14 = document.createElement ( 'img' );
var artikelGrootImg15 = document.createElement ( 'img' );
var artikelGrootImg16 = document.createElement ( 'img' );
var artikelGrootImg17 = document.createElement ( 'img' );
var artikelGrootImg18 = document.createElement ( 'img' );
var artikelGrootImg19 = document.createElement ( 'img' );
var artikelGrootImg20 = document.createElement ( 'img' );
var artikelGrootImg21 = document.createElement ( 'img' );
var artikelGrootImg22 = document.createElement ( 'img' );
var artikelGrootImg23 = document.createElement ( 'img' );
var artikelGrootImg24 = document.createElement ( 'img' );
var artikelGrootImg25 = document.createElement ( 'img' );

var artikelGrootDescription1 = document.createElement ( 'a' );
var artikelGrootDescription2 = document.createElement ( 'a' );
var artikelGrootDescription3 = document.createElement ( 'a' );
var artikelGrootDescription4 = document.createElement ( 'a' );
var artikelGrootDescription5 = document.createElement ( 'a' );
var artikelGrootDescription6 = document.createElement ( 'a' );
var artikelGrootDescription7 = document.createElement ( 'a' );
var artikelGrootDescription8 = document.createElement ( 'a' );
var artikelGrootDescription9 = document.createElement ( 'a' );
var artikelGrootDescription10 = document.createElement ( 'a' );
var artikelGrootDescription11 = document.createElement ( 'a' );
var artikelGrootDescription12 = document.createElement ( 'a' );
var artikelGrootDescription13 = document.createElement ( 'a' );
var artikelGrootDescription14 = document.createElement ( 'a' );
var artikelGrootDescription15 = document.createElement ( 'a' );
var artikelGrootDescription16 = document.createElement ( 'a' );
var artikelGrootDescription17 = document.createElement ( 'a' );
var artikelGrootDescription18 = document.createElement ( 'a' );
var artikelGrootDescription19 = document.createElement ( 'a' );
var artikelGrootDescription20 = document.createElement ( 'a' );
var artikelGrootDescription21 = document.createElement ( 'a' );
var artikelGrootDescription22 = document.createElement ( 'a' );
var artikelGrootDescription23 = document.createElement ( 'a' );
var artikelGrootDescription24 = document.createElement ( 'a' );
var artikelGrootDescription25 = document.createElement ( 'a' );


var artikelGrootCTA1C = document.createElement ( 'a' );
var artikelGrootCTA2C = document.createElement ( 'a' );
var artikelGrootCTA3C = document.createElement ( 'a' );
var artikelGrootCTA4C = document.createElement ( 'a' );
var artikelGrootCTA5C = document.createElement ( 'a' );
var artikelGrootCTA6C = document.createElement ( 'a' );
var artikelGrootCTA7C = document.createElement ( 'a' );
var artikelGrootCTA8C = document.createElement ( 'a' );
var artikelGrootCTA9C = document.createElement ( 'a' );
var artikelGrootCTA10C = document.createElement ( 'a' );
var artikelGrootCTA11C = document.createElement ( 'a' );
var artikelGrootCTA12C = document.createElement ( 'a' );
var artikelGrootCTA13C = document.createElement ( 'a' );
var artikelGrootCTA14C = document.createElement ( 'a' );
var artikelGrootCTA15C = document.createElement ( 'a' );
var artikelGrootCTA16C = document.createElement ( 'a' );
var artikelGrootCTA17C = document.createElement ( 'a' );
var artikelGrootCTA18C = document.createElement ( 'a' );
var artikelGrootCTA19C = document.createElement ( 'a' );
var artikelGrootCTA20C = document.createElement ( 'a' );
var artikelGrootCTA21C = document.createElement ( 'a' );
var artikelGrootCTA22C = document.createElement ( 'a' );
var artikelGrootCTA23C = document.createElement ( 'a' );
var artikelGrootCTA24C = document.createElement ( 'a' );
var artikelGrootCTA25C = document.createElement ( 'a' );

var artikelGrootCTA1 = document.createElement ( 'a' );
var artikelGrootCTA2 = document.createElement ( 'a' );
var artikelGrootCTA3 = document.createElement ( 'a' );
var artikelGrootCTA4 = document.createElement ( 'a' );
var artikelGrootCTA5 = document.createElement ( 'a' );
var artikelGrootCTA6 = document.createElement ( 'a' );
var artikelGrootCTA7 = document.createElement ( 'a' );
var artikelGrootCTA8 = document.createElement ( 'a' );
var artikelGrootCTA9 = document.createElement ( 'a' );
var artikelGrootCTA10 = document.createElement ( 'a' );
var artikelGrootCTA11 = document.createElement ( 'a' );
var artikelGrootCTA12 = document.createElement ( 'a' );
var artikelGrootCTA13 = document.createElement ( 'a' );
var artikelGrootCTA14 = document.createElement ( 'a' );
var artikelGrootCTA15 = document.createElement ( 'a' );
var artikelGrootCTA16 = document.createElement ( 'a' );
var artikelGrootCTA17 = document.createElement ( 'a' );
var artikelGrootCTA18 = document.createElement ( 'a' );
var artikelGrootCTA19 = document.createElement ( 'a' );
var artikelGrootCTA20 = document.createElement ( 'a' );
var artikelGrootCTA21 = document.createElement ( 'a' );
var artikelGrootCTA22 = document.createElement ( 'a' );
var artikelGrootCTA23 = document.createElement ( 'a' );
var artikelGrootCTA24 = document.createElement ( 'a' );
var artikelGrootCTA25 = document.createElement ( 'a' );

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

// Vacature Items

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

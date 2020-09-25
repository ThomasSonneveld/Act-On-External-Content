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

var headlinesContainer = document.createElement( 'div' );
var artikelenKleinContainer = document.createElement( 'div' );
var artikelenGrootContainer = document.createElement( 'div' );
var agendaAcademyContainer = document.createElement( 'div' );
var vacatureContainer = document.createElement( 'div' );

var artikelKlein1 = document.createElement( 'div' );
var artikelKlein2 = document.createElement( 'div' );
var artikelKlein3 = document.createElement( 'div' );
var artikelKlein4 = document.createElement( 'div' );
var artikelKlein5 = document.createElement( 'div' );
var artikelKlein6 = document.createElement( 'div' );
var artikelKlein7 = document.createElement( 'div' );
var artikelKlein8 = document.createElement( 'div' );
var artikelKlein9 = document.createElement( 'div' );
var artikelKlein10 = document.createElement( 'div' );
var artikelKlein11 = document.createElement( 'div' );
var artikelKlein12 = document.createElement( 'div' );
var artikelKlein13 = document.createElement( 'div' );
var artikelKlein14 = document.createElement( 'div' );
var artikelKlein15 = document.createElement( 'div' );

var artikelKleinTable1a = document.createElement( 'table' );
var artikelKleinTBody1a = document.createElement( 'tbody');
var artikelKleinTR1a = document.createElement( 'tr');
var artikelKlein1TD1a = document.createElement( 'td' );
var artikelKleinTable1 = document.createElement( 'table' );
var artikelKleinTBody1 = document.createElement( 'tbody');
var artikelKleinTR1 = document.createElement( 'tr');
var artikelKlein1TD1 = document.createElement( 'td' );
var artikelKlein1TD2 = document.createElement( 'td' );
var artikelKlein1TDDiv = document.createElement( 'div' );

var artikelKleinTable2a = document.createElement( 'table' );
var artikelKleinTBody2a = document.createElement( 'tbody');
var artikelKleinTR2a = document.createElement( 'tr');
var artikelKlein2TD2a = document.createElement( 'td' );
var artikelKleinTable2 = document.createElement( 'table' );
var artikelKleinTBody2 = document.createElement( 'tbody');
var artikelKleinTR2 = document.createElement( 'tr');
var artikelKlein2TD1 = document.createElement( 'td' );
var artikelKlein2TD2 = document.createElement( 'td' );
var artikelKlein2TDDiv = document.createElement( 'div' );

var artikelKleinTable3a = document.createElement( 'table' );
var artikelKleinTBody3a = document.createElement( 'tbody');
var artikelKleinTR3a = document.createElement( 'tr');
var artikelKlein3TD3a = document.createElement( 'td' );
var artikelKleinTable3 = document.createElement( 'table' );
var artikelKleinTBody3 = document.createElement( 'tbody');
var artikelKleinTR3 = document.createElement( 'tr');
var artikelKlein3TD1 = document.createElement( 'td' );
var artikelKlein3TD2 = document.createElement( 'td' );
var artikelKlein3TDDiv = document.createElement( 'div' );

var artikelKleinTable4a = document.createElement( 'table' );
var artikelKleinTBody4a = document.createElement( 'tbody');
var artikelKleinTR4a = document.createElement( 'tr');
var artikelKlein4TD4a = document.createElement( 'td' );
var artikelKleinTable4 = document.createElement( 'table' );
var artikelKleinTBody4 = document.createElement( 'tbody');
var artikelKleinTR4 = document.createElement( 'tr');
var artikelKlein4TD1 = document.createElement( 'td' );
var artikelKlein4TD2 = document.createElement( 'td' );
var artikelKlein4TDDiv = document.createElement( 'div' );

var artikelKleinTable5a = document.createElement( 'table' );
var artikelKleinTBody5a = document.createElement( 'tbody');
var artikelKleinTR5a = document.createElement( 'tr');
var artikelKlein5TD5a = document.createElement( 'td' );
var artikelKleinTable5 = document.createElement( 'table' );
var artikelKleinTBody5 = document.createElement( 'tbody');
var artikelKleinTR5 = document.createElement( 'tr');
var artikelKlein5TD1 = document.createElement( 'td' );
var artikelKlein5TD2 = document.createElement( 'td' );
var artikelKlein5TDDiv = document.createElement( 'div' );

var artikelKleinTable6a = document.createElement( 'table' );
var artikelKleinTBody6a = document.createElement( 'tbody');
var artikelKleinTR6a = document.createElement( 'tr');
var artikelKlein6TD6a = document.createElement( 'td' );
var artikelKleinTable6 = document.createElement( 'table' );
var artikelKleinTBody6 = document.createElement( 'tbody');
var artikelKleinTR6 = document.createElement( 'tr');
var artikelKlein6TD1 = document.createElement( 'td' );
var artikelKlein6TD2 = document.createElement( 'td' );
var artikelKlein6TDDiv = document.createElement( 'div' );

var artikelKleinTable7a = document.createElement( 'table' );
var artikelKleinTBody7a = document.createElement( 'tbody');
var artikelKleinTR7a = document.createElement( 'tr');
var artikelKlein7TD7a = document.createElement( 'td' );
var artikelKleinTable7 = document.createElement( 'table' );
var artikelKleinTBody7 = document.createElement( 'tbody');
var artikelKleinTR7 = document.createElement( 'tr');
var artikelKlein7TD1 = document.createElement( 'td' );
var artikelKlein7TD2 = document.createElement( 'td' );
var artikelKlein7TDDiv = document.createElement( 'div' );

var artikelKleinTable8a = document.createElement( 'table' );
var artikelKleinTBody8a = document.createElement( 'tbody');
var artikelKleinTR8a = document.createElement( 'tr');
var artikelKlein8TD8a = document.createElement( 'td' );
var artikelKleinTable8 = document.createElement( 'table' );
var artikelKleinTBody8 = document.createElement( 'tbody');
var artikelKleinTR8 = document.createElement( 'tr');
var artikelKlein8TD1 = document.createElement( 'td' );
var artikelKlein8TD2 = document.createElement( 'td' );
var artikelKlein8TDDiv = document.createElement( 'div' );

var artikelKleinTable9a = document.createElement( 'table' );
var artikelKleinTBody9a = document.createElement( 'tbody');
var artikelKleinTR9a = document.createElement( 'tr');
var artikelKlein9TD9a = document.createElement( 'td' );
var artikelKleinTable9 = document.createElement( 'table' );
var artikelKleinTBody9 = document.createElement( 'tbody');
var artikelKleinTR9 = document.createElement( 'tr');
var artikelKlein9TD1 = document.createElement( 'td' );
var artikelKlein9TD2 = document.createElement( 'td' );
var artikelKlein9TDDiv = document.createElement( 'div' );

var artikelKleinTable10a = document.createElement( 'table' );
var artikelKleinTBody10a = document.createElement( 'tbody');
var artikelKleinTR10a = document.createElement( 'tr');
var artikelKlein10TD10a = document.createElement( 'td' );
var artikelKleinTable10 = document.createElement( 'table' );
var artikelKleinTBody10 = document.createElement( 'tbody');
var artikelKleinTR10 = document.createElement( 'tr');
var artikelKlein10TD1 = document.createElement( 'td' );
var artikelKlein10TD2 = document.createElement( 'td' );
var artikelKlein10TDDiv = document.createElement( 'div' );

var artikelKleinTable11a = document.createElement( 'table' );
var artikelKleinTBody11a = document.createElement( 'tbody');
var artikelKleinTR11a = document.createElement( 'tr');
var artikelKlein11TD11a = document.createElement( 'td' );
var artikelKleinTable11 = document.createElement( 'table' );
var artikelKleinTBody11 = document.createElement( 'tbody');
var artikelKleinTR11 = document.createElement( 'tr');
var artikelKlein11TD1 = document.createElement( 'td' );
var artikelKlein11TD2 = document.createElement( 'td' );
var artikelKlein11TDDiv = document.createElement( 'div' );

var artikelKleinTable12a = document.createElement( 'table' );
var artikelKleinTBody12a = document.createElement( 'tbody');
var artikelKleinTR12a = document.createElement( 'tr');
var artikelKlein12TD12a = document.createElement( 'td' );
var artikelKleinTable12 = document.createElement( 'table' );
var artikelKleinTBody12 = document.createElement( 'tbody');
var artikelKleinTR12 = document.createElement( 'tr');
var artikelKlein12TD1 = document.createElement( 'td' );
var artikelKlein12TD2 = document.createElement( 'td' );
var artikelKlein12TDDiv = document.createElement( 'div' );

var artikelKleinTable13a = document.createElement( 'table' );
var artikelKleinTBody13a = document.createElement( 'tbody');
var artikelKleinTR13a = document.createElement( 'tr');
var artikelKlein13TD13a = document.createElement( 'td' );
var artikelKleinTable13 = document.createElement( 'table' );
var artikelKleinTBody13 = document.createElement( 'tbody');
var artikelKleinTR13 = document.createElement( 'tr');
var artikelKlein13TD1 = document.createElement( 'td' );
var artikelKlein13TD2 = document.createElement( 'td' );
var artikelKlein13TDDiv = document.createElement( 'div' );

var artikelKleinTable14a = document.createElement( 'table' );
var artikelKleinTBody14a = document.createElement( 'tbody');
var artikelKleinTR14a = document.createElement( 'tr');
var artikelKlein14TD14a = document.createElement( 'td' );
var artikelKleinTable14 = document.createElement( 'table' );
var artikelKleinTBody14 = document.createElement( 'tbody');
var artikelKleinTR14 = document.createElement( 'tr');
var artikelKlein14TD1 = document.createElement( 'td' );
var artikelKlein14TD2 = document.createElement( 'td' );
var artikelKlein14TDDiv = document.createElement( 'div' );

var artikelKleinTable15a = document.createElement( 'table' );
var artikelKleinTBody15a = document.createElement( 'tbody');
var artikelKleinTR15a = document.createElement( 'tr');
var artikelKlein15TD15a = document.createElement( 'td' );
var artikelKleinTable15 = document.createElement( 'table' );
var artikelKleinTBody15 = document.createElement( 'tbody');
var artikelKleinTR15 = document.createElement( 'tr');
var artikelKlein15TD1 = document.createElement( 'td' );
var artikelKlein15TD2 = document.createElement( 'td' );
var artikelKlein15TDDiv = document.createElement( 'div' );

var artikelKleinImg1 = document.createElement ( 'img' );
var artikelKleinImg2 = document.createElement ( 'img' );
var artikelKleinImg3 = document.createElement ( 'img' );
var artikelKleinImg4 = document.createElement ( 'img' );
var artikelKleinImg5 = document.createElement ( 'img' );
var artikelKleinImg6 = document.createElement ( 'img' );
var artikelKleinImg7 = document.createElement ( 'img' );
var artikelKleinImg8 = document.createElement ( 'img' );
var artikelKleinImg9 = document.createElement ( 'img' );
var artikelKleinImg10 = document.createElement ( 'img' );
var artikelKleinImg11 = document.createElement ( 'img' );
var artikelKleinImg12 = document.createElement ( 'img' );
var artikelKleinImg13 = document.createElement ( 'img' );
var artikelKleinImg14 = document.createElement ( 'img' );
var artikelKleinImg15 = document.createElement ( 'img' );

var artikelKleinImg1Link = document.createElement ( 'a' );
var artikelKleinImg2Link = document.createElement ( 'a' );
var artikelKleinImg3Link = document.createElement ( 'a' );
var artikelKleinImg4Link = document.createElement ( 'a' );
var artikelKleinImg5Link = document.createElement ( 'a' );
var artikelKleinImg6Link = document.createElement ( 'a' );
var artikelKleinImg7Link = document.createElement ( 'a' );
var artikelKleinImg8Link = document.createElement ( 'a' );
var artikelKleinImg9Link = document.createElement ( 'a' );
var artikelKleinImg10Link = document.createElement ( 'a' );
var artikelKleinImg11Link = document.createElement ( 'a' );
var artikelKleinImg12Link = document.createElement ( 'a' );
var artikelKleinImg13Link = document.createElement ( 'a' );
var artikelKleinImg14Link = document.createElement ( 'a' );
var artikelKleinImg15Link = document.createElement ( 'a' );

var artikelKleinImg1a = document.createElement ( 'img' );
var artikelKleinImg2a = document.createElement ( 'img' );
var artikelKleinImg3a = document.createElement ( 'img' );
var artikelKleinImg4a = document.createElement ( 'img' );
var artikelKleinImg5a = document.createElement ( 'img' );
var artikelKleinImg6a = document.createElement ( 'img' );
var artikelKleinImg7a = document.createElement ( 'img' );
var artikelKleinImg8a = document.createElement ( 'img' );
var artikelKleinImg9a = document.createElement ( 'img' );
var artikelKleinImg10a = document.createElement ( 'img' );
var artikelKleinImg11a = document.createElement ( 'img' );
var artikelKleinImg12a = document.createElement ( 'img' );
var artikelKleinImg13a = document.createElement ( 'img' );
var artikelKleinImg14a = document.createElement ( 'img' );
var artikelKleinImg15a = document.createElement ( 'img' );

var artikelKleinImg1aLink = document.createElement ( 'a' );
var artikelKleinImg2aLink = document.createElement ( 'a' );
var artikelKleinImg3aLink = document.createElement ( 'a' );
var artikelKleinImg4aLink = document.createElement ( 'a' );
var artikelKleinImg5aLink = document.createElement ( 'a' );
var artikelKleinImg6aLink = document.createElement ( 'a' );
var artikelKleinImg7aLink = document.createElement ( 'a' );
var artikelKleinImg8aLink = document.createElement ( 'a' );
var artikelKleinImg9aLink = document.createElement ( 'a' );
var artikelKleinImg10aLink = document.createElement ( 'a' );
var artikelKleinImg11aLink = document.createElement ( 'a' );
var artikelKleinImg12aLink = document.createElement ( 'a' );
var artikelKleinImg13aLink = document.createElement ( 'a' );
var artikelKleinImg14aLink = document.createElement ( 'a' );
var artikelKleinImg15aLink = document.createElement ( 'a' );

var artikelKleinTitle1Link = document.createElement ( 'a' );
var artikelKleinTitle2Link = document.createElement ( 'a' );
var artikelKleinTitle3Link = document.createElement ( 'a' );
var artikelKleinTitle4Link = document.createElement ( 'a' );
var artikelKleinTitle5Link = document.createElement ( 'a' );
var artikelKleinTitle6Link = document.createElement ( 'a' );
var artikelKleinTitle7Link = document.createElement ( 'a' );
var artikelKleinTitle8Link = document.createElement ( 'a' );
var artikelKleinTitle9Link = document.createElement ( 'a' );
var artikelKleinTitle10Link = document.createElement ( 'a' );
var artikelKleinTitle11Link = document.createElement ( 'a' );
var artikelKleinTitle12Link = document.createElement ( 'a' );
var artikelKleinTitle13Link = document.createElement ( 'a' );
var artikelKleinTitle14Link = document.createElement ( 'a' );
var artikelKleinTitle15Link = document.createElement ( 'a' );

var artikelKleinBreak1 = document.createElement('br');
var artikelKleinBreak2 = document.createElement('br');
var artikelKleinBreak3 = document.createElement('br');
var artikelKleinBreak4 = document.createElement('br');
var artikelKleinBreak5 = document.createElement('br');
var artikelKleinBreak6 = document.createElement('br');
var artikelKleinBreak7 = document.createElement('br');
var artikelKleinBreak8 = document.createElement('br');
var artikelKleinBreak9 = document.createElement('br');
var artikelKleinBreak10 = document.createElement('br');
var artikelKleinBreak11 = document.createElement('br');
var artikelKleinBreak12 = document.createElement('br');
var artikelKleinBreak13 = document.createElement('br');
var artikelKleinBreak14 = document.createElement('br');
var artikelKleinBreak15 = document.createElement('br');

var artikelKleinDescription1 = document.createElement ( 'a' );
var artikelKleinDescription2 = document.createElement ( 'a' );
var artikelKleinDescription3 = document.createElement ( 'a' );
var artikelKleinDescription4 = document.createElement ( 'a' );
var artikelKleinDescription5 = document.createElement ( 'a' );
var artikelKleinDescription6 = document.createElement ( 'a' );
var artikelKleinDescription7 = document.createElement ( 'a' );
var artikelKleinDescription8 = document.createElement ( 'a' );
var artikelKleinDescription9 = document.createElement ( 'a' );
var artikelKleinDescription10 = document.createElement ( 'a' );
var artikelKleinDescription11 = document.createElement ( 'a' );
var artikelKleinDescription12 = document.createElement ( 'a' );
var artikelKleinDescription13 = document.createElement ( 'a' );
var artikelKleinDescription14 = document.createElement ( 'a' );
var artikelKleinDescription15 = document.createElement ( 'a' );

var artikelKleinCTA1 = document.createElement ( 'a' );
var artikelKleinCTA2 = document.createElement ( 'a' );
var artikelKleinCTA3 = document.createElement ( 'a' );
var artikelKleinCTA4 = document.createElement ( 'a' );
var artikelKleinCTA5 = document.createElement ( 'a' );
var artikelKleinCTA6 = document.createElement ( 'a' );
var artikelKleinCTA7 = document.createElement ( 'a' );
var artikelKleinCTA8 = document.createElement ( 'a' );
var artikelKleinCTA9 = document.createElement ( 'a' );
var artikelKleinCTA10 = document.createElement ( 'a' );
var artikelKleinCTA11 = document.createElement ( 'a' );
var artikelKleinCTA12 = document.createElement ( 'a' );
var artikelKleinCTA13 = document.createElement ( 'a' );
var artikelKleinCTA14 = document.createElement ( 'a' );
var artikelKleinCTA15 = document.createElement ( 'a' );


//Artikelen Groot

var artikelGroot1T = document.createElement ( 'table' );
var artikelGroot2T = document.createElement ( 'table' );
var artikelGroot3T = document.createElement ( 'table' );
var artikelGroot4T = document.createElement ( 'table' );
var artikelGroot5T = document.createElement ( 'table' );
var artikelGroot6T = document.createElement ( 'table' );

var artikelGroot1Tb = document.createElement ( 'tbody' );
var artikelGroot2Tb = document.createElement ( 'tbody' );
var artikelGroot3Tb = document.createElement ( 'tbody' );
var artikelGroot4Tb = document.createElement ( 'tbody' );
var artikelGroot5Tb = document.createElement ( 'tbody' );
var artikelGroot6Tb = document.createElement ( 'tbody' );

var artikelGroot1TrA = document.createElement ( 'tr' );
var artikelGroot2TrA = document.createElement ( 'tr' );
var artikelGroot3TrA = document.createElement ( 'tr' );
var artikelGroot4TrA = document.createElement ( 'tr' );
var artikelGroot5TrA = document.createElement ( 'tr' );
var artikelGroot6TrA = document.createElement ( 'tr' );

var artikelGroot1TrB = document.createElement ( 'tr' );
var artikelGroot2TrB = document.createElement ( 'tr' );
var artikelGroot3TrB = document.createElement ( 'tr' );
var artikelGroot4TrB = document.createElement ( 'tr' );
var artikelGroot5TrB = document.createElement ( 'tr' );
var artikelGroot6TrB = document.createElement ( 'tr' );

var artikelGroot1TrC = document.createElement ( 'tr' );
var artikelGroot2TrC = document.createElement ( 'tr' );
var artikelGroot3TrC = document.createElement ( 'tr' );
var artikelGroot4TrC = document.createElement ( 'tr' );
var artikelGroot5TrC = document.createElement ( 'tr' );
var artikelGroot6TrC = document.createElement ( 'tr' );

var artikelGroot1TdA = document.createElement ( 'td' );
var artikelGroot2TdA = document.createElement ( 'td' );
var artikelGroot3TdA = document.createElement ( 'td' );
var artikelGroot4TdA = document.createElement ( 'td' );
var artikelGroot5TdA = document.createElement ( 'td' );
var artikelGroot6TdA = document.createElement ( 'td' );

var artikelGroot1TdB = document.createElement ( 'td' );
var artikelGroot2TdB = document.createElement ( 'td' );
var artikelGroot3TdB = document.createElement ( 'td' );
var artikelGroot4TdB = document.createElement ( 'td' );
var artikelGroot5TdB = document.createElement ( 'td' );
var artikelGroot6TdB = document.createElement ( 'td' );

var artikelGroot1TdC = document.createElement ( 'td' );
var artikelGroot2TdC = document.createElement ( 'td' );
var artikelGroot3TdC = document.createElement ( 'td' );
var artikelGroot4TdC = document.createElement ( 'td' );
var artikelGroot5TdC = document.createElement ( 'td' );
var artikelGroot6TdC = document.createElement ( 'td' );

var artikelGroot1 = document.createElement( 'div' );
var artikelGroot2 = document.createElement( 'div' );
var artikelGroot3 = document.createElement( 'div' );
var artikelGroot4 = document.createElement( 'div' );
var artikelGroot5 = document.createElement( 'div' );
var artikelGroot6 = document.createElement( 'div' );

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

var artikelGrootTitle1 = document.createElement ( 'a' );
var artikelGrootTitle2 = document.createElement ( 'a' );
var artikelGrootTitle3 = document.createElement ( 'a' );
var artikelGrootTitle4 = document.createElement ( 'a' );
var artikelGrootTitle5 = document.createElement ( 'a' );
var artikelGrootTitle6 = document.createElement ( 'a' );

var artikelGrootTitleBr1 = document.createElement ( 'br' );
var artikelGrootTitleBr2 = document.createElement ( 'br' );
var artikelGrootTitleBr3 = document.createElement ( 'br' );
var artikelGrootTitleBr4 = document.createElement ( 'br' );
var artikelGrootTitleBr5 = document.createElement ( 'br' );
var artikelGrootTitleBr6 = document.createElement ( 'br' );

var artikelGrootImg1Link = document.createElement ( 'a' );
var artikelGrootImg2Link = document.createElement ( 'a' );
var artikelGrootImg3Link = document.createElement ( 'a' );
var artikelGrootImg4Link = document.createElement ( 'a' );
var artikelGrootImg5Link = document.createElement ( 'a' );
var artikelGrootImg6Link = document.createElement ( 'a' );

var artikelGrootImg1 = document.createElement ( 'img' );
var artikelGrootImg2 = document.createElement ( 'img' );
var artikelGrootImg3 = document.createElement ( 'img' );
var artikelGrootImg4 = document.createElement ( 'img' );
var artikelGrootImg5 = document.createElement ( 'img' );
var artikelGrootImg6 = document.createElement ( 'img' );

var artikelGrootDescription1 = document.createElement ( 'a' );
var artikelGrootDescription2 = document.createElement ( 'a' );
var artikelGrootDescription3 = document.createElement ( 'a' );
var artikelGrootDescription4 = document.createElement ( 'a' );
var artikelGrootDescription5 = document.createElement ( 'a' );
var artikelGrootDescription6 = document.createElement ( 'a' );

var artikelGrootCTA1C = document.createElement ( 'a' );
var artikelGrootCTA2C = document.createElement ( 'a' );
var artikelGrootCTA3C = document.createElement ( 'a' );
var artikelGrootCTA4C = document.createElement ( 'a' );
var artikelGrootCTA5C = document.createElement ( 'a' );
var artikelGrootCTA6C = document.createElement ( 'a' );

var artikelGrootCTA1 = document.createElement ( 'a' );
var artikelGrootCTA2 = document.createElement ( 'a' );
var artikelGrootCTA3 = document.createElement ( 'a' );
var artikelGrootCTA4 = document.createElement ( 'a' );
var artikelGrootCTA5 = document.createElement ( 'a' );
var artikelGrootCTA6 = document.createElement ( 'a' );

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

// Vacature Items

var vacature1 = document.createElement( 'div' );
var vacature2 = document.createElement( 'div' );
var vacature3 = document.createElement( 'div' );
var vacature4 = document.createElement( 'div' );
var vacature5 = document.createElement( 'div' );
var vacature6 = document.createElement( 'div' );
var vacature7 = document.createElement( 'div' );
var vacature8 = document.createElement( 'div' );
var vacature9 = document.createElement( 'div' );
var vacature10 = document.createElement( 'div' );
var vacature11 = document.createElement( 'div' );
var vacature12 = document.createElement( 'div' );
var vacature13 = document.createElement( 'div' );
var vacature14 = document.createElement( 'div' );
var vacature15 = document.createElement( 'div' );
var vacature16 = document.createElement( 'div' );
var vacature17 = document.createElement( 'div' );
var vacature18 = document.createElement( 'div' );
var vacature19 = document.createElement( 'div' );
var vacature20 = document.createElement( 'div' );
var vacature21 = document.createElement( 'div' );
var vacature22 = document.createElement( 'div' );
var vacature23 = document.createElement( 'div' );
var vacature24 = document.createElement( 'div' );
var vacature25 = document.createElement( 'div' );


var vacatureTable1 = document.createElement( 'table' );
var vacatureTBody1 = document.createElement( 'tbody');
var vacatureTR1 = document.createElement( 'tr');
var vacature1TDa = document.createElement( 'td' );
var vacature1TDb = document.createElement( 'td' );
var vacature1TDDiv = document.createElement( 'div' );

var vacatureMeta1 = document.createElement ( 'a' );
var vspan1a = document.createElement ( 'span' );
var vspan1b = document.createElement ( 'span' );
var vacatureTitle1 = document.createElement ( 'a' );
var vacatureDescription1 = document.createElement ( 'a' );

var vacatureTable2 = document.createElement( 'table' );
var vacatureTBody2 = document.createElement( 'tbody');
var vacatureTR2 = document.createElement( 'tr');
var vacature2TDa = document.createElement( 'td' );
var vacature2TDb = document.createElement( 'td' );
var vacature2TDDiv = document.createElement( 'div' );

var vacatureMeta2 = document.createElement ( 'a' );
var vspan2a = document.createElement ( 'span' );
var vspan2b = document.createElement ( 'span' );
var vacatureTitle2 = document.createElement ( 'a' );
var vacatureDescription2 = document.createElement ( 'a' );

var vacatureTable3 = document.createElement( 'table' );
var vacatureTBody3 = document.createElement( 'tbody');
var vacatureTR3 = document.createElement( 'tr');
var vacature3TDa = document.createElement( 'td' );
var vacature3TDb = document.createElement( 'td' );
var vacature3TDDiv = document.createElement( 'div' );

var vacatureMeta3 = document.createElement ( 'a' );
var vspan3a = document.createElement ( 'span' );
var vspan3b = document.createElement ( 'span' );
var vacatureTitle3 = document.createElement ( 'a' );
var vacatureDescription3 = document.createElement ( 'a' );

var vacatureTable4 = document.createElement( 'table' );
var vacatureTBody4 = document.createElement( 'tbody');
var vacatureTR4 = document.createElement( 'tr');
var vacature4TDa = document.createElement( 'td' );
var vacature4TDb = document.createElement( 'td' );
var vacature4TDDiv = document.createElement( 'div' );

var vacatureMeta4 = document.createElement ( 'a' );
var vspan4a = document.createElement ( 'span' );
var vspan4b = document.createElement ( 'span' );
var vacatureTitle4 = document.createElement ( 'a' );
var vacatureDescription4 = document.createElement ( 'a' );

var vacatureTable5 = document.createElement( 'table' );
var vacatureTBody5 = document.createElement( 'tbody');
var vacatureTR5 = document.createElement( 'tr');
var vacature5TDa = document.createElement( 'td' );
var vacature5TDb = document.createElement( 'td' );
var vacature5TDDiv = document.createElement( 'div' );

var vacatureMeta5 = document.createElement ( 'a' );
var vspan5a = document.createElement ( 'span' );
var vspan5b = document.createElement ( 'span' );
var vacatureTitle5 = document.createElement ( 'a' );
var vacatureDescription5 = document.createElement ( 'a' );

var vacatureTable6 = document.createElement( 'table' );
var vacatureTBody6 = document.createElement( 'tbody');
var vacatureTR6 = document.createElement( 'tr');
var vacature6TDa = document.createElement( 'td' );
var vacature6TDb = document.createElement( 'td' );
var vacature6TDDiv = document.createElement( 'div' );

var vacatureMeta6 = document.createElement ( 'a' );
var vspan6a = document.createElement ( 'span' );
var vspan6b = document.createElement ( 'span' );
var vacatureTitle6 = document.createElement ( 'a' );
var vacatureDescription6 = document.createElement ( 'a' );

var vacatureTable7 = document.createElement( 'table' );
var vacatureTBody7 = document.createElement( 'tbody');
var vacatureTR7 = document.createElement( 'tr');
var vacature7TDa = document.createElement( 'td' );
var vacature7TDb = document.createElement( 'td' );
var vacature7TDDiv = document.createElement( 'div' );

var vacatureMeta7 = document.createElement ( 'a' );
var vspan7a = document.createElement ( 'span' );
var vspan7b = document.createElement ( 'span' );
var vacatureTitle7 = document.createElement ( 'a' );
var vacatureDescription7 = document.createElement ( 'a' );

var vacatureTable8 = document.createElement( 'table' );
var vacatureTBody8 = document.createElement( 'tbody');
var vacatureTR8 = document.createElement( 'tr');
var vacature8TDa = document.createElement( 'td' );
var vacature8TDb = document.createElement( 'td' );
var vacature8TDDiv = document.createElement( 'div' );

var vacatureMeta8 = document.createElement ( 'a' );
var vspan8a = document.createElement ( 'span' );
var vspan8b = document.createElement ( 'span' );
var vacatureTitle8 = document.createElement ( 'a' );
var vacatureDescription8 = document.createElement ( 'a' );

var vacatureTable8 = document.createElement( 'table' );
var vacatureTBody8 = document.createElement( 'tbody');
var vacatureTR8 = document.createElement( 'tr');
var vacature8TDa = document.createElement( 'td' );
var vacature8TDb = document.createElement( 'td' );
var vacature8TDDiv = document.createElement( 'div' );

var vacatureMeta8 = document.createElement ( 'a' );
var vspan8a = document.createElement ( 'span' );
var vspan8b = document.createElement ( 'span' );
var vacatureTitle8 = document.createElement ( 'a' );
var vacatureDescription8 = document.createElement ( 'a' );

var vacatureTable9 = document.createElement( 'table' );
var vacatureTBody9 = document.createElement( 'tbody');
var vacatureTR9 = document.createElement( 'tr');
var vacature9TDa = document.createElement( 'td' );
var vacature9TDb = document.createElement( 'td' );
var vacature9TDDiv = document.createElement( 'div' );

var vacatureMeta9 = document.createElement ( 'a' );
var vspan9a = document.createElement ( 'span' );
var vspan9b = document.createElement ( 'span' );
var vacatureTitle9 = document.createElement ( 'a' );
var vacatureDescription9 = document.createElement ( 'a' );

var vacatureTable10 = document.createElement( 'table' );
var vacatureTBody10 = document.createElement( 'tbody');
var vacatureTR10 = document.createElement( 'tr');
var vacature10TDa = document.createElement( 'td' );
var vacature10TDb = document.createElement( 'td' );
var vacature10TDDiv = document.createElement( 'div' );

var vacatureMeta10 = document.createElement ( 'a' );
var vspan10a = document.createElement ( 'span' );
var vspan10b = document.createElement ( 'span' );
var vacatureTitle10 = document.createElement ( 'a' );
var vacatureDescription10 = document.createElement ( 'a' );

var vacatureTable11 = document.createElement( 'table' );
var vacatureTBody11 = document.createElement( 'tbody');
var vacatureTR11 = document.createElement( 'tr');
var vacature11TDa = document.createElement( 'td' );
var vacature11TDb = document.createElement( 'td' );
var vacature11TDDiv = document.createElement( 'div' );

var vacatureMeta11 = document.createElement ( 'a' );
var vspan11a = document.createElement ( 'span' );
var vspan11b = document.createElement ( 'span' );
var vacatureTitle11 = document.createElement ( 'a' );
var vacatureDescription11 = document.createElement ( 'a' );

var vacatureTable12 = document.createElement( 'table' );
var vacatureTBody12 = document.createElement( 'tbody');
var vacatureTR12 = document.createElement( 'tr');
var vacature12TDa = document.createElement( 'td' );
var vacature12TDb = document.createElement( 'td' );
var vacature12TDDiv = document.createElement( 'div' );

var vacatureMeta12 = document.createElement ( 'a' );
var vspan12a = document.createElement ( 'span' );
var vspan12b = document.createElement ( 'span' );
var vacatureTitle12 = document.createElement ( 'a' );
var vacatureDescription12 = document.createElement ( 'a' );

var vacatureTable13 = document.createElement( 'table' );
var vacatureTBody13 = document.createElement( 'tbody');
var vacatureTR13 = document.createElement( 'tr');
var vacature13TDa = document.createElement( 'td' );
var vacature13TDb = document.createElement( 'td' );
var vacature13TDDiv = document.createElement( 'div' );

var vacatureMeta13 = document.createElement ( 'a' );
var vspan13a = document.createElement ( 'span' );
var vspan13b = document.createElement ( 'span' );
var vacatureTitle13 = document.createElement ( 'a' );
var vacatureDescription13 = document.createElement ( 'a' );

var vacatureTable14 = document.createElement( 'table' );
var vacatureTBody14 = document.createElement( 'tbody');
var vacatureTR14 = document.createElement( 'tr');
var vacature14TDa = document.createElement( 'td' );
var vacature14TDb = document.createElement( 'td' );
var vacature14TDDiv = document.createElement( 'div' );

var vacatureMeta14 = document.createElement ( 'a' );
var vspan14a = document.createElement ( 'span' );
var vspan14b = document.createElement ( 'span' );
var vacatureTitle14 = document.createElement ( 'a' );
var vacatureDescription14 = document.createElement ( 'a' );

var vacatureTable15 = document.createElement( 'table' );
var vacatureTBody15 = document.createElement( 'tbody');
var vacatureTR15 = document.createElement( 'tr');
var vacature15TDa = document.createElement( 'td' );
var vacature15TDb = document.createElement( 'td' );
var vacature15TDDiv = document.createElement( 'div' );

var vacatureMeta15 = document.createElement ( 'a' );
var vspan15a = document.createElement ( 'span' );
var vspan15b = document.createElement ( 'span' );
var vacatureTitle15 = document.createElement ( 'a' );
var vacatureDescription15 = document.createElement ( 'a' );

var vacatureTable16 = document.createElement( 'table' );
var vacatureTBody16 = document.createElement( 'tbody');
var vacatureTR16 = document.createElement( 'tr');
var vacature16TDa = document.createElement( 'td' );
var vacature16TDb = document.createElement( 'td' );
var vacature16TDDiv = document.createElement( 'div' );

var vacatureMeta16 = document.createElement ( 'a' );
var vspan16a = document.createElement ( 'span' );
var vspan16b = document.createElement ( 'span' );
var vacatureTitle16 = document.createElement ( 'a' );
var vacatureDescription16 = document.createElement ( 'a' );

var vacatureTable17 = document.createElement( 'table' );
var vacatureTBody17 = document.createElement( 'tbody');
var vacatureTR17 = document.createElement( 'tr');
var vacature17TDa = document.createElement( 'td' );
var vacature17TDb = document.createElement( 'td' );
var vacature17TDDiv = document.createElement( 'div' );

var vacatureMeta17 = document.createElement ( 'a' );
var vspan17a = document.createElement ( 'span' );
var vspan17b = document.createElement ( 'span' );
var vacatureTitle17 = document.createElement ( 'a' );
var vacatureDescription17 = document.createElement ( 'a' );

var vacatureTable18 = document.createElement( 'table' );
var vacatureTBody18 = document.createElement( 'tbody');
var vacatureTR18 = document.createElement( 'tr');
var vacature18TDa = document.createElement( 'td' );
var vacature18TDb = document.createElement( 'td' );
var vacature18TDDiv = document.createElement( 'div' );

var vacatureMeta18 = document.createElement ( 'a' );
var vspan18a = document.createElement ( 'span' );
var vspan18b = document.createElement ( 'span' );
var vacatureTitle18 = document.createElement ( 'a' );
var vacatureDescription18 = document.createElement ( 'a' );

var vacatureTable19 = document.createElement( 'table' );
var vacatureTBody19 = document.createElement( 'tbody');
var vacatureTR19 = document.createElement( 'tr');
var vacature19TDa = document.createElement( 'td' );
var vacature19TDb = document.createElement( 'td' );
var vacature19TDDiv = document.createElement( 'div' );

var vacatureMeta19 = document.createElement ( 'a' );
var vspan19a = document.createElement ( 'span' );
var vspan19b = document.createElement ( 'span' );
var vacatureTitle19 = document.createElement ( 'a' );
var vacatureDescription19 = document.createElement ( 'a' );

var vacatureTable20 = document.createElement( 'table' );
var vacatureTBody20 = document.createElement( 'tbody');
var vacatureTR20 = document.createElement( 'tr');
var vacature20TDa = document.createElement( 'td' );
var vacature20TDb = document.createElement( 'td' );
var vacature20TDDiv = document.createElement( 'div' );

var vacatureMeta20 = document.createElement ( 'a' );
var vspan20a = document.createElement ( 'span' );
var vspan20b = document.createElement ( 'span' );
var vacatureTitle20 = document.createElement ( 'a' );
var vacatureDescription20 = document.createElement ( 'a' );

var vacatureTable21 = document.createElement( 'table' );
var vacatureTBody21 = document.createElement( 'tbody');
var vacatureTR21 = document.createElement( 'tr');
var vacature21TDa = document.createElement( 'td' );
var vacature21TDb = document.createElement( 'td' );
var vacature21TDDiv = document.createElement( 'div' );

var vacatureMeta21 = document.createElement ( 'a' );
var vspan21a = document.createElement ( 'span' );
var vspan21b = document.createElement ( 'span' );
var vacatureTitle21 = document.createElement ( 'a' );
var vacatureDescription21 = document.createElement ( 'a' );

var vacatureTable22 = document.createElement( 'table' );
var vacatureTBody22 = document.createElement( 'tbody');
var vacatureTR22 = document.createElement( 'tr');
var vacature22TDa = document.createElement( 'td' );
var vacature22TDb = document.createElement( 'td' );
var vacature22TDDiv = document.createElement( 'div' );

var vacatureMeta22 = document.createElement ( 'a' );
var vspan22a = document.createElement ( 'span' );
var vspan22b = document.createElement ( 'span' );
var vacatureTitle22 = document.createElement ( 'a' );
var vacatureDescription22 = document.createElement ( 'a' );

var vacatureTable23 = document.createElement( 'table' );
var vacatureTBody23 = document.createElement( 'tbody');
var vacatureTR23 = document.createElement( 'tr');
var vacature23TDa = document.createElement( 'td' );
var vacature23TDb = document.createElement( 'td' );
var vacature23TDDiv = document.createElement( 'div' );

var vacatureMeta23 = document.createElement ( 'a' );
var vspan23a = document.createElement ( 'span' );
var vspan23b = document.createElement ( 'span' );
var vacatureTitle23 = document.createElement ( 'a' );
var vacatureDescription23 = document.createElement ( 'a' );

var vacatureTable24 = document.createElement( 'table' );
var vacatureTBody24 = document.createElement( 'tbody');
var vacatureTR24 = document.createElement( 'tr');
var vacature24TDa = document.createElement( 'td' );
var vacature24TDb = document.createElement( 'td' );
var vacature24TDDiv = document.createElement( 'div' );

var vacatureMeta24 = document.createElement ( 'a' );
var vspan24a = document.createElement ( 'span' );
var vspan24b = document.createElement ( 'span' );
var vacatureTitle24 = document.createElement ( 'a' );
var vacatureDescription24 = document.createElement ( 'a' );

var vacatureTable25 = document.createElement( 'table' );
var vacatureTBody25 = document.createElement( 'tbody');
var vacatureTR25 = document.createElement( 'tr');
var vacature25TDa = document.createElement( 'td' );
var vacature25TDb = document.createElement( 'td' );
var vacature25TDDiv = document.createElement( 'div' );

var vacatureMeta25 = document.createElement ( 'a' );
var vspan25a = document.createElement ( 'span' );
var vspan25b = document.createElement ( 'span' );
var vacatureTitle25 = document.createElement ( 'a' );
var vacatureDescription25 = document.createElement ( 'a' );

var vacatureImg1 = document.createElement ( 'img' );
var vacatureImg2 = document.createElement ( 'img' );
var vacatureImg3 = document.createElement ( 'img' );
var vacatureImg4 = document.createElement ( 'img' );
var vacatureImg5 = document.createElement ( 'img' );
var vacatureImg6 = document.createElement ( 'img' );
var vacatureImg7 = document.createElement ( 'img' );
var vacatureImg8 = document.createElement ( 'img' );
var vacatureImg9 = document.createElement ( 'img' );
var vacatureImg10 = document.createElement ( 'img' );
var vacatureImg11 = document.createElement ( 'img' );
var vacatureImg12 = document.createElement ( 'img' );
var vacatureImg13 = document.createElement ( 'img' );
var vacatureImg14 = document.createElement ( 'img' );
var vacatureImg15 = document.createElement ( 'img' );
var vacatureImg16 = document.createElement ( 'img' );
var vacatureImg17 = document.createElement ( 'img' );
var vacatureImg18 = document.createElement ( 'img' );
var vacatureImg19 = document.createElement ( 'img' );
var vacatureImg20 = document.createElement ( 'img' );
var vacatureImg21 = document.createElement ( 'img' );
var vacatureImg22 = document.createElement ( 'img' );
var vacatureImg23 = document.createElement ( 'img' );
var vacatureImg24 = document.createElement ( 'img' );
var vacatureImg25 = document.createElement ( 'img' );

var vacatureLink1TDa = document.createElement ( 'a' );
var vacatureLink2TDa = document.createElement ( 'a' );
var vacatureLink3TDa = document.createElement ( 'a' );
var vacatureLink4TDa = document.createElement ( 'a' );
var vacatureLink5TDa = document.createElement ( 'a' );
var vacatureLink6TDa = document.createElement ( 'a' );
var vacatureLink7TDa = document.createElement ( 'a' );
var vacatureLink8TDa = document.createElement ( 'a' );
var vacatureLink9TDa = document.createElement ( 'a' );
var vacatureLink10TDa = document.createElement ( 'a' );
var vacatureLink11TDa = document.createElement ( 'a' );
var vacatureLink12TDa = document.createElement ( 'a' );
var vacatureLink13TDa = document.createElement ( 'a' );
var vacatureLink14TDa = document.createElement ( 'a' );
var vacatureLink15TDa = document.createElement ( 'a' );
var vacatureLink16TDa = document.createElement ( 'a' );
var vacatureLink17TDa = document.createElement ( 'a' );
var vacatureLink18TDa = document.createElement ( 'a' );
var vacatureLink19TDa = document.createElement ( 'a' );
var vacatureLink20TDa = document.createElement ( 'a' );
var vacatureLink21TDa = document.createElement ( 'a' );
var vacatureLink22TDa = document.createElement ( 'a' );
var vacatureLink23TDa = document.createElement ( 'a' );
var vacatureLink24TDa = document.createElement ( 'a' );
var vacatureLink25TDa = document.createElement ( 'a' );

var vacatureLink1Meta = document.createElement ( 'a' );
var vacatureLink2Meta = document.createElement ( 'a' );
var vacatureLink3Meta = document.createElement ( 'a' );
var vacatureLink4Meta = document.createElement ( 'a' );
var vacatureLink5Meta = document.createElement ( 'a' );
var vacatureLink6Meta = document.createElement ( 'a' );
var vacatureLink7Meta = document.createElement ( 'a' );
var vacatureLink8Meta = document.createElement ( 'a' );
var vacatureLink9Meta = document.createElement ( 'a' );
var vacatureLink10Meta = document.createElement ( 'a' );
var vacatureLink11Meta = document.createElement ( 'a' );
var vacatureLink12Meta = document.createElement ( 'a' );
var vacatureLink13Meta = document.createElement ( 'a' );
var vacatureLink14Meta = document.createElement ( 'a' );
var vacatureLink15Meta = document.createElement ( 'a' );
var vacatureLink16Meta = document.createElement ( 'a' );
var vacatureLink17Meta = document.createElement ( 'a' );
var vacatureLink18Meta = document.createElement ( 'a' );
var vacatureLink19Meta = document.createElement ( 'a' );
var vacatureLink20Meta = document.createElement ( 'a' );
var vacatureLink21Meta = document.createElement ( 'a' );
var vacatureLink22Meta = document.createElement ( 'a' );
var vacatureLink23Meta = document.createElement ( 'a' );
var vacatureLink24Meta = document.createElement ( 'a' );
var vacatureLink25Meta = document.createElement ( 'a' );

var vacatureLink1title = document.createElement ( 'a' );
var vacatureLink2title = document.createElement ( 'a' );
var vacatureLink3title = document.createElement ( 'a' );
var vacatureLink4title = document.createElement ( 'a' );
var vacatureLink5title = document.createElement ( 'a' );
var vacatureLink6title = document.createElement ( 'a' );
var vacatureLink7title = document.createElement ( 'a' );
var vacatureLink8title = document.createElement ( 'a' );
var vacatureLink9title = document.createElement ( 'a' );
var vacatureLink10title = document.createElement ( 'a' );
var vacatureLink11title = document.createElement ( 'a' );
var vacatureLink12title = document.createElement ( 'a' );
var vacatureLink13title = document.createElement ( 'a' );
var vacatureLink14title = document.createElement ( 'a' );
var vacatureLink15title = document.createElement ( 'a' );
var vacatureLink16title = document.createElement ( 'a' );
var vacatureLink17title = document.createElement ( 'a' );
var vacatureLink18title = document.createElement ( 'a' );
var vacatureLink19title = document.createElement ( 'a' );
var vacatureLink20title = document.createElement ( 'a' );
var vacatureLink21title = document.createElement ( 'a' );
var vacatureLink22title = document.createElement ( 'a' );
var vacatureLink23title = document.createElement ( 'a' );
var vacatureLink24title = document.createElement ( 'a' );
var vacatureLink25title = document.createElement ( 'a' );

var vacatureLink1description = document.createElement ( 'a' );
var vacatureLink2description = document.createElement ( 'a' );
var vacatureLink3description = document.createElement ( 'a' );
var vacatureLink4description = document.createElement ( 'a' );
var vacatureLink5description = document.createElement ( 'a' );
var vacatureLink6description = document.createElement ( 'a' );
var vacatureLink7description = document.createElement ( 'a' );
var vacatureLink8description = document.createElement ( 'a' );
var vacatureLink9description = document.createElement ( 'a' );
var vacatureLink10description = document.createElement ( 'a' );
var vacatureLink11description = document.createElement ( 'a' );
var vacatureLink12description = document.createElement ( 'a' );
var vacatureLink13description = document.createElement ( 'a' );
var vacatureLink14description = document.createElement ( 'a' );
var vacatureLink15description = document.createElement ( 'a' );
var vacatureLink16description = document.createElement ( 'a' );
var vacatureLink17description = document.createElement ( 'a' );
var vacatureLink18description = document.createElement ( 'a' );
var vacatureLink19description = document.createElement ( 'a' );
var vacatureLink20description = document.createElement ( 'a' );
var vacatureLink21description = document.createElement ( 'a' );
var vacatureLink22description = document.createElement ( 'a' );
var vacatureLink23description = document.createElement ( 'a' );
var vacatureLink24description = document.createElement ( 'a' );
var vacatureLink25description = document.createElement ( 'a' );

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



createCanvas.appendChild( contentIndex );
createCanvas.appendChild( credits );

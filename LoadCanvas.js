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

var artikelKleinTitle1 = document.createElement ( 'p' );
var artikelKleinTitle2 = document.createElement ( 'p' );
var artikelKleinTitle3 = document.createElement ( 'p' );
var artikelKleinTitle4 = document.createElement ( 'p' );
var artikelKleinTitle5 = document.createElement ( 'p' );
var artikelKleinTitle6 = document.createElement ( 'p' );
var artikelKleinTitle7 = document.createElement ( 'p' );
var artikelKleinTitle8 = document.createElement ( 'p' );
var artikelKleinTitle9 = document.createElement ( 'p' );
var artikelKleinTitle10 = document.createElement ( 'p' );
var artikelKleinTitle11 = document.createElement ( 'p' );
var artikelKleinTitle12 = document.createElement ( 'p' );
var artikelKleinTitle13 = document.createElement ( 'p' );
var artikelKleinTitle14 = document.createElement ( 'p' );
var artikelKleinTitle15 = document.createElement ( 'p' );

var artikelKleinDescription1 = document.createElement ( 'p' );
var artikelKleinDescription2 = document.createElement ( 'p' );
var artikelKleinDescription3 = document.createElement ( 'p' );
var artikelKleinDescription4 = document.createElement ( 'p' );
var artikelKleinDescription5 = document.createElement ( 'p' );
var artikelKleinDescription6 = document.createElement ( 'p' );
var artikelKleinDescription7 = document.createElement ( 'p' );
var artikelKleinDescription8 = document.createElement ( 'p' );
var artikelKleinDescription9 = document.createElement ( 'p' );
var artikelKleinDescription10 = document.createElement ( 'p' );
var artikelKleinDescription11 = document.createElement ( 'p' );
var artikelKleinDescription12 = document.createElement ( 'p' );
var artikelKleinDescription13 = document.createElement ( 'p' );
var artikelKleinDescription14 = document.createElement ( 'p' );
var artikelKleinDescription15 = document.createElement ( 'p' );

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

var vacatureTable1 = document.createElement( 'table' );
var vacatureTBody1 = document.createElement( 'tbody');
var vacatureTR1 = document.createElement( 'tr');
var vacature1TDa = document.createElement( 'td' );
var vacature1TDb = document.createElement( 'td' );
var vacature1TDDiv = document.createElement( 'div' );

var vacatureMeta1 = document.createElement ( 'p' );
var vspan1a = document.createElement ( 'span' );
var vspan1b = document.createElement ( 'span' );
var vacatureTitle1 = document.createElement ( 'p' );
var vacatureDescription1 = document.createElement ( 'p' );

var vacatureTable2 = document.createElement( 'table' );
var vacatureTBody2 = document.createElement( 'tbody');
var vacatureTR2 = document.createElement( 'tr');
var vacature2TDa = document.createElement( 'td' );
var vacature2TDb = document.createElement( 'td' );
var vacature2TDDiv = document.createElement( 'div' );

var vacatureMeta2 = document.createElement ( 'p' );
var vspan2a = document.createElement ( 'span' );
var vspan2b = document.createElement ( 'span' );
var vacatureTitle2 = document.createElement ( 'p' );
var vacatureDescription2 = document.createElement ( 'p' );

var vacatureTable3 = document.createElement( 'table' );
var vacatureTBody3 = document.createElement( 'tbody');
var vacatureTR3 = document.createElement( 'tr');
var vacature3TDa = document.createElement( 'td' );
var vacature3TDb = document.createElement( 'td' );
var vacature3TDDiv = document.createElement( 'div' );

var vacatureMeta3 = document.createElement ( 'p' );
var vspan3a = document.createElement ( 'span' );
var vspan3b = document.createElement ( 'span' );
var vacatureTitle3 = document.createElement ( 'p' );
var vacatureDescription3 = document.createElement ( 'p' );

var vacatureTable4 = document.createElement( 'table' );
var vacatureTBody4 = document.createElement( 'tbody');
var vacatureTR4 = document.createElement( 'tr');
var vacature4TDa = document.createElement( 'td' );
var vacature4TDb = document.createElement( 'td' );
var vacature4TDDiv = document.createElement( 'div' );

var vacatureMeta4 = document.createElement ( 'p' );
var vspan4a = document.createElement ( 'span' );
var vspan4b = document.createElement ( 'span' );
var vacatureTitle4 = document.createElement ( 'p' );
var vacatureDescription4 = document.createElement ( 'p' );

var vacatureTable5 = document.createElement( 'table' );
var vacatureTBody5 = document.createElement( 'tbody');
var vacatureTR5 = document.createElement( 'tr');
var vacature5TDa = document.createElement( 'td' );
var vacature5TDb = document.createElement( 'td' );
var vacature5TDDiv = document.createElement( 'div' );

var vacatureMeta5 = document.createElement ( 'p' );
var vspan5a = document.createElement ( 'span' );
var vspan5b = document.createElement ( 'span' );
var vacatureTitle5 = document.createElement ( 'p' );
var vacatureDescription5 = document.createElement ( 'p' );

var vacatureTable6 = document.createElement( 'table' );
var vacatureTBody6 = document.createElement( 'tbody');
var vacatureTR6 = document.createElement( 'tr');
var vacature6TDa = document.createElement( 'td' );
var vacature6TDb = document.createElement( 'td' );
var vacature6TDDiv = document.createElement( 'div' );

var vacatureMeta6 = document.createElement ( 'p' );
var vspan6a = document.createElement ( 'span' );
var vspan6b = document.createElement ( 'span' );
var vacatureTitle6 = document.createElement ( 'p' );
var vacatureDescription6 = document.createElement ( 'p' );

var vacatureTable7 = document.createElement( 'table' );
var vacatureTBody7 = document.createElement( 'tbody');
var vacatureTR7 = document.createElement( 'tr');
var vacature7TDa = document.createElement( 'td' );
var vacature7TDb = document.createElement( 'td' );
var vacature7TDDiv = document.createElement( 'div' );

var vacatureMeta7 = document.createElement ( 'p' );
var vspan7a = document.createElement ( 'span' );
var vspan7b = document.createElement ( 'span' );
var vacatureTitle7 = document.createElement ( 'p' );
var vacatureDescription7 = document.createElement ( 'p' );

var vacatureTable8 = document.createElement( 'table' );
var vacatureTBody8 = document.createElement( 'tbody');
var vacatureTR8 = document.createElement( 'tr');
var vacature8TDa = document.createElement( 'td' );
var vacature8TDb = document.createElement( 'td' );
var vacature8TDDiv = document.createElement( 'div' );

var vacatureMeta8 = document.createElement ( 'p' );
var vspan8a = document.createElement ( 'span' );
var vspan8b = document.createElement ( 'span' );
var vacatureTitle8 = document.createElement ( 'p' );
var vacatureDescription8 = document.createElement ( 'p' );

var vacatureTable8 = document.createElement( 'table' );
var vacatureTBody8 = document.createElement( 'tbody');
var vacatureTR8 = document.createElement( 'tr');
var vacature8TDa = document.createElement( 'td' );
var vacature8TDb = document.createElement( 'td' );
var vacature8TDDiv = document.createElement( 'div' );

var vacatureMeta8 = document.createElement ( 'p' );
var vspan8a = document.createElement ( 'span' );
var vspan8b = document.createElement ( 'span' );
var vacatureTitle8 = document.createElement ( 'p' );
var vacatureDescription8 = document.createElement ( 'p' );

var vacatureTable9 = document.createElement( 'table' );
var vacatureTBody9 = document.createElement( 'tbody');
var vacatureTR9 = document.createElement( 'tr');
var vacature9TDa = document.createElement( 'td' );
var vacature9TDb = document.createElement( 'td' );
var vacature9TDDiv = document.createElement( 'div' );

var vacatureMeta9 = document.createElement ( 'p' );
var vspan9a = document.createElement ( 'span' );
var vspan9b = document.createElement ( 'span' );
var vacatureTitle9 = document.createElement ( 'p' );
var vacatureDescription9 = document.createElement ( 'p' );

var vacatureTable10 = document.createElement( 'table' );
var vacatureTBody10 = document.createElement( 'tbody');
var vacatureTR10 = document.createElement( 'tr');
var vacature10TDa = document.createElement( 'td' );
var vacature10TDb = document.createElement( 'td' );
var vacature10TDDiv = document.createElement( 'div' );

var vacatureMeta10 = document.createElement ( 'p' );
var vspan10a = document.createElement ( 'span' );
var vspan10b = document.createElement ( 'span' );
var vacatureTitle10 = document.createElement ( 'p' );
var vacatureDescription10 = document.createElement ( 'p' );

var vacatureTable11 = document.createElement( 'table' );
var vacatureTBody11 = document.createElement( 'tbody');
var vacatureTR11 = document.createElement( 'tr');
var vacature11TDa = document.createElement( 'td' );
var vacature11TDb = document.createElement( 'td' );
var vacature11TDDiv = document.createElement( 'div' );

var vacatureMeta11 = document.createElement ( 'p' );
var vspan11a = document.createElement ( 'span' );
var vspan11b = document.createElement ( 'span' );
var vacatureTitle11 = document.createElement ( 'p' );
var vacatureDescription11 = document.createElement ( 'p' );

var vacatureTable12 = document.createElement( 'table' );
var vacatureTBody12 = document.createElement( 'tbody');
var vacatureTR12 = document.createElement( 'tr');
var vacature12TDa = document.createElement( 'td' );
var vacature12TDb = document.createElement( 'td' );
var vacature12TDDiv = document.createElement( 'div' );

var vacatureMeta12 = document.createElement ( 'p' );
var vspan12a = document.createElement ( 'span' );
var vspan12b = document.createElement ( 'span' );
var vacatureTitle12 = document.createElement ( 'p' );
var vacatureDescription12 = document.createElement ( 'p' );

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
//append all elements

document.body.appendChild( createCanvas );
createCanvas.appendChild( contentFeed );
createCanvas.appendChild( contentIndex );
createCanvas.appendChild( credits );

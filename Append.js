//agenda
contentIndex.appendChild( agendaOverlay );
contentIndex.appendChild( agendaAcademyContainer );

//headlines
contentIndex.appendChild( headlinesOverlay );
contentIndex.appendChild( headlinesContainer );
headlinesContainer.appendChild( headlineTable );
headlineTable.appendChild( headlineTbody );
headlineTbody.appendChild( headlineTr1 );
headlineTbody.appendChild( headlineTr2 );
headlineTbody.appendChild( headlineTr3 );
headlineTbody.appendChild( headlineTr4 );
headlineTbody.appendChild( headlineTr5 );
headlineTbody.appendChild( headlineTr6 );
headlineTbody.appendChild( headlineTr7 );
headlineTr1.appendChild( headlines1Td1 );
headlineTr1.appendChild( headlines1Td2 );
headlineTr1.appendChild( headlines1Td3 );
headlineTr2.appendChild( headlines2Td1 );
headlineTr2.appendChild( headlines2Td2 );
headlineTr2.appendChild( headlines2Td3 );
headlineTr3.appendChild( headlines3Td1 );
headlineTr3.appendChild( headlines3Td2 );
headlineTr3.appendChild( headlines3Td3 );
headlineTr4.appendChild( headlines4Td1 );
headlineTr4.appendChild( headlines4Td2 );
headlineTr4.appendChild( headlines4Td3 );
headlineTr5.appendChild( headlines5Td1 );
headlineTr5.appendChild( headlines5Td2 );
headlineTr5.appendChild( headlines5Td3 );
headlineTr6.appendChild( headlines6Td1 );
headlineTr6.appendChild( headlines6Td2 );
headlineTr6.appendChild( headlines6Td3 );
headlineTr7.appendChild( headlines7Td1 );
headlineTr7.appendChild( headlines7Td2 );
headlineTr7.appendChild( headlines7Td3 );
headlines1Td2.appendChild( phl1 );
headlines2Td2.appendChild( phl2 );
headlines3Td2.appendChild( phl3 );
headlines4Td2.appendChild( phl4 );
headlines5Td2.appendChild( phl5 );
headlines6Td2.appendChild( phl6 );
headlines7Td2.appendChild( phl7 );
phl1.appendChild( hl1 );
phl2.appendChild( hl2 );
headlines2Td3.appendChild( shl2b );
phl3.appendChild( hl3 );
phl4.appendChild( hl4 );
phl5.appendChild( hl5 );
headlines5Td3.appendChild( shl5b );
phl6.appendChild( hl6 );
phl7.appendChild( hl7 );

//artikelGroot
contentIndex.appendChild( artikelenGrootContainer );
artikelenGrootContainer.appendChild(artikelenGrootContainerContent);

//artikelKlein
contentIndex.appendChild( artikelenKleinContainer );
artikelenKleinContainer.appendChild( artikelenKleinContainerContent );

//Vacatures
contentIndex.appendChild(vacatureContainer);
vacatureContainer.appendChild(vacatureContainerContent);

//Menu
contentFeed.appendChild( choises );
choises.appendChild( headlinesButton );
headlinesButton.appendChild( headlinesButtonImg );
choises.appendChild( artikelGrootButton );
artikelGrootButton.appendChild( artikelGrootButtonImg );
choises.appendChild( agendaAcademyButton );
agendaAcademyButton.appendChild( agendaAcademyButtonImg );
choises.appendChild( artikelKleinButton );
artikelKleinButton.appendChild( artikelKleinButtonImg );
choises.appendChild( vacatureButton );
vacatureButton.appendChild( vacatureButtonImg );
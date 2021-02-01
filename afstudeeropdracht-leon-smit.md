## Afstudeeropdracht Leon Smit
Kapper X is in de laatste jaren enorm gegroeid. Ze zijn begonnen met 1 locatie maar zijn nu uitgebreid naar 10 locaties. Helaas is het IT proces achtergebleven met deze vernieuwing.

**Het probleem**: Alle locaties werken nog met dezelfde agenda waarin de knip afspraken worden bijgehouden. De medewerkers zien afspraken van alle locaties in plaats van alleen de locatie waar ze werken, dit zorgt voor veel verwarring.

**Vraag**: De klant gaat in aparte agenda's werken per locatie. Echter moeten de historische afspraken niet verloren gaan. Er moet een simpele applicatie komen die de klant kan ondersteunen in het splitten van de agenda zodat ze deze makkelijk kunnen toevoegen aan de nieuwe agenda's.

Maak een applicatie die een .ics bestand in kan laden en alle afspraken toont in een lijst. Hierbij moet er gefilterd kunnen worden op basis van de locatie(LOCATION). De klant wil daarnaast nog specifieke events handmatig uit de lijst kunnen verwijderen. Na het filteren en verwijderen moet de klant de nieuwe lijst kunnen downloaden naar een .ics bestand zodat ze de gefilterde events kunnen importeren in de agenda.

Extra informatie:
- In de SUMMARY staat de naam van de klant.
- In LOCATION staat de locatie van de kapperzaak
- Alle velden moeten overgenomen worden in de filterde feed
- Het overzicht moet de velden: Datum, Starttijd, Eindtijd, klantnaam en locatie tonen

Technische punten:
- Er hoeft geen echte upload te zijn, lees het bestand client side uit in javascript
- Er hoeft alleen ondersteuning te zijn voor de nieuwste google chrome(het is prima dat het dus een html5 api is die je gebruikt)
- De code moet 'resilient' d.w.z. niet crashen als er velden in de feed staan die je niet herkent
- Unit tests om de werking te bewijzen
- Git repo waarbij de voortgang in code te zien is(niet alles in 1 commit dus)
- Max 6 uur de tijd



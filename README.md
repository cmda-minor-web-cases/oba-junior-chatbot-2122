# ObA-junior Chatbot
<img width="100%" margin="0 auto" padding="20px" alt="Schermafbeelding 2022-06-22 om 21 31 12" src="https://user-images.githubusercontent.com/66092262/175120822-194951e3-6362-4b3e-bb0b-c4e3c3912e08.png">

## :globe_with_meridians: Live Link
[Link naar live app](https://oba-junior-chatbot.herokuapp.com/)

## Table of Contents
- [Live link ](#live-link)
- [Design Challenge](#design-challenge)
- [Beschrijving](#Beschrijving)
- [Opdrachtegvers](#opdrachtgevers)
- [User stories](#user-stories)
- [Data](#data)
- [Installatie](#gearinstallatie)
- [Contribiteurs](#contribiteurs)
- [Licentie](#licentie)


## 🤔 Design challenge
> Ontwerp en ontwikkel een chatbot voor OBA Junior, die jeugdige gebruikers (rond 6 jaar), helpt informatie uit de OBA collectie te onstluiten.

## :book: Beschrijving

Opgroeien in een digitale wereld betekent van jongs af aan digitale competenties en vaardigheden ontwikkelen.
Digitale transacties zowel formeel (bank, overheid) als informeel (afspraken maken) is meer en meer de norm. Veel van deze transacties verlopen via conversational- of decision tree modellen.
Zelfs het nieuws wordt op een conversational manier overgebracht via stories van NOS en nu.nl (vs. ‘ouderwets’ bronnen opzoeken via google)
Wat als we kinderen en jongeren al vanaf de eerste digitale kennismaking zoeken en vragen spelenderwijs aanleren?!

`Het ontwerplab` is een samenwerking tussen de oba, de gemeente amsterdam en ontwerp collectief Idiotes. Samen werken hier ontwerpers, onderzoekers en ontwikkelaars aan producten en diensten die zorgen dat alle Amsterdammers deel kunnen nemen aan de digitale samenleving, verbonden kunnen zijn met hun eigen buurt, stad en het internet en de mogelijkheden hebben om hun kennis en digitale vaardigheden te vergroten.  

Onze ontwerpvraag luidt dan ook als volgt:
> Hoe kunnen we een omgeving ontwerpen die zorgt dat kinderen van 6 toegang en competenties hebben om de kansen en mogelijkheden van de digitale stad te ervaren en gebruiken.

De ObA-Junior chatbot biedt de mogelijkheid. De chatbot helpt kinderen van de leeftijd van 6 jaar door de website van de ObA heen. Door middel van leuke en vriendelijke helper wordt het kind begeleid naar een boek of andere media content van de ObA. Voor volwassen is de ux, ui en logica heel anders dan voor kinderen. Voor oba junior hebben we een chatbot ontwikkeld die specifiek op jeugd (4-8) is gericht qua ux, ui, botlogica en inhoud.


## 👥 Opdrachtgevers

Product Owners:  
**Leonore Snoek**, senior service designer @ oba ontwerplab. Hiervoor UX coach @ growth tribe & civic service designer bij NYC Mayor's office for economic opportunity. 

**Fatma Genc**, programmamaker digitale geletterdheid @ oba. Hiervoor community manager en merkstrateeg voor oa WeTransfer, Mindvalley, samengewerkt met oa What Design Can Do, Design Indaba, Art Basel.


### User stories
Voor de chatbot hebben wij 3 user stories waar mee wij rekening gaan houden tijdens het ontwerpen en maken van de chatbot. 

1. Als jeugdige gebruiker van 6 wil ik op speelse wijzen leren wat een chatbot is, zodat ik deze kan gebruiken om items uit de collectie van de OBA te vinden (navigeren).

2. Als jeugdige gebruiker van 6 wil ik mijn interesses aan een chatbot kunnen vertellen, zodat deze mij kan helpen een eigen collectie samen te stellen (verzamelen).

3. Als jeugdige gebruiker van 6 wil ik, samen met mijn moeder en/of vader, aan de hand van het stellen van vragen aan de chatbot, kinderboeken uit de collectie van de OBA vinden, zodat we die samen kunnen gaan lenen.  

## 📊 Data
We hebben in onze applicatie gebruik gemaakt van de OBA API.

## :gear: Installatie
1. Clone deze repo
```
git clone https://github.com/basv1996/oba-junior-chatbot.git
```
2. Zorg dat je in de juiste map zit
```
cd oba-junior-chatbot
```
3. Installeer dependencies
```
npm install
```
4. Maak een .env bestand met een key voor de API
```
PUB_KEY = '****cd*****d87****d8f***fb4*****'
```
5. Start de applicatie
```
npm start
```
6.  Voor development kan je de applicatie runnen in `dev modus`
```
npm run dev
```

## 🔮 Toekomstige ideeën
* Gebruiker kan zelf een karakter kiezen
* Gebruiker kan na de eerste keer de dialoog van de chatbot overslaan
* Meer interactie toevoegen aan het karakter

## 📦 NPM packages
* axios (^0.27.2)
* dotenv (^16.0.1)
* ejs (^3.1.8)
* express (^4.18.1)
* node-fetch (^2.6.0)

## 👨🏻‍💻 Contribiteurs
- [Bas Vugts](https://github.com/basv1996)
- [Jody Lorist](https://github.com/jody29)

## © Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).

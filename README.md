# WebDevelopment 2020 - Frontend Part

## Getting started
Die Webseite wurde auf Github-Pages unter https://mi-classroom.github.io/miniprojekt-jomehr/ deployed.  


### **Architekturentscheidung:** Warum Reactjs?
Da Github-Pages nur eine statische HTML-Datei aktzeptiert wurde die Website mit Reactjs programmiert. So kann die HTML-Datei einfach und performant dynamisch zur Laufzeit verändert werden.  
React bietet sich auch, aufgrund der komponentenbasierten Programmierung an, da die Webseite viele Datensätze in gleicher Form ausgeben soll, die so einfach wiederverwertet werden können.  
**Bsp.:** Für die Darstellung aller Bilder benötigt man nur eine Component, wie ein Template für jedes Bild wiedervertet werden kann

## Nutzung
Per default wir beim Start der Webseite die Liste aller Gemälde geladen. Der Client ruft also "under the hood" https://project-bpo3-wechsler-backend.herokuapp.com/api/v2/de/paintings auf. Die Daten sind serverseitig schon aufsteigend nach Datum sortiert. 

### Header
Im Header befindet sich ein Dropdown-Menü, mit dem die derzeitig gerenderten Daten, ohne Browserrefresh, in einer anderen Sprache geladen werden kann

Dort ist auch ein Input-Feld mit dem ein GET auf eine einzelne Gemälde-Ressource nach ID ausgeführt werden kann.  
**Anmerkung:** Die ID kann noch nicht über die URL abgefragt werden. Die Sprache der Einzel-Ansicht kann nur vor der jeweiligen Anfrage geändert werden. 

### Queries
Queries sind bisher nur per URL möglich.  Eine detaillierte Erläuterung gibt es hier:  
https://github.com/mi-classroom/projekt-bpo3-wechsler-backend-jomehr#queries 
Ein solcher Query muss nur an die Basis-Url der Webseite angehängt werden.  
Bsp.: https://mi-classroom.github.io/miniprojekt-jomehr/?size=15&images=true

### Darstellung 
Die Daten der API werde zuerst mit ihrer vorgegebenen Reihenfolge in der Collapsible-Component anhand Ihrer Jahreszahlen gemaped.
Pro Jahreszahl wird so ein Collapsible gerendered.  
Anschließen weden sie mit allen Gemälden gefüllt, die mit dieser Jahreszahl datiert sind.  

Jedes Painting-Component rendered nach einem Klick darauf eine Detail-Ansicht des jeweiligen Bildes.  
Es besteht die Möglichkeit sich, innerhalb der Detailansicht, anhand der Pfeile durch alle Gemälde eines Jahres zu navigieren.

Die Website wurde sowohl für Desktops, als auch für Mobile Devices designed. Es existiert ein Breakpoint bei 940px Breite.



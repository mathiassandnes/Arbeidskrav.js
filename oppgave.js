/*
I denne oppgaven skal vi sjekke om tallene i den medfulgte arrayen er gyldige postnummer. Det er ingen bokstaver i arrayet, så jeg velger å ikke sjekke etter om det er bokstaver i hvert element.
*/

//Gitt array fra oppgaven
var potentialPostalCodes = ["231", "0186", "35012", "7011", "01304"];

//lopper igjennom arrayet
for (var i = 0; i<potentialPostalCodes.length; i++) 
{
    //sjekker om elementet på index "i" i arrayet er av lengde 4
    if (potentialPostalCodes[i].length === 4)
    {
        //skriver ut at postnummeret er gyldig
        console.log("Følgende nummer kvalifiserer som postnummer: " + potentialPostalCodes[i]);
    } 
    else 
    {
        //skriver ut at postnummeret ikke er gyldig
        console.log("Følgende nummer kvalifiserer ikke som postnummer: " + potentialPostalCodes[i]);
    }
}

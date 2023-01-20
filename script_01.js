
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

// --> function getSentence() .....

const QUE = "?";
const PUNCT = ".";
const EXCL = "!";
const GAP = " ";

let zeichen = prompt("Frage, Satz oder Aufforderung? Q / S / E eingeben");
output(getSentence(["Ich","bin","der","coole","Max","Mütze"], zeichen));

function getSentence(arr, zeichen)
{
    let str = "";
    for (let i = 0; i < arr.length; i++)
    {
        if (i == arr.length -1)
        {
            //output(zeichen);
            switch(zeichen)
            {
                case "q":
                case "Q":
                  str = str + arr[i] + QUE;
                  break;
                case "s":
                case "S":
                  str = str + arr[i] + PUNCT;
                  break;
                case "e":
                case "E":
                  str = str + arr[i] + EXCL;
                  break;
                default:
                  return output("Ungültige Eingabe");
            }      

        }
        else
        {
            str = str + arr[i] + GAP;
        }
    }

    return str;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}
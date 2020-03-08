guessing = () =>
{
let x = '';
let test = '';
let guessed =[];
let wordletter =[];
let val = '';
let size_x = 0;
let nbre_fois = 0;
let bon = 0;
let rate = 0;
let perte = 0;
let valprice = 0;
let gain = 0;
let price = random_amount = Math.floor((Math.random() * 100) + 1);
let restenbre = 0
wordtofind = () =>{
                   let mot = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
                   return mot;
                  }
wordtab = (chaine) =>{   // function pour avaoir un tableau de lettre a deviner
var sortie = [];
for(var i=0; i<chaine.length; i++) 
sortie.push(chaine.charAt(i));
return sortie;
}
x = wordtofind();
wordletter = wordtab(x);
size_x = x.length;
restenbre = size_x - nbre_fois;
guessletters = () =>{
test = prompt("Guess a letter : ");  //ici on met value du input test
nbre_fois++;
restenbre--;
for(var t= 0; t < guessed.length; t++) // to check if the letter was already given by the user, if yes we stop otherwise we add it in guessletters
        {
            if (guessed[t] == test)
               {
                 alert('Letter already done, bye');
                 return 0;
               }
        }
val = x.includes(test);
guessed.push(test);
console.log('mot a deviner :' + " " + `${x}`+ " " + "letter guessed : " + " " + `${test}` + " " + " trouve :" + " " + `${val}` + " " + "nombre de fois :" + " " + `${nbre_fois}`+ " " + "reste nbre a determiner :" + " " + `${restenbre}`);
// tester si la lettre devinnee match avec une des lettres du mot a deviver.
for(var k = 0; k < wordletter.length; k++)
   {
    if(wordletter[k] == test)
      {
        bon++; // good letters we increment
        gain = bon*price;
        alert("Congratulations, you deserve a gain" + " " + "your price :" + " " + `${gain}`);
        valprice = gain;
      }
      else 
          {
          rate++;
          perte = bon*price;
          if (gain > 0)
             {
              gain = gain - perte;
             }
          }
   }
}  // end function guessletters
guessletters();
while(restenbre > 0)
     {
      guessletters();
     }
wordletter;  //test
  if (gain <= 0)
    {
     alert('Game lost');
    } 
   else
       {
          alert('you are a winner, your price :' + ' ' + `${valprice}`);
       }        
console.log('words : ' + " " + `${x}`);
// guessed =[]; mots devines
// wordletter =[]; mots a deviner
for(var p = 0; p < guessed.length; p++)
   {
    for(var m = 0; m < wordletter.length; m++)
       {
        if(guessed[p] == wordletter[m])
          {
           console.log(guessed[p].fontcolor("green"));
          }
         else
          {
          console.log(guessed[p]);
          }
       }
   }
guessed;
}
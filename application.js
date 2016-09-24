

      
//function
var $= function(id){
      return document.getElementById(id);
}




  var isValid=true;

var findName= function(){


//user input
var gender=$('gender').value;
var birthMonth=$('month').value;
var fName=$('fName').value;
var fLetter=fName.charAt(0).toUpperCase();
var lName=$('lName').value;
var lLetter=lName.charAt(0).toUpperCase();

console.log(gender + " "+ birthMonth+ " "+ fName+ " "+ fLetter+ " "+lName+ " "+lLetter);


      // finds male game of thrnes first name
   if(gender=='MALE'){
      
             if(fLetter== 'A'){
                  
                   var gotFname ='Davos';
            }

             else if(fLetter== 'B'){
                  
                   var gotFname ='Viserys';
            }
            else if(fLetter== 'C'){
                  
                  var gotFname ='Brandon';
            
            }

            else if(fLetter== 'D'){
                  
                   var gotFname ='Loras';
           }

            else if(fLetter== 'E'){
                  
                  var gotFname ='Edd';
            }

            else if(fLetter== 'F'){
                  
                  var gotFname ='Aegon';
            }
            else if(fLetter== 'G'){
                  
                  var gotFname ='Gendry';
          
        }
         else if(fLetter== 'H'){
                  
                  var gotFname ='Tywin';
             }

             else if(fLetter== 'I'){
                  
                  var gotFname ='Llyn';
            }
            else if(fLetter== 'J'){
                  
                  var gotFname ='Hallyne';
             }
             else if(fLetter== 'K'){
                  
                   var gotFname ='Pycelle';
            }
             else if(fLetter== 'L'){
                  
                   var gotFname ='Tyrion';
             }
            else if(fLetter== 'M'){
                  
                   var gotFname ='Cressen';
            }
             else if(fLetter== 'N'){
                  
                   var gotFname ='Rickon';
             }
            else if(fLetter== 'O'){
                  
                   var gotFname ='Jamie';
            }
            else if(fLetter== 'P'){
                  
                   var gotFname ='Samwell';
             }
             else if(fLetter== 'Q'){
                  
                   var gotFname ='Qyburn';
             }
           else if(fLetter== 'R'){
                  
                   var gotFname ='Barristan';
             }
             else if(fLetter== 'S'){
                  
                   var gotFname ='Victarion';
             }
             else if(fLetter== 'T'){
                  
                   var gotFname ='waymar';
            }
            else if(fLetter== 'U'){
                  
                  var gotFname ='Yoren';
            }
            else if(fLetter== 'V'){
                  
                  var gotFname ='Robert';
            }
             else if(fLetter== 'W'){
                  
                   var gotFname ='Renly';
             }
             else if(fLetter== 'X'){
                  
                   var gotFname ='Kevan';
             }
            else if(fLetter== 'Y'){
                  
                  var gotFname ='Lommy';
            }

            else {
                var gotFname='Jojen';            }

      
}
//find female game of thrones first name
 else{
      
             if(fLetter== 'A'){
                  
                   var gotFname ='Ygritte';
            }

             else if(fLetter== 'B'){
                  
                   var gotFname ='Catelyn';
            }
            else if(fLetter== 'C'){
                  
                  var gotFname ='Shireen';
            
            }

            else if(fLetter== 'D'){
                  
                   var gotFname ='Brienne';
           }

            else if(fLetter== 'E'){
                  
                  var gotFname ='Irri';
            }

            else if(fLetter== 'F'){
                  
                  var gotFname ='Roslyn';
            }
            else if(fLetter== 'G'){
                  
                  var gotFname ='Daenerys';
          
        }
         else if(fLetter== 'H'){
                  
                  var gotFname ='Greta';
             }

             else if(fLetter== 'I'){
                  
                  var gotFname ='Lyanna';
            }
            else if(fLetter== 'J'){
                  
                  var gotFname ='Mordane';
             }
             else if(fLetter== 'K'){
                  
                   var gotFname ='Selyse';
            }
             else if(fLetter== 'L'){
                  
                   var gotFname ='Lysa';
             }
            else if(fLetter== 'M'){
                  
                   var gotFname ='Margarey';
            }
             else if(fLetter== 'N'){
                  
                   var gotFname ='Osha';
             }
            else if(fLetter== 'O'){
                  
                   var gotFname ='Elia';
            }
            else if(fLetter== 'P'){
                  
                   var gotFname ='Penny';
             }
             else if(fLetter== 'Q'){
                  
                   var gotFname ='Mycella';
             }
           else if(fLetter== 'R'){
                  
                   var gotFname ='Rhaella';
             }
             else if(fLetter== 'S'){
                  
                   var gotFname ='Shae';
             }
             else if(fLetter== 'T'){
                  
                   var gotFname ='Cersei';
            }
            else if(fLetter== 'U'){
                  
                  var gotFname ='Sansa';
            }
            else if(fLetter== 'V'){
                  
                  var gotFname ='Arianne';
            }
             else if(fLetter== 'W'){
                  
                   var gotFname ='Arya';
             }
             else if(fLetter== 'X'){
                  
                   var gotFname ='Wylla';
             }
            else if(fLetter== 'Y'){
                  
                  var gotFname ='Alyssa';
            }

            else {
                var gotFname='Meera';            }

                  }

      console.log(gotFname);

//find game of thrones house name

if(lLetter=='A'){
  
 var gotLname='Dondarrion';

}
else if (lLetter=='B'){
  
 var gotLname='Clegane';
 
}
else if (lLetter=='C'){
  
 var gotLname='Greyjoy';
 
}

else if (lLetter=='D'){
  
 var gotLname='Snow';
 
}

else if (lLetter=='E'){
  
 var gotLname='Baratheon';
 
}
else if (lLetter=='F'){
  
 var gotLname='Tarly';
 
}
else if (lLetter=='G'){
  
 var gotLname='Martell';
 
}
else if (lLetter=='H'){
  
 var gotLname='Arryn';
 
}
else if (lLetter=='I'){
  
 var gotLname='Locke';
 
}
else if (lLetter=='J'){
  
 var gotLname='Tailhart';
 
}
else if (lLetter=='K'){
  
 var gotLname='Frey';
 
}
else if (lLetter=='L'){
  
 var gotLname='Stark';
 
}
else if (lLetter=='M'){
  
 var gotLname='Royce';
 
}
else if (lLetter=='N'){
  
 var gotLname='Tyrell';
 
}
else if (lLetter=='O'){
  
 var gotLname='Bolton';
 
}
else if (lLetter=='P'){
  
 var gotLname='Targaryn';
 
}
else if (lLetter=='Q'){
  
 var gotLname='Darry';
 
}
else if (lLetter=='R'){
  
 var gotLname='Harlow';
 
}
else if (lLetter=='S'){
  
 var gotLname='Tully';
 
}
else if (lLetter=='T'){
  
 var gotLname='Lannister';
 
}
else if (lLetter=='U'){
  
 var gotLname='Yoren';
 
}
else if (lLetter=='V'){
  
 var gotLname='Sunderly';
 
}
else if (lLetter=='W'){
  
 var gotLname='Westerling';
 
}
else if (lLetter=='X'){
  
 var gotLname='Mormont';
 
}
else if (lLetter=='Y'){
  
 var gotLname='Ashford';
 
}
else {
  
 var gotLname='Karstark';
 
}

//game of thrones title

if(birthMonth=='JANUARY'){
      if(gender=='MALE'){
        
        var title="King";

      }
      else{
            var title="Queen";
      }
}

else if(birthMonth=='FEBUARY'){
    if(gender=='MALE'){
        
        var title="Maester";

      }
      else{
            var title="Septa";
      }  
}
else if(birthMonth=='MARCH'){
     var title="Lord Commander";

}

else if(birthMonth=='APRIL'){
      var title="Night of the KingsGuard";
}
else if(birthMonth=='MAY'){
        if(gender=='MALE'){
        
        var title="Kal";

      }
      else{
            var title="Khaleesi";
      }
}

else if(birthMonth=='JUNE'){
      var title="Whore";
}
else if(birthMonth=='JULY'){
      var title="Kings' hand";
}
else if(birthMonth=='AUGUST'){
      if(gender=='MALE'){
        
        var title="Red Priest";

      }
      else{
            var title="Red Priestess";
      }  
}

else if(birthMonth=='SEPTEMBER'){
      var title="Smuggler";
}
else if(birthMonth=='OCTOBER'){
      if(gender=='MALE'){
        
        var title="Lord";

      }
      else{
            var title="Lady";
      } 
}
else if(birthMonth=='NOVEMBER'){
      var title="Sellsword";
}
else {
      var title="White Walker";
}
//validation
  console.log(isValid);


 if(gender != 'MALE' || 'FEMALE'){
   $('error-gender').value='Please enter male or female';

   isValid=false;
 }

 console.log(gender);
 console.log(isValid);

 var answer= fName+ " "+ "your Game of Thrones Name is "+ " "+ gotFname+ " "+ title+ " "+" of house "+ " "+ gotLname;
   $('gotName').value=answer;


    console.log(answer);

}


 if (isValid==true){

    window.onload=function(){

      $('execute').onclick=findName;}

    } 
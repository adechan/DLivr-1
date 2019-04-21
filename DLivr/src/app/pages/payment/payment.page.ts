import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  go(){
    var x = document.getElementById("formular");
    var y = document.getElementById("addCard");
    var z = document.getElementById("cards");
    
    
      // Otherwise, show it
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    
  }

  cancel(){

    var x = document.getElementById("formular");
    var y = document.getElementById("addCard");
    var z = document.getElementById("cards");
    var w = document.getElementById("pCardNumber");

     x.style.display = "none";
     y.style.display = "block";
     z.style.display = "block";
     w.style.display = "none";

     (<HTMLInputElement>document.getElementById('cardNumber')).value= "";
     (<HTMLInputElement>document.getElementById('date')).value= "";
     (<HTMLInputElement>document.getElementById('cvv')).value= "";
     (<HTMLInputElement>document.getElementById('country')).value= "";
     (<HTMLInputElement>document.getElementById('zipcode')).value= "";
     
  }

  save(){
    var x = document.getElementById("formular");
    var y = document.getElementById("addCard");
    var w = document.getElementById("pCardNumber");
    var i = document.getElementById("icon");
    var str1 = "**** ";
  
    
    var button = document.createElement("button");
    button.innerHTML = "Edit";
    button.addEventListener ("click", function() {
      alert("edit zone");
    });

      var listOfCards = document.getElementById('cards');
      var cardNr = (<HTMLInputElement>document.getElementById('cardNumber')).value;

      if(cardNr && cardNr.length==19){
        var subst4 = cardNr.substring(cardNr.length - 4, cardNr.length);
        var result = str1.concat(subst4);
        var entry = document.createElement('ion-item');
        entry.appendChild(document.createTextNode(result));
        
       // entry.appendChild(button);
        entry.style.color = "grey";
     
        listOfCards.appendChild(entry);
        listOfCards.appendChild(button);
        var br = document.createElement("br");
        listOfCards.appendChild(br);


     // button.style.backgroundColor= "transparent";
        button.style.color = "grey";
        button.style.cssFloat = "right";
        entry.style.display = "inline-block";
        button.style.display = "inline-block";
        x.style.display = "none";
        y.style.display = "block";
        listOfCards.style.display = "block";
        w.style.display = "none";
      
        
        (<HTMLInputElement>document.getElementById('cardNumber')).value= "";
        (<HTMLInputElement>document.getElementById('date')).value= "";
        (<HTMLInputElement>document.getElementById('cvv')).value= "";
        (<HTMLInputElement>document.getElementById('country')).value= "";
        (<HTMLInputElement>document.getElementById('zipcode')).value= "";
       

      }else{
        x.style.display = "block";
        y.style.display = "none";
        listOfCards.style.display = "none";
        w.style.display = "block";
      }
    
  }
  
}

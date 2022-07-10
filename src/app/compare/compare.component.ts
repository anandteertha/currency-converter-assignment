import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppComponent } from "../app.component";
import {Injectable, Renderer2, RendererFactory2, ViewChild, ElementRef, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  @ViewChild('mainDiv1', {static: false}) main1: ElementRef;
  @ViewChild('mainDiv2', {static: false}) main2: ElementRef;
  field: {
    CurrencyName: string;
    Country: string;
    USD_Equivalent: string;
  }
  rc111: ElementRef;
  rc222: ElementRef;
  got1 = false;
  got2 = false;
  val1 = 0;
  val2 = 0;
  first_word_list = []
  get_1st(data) {
    let i = 0
    //alert(data)
    for(i=0;i<this.fields.length;i++) {
      let x = data.split(" ")[0]+" "+data.split(" ")[1]+" "+data.split(" ")[2]
      let y = this.fields[i].CurrencyName
      //alert("x = "+x)
      //alert("y = "+y)
      if(x == y) {
        return true
      }
    }
    return false
  }
  display(data, id) {
    //console.log("...reached");
    //alert()
    if(id == 1 || id == "1") {
      //console.log("here?");

      if(this.rc111) {
        this.main1.nativeElement.removeChild(this.rc111);
      }

      this.got1 = true;
      this.val1 = Number(data.split(" ")[4])
      var recaptchaContainer = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer, 'currency');
      this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
      this.renderer.appendChild(this.main1.nativeElement, recaptchaContainer);

      this.rc111 = recaptchaContainer;

      var recaptchaContainer2 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer2, 'icon-currency');
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


      var recaptchaContainer3 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer3, 'currency-name');


      var Name: string;
      Name = 'Name: ' + data.split(" ")[0]+" "+data.split(" ")[1]+" "+data.split(" ")[2]
      console.log(Name);
      this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


      var Country: string;
      var recaptchaContainer4 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer4, 'currency-country');
      Country = 'Country: ' + data.split(" ")[3];
      console.log(Country);

      this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


      var recaptchaContainer5 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer5, 'currency-value');
      var USD_Equivalent: string;
      USD_Equivalent = 'USD equivalent: ' + data.split(" ")[4]+ " " + data.split(" ")[5]
      this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
    }
    else {
      console.log("shey");
      this.got2 = true;
      if(this.rc222) {
        this.main2.nativeElement.removeChild(this.rc222)
      }
      this.val2 = Number(data.split(" ")[4])
      var recaptchaContainer = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer, 'currency');
      this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
      this.renderer.appendChild(this.main2.nativeElement, recaptchaContainer);

      this.rc222 = recaptchaContainer;

      var recaptchaContainer2 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer2, 'icon-currency');
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


      var recaptchaContainer3 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer3, 'currency-name');


      var Name: string;
      Name = 'Name: ' + data.split(" ")[0]+" "+data.split(" ")[1]+" "+data.split(" ")[2];
      console.log(Name);
      this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


      var Country: string;
      var recaptchaContainer4 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer4, 'currency-country');
      Country = 'Country: ' + data.split(" ")[3];
      console.log(Country);

      this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


      var recaptchaContainer5 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer5, 'currency-value');
      var USD_Equivalent: string;
      USD_Equivalent = 'USD equivalent: ' + data.split(" ")[4] +" "+ data.split(" ")[5]
      this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
    }
    if(this.checkCompare()) {
      var recaptchaContainer6 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer6, 'displayMessage');
      if(this.val1 > this.val2) {
        var s: string = "Currency on left is greater than currency on right";
      }
      else if (this.val1 < this.val2) {
        var s: string = "Currency on left is lower than currency on right";
      }
      else {
        var s: string = "Currency on left is equal to currency on right";
      }
      this.renderer.setProperty(recaptchaContainer6, 'innerHTML', s);
      this.renderer.appendChild(this.main1.nativeElement, recaptchaContainer6);
    }
    return [recaptchaContainer,data.split(" ")[4]]
  }
  checkCompare() {
    if (this.got1 && this.got2) {
      return true;
    }
    return false;
  }
  compareNow(data, id) {
    if (data.trim() != "" && this.get_1st(data.trim())) {
      //display
      let x = this.display(data, id)
      /*let recaptchaContainer = x[0];
      let d = x[1];
      d = Number(d);
      if(id == 1 && this.got2) {
        var recaptchaContainer6 = this.renderer.createElement('div');
        let s: string;
        if(d>val2){
          this.renderer.setProperty(recaptchaContainer6, 'innerHTML', "");
        }
      }*/
    }
    else {
      //display curreny not found.. sorry!!
    }
  }
  fields: Array<any>;
  constructor(public AppComponent: AppComponent, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {
    this.fields = this.AppComponent.fields;
    if(localStorage.getItem('type') == "operator") {
      this.router.navigate(['/operator'])
    }
  }

  ngOnInit(): void {
  }

}

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
      var recaptchaContainer = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer, 'currency');
      this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
      this.renderer.appendChild(this.main1.nativeElement, recaptchaContainer);

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
      var recaptchaContainer = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer, 'currency');
      this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
      this.renderer.appendChild(this.main2.nativeElement, recaptchaContainer);

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
    return [recaptchaContainer,data.split(" ")[4]]
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
  }

  ngOnInit(): void {
  }

}
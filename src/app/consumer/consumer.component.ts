import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Renderer2, RendererFactory2, ElementRef, ViewChild } from "@angular/core";


@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit, AfterViewInit {
  field: {
    CurrencyName: string;
    Country: string;
    USD_Equivalent: string;
  }
  fields: Array<any>;
  @ViewChild('mainDiv', {static: false}) main: ElementRef;
  @ViewChild('currency', {static: false}) currency: ElementRef;
  constructor(public AppComponent: AppComponent, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {
    this.fields = this.AppComponent.fields;
  }
  keyDownEvent() {

  }
  searchList(val:string) {
    console.log(val);
    let i = 0;
    if (val.trim() == "") {
      this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
      for (i=0;i<this.fields.length; i++) {
        var recaptchaContainer = this.renderer.createElement('div');
        this.renderer.addClass(recaptchaContainer, 'currency');
        this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
        this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);


        var recaptchaContainer2 = this.renderer.createElement('div');
        this.renderer.addClass(recaptchaContainer2, 'icon-currency');
        this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


        var recaptchaContainer3 = this.renderer.createElement('div');
        this.renderer.addClass(recaptchaContainer3, 'currency-name');


        var Name: string;
        Name = 'Name: ' + this.fields[i].CurrencyName;
        console.log(Name);
        this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
        this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


        var Country: string;
        var recaptchaContainer4 = this.renderer.createElement('div');
        this.renderer.addClass(recaptchaContainer4, 'currency-country');
        Country = 'Country: ' + this.fields[i].Country;
        console.log(Country);

        this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
        this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


        var recaptchaContainer5 = this.renderer.createElement('div');
        this.renderer.addClass(recaptchaContainer5, 'currency-value');
        var USD_Equivalent: string;
        USD_Equivalent = 'USD equivalent: ' + this.fields[i].USD_Equivalent;
        this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
        this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
      }
    }
    else {
      var visited: boolean;
      visited = false;
      for(i=0;i<this.fields.length;i++) {

        if(this.fields[i].CurrencyName.toLowerCase().startsWith(val.toLowerCase()) || this.fields[i].Country.toLowerCase().startsWith(val.toLowerCase()) || this.fields[i].USD_Equivalent.toLowerCase().startsWith(val.toLowerCase())) {
          if(!visited) {
            this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
            console.log(this.fields[i]);
            visited = true;
            var recaptchaContainer = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer, 'currency');
            this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
            this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);


            var recaptchaContainer2 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer2, 'icon-currency');
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


            var recaptchaContainer3 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer3, 'currency-name');


            var Name: string;
            Name = 'Name: ' + this.fields[i].CurrencyName;
            console.log(Name);
            this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


            var Country: string;
            var recaptchaContainer4 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer4, 'currency-country');
            Country = 'Country: ' + this.fields[i].Country;
            console.log(Country);

            this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


            var recaptchaContainer5 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer5, 'currency-value');
            var USD_Equivalent: string;
            USD_Equivalent = 'USD equivalent: ' + this.fields[i].USD_Equivalent;
            this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
          }
          else {
            //this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
            console.log(this.fields[i]);
            visited = true;
            var recaptchaContainer = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer, 'currency');
            this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
            this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);


            var recaptchaContainer2 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer2, 'icon-currency');
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


            var recaptchaContainer3 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer3, 'currency-name');


            var Name: string;
            Name = 'Name: ' + this.fields[i].CurrencyName;
            console.log(Name);
            this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


            var Country: string;
            var recaptchaContainer4 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer4, 'currency-country');
            Country = 'Country: ' + this.fields[i].Country;
            console.log(Country);

            this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


            var recaptchaContainer5 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer5, 'currency-value');
            var USD_Equivalent: string;
            USD_Equivalent = 'USD equivalent: ' + this.fields[i].USD_Equivalent;
            this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
          }
        }
      }
    }
  }

  ngAfterViewInit(): void {
    let i = 0;
    console.log(this.main.nativeElement.attributes);
    for(i=0; i < this.fields.length; i++) {
      var recaptchaContainer = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer, 'currency');
      this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
      this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);


      var recaptchaContainer2 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer2, 'icon-currency');
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


      var recaptchaContainer3 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer3, 'currency-name');


      var Name: string;
      Name = 'Name: ' + this.fields[i].CurrencyName;
      console.log(Name);
      this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


      var Country: string;
      var recaptchaContainer4 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer4, 'currency-country');
      Country = 'Country: ' + this.fields[i].Country;
      console.log(Country);

      this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


      var recaptchaContainer5 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer5, 'currency-value');
      var USD_Equivalent: string;
      USD_Equivalent = 'USD equivalent: ' + this.fields[i].USD_Equivalent;
      this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
    }
  }


  ngOnInit(): void {
  }

}

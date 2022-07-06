import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppComponent } from "../app.component";
import {Injectable, Renderer2, RendererFactory2, ViewChild, ElementRef, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit, AfterViewInit {

  @ViewChild('mainDiv', {static: false}) main: ElementRef;
  @ViewChild('currency', {static: false}) currency: ElementRef;
  added = false;
  keyDownEvent() {
  }
  @Input() fields = [
    {
      CurrencyName: 'Indian Rupees (INR)',
      Country: 'India',
      USD_Equivalent: '0.013 $'
    },
    {
      CurrencyName: 'Indonesian Rupiah (IDR)',
      Country: 'Indonesia',
      USD_Equivalent: '0.000067 $'
    },
    {
      CurrencyName: 'Kenyan Shilling (KES)',
      Country: 'Kenya',
      USD_Equivalent: '0.0085 $'
    },
    {
      CurrencyName: 'Liberian Dollar (LRD)',
      Country: 'Liberia',
      USD_Equivalent: '0.0066 $'
    }
  ]

  constructor(public AppComponent: AppComponent, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {
    this.fields = this.AppComponent.fields;
    console.log(this.fields);
    const s = this.route.snapshot.paramMap.get('x')!;
    var urlx = this.router.url;
    if (urlx != "/operator") {
      console.log("here");

      var rem = urlx.replace("/operator/", "");
      rem = decodeURIComponent(rem);
      rem = decodeURIComponent(rem);
      var lst = rem.split("&")
      var x = {
        CurrencyName: lst[1],
        Country: lst[0],
        USD_Equivalent: lst[2] + " $"
      };
      this.fields.push(x);
      this.added = true;
    }
    else {
      this.added = false;
    }
  }

  alertItemAdded(event) {
    alert("in operator component")
    var lst = event.split('&');
    this.fields.push({
      CurrencyName: lst[1],
      Country: lst[0],
      USD_Equivalent: lst[2]
    });
    console.log("fields = ", this.fields);

  }

  ngOnInit(): void {



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

}

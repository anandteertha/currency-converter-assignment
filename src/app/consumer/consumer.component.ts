import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { ActivatedRoute, Router } from "@angular/router";
import { Renderer2, RendererFactory2, ElementRef, ViewChild } from "@angular/core";
import { OperatorComponent } from "../operator/operator.component";

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
  sortedOnce: boolean = false;
  @ViewChild('mainDiv', {static: false}) main: ElementRef;
  @ViewChild('currency', {static: false}) currency: ElementRef;
  constructor(public AppComponent: AppComponent, private renderer: Renderer2,
    private route: ActivatedRoute, private router: Router) {
    this.fields = JSON.parse(localStorage.getItem('fields'));
  }
  sortIng() {
    var sortedFields = [];
    var i: number = 0;
    var y: number = this.fields.length;
    if(!this.sortedOnce) {
      while (sortedFields.length < y) {
        sortedFields.push(this.getSmallest(i));
        i += 1;
      }
      this.sortedOnce = true;
    }
    else {
      while (sortedFields.length < y) {
        sortedFields.push(this.getBiggest(i));
        i += 1;
      }
      this.sortedOnce = false;
    }
    this.fields = sortedFields;
    this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
    this.displayAll();
  }
  getSmallest(i) {
    var j = 0;
    var min_val = Number(this.fields[0].USD_Equivalent.split(" ")[0]);
    var idx = 0;
    for(j=1;j<this.fields.length;j++) {
      if(min_val > Number(this.fields[j].USD_Equivalent.split(" ")[0])) {
        min_val = Number(this.fields[j].USD_Equivalent.split(" ")[0]);
        idx = j;
      }
    }
    var z = this.fields[idx];
    this.fields.splice(idx, 1);
    return z;
  }
  getBiggest(i) {
    var j = 0;
    var max_val = Number(this.fields[0].USD_Equivalent.split(" ")[0]);
    var idx = 0;
    for(j=1;j<this.fields.length;j++) {
      if(max_val < Number(this.fields[j].USD_Equivalent.split(" ")[0])) {
        max_val = Number(this.fields[j].USD_Equivalent.split(" ")[0]);
        idx = j;
      }
    }
    var z = this.fields[idx];
    this.fields.splice(idx, 1);
    return z;
  }
  searchList(val:string) {
    console.log(val);
    let i = 0;
    if (val.trim() == "") {
      this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
      this.displayAll();
    }
    else {
      var visited: boolean;
      visited = false;
      for(i=0;i<OperatorComponent.fields.length;i++) {
        if(OperatorComponent.fields[i].CurrencyName.toLowerCase().startsWith(val.toLowerCase())
        || OperatorComponent.fields[i].Country.toLowerCase().startsWith(val.toLowerCase()) ||
        OperatorComponent.fields[i].USD_Equivalent.toLowerCase().startsWith(val.toLowerCase())) {
          if(!visited) {
            this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
            visited = true;
            this.searchFactory(i);
          }
          else {
            visited = true;
            this.searchFactory(i);
          }
        }
      }
    }
  }
  displayAll() {
    let i = 0;
    for(i=0; i < this.fields.length; i++) {
      this.searchFactory(i);
    }
  }
  createCurrency() {
    var recaptchaContainer: ElementRef = recaptchaContainer = this.renderer.createElement('div');
    this.renderer.addClass(recaptchaContainer, 'currency');
    this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
    this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);
    return recaptchaContainer;
  }
  createIconCurrency(recaptchaContainer: ElementRef) {
    var recaptchaContainer2: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(recaptchaContainer2, 'icon-currency');
    this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);
    return recaptchaContainer2;
  }
  createCurrencyName(recaptchaContainer: ElementRef, i: number) {
    var Name: string;
    var recaptchaContainer3: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(recaptchaContainer3, 'currency-name');
    Name = 'Name: ' + this.fields[i].CurrencyName;
    this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
    this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);
    return recaptchaContainer3;
  }
  createCurrencyCountry(recaptchaContainer: ElementRef, i: number) {
    var Country: string;
    var recaptchaContainer4: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(recaptchaContainer4, 'currency-country');
    Country = 'Country: ' + this.fields[i].Country;
    this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
    this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);
    return recaptchaContainer4;
  }
  createCurrencyValue(recaptchaContainer: ElementRef, i: number) {
    var recaptchaContainer5: ElementRef = this.renderer.createElement('div');
    var USD_Equivalent: string;
    this.renderer.addClass(recaptchaContainer5, 'currency-value');
    USD_Equivalent = 'USD equivalent: ' + this.fields[i].USD_Equivalent;
    this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
    this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
    return recaptchaContainer5;
  }
  createLine(currencyValueDiv: ElementRef) {
    var lineDiv: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(lineDiv,'line');
    this.renderer.appendChild(currencyValueDiv, lineDiv);
    return lineDiv;
  }
  searchFactory(i: number) {
    var currency: ElementRef = this.createCurrency();
    var currencyIcon = this.createIconCurrency(currency);
    var currencyNameDiv = this.createCurrencyName(currency, i);
    var currencyCountryDiv = this.createCurrencyCountry(currency, i);
    var currencyValueDiv = this.createCurrencyValue(currency, i);
    var lineDiv = this.createLine(currencyValueDiv);
  }
  ngAfterViewInit(): void {
    this.displayAll()
  }
  ngOnInit(): void {
  }

}

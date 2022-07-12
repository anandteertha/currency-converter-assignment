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
  referenceMain1: ElementRef;
  referenceMain2: ElementRef;
  referenceDisplay: ElementRef;
  got1: boolean = false;
  got2: boolean = false;
  val1: number = 0;
  val2: number = 0;
  first_word_list = []
  get_1st(data: string): boolean {
    let i:number = 0
    for(i=0;i<this.fields.length;i++) {
      let inputCurrencyName = data.split(" ")[0]+" "+data.split(" ")[1]+" "+data.split(" ")[2]
      let currentCurrencyName = this.fields[i].CurrencyName
      if(inputCurrencyName == currentCurrencyName) {
        return true
      }
    }
    return false
  }
  createCurrency(parent: ElementRef): ElementRef {
    var currency: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(currency, 'currency');
    this.renderer.setProperty(currency, 'id', 'currency');
    this.renderer.appendChild(parent, currency);
    return currency;
  }
  createIcons(parent: ElementRef) : ElementRef {
    var icons: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(icons, 'icon-currency');
    this.renderer.appendChild(parent, icons);
    return icons;
  }
  createCurrencyName(parent: ElementRef, data: string) : ElementRef {
    var currentCurrencyName: ElementRef = this.renderer.createElement('div');
    var Name: string;
    this.renderer.addClass(currentCurrencyName, 'currency-name');
    Name = 'Name: ' + data.split(" ")[0]+" "+data.split(" ")[1]+" "+data.split(" ")[2];
    this.renderer.setProperty(currentCurrencyName, 'innerHTML', Name);
    this.renderer.appendChild(parent, currentCurrencyName);
    return currentCurrencyName;
  }
  createCurrencyCountry(parent: ElementRef, data: string): ElementRef {
    var Country: string;
    var currentCurrencyCountry: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(currentCurrencyCountry, 'currency-country');
    Country = 'Country: ' + data.split(" ")[3];
    this.renderer.setProperty(currentCurrencyCountry, 'innerHTML', Country);
    this.renderer.appendChild(parent, currentCurrencyCountry);
    return currentCurrencyCountry;
  }
  createCurrencyValue(parent: ElementRef, data: string): ElementRef {
    var currentCurrencyValue = this.renderer.createElement('div');
    var USD_Equivalent: string;
    this.renderer.addClass(currentCurrencyValue, 'currency-value');
    USD_Equivalent = 'USD equivalent: ' + data.split(" ")[4]+ " " + data.split(" ")[5]
    this.renderer.setProperty(currentCurrencyValue, 'innerHTML', USD_Equivalent);
    this.renderer.appendChild(parent, currentCurrencyValue);
    return currentCurrencyValue;
  }
  displayFacade(parent: ElementRef, data: string) {
    var currency = this.createCurrency(parent)
    var icons = this.createIcons(currency);
    var currencyNameDiv = this.createCurrencyName(currency, data);
    var currencyCountryDiv = this.createCurrencyCountry(currency, data);
    var currencyValueDiv = this.createCurrencyValue(currency, data);
    return currency;
  }
  display(data, id) {
    if(id == 1 || id == "1") {
      if(this.referenceMain1) {
        this.main1.nativeElement.removeChild(this.referenceMain1);
      }
      this.got1 = true;
      this.val1 = Number(data.split(" ")[4])
      var currency: ElementRef = this.displayFacade(this.main1.nativeElement, data);
      this.referenceMain1 = currency;
    }
    else {
      this.got2 = true;
      if(this.referenceMain2) {
        this.main2.nativeElement.removeChild(this.referenceMain2)
      }
      this.val2 = Number(data.split(" ")[4]);
      var currency: ElementRef = this.displayFacade(this.main2.nativeElement, data);
      this.referenceMain2 = currency;
    }
    if(this.checkCompare()) {
      if(this.referenceDisplay) {
        this.main1.nativeElement.removeChild(this.referenceDisplay);
      }
      var displayCompare = this.renderer.createElement('div');
      this.renderer.addClass(displayCompare, 'displayMessage');
      if(this.val1 > this.val2) {
        var s: string = "Currency on left is greater than currency on right";
      }
      else if (this.val1 < this.val2) {
        var s: string = "Currency on left is lower than currency on right";
      }
      else {
        var s: string = "Currency on left is equal to currency on right";
      }
      this.renderer.setProperty(displayCompare, 'innerHTML', s);
      this.renderer.appendChild(this.main1.nativeElement, displayCompare);
      this.referenceDisplay = displayCompare;
    }
    return [currency, data.split(" ")[4]]
  }
  checkCompare(): boolean {
    if (this.got1 && this.got2) {
      return true;
    }
    return false;
  }
  compareNow(data, id) {
    if (data.trim() != "" && this.get_1st(data.trim())) {
      let x = this.display(data, id);
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
  ngOnInit(): void {}
}

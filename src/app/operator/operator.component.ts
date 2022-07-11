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
  static fields = [
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
  constructor(public AppComponent: AppComponent, private renderer: Renderer2,
    private route: ActivatedRoute, private router: Router) {
    if(localStorage.getItem('type') == "consumer") {
      this.router.navigate(['/consumer'])
    }
    const s = this.route.snapshot.paramMap.get('x')!;
    const x1 = this.route.snapshot.paramMap.get('x1')!;
    const x2 = this.route.snapshot.paramMap.get('x2')!;
    var urlx = this.router.url;
    if (s) {
      var rem = urlx.replace("/operator/", "");
      rem = decodeURIComponent(rem);
      rem = decodeURIComponent(rem);
      var lst = rem.split("&")
      var x = {
        CurrencyName: lst[1],
        Country: lst[0],
        USD_Equivalent: lst[2] + " $"
      };
      OperatorComponent.fields.push(x);
      localStorage.setItem("fields", JSON.stringify(OperatorComponent.fields))
      this.added = true;
      this.router.navigate(['/operator']);
    }
    else if(x1 && x2) {
      var lst = x1.split(" ");
      var oldCurrencyName = lst[0]+" "+lst[1]+" "+lst[2];
      var lst2 = x2.split(" ");
      var newCurrencyName = lst2[0]+" "+lst2[1]+" "+lst2[2];
      var newCountry = lst2[3];
      var newUSD = lst2[4]+" "+lst2[5];
      for(var idx = 0;idx<OperatorComponent.fields.length; idx++) {
        if(OperatorComponent.fields[idx].CurrencyName == oldCurrencyName) {
          OperatorComponent.fields[idx].CurrencyName = newCurrencyName;
          OperatorComponent.fields[idx].Country = newCountry;
          OperatorComponent.fields[idx].USD_Equivalent = newUSD;
          localStorage.setItem("fields", JSON.stringify(OperatorComponent.fields));
          this.router.navigate(['/operator']);
        }
      }
    }
    else {
      this.added = false;
      localStorage.setItem("fields", JSON.stringify(OperatorComponent.fields))
    }
  }
  sortedOnce = false;
  sortIng() {
    var x = []
    var i = 0;
    var y = OperatorComponent.fields.length;
    if(!this.sortedOnce) {
      while (x.length < y) {
        x.push(this.getSmallest(i));
        i += 1;
      }
      this.sortedOnce = true;
    }
    else {
      while (x.length < y) {
        x.push(this.getBiggest(i));
        i += 1;
      }
      this.sortedOnce = false;
    }
    OperatorComponent.fields = x;
    this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
    this.displayAll()
  }
  getSmallest(i) {
    var j = 0;
    var min_val = Number(OperatorComponent.fields[0].USD_Equivalent.split(" ")[0]);
    var idx = 0;
    for(j=1;j<OperatorComponent.fields.length;j++) {
      if(min_val > Number(OperatorComponent.fields[j].USD_Equivalent.split(" ")[0])) {
        min_val = Number(OperatorComponent.fields[j].USD_Equivalent.split(" ")[0]);
        idx = j;
      }
    }
    var z = OperatorComponent.fields[idx];
    OperatorComponent.fields.splice(idx, 1);
    return z;
  }
  getBiggest(i) {
    var j = 0;
    var max_val = Number(OperatorComponent.fields[0].USD_Equivalent.split(" ")[0]);
    var idx = 0;
    for(j=1;j<OperatorComponent.fields.length;j++) {
      if(max_val < Number(OperatorComponent.fields[j].USD_Equivalent.split(" ")[0])) {
        max_val = Number(OperatorComponent.fields[j].USD_Equivalent.split(" ")[0]);
        idx = j;
      }
    }
    var z = OperatorComponent.fields[idx];
    OperatorComponent.fields.splice(idx, 1);
    return z;
  }
  ngOnInit(): void {}
  editRedirect(i, oc) {
    this.router.navigate(['edit',oc.fields[i].CurrencyName+" " +
    oc.fields[i].Country + " " +oc.fields[i].USD_Equivalent]);
  }
  delete(i) {
    OperatorComponent.fields.splice(i, 1);
  }
  displayAll() {
    let i = 0;
    for(i=0; i < OperatorComponent.fields.length; i++) {
      this.searchFactory(i);
    }
  }
  ngAfterViewInit(): void {
    this.displayAll()
  }
  createCurrency() {
    var recaptchaContainer: ElementRef = recaptchaContainer = this.renderer.createElement('div');
    this.renderer.addClass(recaptchaContainer, 'currency');
    this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
    this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);
    return recaptchaContainer;
  }
  createIcons(recaptchaContainer: ElementRef) {
    var rc: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(rc, 'icons-delete-edit');
    this.renderer.appendChild(recaptchaContainer, rc);
    return rc;
  }
  createEditIcon(rc: ElementRef, i: number) {
    var rc2 = this.renderer.createElement('object');
    this.renderer.setProperty(rc2, 'type', 'image/svg+xml')
    this.renderer.addClass(rc2, 'EDIT');
    this.renderer.addClass(rc2, "icons-delete-edit");
    rc2.OperatorComponent = OperatorComponent
    rc2.index = i;
    rc2.addEventListener('click', (e) => {
      var x = e.currentTarget.OperatorComponent;
      this.editRedirect(e.currentTarget.index, x);
    });
    this.renderer.appendChild(rc, rc2);
    return rc2;
  }
  createDeleteIcon(rc: ElementRef, i: number) {
    var rc3 = this.renderer.createElement('object');
    this.renderer.setProperty(rc3, 'type', 'image/svg+xml')
    this.renderer.addClass(rc3, 'DELETE');
    this.renderer.addClass(rc3, "icons-delete-edit")
    rc3.OperatorComponent = OperatorComponent
    rc3.index = i;
    rc3.addEventListener('click', (e) => {
      var x = e.currentTarget.OperatorComponent;
      this.delete(e.currentTarget.index);
      this.added = true;
      var arr = this.main.nativeElement.childNodes;
      for(var j=0;j<arr.length;j++) {
        if(j == e.currentTarget.index) {
          this.main.nativeElement.removeChild(this.main.nativeElement.childNodes[j]);
          this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
          this.displayAll();
          alert("Item has been successfully deleted!");
          break;
        }
      }
    });
    this.renderer.appendChild(rc, rc3);
    return rc3;
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
    Name = 'Name: ' + OperatorComponent.fields[i].CurrencyName;
    this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
    this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);
    return recaptchaContainer3;
  }
  createCurrencyCountry(recaptchaContainer: ElementRef, i: number) {
    var Country: string;
    var recaptchaContainer4: ElementRef = this.renderer.createElement('div');
    this.renderer.addClass(recaptchaContainer4, 'currency-country');
    Country = 'Country: ' + OperatorComponent.fields[i].Country;
    this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
    this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);
    return recaptchaContainer4;
  }
  createCurrencyValue(recaptchaContainer: ElementRef, i: number) {
    var recaptchaContainer5: ElementRef = this.renderer.createElement('div');
    var USD_Equivalent: string;
    this.renderer.addClass(recaptchaContainer5, 'currency-value');
    USD_Equivalent = 'USD equivalent: ' + OperatorComponent.fields[i].USD_Equivalent;
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
    var iconsEditDelete: ElementRef = this.createIcons(currency);
    var editIcon: ElementRef = this.createEditIcon(iconsEditDelete, i);
    var deleteIcon: ElementRef = this.createDeleteIcon(iconsEditDelete, i);
    var currencyIcon = this.createIconCurrency(currency);
    var currencyNameDiv = this.createCurrencyName(currency, i);
    var currencyCountryDiv = this.createCurrencyCountry(currency, i);
    var currencyValueDiv = this.createCurrencyValue(currency, i);
    var lineDiv = this.createLine(currencyValueDiv);
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
}

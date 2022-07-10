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

  constructor(public AppComponent: AppComponent, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {
    //this.fields = this.AppComponent.fields;
    //console.log(this.fields);
    if(localStorage.getItem('type') == "consumer") {
      this.router.navigate(['/consumer'])
    }
    const s = this.route.snapshot.paramMap.get('x')!;
    const x1 = this.route.snapshot.paramMap.get('x1')!;
    const x2 = this.route.snapshot.paramMap.get('x2')!;
    var urlx = this.router.url;
    //alert(s)
    //alert(x1)
    //alert(x2)
    if (s) {
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
      OperatorComponent.fields.push(x);
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
          this.router.navigate(['/operator']);
        }
      }
    }
    else {
      this.added = false;
    }
  }

  alertItemAdded(event) {
    alert("in operator component")
    var lst = event.split('&');
    OperatorComponent.fields.push({
      CurrencyName: lst[1],
      Country: lst[0],
      USD_Equivalent: lst[2]
    });
    console.log("fields = ", OperatorComponent.fields);

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

  ngOnInit(): void {



  }
  editRedirect(i, oc) {
    console.log(oc);
    console.log(oc.fields[i].CurrencyName);

    this.router.navigate(['edit',oc.fields[i].CurrencyName+" " + oc.fields[i].Country + " " +oc.fields[i].USD_Equivalent]);
  }
  delete(i) {
    console.log("deleting: ",OperatorComponent.fields);
    OperatorComponent.fields.splice(i, 1);

  }
  displayAll() {
    let i = 0;
    for(i=0; i < OperatorComponent.fields.length; i++) {
      var recaptchaContainer = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer, 'currency');
      this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
      //recaptchaContainer.innerHTML = `<div class="icons-delete-edit"><object type="image/svg+xml" class="EDIT icons-delete-edit"></object><object type="image/svg+xml" class="DELETE icons-delete-edit"></object></div>`;
      this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);


      var rc = this.renderer.createElement('div');
      this.renderer.addClass(rc, 'icons-delete-edit');
      this.renderer.appendChild(recaptchaContainer, rc);

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

      var rc3 = this.renderer.createElement('object');
      this.renderer.setProperty(rc3, 'type', 'image/svg+xml')
      this.renderer.addClass(rc3, 'DELETE');
      this.renderer.addClass(rc3, "icons-delete-edit")
      rc3.OperatorComponent = OperatorComponent
      rc3.index = i;
      rc3.addEventListener('click', (e) => {
        var x = e.currentTarget.OperatorComponent;
        console.log(e.currentTarget.index);
        this.delete(e.currentTarget.index);
        this.added = true;
        console.log(this.main.nativeElement.childNodes);
        var arr = this.main.nativeElement.childNodes;
        for(var j=0;j<arr.length;j++) {
          if(j == e.currentTarget.index) {
            this.main.nativeElement.removeChild(this.main.nativeElement.childNodes[j]);
            break;
          }
        }
      });

      this.renderer.appendChild(rc, rc3)



      var recaptchaContainer2 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer2, 'icon-currency');
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


      var recaptchaContainer3 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer3, 'currency-name');


      var Name: string;
      Name = 'Name: ' + OperatorComponent.fields[i].CurrencyName;
      console.log(Name);
      this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


      var Country: string;
      var recaptchaContainer4 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer4, 'currency-country');
      Country = 'Country: ' + OperatorComponent.fields[i].Country;
      console.log(Country);

      this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


      var recaptchaContainer5 = this.renderer.createElement('div');
      this.renderer.addClass(recaptchaContainer5, 'currency-value');
      var USD_Equivalent: string;
      USD_Equivalent = 'USD equivalent: ' + OperatorComponent.fields[i].USD_Equivalent;
      this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
      this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);

      var l = this.renderer.createElement('div');
      this.renderer.addClass(l,'line')
      this.renderer.appendChild(recaptchaContainer5, l)
    }
  }
  ngAfterViewInit(): void {
    this.displayAll()
  }
  searchList(val:string) {
    console.log(val);
    let i = 0;
    if (val.trim() == "") {
      this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
      this.displayAll()
    }
    else {
      var visited: boolean;
      visited = false;
      for(i=0;i<OperatorComponent.fields.length;i++) {
        if(OperatorComponent.fields[i].CurrencyName.toLowerCase().startsWith(val.toLowerCase()) || OperatorComponent.fields[i].Country.toLowerCase().startsWith(val.toLowerCase()) || OperatorComponent.fields[i].USD_Equivalent.toLowerCase().startsWith(val.toLowerCase())) {
          if(!visited) {
            this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
            console.log(OperatorComponent.fields[i]);
            visited = true;
            var recaptchaContainer = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer, 'currency');
            this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
            this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);
            var rc = this.renderer.createElement('div');
            this.renderer.addClass(rc, 'icons-delete-edit');
            this.renderer.appendChild(recaptchaContainer, rc);

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

            var rc3 = this.renderer.createElement('object');
            this.renderer.setProperty(rc3, 'type', 'image/svg+xml')
            this.renderer.addClass(rc3, 'DELETE');
            this.renderer.addClass(rc3, "icons-delete-edit")
            rc3.OperatorComponent = OperatorComponent
            rc3.index = i;
            rc3.addEventListener('click', (e) => {
              var x = e.currentTarget.OperatorComponent;
              console.log(e.currentTarget.index);
              this.delete(e.currentTarget.index);
              this.added = true;
              console.log(this.main.nativeElement.childNodes);
              var arr = this.main.nativeElement.childNodes;
              for(var j=0;j<arr.length;j++) {
                if(j == e.currentTarget.index) {
                  this.main.nativeElement.removeChild(this.main.nativeElement.childNodes[j]);
                  break;
                }
              }
            });
            this.renderer.appendChild(rc, rc3)


            var recaptchaContainer2 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer2, 'icon-currency');
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


            var recaptchaContainer3 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer3, 'currency-name');


            var Name: string;
            Name = 'Name: ' + OperatorComponent.fields[i].CurrencyName;
            console.log(Name);
            this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


            var Country: string;
            var recaptchaContainer4 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer4, 'currency-country');
            Country = 'Country: ' + OperatorComponent.fields[i].Country;
            console.log(Country);

            this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


            var recaptchaContainer5 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer5, 'currency-value');
            var USD_Equivalent: string;
            USD_Equivalent = 'USD equivalent: ' + OperatorComponent.fields[i].USD_Equivalent;
            this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
          }
          else {
            //this.renderer.setProperty(this.main.nativeElement, 'innerHTML', " ");
            console.log(OperatorComponent.fields[i]);
            visited = true;
            var recaptchaContainer = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer, 'currency');
            this.renderer.setProperty(recaptchaContainer, 'id', 'currency');
            this.renderer.appendChild(this.main.nativeElement, recaptchaContainer);
            var rc = this.renderer.createElement('div');
            this.renderer.addClass(rc, 'icons-delete-edit');
            this.renderer.appendChild(recaptchaContainer, rc);

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

            var rc3 = this.renderer.createElement('object');
            this.renderer.setProperty(rc3, 'type', 'image/svg+xml')
            this.renderer.addClass(rc3, 'DELETE');
            this.renderer.addClass(rc3, "icons-delete-edit")
            rc3.OperatorComponent = OperatorComponent
            rc3.index = i;
            rc3.addEventListener('click', (e) => {
              var x = e.currentTarget.OperatorComponent;
              console.log(e.currentTarget.index);
              this.delete(e.currentTarget.index);
              this.added = true;
              console.log(this.main.nativeElement.childNodes);
              var arr = this.main.nativeElement.childNodes;
              for(var j=0;j<arr.length;j++) {
                if(j == e.currentTarget.index) {
                  this.main.nativeElement.removeChild(this.main.nativeElement.childNodes[j]);
                  break;
                }
              }
            });
            this.renderer.appendChild(rc, rc3)


            var recaptchaContainer2 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer2, 'icon-currency');
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer2);


            var recaptchaContainer3 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer3, 'currency-name');


            var Name: string;
            Name = 'Name: ' + OperatorComponent.fields[i].CurrencyName;
            console.log(Name);
            this.renderer.setProperty(recaptchaContainer3, 'innerHTML', Name);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer3);


            var Country: string;
            var recaptchaContainer4 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer4, 'currency-country');
            Country = 'Country: ' + OperatorComponent.fields[i].Country;
            console.log(Country);

            this.renderer.setProperty(recaptchaContainer4, 'innerHTML', Country);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer4);


            var recaptchaContainer5 = this.renderer.createElement('div');
            this.renderer.addClass(recaptchaContainer5, 'currency-value');
            var USD_Equivalent: string;
            USD_Equivalent = 'USD equivalent: ' + OperatorComponent.fields[i].USD_Equivalent;
            this.renderer.setProperty(recaptchaContainer5, 'innerHTML', USD_Equivalent);
            this.renderer.appendChild(recaptchaContainer, recaptchaContainer5);
          }
        }
      }
    }
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Injectable, Renderer2, RendererFactory2, ViewChild, ElementRef, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('editForm', {static: false}) editform: ElementRef;
  currency: string;
  country:string;
  value:string;
  cancelClicked: boolean = false;
  cancelClick() {
    this.cancelClicked = true;
  }
  editVal(item) {
    if(!this.cancelClicked) {
      var old = this.currency + " " + this.country + " " + this.value;
      var newItem = item.currency + " " + item.country + " " + item.value;
      this.router.navigate(['/operator',{
        x1: old,
        x2: newItem
      }])
    }
    else {
      this.router.navigate(['/operator'])
    }
  }
  constructor(public AppComponent: AppComponent, private renderer: Renderer2,
    private route: ActivatedRoute, private router: Router) {
    if(localStorage.getItem('type') == "consumer") {
      this.router.navigate(['/consumer'])
    }
    const s = this.route.snapshot.paramMap.get('x')!;
    var urlx = this.router.url;
    if(urlx != "/edit") {
      var rem = urlx.replace("/edit/", "");
      rem = decodeURIComponent(rem);
      rem = decodeURIComponent(rem);
      var lst = rem.split(" ")
      this.currency = lst[0] + " " + lst[1] + " " + lst[2];
      this.country = lst[3];
      this.value = lst[4] + " " + lst[5];
    }
    else {
      this.router.navigate(['/operator'])
    }
  }
  ngOnInit(): void {}
}

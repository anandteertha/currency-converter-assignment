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

  editVal(item) {
    var old = this.currency + " " + this.country + " " + this.value;
    var newItem = item.currency + " " + item.country + " " + item.value;
    console.log(newItem);
    this.router.navigate(['/operator',{
      x1: old,
      x2: newItem
    }])
  }
  currency = ""
  country = ""
  value = ""
  customSearch: string;
  constructor(public AppComponent: AppComponent, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {
    const s = this.route.snapshot.paramMap.get('x')!;
    var urlx = this.router.url;
    //alert(urlx)
    if(urlx != "/edit") {
      var rem = urlx.replace("/edit/", "");
      rem = decodeURIComponent(rem);
      rem = decodeURIComponent(rem);
      var lst = rem.split(" ")
      console.log(lst);
      //console.log(this.editform.nativeElement);
      this.currency = lst[0] + " " + lst[1] + " " + lst[2];
      this.country = lst[3];
      this.value = lst[4] + " " + lst[5];
    }
    else {
      this.router.navigate(['/operator'])
    }
  }

  ngOnInit(): void {
  }

}

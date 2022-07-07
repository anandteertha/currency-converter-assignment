import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import {Injectable, Renderer2, RendererFactory2, ViewChild, ElementRef, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
  field: {
    CurrencyName: string;
    Country: string;
    USD_Equivalent: string;
  }
  fields: Array<any>;
  constructor(public AppComponent: AppComponent, private renderer: Renderer2, private route: ActivatedRoute, private router: Router) {
    this.fields = this.AppComponent.fields;
  }

  ngOnInit(): void {
  }

}

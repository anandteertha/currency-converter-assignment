import { Component, OnInit, EventEmitter, Output, Injectable   } from '@angular/core';
//import { AppComponent } from "../app.component";
//import { OperatorComponent } from "../operator/operator.component";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  //fields = []
  @Output() itemAdded:EventEmitter<string> = new EventEmitter();
  constructor(private router: Router) {
    //this.fields = this.AddComponent.fields;
    if(localStorage.getItem('type') == "consumer") {
      this.router.navigate(['/consumer'])
    }
  }
  addVal(item: any) {
    var x = {}
    x['Country'] = item.country;
    x['CurrencyName'] = item.currency;
    x['USD_Equivalent'] = item.value;
    //this.fields.push(x);
    var S: string;
    S = item.country+'&'+item.currency+'&'+item.value;
    this.itemAdded.emit(S);
    S = encodeURI(S);
    this.router.navigate(['/operator',S]);
  }

  ngOnInit(): void {

  }

}

import { Component, OnInit, EventEmitter, Output, Injectable   } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cancelClicked: boolean = false;
  @Output() itemAdded:EventEmitter<string> = new EventEmitter();
  constructor(private router: Router) {
    if(localStorage.getItem('type') == "consumer") {
      this.router.navigate(['/consumer'])
    }
  }
  addVal(item: any) {
    if(!this.cancelClicked) {
      var x = {}
      x['Country'] = item.country;
      x['CurrencyName'] = item.currency;
      x['USD_Equivalent'] = item.value;
      var S: string;
      S = item.country+'&'+item.currency+'&'+item.value;
      this.itemAdded.emit(S);
      S = encodeURI(S);
      this.router.navigate(['/operator',S]);
    }
    else {
      this.router.navigate(['/operator']);
    }
  }
  cancelClick() {
    this.cancelClicked = true;
  }
  ngOnInit(): void {}
}

import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';



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

  constructor () {
  }

  alertItemAdded(event) {
    alert("in app component")
    var lst = event.split('&');
    this.fields.push({
      CurrencyName: lst[1],
      Country: lst[0],
      USD_Equivalent: lst[2]
    });
    console.log("fields = ", this.fields);

  }

}

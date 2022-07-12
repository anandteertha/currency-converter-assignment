import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  loginUser(item: any) {
    console.log(item.username);
    console.log(item.pswd);
    console.log(item.userType);
    if (item.username == "Anandteertha" && item.pswd == "12345Aa") {
      if (item.userType == "Operator") {
        //redirect to OPERATOR
        localStorage.setItem('type', 'operator');
        this.router.navigate(['/operator']);
      }
      else {
        //redirect to CONSUMER
        localStorage.setItem('type', 'consumer')
        this.router.navigate(['/consumer']);
      }
    }
    else {
      //redict to login page with error
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpUser: any;
 
  constructor(private _authservice : AuthService, private _router: Router ) { //new AuthService 
    this.signUpUser = {}
   }

  ngOnInit(): void {
  }

  signUp(){
    
    if (!this.signUpUser.name || !this.signUpUser.email || !this.signUpUser.password ) {

      alert('Datos Incompletos')
      
    } else {
      this._authservice.signUpUser(this.signUpUser).subscribe({
        next: (v) => {
          localStorage.setItem('token', v.jwtToken )
         this._router.navigate(['/create'])
        },
        error: (e) => {
          alert(e.error)

        }
      })
    }

  }

}

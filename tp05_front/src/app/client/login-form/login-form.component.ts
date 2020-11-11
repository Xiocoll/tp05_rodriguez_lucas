import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  token: string;

  constructor(private httpService : ProduitService, private router : Router) { }

  ngOnInit(): void {
    
  }

  onSubmitForm(){
    const formValue = this.loginForm.value;

    this.httpService.logUser(formValue['login'], formValue['password']).subscribe((response) =>{
      if(response.success){
        this.token = response.headers.get('authorization');
      }
    })
  }
    

}

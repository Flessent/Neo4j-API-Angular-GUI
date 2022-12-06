import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule, AbstractControl} from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router ,Routes, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {Store} from '@ngrx/store';
import {loginActionSuccess,loginActionStart,loginActionError} from '../../ngrx/login/login.actions';
import {API} from '../../model/user';
@Component({
  selector: 'app-neo4j-api',
  templateUrl: './neo4j-api.component.html',
  styleUrls: ['./neo4j-api.component.css']
})
export class Neo4jApiComponent implements OnInit {
username: string='';
  password : string='';
  errorMessage = 'Invalid Credentials';
  successMessage: string='';
  invalidLogin = false;
  loginSuccess = false;
userFormGroup!: FormGroup;
submitted:boolean=false;
constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService, private formbuilder: FormBuilder, private store: Store<AppState>) {   }
ngOnInit()  {

 this.userFormGroup =this.formbuilder.group({
username : new FormControl("flexe@merkel", [Validators.required, Validators.minLength(7)]),
password : new FormControl("merkel007",[Validators.required,Validators.minLength(8)] )

 }) }

 get form(): { [key: string]: AbstractControl } {
    return this.userFormGroup.controls;
  }


/*login(){
this.store.dispatch(loginActionSuccess({username: this.username,password: this.password}));
} */

  handleLogin() {
  const username = this.userFormGroup.value.username;
     const password = this.userFormGroup.value.password;
     //    this.store.dispatch(setLoadingSpinner({ status: true }));

   //  this.store.dispatch(loginActionStart({ username, password }));


}
}

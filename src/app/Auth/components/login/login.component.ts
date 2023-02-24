import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../Services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup:any;
  constructor(private router:Router, private auth: AuthService, private formBuilder: FormBuilder){

    this.formGroup= FormGroup;
  }
  anio:string="";
  
  ngOnInit(){
    var anio= new Date();
    this.anio = anio.getFullYear().toString();
    this.buildForm();
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      UserAccount: '',
      PasswordAccount: '',
    });
  }
  login(){
    // const user =this.formGroup.value;
    // debugger;
    // this.auth.Login(user).subscribe( data => {
    //   if(data.valid == false){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: data.message
    //     })
        
    //   }else{
    //     this.router.navigate(['/home/usuarios'])
    //   }
      
    // });
    this.router.navigate(['/home/usuarios'])
  }
}

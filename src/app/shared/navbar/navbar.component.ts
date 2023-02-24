import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){

  }
  down :boolean=false;
  @Input () nombres: string | undefined;
  description: string='';
  decode:any;
  ngOnInit() {
    var token = localStorage.getItem('token');
    if(token){
      this.decode= jwt_decode(token);

      this.nombres=this.decode.nombres;
      console.log(this.nombres);
    }
  }
  getDescription(nombres:string) {
    return nombres;
  }
  openNav() {
    this.description = this.getDescription(this.nombres!);
    document.getElementById('mySidebar')?.classList.add('sideBar');
    document.getElementById('main')?.classList.add('mainBar');
    document.getElementById('mains')?.classList.add('mainBar');
    document.getElementById('mains2')?.classList.add('mainBar');
  }
  doSomething(){
    if(!this.down){
      
      document.getElementById('box')?.classList.add('boxBar');
      this.down=true;
    }
    else{
      document.getElementById('box')?.classList.remove('boxBar');
      this.down=false;
    }
  }
  doSomethingUsuario(){
    if(!this.down){
      
      document.getElementById('boxUsuario')?.classList.add('boxBar');
      this.down=true;
    }
    else{
      document.getElementById('boxUsuario')?.classList.remove('boxBar');
      this.down=false;
    }
  }

  LogOut(){
    this.router.navigate([''])
  }
}

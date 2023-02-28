import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  regionActiva:string= 'usuarios';
  regionActivaChild:string= 'Requerimientos';
  filterBar:boolean=false;
  decode:any;
  nombres:string="";
  formulario:string='';
  
  navbarData = [
    {
        routeLink: 'usuarios',
        icon: 'fa fa-user',
        label: 'Usuarios',
        collapse: '#Usuarios',
        children:[
          {
            routeLink: 'usuarios',
            icon: 'fa fa-user',
            label: 'Requerimientos',
          },
          {
            routeLink: 'empresas',
            icon: 'fa fa-user',
            label: 'Propuestas',
          }
          
        ]        
    },
    {
        routeLink: 'empresas',
        icon: 'fa fa-building',
        label: 'Empresas',
        collapse: '#Sedes',
        children:[
          {
            routeLink: 'empresas',
            icon: 'fa fa-user',
            label: 'Tareas',
          },
          {
            routeLink: 'usuarios',
            icon: 'fa fa-user',
            label: 'Roles',
          }
          
        ]  
    }
  ];
  constructor(private router:Router){}
  ngOnInit(){
    this.openNav();
    this.activarRegion("Usuarios");
    this.router.navigate(['/home/usuarios'])
    
    
    }
    showSubmenu(itemEl: HTMLElement) {
      itemEl.classList.toggle("showMenu");
    }
  openNav() {
    document.getElementById('mySidebar')?.classList.add('sideBar');
    document.getElementById('main')?.classList.add('mainBar');
    document.getElementById('mains')?.classList.add('mainBar');
    document.getElementById('mains2')?.classList.add('mainBar');
  }
  
  closeNav() {
    document.getElementById('mySidebar')?.classList.remove('sideBar');
    document.getElementById('main')?.classList.remove('mainBar');
    document.getElementById('mains')?.classList.remove('mainBar');
    document.getElementById('mains2')?.classList.remove('mainBar');
  }

  getClassCss(region: string){
    return (region ===this.regionActiva)? 'click-color a': ''
  }
  getClassBtn(region: string){
    
    return (region ===this.regionActivaChild)? 'click-color button': ''
  }
  activarRegion(region:string){
    this.regionActiva = region;
    this.formulario = region;
    //TODO: hacer el llamado al servicio
  }
  activarRegionBtn(region:string){
    this.regionActivaChild =region;
    this.formulario = region;
    //TODO: hacer el llamado al servicio
  }
  filters(){
    if(!this.filterBar){
      document.getElementById('myFilterBar')?.classList.add('filterBar');
      document.getElementById('main')?.classList.add('mainBarFilter');
      document.getElementById('mains')?.classList.add('mainBarFilter');
      document.getElementById('mains2')?.classList.add('mainBarFilter');
      this.filterBar=true;
    }else{
      
      this.closeFilterBar();
      this.filterBar=false;
    }
    
  }
  closeFilterBar(){
    document.getElementById('myFilterBar')?.classList.remove('filterBar');
    document.getElementById('main')?.classList.remove('mainBarFilter');
    document.getElementById('mains')?.classList.remove('mainBarFilter');
    document.getElementById('mains2')?.classList.remove('mainBarFilter');
  }
  
}

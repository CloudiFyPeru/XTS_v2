import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  regionActiva:string= 'usuarios';
  filterBar:boolean=false;
  decode:any;
  nombres:string="";
  formulario:string='';
  menuSidebar = [
    {
      link_name: "Dashboard",
      link: "/dashboard",
      icon: "bx bx-grid-alt",
      sub_menu: []
    }, {
      link_name: "Category",
      link: null,
      icon: "bx bx-collection",
      sub_menu: [
        {
          link_name: "HTML & CSS",
          link: "/html-n-css",
        }, {
          link_name: "JavaScript",
          link: "/javascript",
        }, {
          link_name: "PHP & MySQL",
          link: "/php-n-mysql",
        }
      ]
    }, {
      link_name: "Posts",
      link: null,
      icon: "bx bx-book-alt",
      sub_menu: [
        {
          link_name: "Web Design",
          link: "/posts/web-design",
        }, {
          link_name: "Login Form",
          link: "/posts/login-form",
        }, {
          link_name: "Card Design",
          link: "/posts/card-design",
        }
      ]
    }, {
      link_name: "Analytics",
      link: "/analytics",
      icon: "bx bx-pie-chart-alt-2",
      sub_menu: []
    }, {
      link_name: "Chart",
      link: "/chart",
      icon: "bx bx-line-chart",
      sub_menu: []
    }, {
      link_name: "Plugins",
      link: null,
      icon: "bx bx-plug",
      sub_menu: [
        {
          link_name: "UI Face",
          link: "/ui-face",
        }, {
          link_name: "Pigments",
          link: "/pigments",
        }, {
          link_name: "Box Icons",
          link: "/box-icons",
        }
      ]
    }, {
      link_name: "Explore",
      link: "/explore",
      icon: "bx bx-compass",
      sub_menu: []
    }, {
      link_name: "History",
      link: "/history",
      icon: "bx bx-history",
      sub_menu: []
    }, {
      link_name: "Setting",
      link: "/setting",
      icon: "bx bx-cog",
      sub_menu: []
    }
  ];
  navbarData = [
    {
        routeLink: 'usuarios',
        icon: 'fa fa-user',
        label: 'Usuarios',
        collapse: '#Usuarios'
    },
    {
        routeLink: 'empresas',
        icon: 'fa fa-building',
        label: 'Sedes',
        collapse: '#Sedes'
    },
    {
        routeLink: 'empresas',
        icon: 'fa fa-address-card-o',
        label: 'Especialidades',
        collapse: '#Especialidades'
    },
    {
      routeLink: 'empresas',
      icon: 'fa fa-cog',
      label: 'Roles',
      collapse: '#Roles'
    },
    {
      routeLink: 'empresas',
      icon: 'fa fa-user-md',
      label: 'Doctores',
      collapse: '#Doctores'
    },
    {
      routeLink: 'empresas',
      icon: 'fa fa-user',
      label: 'Pacientes',
      collapse: '#Pacientes'
    },
    {
      routeLink: 'empresas',
      icon: 'fa fa-clock-o',
      label: 'Citas',
      collapse: '#Citas'
    }
  ];
  
  ngOnInit(){
    this.openNav();
    this.activarRegion("Usuarios");
    
   
    
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
  activarRegion(region:string){
    
    this.regionActiva = region;
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

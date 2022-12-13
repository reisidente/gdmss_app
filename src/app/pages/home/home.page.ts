import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  nombre:String='';
  username:string;
  
  constructor(
      private router:Router,
      private activatedRouter:ActivatedRoute,
      private menu:MenuController,
      private storage:Storage,
      private services:AutosService) 
      {
        this.activatedRouter.queryParams.subscribe(params=>{

          if(this.router.getCurrentNavigation().extras.state)
          {
            let usuario=this.router.getCurrentNavigation().extras.state.usr;
            console.log("Bienvenido " + usuario.username);
            this.username=usuario.username;
          }
        })
      }

    ngOnInit() {
      this.vernombre();
      }
    
    async vernombre()
    {
      this.nombre=await this.storage.get('sesion');
    }
    
  async cerrar()
    {
      await this.storage.set('sesion', null);
    }
  abrirMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  cerrarSesion() {
    this.cerrar();
    this.router.navigate(['/login'])
  }
  
}

  


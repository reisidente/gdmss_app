import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu:MenuController, private storage:Storage, private router:Router) {}

  
  async ngOnInit() {
    await this.storage.create();
  }

  cerrarSesion(){
    this.cerrarsesion();
    this.router.navigate(['/login']);

  }
  cerrar()
  {
    this.menu.close('first');
  }
  async cerrarsesion()
  {
    await this.storage.set('sesion',null);
  }
}
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Viaje } from '../../interfaces/viajes';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-programarviaje',
  templateUrl: './programarviaje.page.html',
  styleUrls: ['./programarviaje.page.scss'],
})
export class ProgramarviajePage implements OnInit {

  constructor(private storage:Storage,
              private router:Router,
              private AlertController:AlertController) { }
  
  viaje: Viaje ={
    precio: '',
    destino: '',
    tamano: ''
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.viaje);
    this.guardar();
}

async guardar()
{
  let existe= await this.storage.get;

  if(existe!=null)
  {
    await this.storage.set(this.viaje.destino,this.viaje);
    console.log("Viaje creado");
    this.router.navigate(['/home']);
    
  }
  this.presentAlert()
}

async presentAlert() {
  const alert = await this.AlertController.create({
    header: 'AÑADIR VIAJE',
    subHeader: '',
    message: 'Viaje añadido',
    cssClass:'alerta',
    buttons: [
      {
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
          console.log('Confirmado');
          this.router.navigate(['/home']);
        },
      },
    ],
    mode:'ios',
    backdropDismiss:false
  });
  
  await alert.present();
  
  const { role } = await alert.onDidDismiss();
  console.log(`Dismissed with role: ${role}`);
}
}





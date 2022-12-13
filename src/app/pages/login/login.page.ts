import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario =
    {
      username: '',
      password: ''
    };

  constructor(private router: Router,
    private alertController: AlertController,
    private storage:Storage) { }

  ngOnInit() {
  }
  async validarusr() {
    let usr=await this.storage.get(this.usuario.username);
    if (usr!=null)
    {
      console.log(usr);
      this.storage.set('sesion', this.usuario.username);
      this.router.navigate(['/home']);
    }
    else {
      console.log("usuario inválido");
    }
  }
  onSubmit() {

    this.validarusr();

    if (this.usuario.username == 'sesion' ){
      console.log("Ok");
      let navigationExtras: NavigationExtras = {
        state: {
          usr: this.usuario,
          algo: 'Ok',
        }
      
      }
      console.log(navigationExtras);

      this.router.navigate(['/home'], navigationExtras);


    }
  }

}
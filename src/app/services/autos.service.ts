import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutosService {

  constructor(private httpclient:HttpClient) { }

  getCategorias() {
  }
}

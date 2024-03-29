import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map} from 'rxjs/operators'
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http:HttpClient) { }

  getListPuntosRepartidos(data:any)
  {
    const url = `${base_url}/reportes/puntosxempresa`;
    return   this.http.post(url , data)
  }
}

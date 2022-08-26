import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   * Constructor
   *
   * @param http Cliente para peticiones REST
   */
  constructor(private http: HttpClient) {}

  /**
   * Llamado al API de pokemones
   *
   * @returns Lista de especies Pokemon
   */
  callApi(): Observable<any> {
    return this.http.get(environment.api).pipe(
      map((data: any) => {
        return data['pokemon_species'];
      })
    );
  }

  /**
   * Lllamado al API de pokemones para consultar uno en especifico
   *
   * @param url URL del detalle de Pokemon
   * @returns Detalles del Pokemon
   */
  getPokemon(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map((data) => {
        return data;
      })
    );
  }
}

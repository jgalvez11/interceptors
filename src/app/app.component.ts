import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interceptors';
  pokemons: any[] = [];
  pokemonDetail: any;

  constructor(private service: ApiService) {}

  callApi() {
    this.pokemons = [];
    this.service.callApi().subscribe(
      (data) => {
        console.log(data);
        this.pokemons = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPokemon(url: string) {
    this.service.getPokemon(url).subscribe((data) => {
      console.log(data);
      this.pokemonDetail = data;
    });
  }
}

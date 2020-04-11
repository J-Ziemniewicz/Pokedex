import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, from } from "rxjs";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { IPokeAPI, Result } from "../_interfaces/IPokeApi";

@Injectable({
  providedIn: "root",
})
export class PokedexService {
  constructor(private _http: HttpClient) {}

  public getAllPokemons(limit = 50) {
    return this._http
      .get(`${environment.pokemonHost}?limit=${limit}`)
      .pipe(map((pokeApiResp) => pokeApiResp["results"]))
      .subscribe(
        (pokemonList) => {
          pokemonList.forEach((pokemon) => {
            console.log(pokemon["name"]);
            this.getPokemonDetail(pokemon["name"]);
            // .subscribe((res) => {
            // console.log(res);
            // });
          });
        }

        // return this.getPokemonList(limit);
      );
  }

  public getAllPokemonsNames(limit = 50) {
    return this._http.get(`${environment.pokemonHost}?limit=${limit}`);
    // .pipe(mergeMap((pokeApiResp) => pokeApiResp["results"]))

    // .subscribe(
    //   (pokemonList) => {
    //     pokemonList.forEach((pokemon) => {
    //       console.log(pokemon["name"]);
    //       this.getPokemonDetail(pokemon["name"]);
    //       // .subscribe((res) => {
    //       // console.log(res);
    //       // });
    //     });
    //   }

    // return this.getPokemonList(limit);
    // );
  }

  public getPokemonList(limit: number) {
    return this._http.get(`${environment.pokemonHost}?limit=${limit}`);
  }

  public getPokemonDetail(name: string) {
    return this._http.get(`${environment.pokemonHost}${name}`);
  }

  // this.pokedexService
  //     .getAllPokemons(40)
  //     .pipe(map((results) => results["results"]))
  //     .subscribe((res) => {
  //       res.forEach((element) => {
  //         console.log(element["name"]);
  //       });
  //       // console.log(res);
  //     });
}

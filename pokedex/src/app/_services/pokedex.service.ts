import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, from } from "rxjs";
import { map, mergeMap, switchMap, toArray } from "rxjs/operators";
import { IPokeAPI, Result } from "../_interfaces/IPokeApi";

@Injectable({
  providedIn: "root",
})
export class PokedexService {
  constructor(private _http: HttpClient) {}

  public getAllPokemons(limit = 50) {
    return this._http.get(`${environment.pokemonHost}?limit=${limit}`).pipe(
      mergeMap((result: any) =>
        from(result.results).pipe(
          mergeMap((result) => this.getPokemonDetail(result["name"])),
          toArray()
        )
      )
    );
  }

  // Niepotrzebne
  public getAllPokemonsNames(limit = 50) {
    return this._http.get(`${environment.pokemonHost}?limit=${limit}`);
  }

  public getPokemonDetail(name: string) {
    return this._http.get(`${environment.pokemonHost}${name}`);
  }
}

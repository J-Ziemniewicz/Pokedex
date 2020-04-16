import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { from } from "rxjs";
import { mergeMap, toArray } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PokedexService {
  constructor(private http: HttpClient) {}

  public getAllPokemons(limit = 50) {
    return this.http.get(`${environment.pokemonHost}?limit=${limit}`).pipe(
      mergeMap((result: any) =>
        from(result.results).pipe(
          mergeMap((result) => this.getPokemonDetail(result["name"])),
          toArray()
        )
      )
    );
  }

  public getPokemonDetail(name: string) {
    return this.http.get(`${environment.pokemonHost}${name}`);
  }
}

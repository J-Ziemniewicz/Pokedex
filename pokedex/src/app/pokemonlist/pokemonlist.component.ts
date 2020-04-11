import { Component, OnInit } from "@angular/core";
import { PokedexService } from "src/app/_services/pokedex.service";
import { map, mergeMap } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { IPokemon } from "../_interfaces/IPokemon";

@Component({
  selector: "app-pokemonlist",
  templateUrl: "./pokemonlist.component.html",
  styleUrls: ["./pokemonlist.component.scss"],
})
export class PokemonlistComponent implements OnInit {
  pokemonsName: string[];
  pokemonsList: IPokemon[];
  constructor(private pokedexService: PokedexService) {
    this.pokemonsName = [];
    this.pokemonsList = [];
  }

  ngOnInit() {
    // DZIAŁA

    this.pokedexService
      .getAllPokemonsNames(10)
      .pipe(map((pokeApiResp) => pokeApiResp["results"]))
      .subscribe((pokemons) => {
        if (pokemons != null) {
          // console.log("test");
          pokemons.forEach((pokemon) => {
            this.pokemonsName.push(pokemon["name"]);
          });
          from(this.pokemonsName)
            .pipe(
              mergeMap(
                (name) =>
                  <Observable<IPokemon>>(
                    this.pokedexService.getPokemonDetail(name)
                  )
              )
            )
            .subscribe((res) => {
              this.pokemonsList.push(res);
            });
          // console.log("Lista pokemonów");
          // console.log(this.pokemonsList);
        }
      });
    // console.log("test2");
    console.log(this.pokemonsList);
  }
}

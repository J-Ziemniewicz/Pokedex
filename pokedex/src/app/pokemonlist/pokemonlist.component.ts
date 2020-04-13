import { Component, OnInit } from "@angular/core";
import { PokedexService } from "src/app/_services/pokedex.service";
import { IPokemon } from "../_interfaces/IPokemon";
import { ViewChild } from "@angular/core";
import { PokemonComponent } from "../pokemon/pokemon.component";

@Component({
  selector: "app-pokemonlist",
  templateUrl: "./pokemonlist.component.html",
  styleUrls: ["./pokemonlist.component.scss"],
})
export class PokemonlistComponent implements OnInit {
  pokemonsName: string[];
  pokemonList: IPokemon[];
  totalRecords: number = 200;
  page: number = 1;
  pokemon: PokemonComponent[] = [new PokemonComponent("testowyPokemon")];

  constructor(private pokedexService: PokedexService) {
    this.pokemonsName = [];
    this.pokemonList = [];
  }

  ngOnInit() {
    this.pokedexService.getAllPokemons(this.totalRecords).subscribe((res) => {
      res.forEach((pokemon: IPokemon) => {
        this.pokemonList.push(pokemon);
      });
      this.pokemonList.sort(function (obj1, obj2) {
        return obj1.id - obj2.id;
      });
      console.log(this.pokemonList);
      this.totalRecords = this.pokemonList.length;
      console.log("PokemonList length: " + this.totalRecords);
    });
  }

  getPokemonsNames() {}
}

import { Component, OnInit } from "@angular/core";
import { PokedexService } from "src/app/_services/pokedex.service";
import { IPokemon } from "../_interfaces/IPokemon";

@Component({
  selector: "app-pokemonlist",
  templateUrl: "./pokemonlist.component.html",
  styleUrls: ["./pokemonlist.component.scss"],
})
export class PokemonlistComponent implements OnInit {
  pokemonList: IPokemon[];
  filteredPokemonList: IPokemon[];
  totalRecords: number = 200;
  page: number = 1;
  download: boolean = false;

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(filter: string) {
    this._searchTerm = filter;
    this.filteredPokemonList = this.filteredPokemon(filter);
    this.totalRecords = this.filteredPokemonList.length;
    this.page = 1;
    // console.log(this.totalRecords);
  }

  constructor(private pokedexService: PokedexService) {
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
      this.download = true;
      console.log(this.pokemonList);
      this.totalRecords = this.pokemonList.length;
      console.log("PokemonList length: " + this.totalRecords);
    });
    this.filteredPokemonList = this.pokemonList;
  }

  filteredPokemon(filterName: string) {
    return this.pokemonList.filter(
      (pokemon) => pokemon.name.indexOf(filterName.toLowerCase()) !== -1
    );
  }

  onPageChange(page: number) {
    this.page = page;
    window.scroll({ top: 0, behavior: "smooth" });
  }
}

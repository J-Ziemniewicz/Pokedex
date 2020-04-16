import { Component, OnInit, Inject } from "@angular/core";
import { IPokemon } from "../_interfaces/IPokemon";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface IStats {
  name: string;
  base_stat: number;
}

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.scss"],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: IPokemon;
  pokemonColors: string;
  stats: IStats[];

  constructor(
    public dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPokemon
  ) {
    this.pokemonDetails = data["pokemonDetails"];
    this.pokemonColors = data["pokemonColors"];
  }
  ngOnInit(): void {
    this.sortStats();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getTypeColor(type: string) {
    let color = "#ffffff";
    switch (type) {
      case "grass": {
        color = "#78c850";
        break;
      }
      case "fire": {
        color = "#f09030";
        break;
      }
      case "water": {
        color = "#6890f0";
        break;
      }
      case "flying": {
        color = "#A98FF3";
        break;
      }
      case "dark": {
        color = "#705746";
        break;
      }
      case "steel": {
        color = "#B7B7CE";
        break;
      }
      case "bug": {
        color = "#a8b820";
        break;
      }
      case "normal": {
        color = "#a8a878";
        break;
      }
      case "poison": {
        color = "#a040a0";
        break;
      }
      case "electric": {
        color = "#f8d030";
        break;
      }
      case "ground": {
        color = "#e0c068";
        break;
      }
      case "fairy": {
        color = "#ee99ac";
        break;
      }
      case "fighting": {
        color = "#c03028";
        break;
      }
      case "psychic": {
        color = "#f85888";
        break;
      }
      case "rock": {
        color = "#b8a038";
        break;
      }
      case "ghost": {
        color = "#705898";
        break;
      }
      case "ice": {
        color = "#98d8d8";
        break;
      }
      case "dragon": {
        color = "#7038f8";
        break;
      }
    }
    return color;
  }

  sortFunc(a, b) {
    let sortingArr = [
      "hp",
      "speed",
      "attack",
      "special_attack",
      "defense",
      "special_defense",
    ];
    return sortingArr.indexOf(a.stat.name) - sortingArr.indexOf(b.stat.name);
  }

  sortStats() {
    let tempStatArray = this.pokemonDetails.stats;
    const sortingArr = [
      "hp",
      "speed",
      "attack",

      "special-defense",
      "defense",
      "special-attack",
    ];

    tempStatArray.sort((leftSide, rightSide): number => {
      if (
        sortingArr.indexOf(leftSide.stat.name) >
        sortingArr.indexOf(rightSide.stat.name)
      ) {
        return 1;
      }
      if (
        sortingArr.indexOf(leftSide.stat.name) <
        sortingArr.indexOf(rightSide.stat.name)
      ) {
        return -1;
      }
      return 0;
    });
  }
}

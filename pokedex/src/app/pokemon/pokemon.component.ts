import { Component, OnInit, Input } from "@angular/core";
import { IPokemon } from "../_interfaces/IPokemon";
import { PokemonDetailsComponent } from "../pokemon-details/pokemon-details.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: IPokemon;
  pokemonColor: string;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pokemonColor = this.getPokemonColor();
  }

  getPokemonColor() {
    const typeList = [];
    let colorList = [];
    this.pokemon.types.forEach((type) => {
      typeList.push(type.type);
    });
    for (let i = 0; i < typeList.length; i++) {
      switch (typeList[i].name) {
        case "grass": {
          colorList.push("#78c850");
          break;
        }
        case "fire": {
          colorList.push("#f09030");
          break;
        }
        case "water": {
          colorList.push("#6890f0");
          break;
        }
        case "flying": {
          colorList.push("#A98FF3");
          break;
        }
        case "dark": {
          colorList.push("#705746");
          break;
        }
        case "steel": {
          colorList.push("#B7B7CE");
          break;
        }
        case "bug": {
          colorList.push("#a8b820");
          break;
        }
        case "normal": {
          colorList.push("#a8a878");
          break;
        }
        case "poison": {
          colorList.push("#a040a0");
          break;
        }
        case "electric": {
          colorList.push("#f8d030");
          break;
        }
        case "ground": {
          colorList.push("#e0c068");
          break;
        }
        case "fairy": {
          colorList.push("#ee99ac");
          break;
        }
        case "fighting": {
          colorList.push("#c03028");
          break;
        }
        case "psychic": {
          colorList.push("#f85888");
          break;
        }
        case "rock": {
          colorList.push("#b8a038");
          break;
        }
        case "ghost": {
          colorList.push("#705898");
          break;
        }
        case "ice": {
          colorList.push("#98d8d8");
          break;
        }
        case "dragon": {
          colorList.push("#7038f8");
          break;
        }
      }
    }
    if (colorList.length == 2) {
      colorList = [colorList[0], colorList[0], colorList[1], colorList[1]];
    } else colorList = [colorList[0], colorList[0], colorList[0], colorList[0]];

    return colorList.join(" ");
  }

  openPokemonDetailDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      bottom: "3vh",
    };
    dialogConfig.autoFocus = false;
    (dialogConfig.data = {
      pokemonDetails: this.pokemon,
      pokemonColors: this.pokemonColor,
    }),
      this.dialog.open(PokemonDetailsComponent, dialogConfig);
  }
}

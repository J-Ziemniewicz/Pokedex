import { Component, OnInit, Inject } from "@angular/core";
import { IPokemon } from "../_interfaces/IPokemon";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.scss"],
})
export class PokemonDetailsComponent implements OnInit {
  public pokemonDetails: IPokemon;

  constructor(
    public dialogRef: MatDialogRef<PokemonDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPokemon
  ) {
    this.pokemonDetails = data;
  }
  ngOnInit(): void {
    // console.log(this.pokemonDetails);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

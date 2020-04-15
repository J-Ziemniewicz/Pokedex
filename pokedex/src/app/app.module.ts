import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PokedexService } from "src/app/_services/pokedex.service";
import { LogobarComponent } from "./logobar/logobar.component";
import { PokemonlistComponent } from "./pokemonlist/pokemonlist.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LogobarComponent,
    PokemonlistComponent,
    PokemonComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [PokedexService, HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [PokemonDetailsComponent],
})
export class AppModule {}

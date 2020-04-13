import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokedexService } from "src/app/_services/pokedex.service";
import { LogobarComponent } from "./logobar/logobar.component";
import { PokemonlistComponent } from "./pokemonlist/pokemonlist.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [AppComponent, LogobarComponent, PokemonlistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [PokedexService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}

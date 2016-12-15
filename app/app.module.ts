import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SummaryComponent } from "./summary.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SummaryComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule{

}

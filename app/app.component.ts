import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
                <h1>{{title}}</h1>
                <my-summary></my-summary>
            `
})
export class AppComponent{
  title =  "Splitwise - My Expenses";
}

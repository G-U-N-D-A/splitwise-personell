import { Component } from "@angular/core";

export class User{
  firstname: string;
  lastname: string;
}

@Component({
  selector: 'my-summary',
  template: `
              <div> <span>{{user.firstname}} {{user.lastname}}</span></div>
              <div>
                <div>
                  Total : {{total}}
                </div>
                <div>
                  <div *ngFor="let perMonthExpense of perMonthExpenses">
                       {{ perMonthExpense.month }}: {{perMonthExpense.amount}}
                  </div>
                </div>
              </div>
            `
})
export class SummaryComponent{
  user: User = {
    firstname : "Dhaval",
    lastname :  "Kumar"
  }
  total: number = 0;
  perMonthExpenses: any[] = [
    { month: "Jan", amount: 0},
    { month: "Feb", amount: 0},
    { month: "Mar", amount: 0},
    { month: "Apr", amount: 0},
  ]
}

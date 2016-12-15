"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var SummaryComponent = (function () {
    function SummaryComponent() {
        this.user = {
            firstname: "Dhaval",
            lastname: "Kumar"
        };
        this.total = 0;
        this.perMonthExpenses = [
            { month: "Jan", amount: 0 },
            { month: "Feb", amount: 0 },
            { month: "Mar", amount: 0 },
            { month: "Apr", amount: 0 },
        ];
    }
    SummaryComponent = __decorate([
        core_1.Component({
            selector: 'my-summary',
            template: "\n              <div> <span>{{user.firstname}} {{user.lastname}}</span></div>\n              <div>\n                <div>\n                  Total : {{total}}\n                </div>\n                <div>\n                  <div *ngFor=\"let perMonthExpense of perMonthExpenses\">\n                       {{ perMonthExpense.month }}: {{perMonthExpense.amount}}\n                  </div>\n                </div>\n              </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;
//# sourceMappingURL=summary.component.js.map
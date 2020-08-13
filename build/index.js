"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
// もしAPIを使う時にインスタンスを消せば使いまわせる
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
console.log(reader.data);
// 日付だけ出る
// console.log(reader.data[0][0])
// const homeWin = "H";
// const awayWin = "A";
// const draw = 'D'
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    //home
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
        //away
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + "games");

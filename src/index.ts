import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

// もしAPIを使う時にインスタンスを消せば使いまわせる
const reader = new MatchReader("football.csv");
reader.read();

console.log(reader.data);

// 日付だけ出る
// console.log(reader.data[0][0])

// const homeWin = "H";
// const awayWin = "A";
// const draw = 'D'

let manUnitedWins = 0;
for (let match of reader.data) {
  //home
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
    //away
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins}games`);

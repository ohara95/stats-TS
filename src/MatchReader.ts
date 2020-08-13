import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

// 型の順番が決まっていて変わることがない場合に使用
type MatchData = [Date, string, string, number, number, MatchResult, string];

// CsvFileReaderを継承
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //'H','A','D'
      row[6],
    ];
  }
}

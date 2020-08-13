import fs from "fs";

// abstract：抽象マーク
// CsvFileReaderを再利用可能に！
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      // 2番目の引数はオブジェクト内のオプションオブジェクト
      .readFileSync(this.filename, {
        // encoding付けないとバッファと呼ばれる物が返される(ファイルからのデータなし)
        encoding: "utf-8",
      })
      .split("\n") //改行で配列になる
      .map((row: string): string[] => {
        return row.split(","); //,で配列になる
      })
      // 配列の中の１要素(配列)のデータがmapされる
      // 継承されてるからmapRowのデータが入ってる？
      .map(this.mapRow);
  }
}

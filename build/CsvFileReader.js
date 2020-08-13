"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// abstract：抽象マーク
// CsvFileReaderを再利用可能に！
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            // 2番目の引数はオブジェクト内のオプションオブジェクト
            .readFileSync(this.filename, {
            // encoding付けないとバッファと呼ばれる物が返される(ファイルからのデータなし)
            encoding: "utf-8",
        })
            .split("\n") //改行で配列になる
            .map(function (row) {
            return row.split(","); //,で配列になる
        })
            // 配列の中の１要素(配列)のデータがmapされる
            // 継承されてるからmapRowのデータが入ってる？
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

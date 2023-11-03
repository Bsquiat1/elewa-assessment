"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HistoryItem = ({ year, title, children }) => {
    return (react_1.default.createElement("div", { className: "w-1/4 relative" },
        react_1.default.createElement("div", { className: "w-12 h-12 bg-black rounded-full mb-20 ml-20" }),
        react_1.default.createElement("div", { className: "ml-20" },
            react_1.default.createElement("div", { className: "text-2xl font-normal mb-2" }, year),
            react_1.default.createElement("h2", { className: "font-bold text-3xl mt-10" }, title),
            react_1.default.createElement("p", { className: "mt-10 text-lg" }, children))));
};
exports.default = HistoryItem;

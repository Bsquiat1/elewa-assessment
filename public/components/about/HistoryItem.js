"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * HistoryItem Component
 *
 * This component represents an individual historical item with a year, title, and content.
 *
 * @param {HistoryItemProps} props - The properties for the HistoryItem.
 * @param {string} props.year - The year associated with the history item.
 * @param {string} props.title - The title of the history item.
 * @param {ReactNode} props.children - The content of the history item .
 */
const HistoryItem = ({ year, title, children }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "w-12 h-12 bg-black rounded-full mb-20 ml-20" }),
        react_1.default.createElement("div", { className: "ml-20" },
            react_1.default.createElement("div", { className: "text-2xl font-normal mb-2" }, year),
            react_1.default.createElement("h2", { className: "font-bold text-3xl mt-10" }, title),
            react_1.default.createElement("p", { className: "mt-10 text-lg" }, children))));
};
exports.default = HistoryItem;

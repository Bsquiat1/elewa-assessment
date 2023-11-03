"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BottomPhoto = ({ title, description, imageUrl }) => {
    return (react_1.default.createElement("div", { className: "section-container bg-gray-100 p-8 rounded-b-3xl" },
        react_1.default.createElement("div", { className: "container mx-auto flex flex-col items-center justify-center" },
            react_1.default.createElement("div", { className: "text-left" },
                react_1.default.createElement("h2", { className: "text-6xl font-normal mt-20" }, title),
                react_1.default.createElement("p", { className: "text-4xl font-thin mt-20 mb-20" }, description)),
            react_1.default.createElement("div", { className: "mt-8" },
                react_1.default.createElement("img", { src: imageUrl, alt: "Section Image", className: "w-full rounded-3xl" })))));
};
exports.default = BottomPhoto;
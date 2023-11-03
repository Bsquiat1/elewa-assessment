"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * Button Component
 *
 * This component represents a button element that can have animation based on the 'isAnimated' prop.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 */
const Button = ({ text, isAnimated, onClick }) => {
    return (react_1.default.createElement("button", { className: `bg-black text-white p-2 rounded-full ${isAnimated ? 'animate-arrow' : ''} ml-20`, onClick: onClick },
        text,
        react_1.default.createElement("span", { className: "ml-2" }, isAnimated ? '➡️' : '➲')));
};
exports.default = Button;

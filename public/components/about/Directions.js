"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Directions = () => {
    const [isArrowAnimated, setIsArrowAnimated] = (0, react_1.useState)(false);
    const handleClick = () => {
        setIsArrowAnimated(!isArrowAnimated);
    };
    return (react_1.default.createElement("div", { className: "get-there-section bg-gray-100" },
        react_1.default.createElement("div", { className: "flex" },
            react_1.default.createElement("div", { className: "w-1/2 pr-4 mt-64" },
                react_1.default.createElement("img", { src: "/src/assets/map.png", alt: "Map", className: "w-auto h-full ml-36" })),
            react_1.default.createElement("div", { className: "w-1/2 pl-4 mt-48" },
                react_1.default.createElement("h2", { className: "text-6xl font-normal text-left mb-10 mt-20 ml-20" }, "How to get there"),
                react_1.default.createElement("p", { className: "text-2xl font-normal ml-20 mb-4" }, "Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city."),
                react_1.default.createElement("p", { className: "text-2xl font-normal ml-20 mb-4" }, "Not in town? Teams, Meets, or Zoom are our second name. Book an appointment today via contact@elewa.ke!"),
                react_1.default.createElement("p", { className: "text-2xl font-normal ml-20 mb-4" }, "Get directions"),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("button", { className: `bg-black text-white p-2 rounded-full ${isArrowAnimated ? 'animate-arrow' : ''} ml-20`, onClick: handleClick },
                        "Get Directions",
                        react_1.default.createElement("span", { className: "ml-2" }, isArrowAnimated ? '➡️' : '➲')))))));
};
exports.default = Directions;

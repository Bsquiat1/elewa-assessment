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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_visibility_sensor_1 = __importDefault(require("react-visibility-sensor"));
const SectionWithPhoto = ({ backgroundColor, imageUrl, title, description, photoPosition, textColor, }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_visibility_sensor_1.default, { onChange: (isVisible) => setVisible(isVisible), partialVisibility: true },
        react_1.default.createElement("div", { className: `new-section ${backgroundColor} p-8 rounded-b-3xl ${visible ? 'animate-scroll-up' : ''}` },
            react_1.default.createElement("div", { className: "container mx-auto flex items-center justify-center" },
                photoPosition === 'left' && (react_1.default.createElement("div", { className: "w-1/2" },
                    react_1.default.createElement("img", { src: imageUrl, alt: "Your Photo", className: "w-full rounded-3xl" }))),
                react_1.default.createElement("div", { className: `w-1/2 m-40 ${visible ? 'animate-scroll-up-content' : ''}`, style: { color: textColor } },
                    react_1.default.createElement("h2", { className: "text-5xl font-normal" }, title),
                    react_1.default.createElement("p", { className: "text-4xl font-thin mt-20" }, description)),
                photoPosition !== 'left' && (react_1.default.createElement("div", { className: "w-1/2" },
                    react_1.default.createElement("img", { src: imageUrl, alt: "Your Photo", className: "w-full rounded-3xl" })))))));
};
exports.default = SectionWithPhoto;

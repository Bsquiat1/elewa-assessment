"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionWithPhoto = ({ backgroundColor, imageUrl, title, description, photoPosition, }) => {
    const isPhotoOnLeft = photoPosition === 'left';
    return (react_1.default.createElement("div", { className: `new-section ${backgroundColor} p-8 rounded-b-3xl` },
        react_1.default.createElement("div", { className: "container mx-auto flex items-center justify-center " },
            isPhotoOnLeft && (react_1.default.createElement("div", { className: "w-1/2" },
                react_1.default.createElement("img", { src: imageUrl, alt: "Your Photo", className: "w-full rounded-3xl" }))),
            react_1.default.createElement("div", { className: "w-1/2" },
                react_1.default.createElement("h2", { className: "text-3xl font-bold text-white" }, title),
                react_1.default.createElement("p", { className: "text-xl text-white" }, description)),
            !isPhotoOnLeft && (react_1.default.createElement("div", { className: "w-1/2" },
                react_1.default.createElement("img", { src: imageUrl, alt: "Your Photo", className: "w-full rounded-3xl" }))))));
};
exports.default = SectionWithPhoto;

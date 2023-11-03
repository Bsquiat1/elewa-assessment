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
const TeamMembers_1 = __importDefault(require("./TeamMembers"));
const Team = () => {
    const imageGalleryRef = (0, react_1.useRef)(null);
    const scrollLeft = () => {
        if (imageGalleryRef.current) {
            imageGalleryRef.current.scrollLeft -= 300;
        }
    };
    const scrollRight = () => {
        if (imageGalleryRef.current) {
            imageGalleryRef.current.scrollLeft += 300;
        }
    };
    return (react_1.default.createElement("div", { className: "horizontal-scroll-section bg-black p-4 mt-32" },
        react_1.default.createElement("h2", { className: "text-6xl font-md text-left text-white mt-28 mb-20 ml-20" },
            "Team | ",
            react_1.default.createElement("span", { className: "text-gray-400" }, "Management")),
        react_1.default.createElement("div", { className: "image-gallery flex overflow-x-hidden p-4", ref: imageGalleryRef }, TeamMembers_1.default.map((member, index) => (react_1.default.createElement("div", { key: index, className: "team-member" },
            react_1.default.createElement("img", { src: member.image, alt: member.name, className: "max-w-md p-4 rounded-xl" }),
            react_1.default.createElement("p", { className: "text-3xl font-md text-center mb-2 text-white" }, member.name),
            react_1.default.createElement("p", { className: "text-xl text-center text-white" }, member.position))))),
        react_1.default.createElement("div", { className: "scroll-arrows flex justify-end mt-4 pr-4 mb-20" },
            react_1.default.createElement("div", { className: "arrow-circle bg-black p-2 rounded-full mr-2 border" },
                react_1.default.createElement("div", { className: "left-arrow text-3xl cursor-pointer text-white", onClick: scrollLeft }, "\u2190")),
            react_1.default.createElement("div", { className: "arrow-circle bg-black p-2 rounded-full border" },
                react_1.default.createElement("div", { className: "right-arrow text-3xl cursor-pointer text-white", onClick: scrollRight }, "\u2192")))));
};
exports.default = Team;

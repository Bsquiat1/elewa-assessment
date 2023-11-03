"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Navbar_1 = __importDefault(require("./Navbar"));
const HeroSection = ({ backgroundImage, title, subtitle, description, info }) => {
    return (react_1.default.createElement("div", { className: "hero-section-container" },
        react_1.default.createElement("div", { className: "hero-section bg-cover bg-center text-white text-left py-48", style: {
                backgroundImage: `url('${backgroundImage}')`,
                height: "1080px",
                position: "relative",
            } },
            react_1.default.createElement("div", { className: "image-overlay", style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.3)",
                } }),
            react_1.default.createElement("div", { className: "navbar", style: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 } },
                react_1.default.createElement(Navbar_1.default, null),
                react_1.default.createElement("div", { className: "mt-96" },
                    react_1.default.createElement("h1", { className: "text-3xl text-white mb-8 ml-20" }, title),
                    react_1.default.createElement("p", { className: "text-7xl font-sm ml-20 mb-2" }, subtitle),
                    react_1.default.createElement("p", { className: "text-7xl font-sm ml-20" }, description),
                    react_1.default.createElement("p", { className: "text-lg font-sm ml-20 mt-52" }, info))))));
};
exports.default = HeroSection;

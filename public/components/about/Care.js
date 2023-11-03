"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Care = () => {
    return (react_1.default.createElement("div", { className: "additional-section" },
        react_1.default.createElement("h2", { className: "text-7xl font-bold mt-36 ml-20" }, "We Care!"),
        react_1.default.createElement("div", { className: "flex ml-20 mt-10" },
            react_1.default.createElement("p", { className: "text-4xl text-left mr-10" }, "Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and the environment. We care about our growth, but also care deeply about the context surrounding us."),
            react_1.default.createElement("p", { className: "text-4xl text-left" }, "Our investments are therefore not limited to internal ones but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.")),
        react_1.default.createElement("div", { className: "flex ml-20 mt-20 mb-48" },
            react_1.default.createElement("div", { className: "content-item" },
                react_1.default.createElement("img", { src: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png", alt: "Holistic Solutions", className: "h-28" }),
                react_1.default.createElement("h2", { className: "text-4xl font-sm mt-10" }, "Holistic Solutions"),
                react_1.default.createElement("p", { className: "text-xl mt-4" }, "We go beyond a simple patch-up but develop lasting solutions through holistic design.")),
            react_1.default.createElement("div", { className: "content-item" },
                react_1.default.createElement("img", { src: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png", alt: "Impact", className: "h-28" }),
                react_1.default.createElement("h2", { className: "text-4xl font-sm mt-10" }, "Impact"),
                react_1.default.createElement("p", { className: "text-xl mt-4" }, "Impact as a direct or indirect result. All our respective organizations have underlying theories of change.")),
            react_1.default.createElement("div", { className: "content-item" },
                react_1.default.createElement("img", { src: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3.png", alt: "Open Data", className: "h-28" }),
                react_1.default.createElement("h2", { className: "text-4xl font-sm mt-10" }, "Open Data"),
                react_1.default.createElement("p", { className: "text-xl mt-4" }, "Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.")))));
};
exports.default = Care;

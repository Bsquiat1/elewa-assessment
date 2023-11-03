"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeroSection_1 = __importDefault(require("./HeroSection"));
const SocialImpact = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(HeroSection_1.default, { backgroundImage: "https://images.pexels.com/photos/13020508/pexels-photo-13020508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Scaling impact. Beyond the norm", subtitle: "Human and Environmental Impact", description: "through Social Enterprise", info: "" })));
};
exports.default = SocialImpact;

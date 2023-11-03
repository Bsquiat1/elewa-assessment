"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeroSection_1 = __importDefault(require("./HeroSection"));
const SectionWithPhoto_1 = __importDefault(require("./SectionWithPhoto"));
const Invest = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(HeroSection_1.default, { backgroundImage: "https://images.pexels.com/photos/6056776/pexels-photo-6056776.jpeg?auto=compress&cs=tinysrgb&w=1600", title: "Trade, not aid", subtitle: "Southern innovations addressing ", description: "global problems", info: "" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { title: "Section Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png", backgroundColor: "bg-gray-100", photoPosition: "left", textColor: "text-black" })));
};
exports.default = Invest;

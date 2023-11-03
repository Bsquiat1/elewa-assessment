"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const OurHistory_1 = __importDefault(require("./OurHistory"));
const Directions_1 = __importDefault(require("./Directions"));
const Values_1 = __importDefault(require("./Values"));
const Team_1 = __importDefault(require("./Team"));
const Care_1 = __importDefault(require("./Care"));
const HeroSection_1 = __importDefault(require("../HeroSection"));
const LearnMore_1 = __importDefault(require("./LearnMore"));
const Footer_1 = __importDefault(require("../Footer"));
const AboutUs = () => {
    return (react_1.default.createElement("div", { className: "about-us" },
        react_1.default.createElement(HeroSection_1.default, { backgroundImage: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg", title: "HOW TO RECOGNIZE AN ELEWA MEMBER", subtitle: "Dependable, Creative, Supportive,", description: "Open Minded and Fun*", info: "*SERIOUS WHEN IT MATTERS" }),
        react_1.default.createElement(Care_1.default, null),
        react_1.default.createElement(Team_1.default, null),
        react_1.default.createElement(Values_1.default, null),
        react_1.default.createElement(Directions_1.default, null),
        react_1.default.createElement(OurHistory_1.default, null),
        react_1.default.createElement(LearnMore_1.default, { title: "Learn more about", subtitle: "Elewa's social impact." }),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = AboutUs;

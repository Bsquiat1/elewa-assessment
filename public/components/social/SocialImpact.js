"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeroSection_1 = __importDefault(require("../HeroSection"));
const SectionWithPhoto_1 = __importDefault(require("../SectionWithPhoto"));
const SocialImpact = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(HeroSection_1.default, { backgroundImage: "https://images.pexels.com/photos/13020508/pexels-photo-13020508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Scaling impact. Beyond the norm", subtitle: "Human and Environmental Impact", description: "through Social Enterprise", info: "" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-black", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg", title: "New Section Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, sapien eu tincidunt lobortis, felis purus vulputate odio.", photoPosition: "left" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-grey-200", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg", title: "New Section Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, sapien eu tincidunt lobortis, felis purus vulputate odio.", photoPosition: "right" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-grey-200", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png", title: "New Section Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, sapien eu tincidunt lobortis, felis purus vulputate odio.", photoPosition: "left" })));
};
exports.default = SocialImpact;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeroSection_1 = __importDefault(require("../HeroSection"));
const SectionWithPhoto_1 = __importDefault(require("../SectionWithPhoto"));
const BottomPhoto_1 = __importDefault(require("./BottomPhoto"));
const LearnMore_1 = __importDefault(require("../about/LearnMore"));
const Footer_1 = __importDefault(require("../Footer"));
/**
 * Invest Component
 *
 * This component represents the Invest page, providing information about investing in the organization and its activities.
 */
const Invest = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(HeroSection_1.default, { backgroundImage: "https://images.pexels.com/photos/6056776/pexels-photo-6056776.jpeg?auto=compress&cs=tinysrgb&w=1600", title: "Trade, not aid", subtitle: "Southern innovations addressing ", description: "global problems", info: "" }),
        react_1.default.createElement(BottomPhoto_1.default, { title: "How we see it differently", description: "The global South is rapidly catching up with the 'developed' world. It's time for you to get to know the rapid development, innovation, and drive going on in this part of the world (East-Africa, South Asia, and beyond).", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-grey-300", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png", title: "Elewa NV, a multi-stakeholder cooperation", description: "At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities. Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group.", photoPosition: "left", textColor: "black" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-grey-300", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg", title: "The Elewa Creative Hub", description: "Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner. Through partnerships with creative community, the Elewa Hub will organize vibrant activities that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.", photoPosition: "right", textColor: "black" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-grey-300", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg", title: "Investing in Elewa NV", description: "From time to time, we offer investment opportunities (private equity & debt) to our community of investors. Interested to take part when this opportunity arrives?", photoPosition: "left", textColor: "black" }),
        react_1.default.createElement(LearnMore_1.default, { title: "Become part of our mission", subtitle: "And start investing" }),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = Invest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeroSection_1 = __importDefault(require("../HeroSection"));
const SectionWithPhoto_1 = __importDefault(require("../SectionWithPhoto"));
const Achievements_1 = __importDefault(require("./Achievements"));
const LearnMore_1 = __importDefault(require("../about/LearnMore"));
const Footer_1 = __importDefault(require("../Footer"));
/**
 * SocialImpact Component
 *
 * This component represents the Social Impact page, providing information about the organization's achievements and its commitment to social enterprise and environmental impact.
 */
const SocialImpact = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(HeroSection_1.default, { backgroundImage: "https://images.pexels.com/photos/13020508/pexels-photo-13020508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Scaling impact. Beyond the norm", subtitle: "Human and Environmental Impact", description: "through Social Enterprise", info: "" }),
        react_1.default.createElement(Achievements_1.default, null),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-black", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg", title: "(Social) business for the win", description: "With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.", photoPosition: "left", textColor: "white" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-grey-300", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg", title: "A cooperative mindset", description: "Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active.", photoPosition: "right", textColor: "black" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-white", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png", title: "Beyond business", description: "We channel a good amount of our resources into giving back. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu, and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers. These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term.", photoPosition: "left", textColor: "black" }),
        react_1.default.createElement(SectionWithPhoto_1.default, { backgroundColor: "bg-black", imageUrl: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png", title: "Open knowledge", description: "What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher), and academic partnerships. We build for today, with a lens on tomorrow.", photoPosition: "right", textColor: "white" }),
        react_1.default.createElement(LearnMore_1.default, { title: "Become part of our mission", subtitle: "and join Elewa." }),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = SocialImpact;

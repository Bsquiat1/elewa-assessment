"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const imageUrls = [
    'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/it_volk_black_logo_image_iowrws.png',
    'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/2017-GIZ-Logo_htdnpa.png',
    'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png',
    'https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/syndicyourself_logfo_qiqrex.png',
];
const SlidingIconsSection = () => {
    return (react_1.default.createElement("div", { className: "sliding-icons-section" },
        react_1.default.createElement("h2", { className: "text-center text-6xl mt-28 mb-20" }, "Some of our impact projects"),
        react_1.default.createElement("div", { className: "slider" }, imageUrls.map((imageUrl, index) => (react_1.default.createElement("div", { key: index, className: "slide" },
            react_1.default.createElement("img", { src: imageUrl, alt: `Icon ${index + 1}`, className: "h-28" })))))));
};
exports.default = SlidingIconsSection;

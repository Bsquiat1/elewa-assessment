"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const Footer = () => {
    return (react_1.default.createElement("footer", { className: "bg-black text-white py-8 rounded-t-3xl border-t border-white" },
        react_1.default.createElement("div", { className: "container mx-auto" },
            react_1.default.createElement("div", { className: "grid grid-cols-5 gap-8 mt-20" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "text-3xl font-bold underline mb-6" }, "Headquarters"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "The Promenade, 19 General"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "Mathenge Rd"),
                    react_1.default.createElement("p", { className: "text-lg" }, "Nairobi, Kenya")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "text-3xl font-bold underline mb-6" }, "Contact"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "T +254 78 92 27 755"),
                    react_1.default.createElement("p", { className: "text-lg" }, "E info@elewa.ke")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "text-3xl font-bold underline mb-6" }, "Navigation"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "About us"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "Social impact"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "Invest"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "News"),
                    react_1.default.createElement("p", { className: "text-lg" }, "Contact")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "text-3xl font-bold underline mb-6" }, "Brands"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "Elewa"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "Italanta"),
                    react_1.default.createElement("p", { className: "text-lg" }, "Venture labs")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "text-3xl font-bold underline mb-6" }, "Privacy"),
                    react_1.default.createElement("p", { className: "mb-2 text-lg" }, "Terms and conditions"),
                    react_1.default.createElement("p", { className: "text-lg" }, "Cookie preferences")))),
        react_1.default.createElement("div", { className: "flex justify-between items-center mx-20 mt-20" },
            react_1.default.createElement("img", { src: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg", alt: "Logo", className: "w-96 h-11" }),
            react_1.default.createElement("div", { className: "mt-4 flex" },
                react_1.default.createElement("a", { href: "#", className: "text-white mr-4" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebook, size: "3x" })),
                react_1.default.createElement("a", { href: "#", className: "text-white mr-4" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faInstagram, size: "3x" })),
                react_1.default.createElement("a", { href: "#", className: "text-white" },
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faLinkedin, size: "3x" }))))));
};
exports.default = Footer;

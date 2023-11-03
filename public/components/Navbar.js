"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("nav", { className: "flex border-gray-300 justify-between p-4 bg-transparent text-white h-32 border-b-2" },
            react_1.default.createElement("div", { className: "flex items-center pl-28 mt-8" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                    react_1.default.createElement("img", { src: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg", alt: "Logo", className: "w-full h-11" }))),
            react_1.default.createElement("ul", { className: "flex items-center space-x-14 pr-28 mt-8" },
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "hover:underline transition-colors duration-300 font-sm text-lg text-white" }, "Home")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "hover:underline transition-colors duration-300 font-sm text-lg" }, "About us")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/social-impact", className: "hover:underline transition-colors duration-300 font-sm text-lg" }, "Social impact")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/invest", className: "hover:underline transition-colors duration-300 font-sm text-lg" }, "Invest")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "hover:underline transition-colors duration-300 font-sm text-lg" }, "Venture Labs")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "hover:underline transition-colors duration-300 font-sm text-lg" }, "Brands")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "hover:underline transition-colors duration-300 font-sm text-lg" }, "Careers")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: "hover:underline transition-colors duration-300 font-sm text-lg" }, "Contact"))))));
};
exports.default = Navbar;

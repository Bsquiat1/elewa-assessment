"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const AboutUs_1 = __importDefault(require("./components/about/AboutUs"));
const SocialImpact_1 = __importDefault(require("./components/social/SocialImpact"));
const Invest_1 = __importDefault(require("./components/invest/Invest"));
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(AboutUs_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/social-impact", element: react_1.default.createElement(SocialImpact_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/invest", element: react_1.default.createElement(Invest_1.default, null) }))));
}
exports.default = App;

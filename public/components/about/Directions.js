"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react")); // Import necessary modules and components from React.
const react_visibility_sensor_1 = __importDefault(require("react-visibility-sensor")); // Import the VisibilitySensor component.
const Button_1 = __importDefault(require("../Button")); // Import a custom Button component.
const Directions = () => {
    const [isArrowAnimated, setIsArrowAnimated] = (0, react_1.useState)(false); // Defined a state variable for controlling animation.
    const [visible, setVisible] = (0, react_1.useState)(false); // Defined a state variable to track visibility.
    const handleClick = () => {
        setIsArrowAnimated(!isArrowAnimated); // Toggle the state variable to control animation.
    };
    return (react_1.default.createElement(react_visibility_sensor_1.default, { onChange: (isVisible) => setVisible(isVisible), partialVisibility: true },
        react_1.default.createElement("div", { className: `get-there-section bg-gray-100 ${visible ? 'animate-scroll-up' : ''}` },
            react_1.default.createElement("div", { className: "flex" },
                react_1.default.createElement("div", { className: "w-1/2 pr-4 mt-64 ml-28" },
                    react_1.default.createElement("img", { src: "/src/assets/map.png", alt: "Map", className: "w-auto h-full ml-36" })),
                react_1.default.createElement("div", { className: "w-1/2 pl-4 mt-48 mr-28" },
                    react_1.default.createElement("h2", { className: "text-6xl font-normal text-left mb-10 mt-20 ml-20" }, "How to get there"),
                    react_1.default.createElement("p", { className: "text-2xl font-normal ml-20 mb-4" }, "Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city."),
                    react_1.default.createElement("p", { className: "text-2xl font-normal ml-20 mb-4" }, "Not in town? Teams, Meets, or Zoom are our second name. Book an appointment today via contact@elewa.ke!"),
                    react_1.default.createElement("p", { className: "text-2xl font-normal ml-20 mb-4" }, "Get directions"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(Button_1.default, { text: "Get Directions", isAnimated: isArrowAnimated, onClick: handleClick })))))));
};
exports.default = Directions;

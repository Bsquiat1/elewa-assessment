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
const react_1 = __importStar(require("react"));
const react_visibility_sensor_1 = __importDefault(require("react-visibility-sensor"));
// Key figures data
const keyFigures = [
    { label: 'Approx. number of Kenyan talents reaching the age of 18 in 2022', value: '1.3M' },
    { label: 'Number of East-Africans (EAC) reaching the age of 18 in 2022', value: '5M' },
    { label: 'Democratic Republic of Congo joins the East African Community', value: '2022' },
    { label: 'The number of unfilled IT vacancies in the US and EU markets', value: '1.5M' },
    { label: 'Number of technical vacancies by 2030', value: '10M' },
    { label: 'Africa holds the world\'s largest workforce', value: '2050' },
    { label: 'Startup funding raised by African startups in 2022', value: '$4.6M' },
    { label: 'Increase in startup funding for companies with HQ in Kenya', value: '310%' },
];
/**
 * KeyFiguresSection Component
 *
 * This component displays a section of key figures with scroll-based animations using VisibilitySensor.
 * Each key figure becomes animated when it is scrolled into the viewport.
 */
const KeyFiguresSection = () => {
    // State to track visibility of each key figure
    const [visible, setVisible] = (0, react_1.useState)(Array(keyFigures.length).fill(false));
    /**
     * Callback function to handle visibility change of a key figure.
     *
     * @param {number} index - Index of the key figure.
     * @param {boolean} isVisible - Indicates whether the key figure is currently visible in the viewport.
     */
    const handleVisibilityChange = (index, isVisible) => {
        const newVisible = [...visible];
        newVisible[index] = isVisible;
        setVisible(newVisible);
    };
    return (react_1.default.createElement("div", { className: "key-figures-section" },
        react_1.default.createElement("h2", { className: "text-center text-7xl mt-28 mb-28" }, "Key figures"),
        react_1.default.createElement("div", { className: "grid grid-cols-4" }, keyFigures.map((figure, index) => (react_1.default.createElement(react_visibility_sensor_1.default, { key: index, onChange: (isVisible) => handleVisibilityChange(index, isVisible) },
            react_1.default.createElement("div", { className: `p-20 rounded-lg border border-black ${visible[index] ? 'animate-scroll-up' : ''}` },
                react_1.default.createElement("p", { className: "text-7xl text-center font-bold mb-8" }, figure.value),
                react_1.default.createElement("h2", { className: "text-3xl text-center" }, figure.label))))))));
};
exports.default = KeyFiguresSection;

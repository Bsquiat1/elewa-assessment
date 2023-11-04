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
/**
 * LearnMoreSection Component
 *
 * This component represents a section that encourages users to learn more about a topic or feature.
 * It typically includes a main title and a subtitle.
 *
 * @param {LearnMoreSectionProps} props - The properties for the LearnMoreSection.
 * @param {string} props.title - The main title of the LearnMoreSection.
 * @param {string} props.subtitle - The subtitle or additional text for the LearnMoreSection.
 */
const LearnMoreSection = ({ title, subtitle }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    return (react_1.default.createElement(react_visibility_sensor_1.default, { onChange: (isVisible) => setVisible(isVisible), partialVisibility: true },
        react_1.default.createElement("div", { className: `mt-44 mb-44 ${visible ? 'animate-scroll-up' : ''}` },
            react_1.default.createElement("h2", { className: "text-7xl font-normal text-center" }, title),
            react_1.default.createElement("h3", { className: "text-7xl font-bold text-center" }, subtitle))));
};
exports.default = LearnMoreSection;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
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
    return (react_1.default.createElement("div", { className: `mt-44 mb-44` },
        react_1.default.createElement("h2", { className: "text-7xl font-normal text-center" }, title),
        react_1.default.createElement("h3", { className: "text-7xl font-bold text-center" }, subtitle)));
};
exports.default = LearnMoreSection;

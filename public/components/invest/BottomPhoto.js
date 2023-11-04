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
 * BottomPhoto Component
 *
 * This component represents a section with a title, description, and an image displayed at the bottom.
 *
 * @param {BottomPhotoProps} props - The properties for the BottomPhoto.
 * @param {string} props.title - The title for the section.
 * @param {string} props.description - A description or additional text for the section.
 * @param {string} props.imageUrl - The URL of the image to display in the section.
 */
const BottomPhoto = ({ title, description, imageUrl }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    /**
     * Callback function to handle visibility change of the component.
     * When the component becomes visible in the viewport, it updates the `visible` state.
     *
     * @param {boolean} isVisible - Indicates whether the component is currently visible in the viewport.
     */
    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setVisible(true);
        }
    };
    return (react_1.default.createElement(react_visibility_sensor_1.default, { onChange: onVisibilityChange, partialVisibility: true },
        react_1.default.createElement("div", { className: `section-container bg-gray-100 p-8 rounded-b-3xl ${visible ? 'animate-fade-in' : ''}` },
            react_1.default.createElement("div", { className: "container mx-auto flex flex-col items-center justify-center" },
                react_1.default.createElement("div", { className: "text-left" },
                    react_1.default.createElement("h2", { className: "text-6xl font-normal mt-20" }, title),
                    react_1.default.createElement("p", { className: "text-4xl font-thin mt-20 mb-20" }, description)),
                react_1.default.createElement("div", { className: "mt-8" },
                    react_1.default.createElement("img", { src: imageUrl, alt: "Section Image", className: "w-full rounded-3xl" }))))));
};
exports.default = BottomPhoto;

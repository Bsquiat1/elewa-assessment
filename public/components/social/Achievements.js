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
const achievements = [
    { title: 'People trained', value: '733+' },
    { title: 'Careers launched', value: '733k' },
    { title: 'Projects finished', value: '200+' },
    { title: 'Investors', value: '56' },
];
const Achievements = (props) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setVisible(true);
        }
    };
    return (react_1.default.createElement("div", { className: "bg-black" },
        react_1.default.createElement("div", { className: "grid grid-cols-4 gap-2" }, achievements.map((achievement, index) => (react_1.default.createElement(react_visibility_sensor_1.default, { key: index, onChange: handleVisibilityChange, partialVisibility: true }, ({ isVisible }) => (react_1.default.createElement("div", { className: `text-center mt-20 mb-20 ${isVisible && visible ? 'animate-achievement' : ''}` },
            react_1.default.createElement("h2", { className: `text-6xl font-normal text-white mb-8 ${isVisible && visible ? 'animate-achievement-text' : ''}` }, isVisible && visible ? achievement.value : ' '),
            react_1.default.createElement("p", { className: "text-4xl font-semibold text-white" }, achievement.title)))))))));
};
exports.default = Achievements;

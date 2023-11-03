"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// Data for achievements to be displayed.
const achievements = [
    { title: 'People trained', value: '733+' },
    { title: 'Careers launched', value: '733k' },
    { title: 'Projects finished', value: '200+' },
    { title: 'Investors', value: '56' },
];
/**
 * Achievements Component
 *
 * This component displays a set of achievements in a grid format.
 *
 * @param {Props} props - The properties for the Achievements component (none in this case).
 */
const Achievements = (props) => {
    return (react_1.default.createElement("div", { className: "bg-black" },
        react_1.default.createElement("div", { className: "grid grid-cols-4 gap-2" }, achievements.map((achievement, index) => (react_1.default.createElement("div", { key: index, className: "text-center mt-20 mb-20" },
            react_1.default.createElement("h2", { className: "text-6xl font-normal text-white mb-8" }, achievement.value),
            react_1.default.createElement("p", { className: "text-4xl font-semibold text-white" }, achievement.title)))))));
};
exports.default = Achievements;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_visibility_sensor_1 = __importDefault(require("react-visibility-sensor"));
const react_2 = require("react");
/**
 * ContentItem Component
 *
 * This component displays an item with an image, title, and description.
 *
 * @param {ContentItemProps} props - The properties for the ContentItem.
 * @param {string} props.imageSrc - The source URL of the image.
 * @param {string} props.title - The title of the item.
 * @param {string} props.description - The description of the item.
 */
const ContentItem = ({ imageSrc, title, description }) => {
    const [visible, setVisible] = (0, react_2.useState)(false);
    return (react_1.default.createElement(react_visibility_sensor_1.default, { onChange: (isVisible) => setVisible(isVisible), partialVisibility: true },
        react_1.default.createElement("div", { className: `content-item ${visible ? 'animate-scroll-up' : ''}` },
            react_1.default.createElement("img", { src: imageSrc, alt: title, className: "h-28" }),
            react_1.default.createElement("h2", { className: "text-4xl font-sm mt-10" }, title),
            react_1.default.createElement("p", { className: "text-xl mt-4" }, description))));
};
/**
 * Care Component
 *
 * This component displays information about Elewa's care initiatives.
 * It includes a title and paragraphs of text, as well as multiple ContentItem components.
 */
const Care = () => {
    const [visible, setVisible] = (0, react_2.useState)(false);
    return (react_1.default.createElement(react_visibility_sensor_1.default, { onChange: (isVisible) => setVisible(isVisible), partialVisibility: true },
        react_1.default.createElement("div", { className: `additional-section ${visible ? 'animate-scroll-up' : ''}` },
            react_1.default.createElement("h2", { className: "text-7xl font-bold mt-36 ml-20" }, "We Care!"),
            react_1.default.createElement("div", { className: "flex ml-20 mt-10" },
                react_1.default.createElement("p", { className: "text-4xl text-left mr-10" }, "Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and the environment. We care about our growth, but also care deeply about the context surrounding us."),
                react_1.default.createElement("p", { className: "text-4xl text-left" }, "Our investments are therefore not limited to internal ones but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.")),
            react_1.default.createElement("div", { className: "flex ml-20 mt-20 mb-48" },
                react_1.default.createElement(ContentItem, { imageSrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png", title: "Holistic Solutions", description: "We go beyond a simple patch-up but develop lasting solutions through holistic design." }),
                react_1.default.createElement(ContentItem, { imageSrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png", title: "Impact", description: "Impact as a direct or indirect result. All our respective organizations have underlying theories of change." }),
                react_1.default.createElement(ContentItem, { imageSrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png", title: "Open Data", description: "Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects." })))));
};
exports.default = Care;

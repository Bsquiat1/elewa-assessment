"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * ValueItem Component
 *
 * This component represents an individual value or cultural aspect with an image, title, and description.
 */
const ValueItem = ({ imageSrc, title, description, }) => {
    return (react_1.default.createElement("div", { className: "value-item border border-black" },
        react_1.default.createElement("img", { src: imageSrc, alt: title, className: "h-20 mt-14 mb-8 ml-20" }),
        react_1.default.createElement("h3", { className: "text-5xl font-normal mb-2 ml-20" }, title),
        react_1.default.createElement("p", { className: "text-3xl font-thin ml-20 mb-4" }, description)));
};
/**
 * Values Component
 *
 * This component displays information about the culture and values of the organization.
 */
const Values = () => {
    return (react_1.default.createElement("div", { className: "values-section" },
        react_1.default.createElement("h2", { className: "text-7xl font-normal text-left mb-20 mt-20 ml-20" }, "Our Culture & Values"),
        react_1.default.createElement("p", { className: "text-4xl font-normal ml-20" }, "Our culture, CODE-(T), defines us. It protects and guides us to"),
        react_1.default.createElement("p", { className: "text-4xl font-normal ml-20" }, "success. It keeps our team and management accountable to itself,"),
        react_1.default.createElement("p", { className: "text-4xl font-normal mb-16 ml-20" }, "its objective, and our long-term mission."),
        react_1.default.createElement("div", { className: "grid grid-cols-2" },
            react_1.default.createElement(ValueItem, { imageSrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png", title: "Cooperative", description: "We have a cooperative and open mindset. If one of us grows, all will follow." }),
            react_1.default.createElement(ValueItem, { imageSrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png", title: "Ownership", description: "We are dependable and honor our commitments. When things don't go as planned, we communicate early to avoid catastrophe." }),
            react_1.default.createElement(ValueItem, { imageSrc: "https://static.thenounproject.com/png/1721983-200.png", title: "Detail", description: "We are a 'Centre of Excellence' as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival." }),
            react_1.default.createElement(ValueItem, { imageSrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png", title: "Empathy", description: "We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need." }),
            react_1.default.createElement(ValueItem, { imageSrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Transparancy_fqal8q.png", title: "Transparency", description: "We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within." }))));
};
exports.default = Values;

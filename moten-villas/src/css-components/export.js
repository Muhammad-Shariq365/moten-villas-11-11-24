import building from "../assets/building.svg";
import construction from "../assets/construction.svg";
import design from "../assets/design.svg";
import document from "../assets/document.svg";
import paint from "../assets/paint.svg";
import support from "../assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";


export const allservices = [
  {
    id: "82cc6775-b6b2-4869-839e-29f3af1d124e",
    icon: building, // Your original icon
    title: "BUILDING RENOVATION",
    about: "We offer expert building renovation services to modernize and improve your space while maintaining its original charm.",
    backImage: "https://images.pexels.com/photos/3887428/pexels-photo-3887428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "28a38d99-0323-4919-93c8-b3d176676b2e",
    icon: construction, // Your original icon
    title: "CONSTRUCTION SERVICES",
    about: "Our construction services cover all aspects of building, ensuring your project is completed to the highest standards.",
    backImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "697ee599-6aa0-459b-9a9b-4c2f8c9bad89",
    icon: design, // Your original icon
    title: "DESIGN & PLANNING",
    about: "We provide comprehensive design and planning solutions, ensuring that every aspect of your project is detailed and executed.",
    backImage: "https://img.freepik.com/free-photo/high-angle-view-worker-s-hand-working-blueprint-wooden-table-workplace_23-2148203929.jpg?t=st=1727630832~exp=1727634432~hmac=a69ddb8c9d20ab9cb891e0e9505a3014785a19b4930916d225afaff5fd957e7b&w=740"
  },
  {
    id: "8b8f15dd-fb1c-432d-94ab-58c31774903b",
    icon: document, // Your original icon
    title: "DOCUMENTATION",
    about: "We handle all necessary documentation for your project, ensuring compliance with regulations and providing clear records.",
    backImage: "https://img.freepik.com/free-photo/still-life-documents-stack_23-2151088805.jpg?t=st=1727632271~exp=1727635871~hmac=70736577e13f94f0a8de6effd9b94236f4e5c492c5ef591c67ff05d20e1bbada&w=740"
  },
  {
    id: "039ffe14-5de7-4d63-a13f-efb75da56a56",
    icon: paint, // Your original icon
    title: "INTERIOR DESIGN",
    about: "Our interior design team works with you to create functional spaces that reflect your style and needs.",
    backImage: "https://img.freepik.com/free-photo/3d-rendering-contemporary-modern-dining-room-living-room-with-luxury-decor_105762-2243.jpg?t=st=1727633704~exp=1727637304~hmac=2e0ff1751ded582f6b440ad1c70a121b440f5839cf96064c7fdbf046b3f26ff9&w=740"
  },
  {
    id: "6eed762f-e3b7-48a7-b212-9ddcb70986b9",
    icon: support, // Your original icon
    title: "CUSTOMER SUPPORT",
    about: "Our dedicated customer support team is here to assist you with any questions throughout your project.",
    backImage: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]; 







export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Planning",
    about:
      "Our process begins with understanding your goals and requirements. We conduct thorough research and analysis to ensure a solid foundation for your project, aligning our vision with your expectations.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Design",
    about:
      "Our design phase focuses on creating user-friendly and aesthetically pleasing interfaces. We prioritize usability and functionality while crafting a visually appealing design that reflects your brand identity.",
  },
  {
    icon: FaRegBuilding,
    title: "Building",
    about:
      "With a clear plan and design in place, we move into the building phase. Our skilled developers use the latest technologies to ensure a robust and scalable solution and adhering to best practices.",
  },
  {
    icon: FaSitemap,
    title: "Finishing Touches",
    about:
      "After development, we conduct thorough testing and quality assurance to ensure everything functions perfectly. We then implement any final adjustments and prepare for launch at the end.",
  },
];


export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];

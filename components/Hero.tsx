// import RootLayout from "./layout/layout";
import { Input, Textarea, Button, Spinner } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import localfont from "next/font/local";
import LawCards from "./LawCards";

const sfmedium = localfont({
  src: "../public/fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-sfmedium",
});

function Hero() {
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const [categories, setCategories] = useState([]); // Add categories state

  const [input, setInput] = useState({
    gender: "",
    age: "",
    occupation: "",
    disable: "",
    language: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnClick = async () => {
    setIsLoading(true);
    const res = await axios.get("http://localhost:8080/api/v1/categories", {
      params: input,
    });
    setIsLoading(false);
    setCategories(res.data.categories);
  };

  return (
    <div className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-8xl mb-4 pb-4 text-gray-900">
            Know Your Rights
          </h1>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-3">
          <Input
            type="text"
            label="Gender"
            placeholder="Men/Women/Other"
            onChange={handleOnChange}
            name="gender"
            value={input.gender}
          />
          <Input
            type="text"
            label="Age"
            placeholder="Enter your age"
            onChange={handleOnChange}
            name="age"
            value={input.age}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-3">
          <Input
            type="text"
            label="Occupation"
            placeholder="Student/Labour/Employee"
            onChange={handleOnChange}
            name="occupation"
            value={input.occupation}
          />
          <Input
            type="text"
            label="Disable"
            placeholder="true/false"
            onChange={handleOnChange}
            name="disable"
            value={input.disable}
          />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 my-3">
          <Input
            type="text"
            label="Language"
            placeholder="English/Hindi"
            onChange={handleOnChange}
            name="language"
            value={input.language}
          />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button color="danger" onClick={handleOnClick}>
            Submit
          </Button>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1] ">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="900.65"
                y1="500.58"
                x2="900.827"
                y2="-300.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6969" stopOpacity="0.36" />
                <stop offset="1" stopColor="#FFF9DE" stopOpacity="0" />
                <stop offset="1" stopColor="#FFF9DE" stopOpacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {/* Pass categories as a prop to LawCards component */}
      {isLoading ? <Spinner /> : <LawCards categories={categories} />}
    </div>
  );
}

export default Hero;

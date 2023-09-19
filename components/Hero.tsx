// import RootLayout from "./layout/layout";
import { Input, Textarea, Button, Spinner } from "@nextui-org/react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { samplePrompt, sampleResponse } from "@/constants/promptSample";
import { LanguageContext } from "@/context/LanguageContext";
import axios from "axios"; // Import Axios

function Hero() {
  const [output, setOutput] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state
  const { language } = useContext(LanguageContext); // Get the language state from the context
  const [apiData, setApiData] = useState("Your output would be displayed here");
  const [textInputData, setTextInputData] = useState("Enter your promt here");

  const handleButtonClick = async () => {
    setIsLoading(true);
    const inputQuery = {
      query: textInputData,
      language: language.values().next().value,
    };
    // console.log(inputQuery);
    const jsonRequestBody = JSON.stringify(inputQuery);
    const apiUrl = "/api/proxy";
    try {
      const response = await axios.post(apiUrl, jsonRequestBody, {
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
      });
      setApiData(response.data.Response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTextInputData(newValue);
  };

  return (
    <div className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-8xl mb-4 pb-4 text-gray-900">
            Know Your Rights
          </h1>
          <div className="flex flex-row pb-2 space-x-5">
            <Input
              type=""
              variant="flat"
              label="Prompt"
              size="lg"
              className=""
              // defaultValue={samplePrompt}
              onChange={handleInputChange}
              value={textInputData}
            />
            <button
              onClick={handleButtonClick}
              className="inline-flex text-white bg-customred border-0 py-3 px-6 focus:outline-none hover:bg-maroon  rounded text-lg"
            >
              Submit
            </button>
            {/* <Button color="secondary" size="lg" radius="lg" >Button</Button> */}
          </div>
          {isLoading ? ( // Check isLoading to render the Spinner
            <div className="text-center">
              <Spinner size="lg" />
            </div>
          ) : (
            <Textarea
              isReadOnly
              variant="faded"
              labelPlacement="outside"
              defaultValue={apiData}
              size="lg"
              className=""
            />
          )}
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
      </div>
    </div>
  );
}

export default Hero;

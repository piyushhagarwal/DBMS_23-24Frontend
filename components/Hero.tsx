// import RootLayout from "./layout/layout";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import { samplePrompt, sampleResponse } from "@/data/promptSample";

function Hero() {
    const [output, setOutput] = useState(false);

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
                            defaultValue={samplePrompt}
                        />
                        <button className="inline-flex text-white bg-customred border-0 py-3 px-6 focus:outline-none hover:bg-maroon  rounded text-lg">
                            Submit
                        </button>
                        {/* <Button color="secondary" size="lg" radius="lg" >Button</Button> */}
                    </div>
                    <Textarea
                        isReadOnly
                        variant="faded"
                        labelPlacement="outside"
                        defaultValue={sampleResponse}
                        size="lg"
                        className=""
                        // className=" bg-sand "
                    />
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
                                    <stop
                                        stop-color="#FF6969"
                                        stop-opacity="0.36"
                                    />
                                    <stop
                                        offset="1"
                                        stop-color="#FFF9DE"
                                        stop-opacity="0"
                                    />
                                    <stop
                                        offset="1"
                                        stop-color="#FFF9DE"
                                        stop-opacity="0.096144"
                                    />
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

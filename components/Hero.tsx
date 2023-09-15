// import RootLayout from "./layout/layout";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import { samplePrompt, sampleResponse } from "@/data/promptSample";

function Hero() {
  const [output, setOutput] = useState(false);

  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-16 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-8xl mb-4 pb-4 text-gray-900">
            Know Your Rights
          </h1>
          <div className="flex flex-row pb-2 space-x-5">
            <Input
              type=""
              variant="bordered"
              label="Prompt"
              className=""
              defaultValue={samplePrompt}
            />
            <button className="inline-flex text-white bg-purple-400 border-0 py-3 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
              Submit
            </button>
            {/* <Button color="secondary" size="lg" radius="lg" >Button</Button> */}
          </div>
          <Textarea
            isReadOnly
            variant="underlined"
            labelPlacement="outside"
            defaultValue={sampleResponse}
            size="lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

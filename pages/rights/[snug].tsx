import { useRouter } from "next/router";
import AccordionItem from "@/components/Accordion";
// import jsonData from "@/public/data.json";
import { English } from "@/constants/Englishdata";

function Snug() {
  const router = useRouter();
  const { snug } = router.query;
  const categoryID = parseInt(snug as string, 10) || 0;
  const selectedCategory = English.find(
    (category) => category.id === categoryID
  );
  return (
    <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h2 className="mb-4 font-bold text-dark text-6xl">
                {selectedCategory?.catName}
              </h2>
              <p className="text-body-color text-2xl">
                {selectedCategory?.catDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            {selectedCategory?.catQues.map((question, index) => (
              <AccordionItem
                key={index}
                header={question.q}
                ans={question.ans}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
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
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF6969" stopOpacity="0.36" />
              <stop offset="1" stopColor="#FFF9DE" stopOpacity="0" />
              <stop offset="1" stopColor="#FFF9DE" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Snug;

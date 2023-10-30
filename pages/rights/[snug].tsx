import { useRouter } from "next/router";
import AccordionItem from "@/components/Accordion";
import { use, useContext, useEffect, useState } from "react";
import localfont from "next/font/local";
import axios from "axios";

const sfmedium = localfont({
  src: "../../public/fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-sfmedium",
});

interface AccordionItemProps {
  _id: string;
  q: string;
  ans: {
    heading: string;
    description: string;
  }[];
}

function Snug() {
  const router = useRouter();
  const { snug } = router.query;
  //   console.log(typeof snug);

  const [rights, setRights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (snug) {
          const res = await axios.get(
            `http://localhost:8080/api/v1/rights/${snug}`
          );
          setRights(res.data.selectedRights);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [snug]);

  return (
    <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            {rights?.map((question: AccordionItemProps) => (
              <AccordionItem
                key={question._id}
                header={question.q}
                actions={question.ans}
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

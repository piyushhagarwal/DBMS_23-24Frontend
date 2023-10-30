import Link from "next/link";
import localfont from "next/font/local";

const sfmedium = localfont({
  src: "../public/fonts/SF-Pro-Display-Medium.otf",
  variable: "--font-sfmedium",
});

interface LawCardsProps {
  categories: Array<{
    _id: string;
    name: string;
    description: string;
    language: string;
    __v: number;
  }>;
}

function LawCards({ categories }: LawCardsProps) {
  return (
    <div className="opacity-100 bg-white">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {categories.map(({ _id, name, description }: any) => (
              <div key={_id} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {name}
                  </h1>

                  <p className={`leading-relaxed mb-3 ${sfmedium.className}`}>
                    {description}
                  </p>

                  <Link
                    href={`/rights/${_id}`}
                    className="text-maroon inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LawCards;

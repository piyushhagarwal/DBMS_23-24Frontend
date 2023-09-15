import React from "react";

function Footer() {
  const footerStyle: React.CSSProperties = {
    // position: 'fixed',
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 1000,
    borderTop: "1px solid #e5e5e5",
    padding: "20px",
    boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <footer style={footerStyle} className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-maroon rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Juris</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

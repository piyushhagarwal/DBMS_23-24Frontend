import React from "react";
import Image from "next/image";

const ChatButton: React.FC = () => {
  const chatbotUrl = "URL_TO_CHATBOT"; // Replace with the actual chatbot URL
  const mascotImageUrl = "/mascot.png";

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#ffff",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    position: "fixed",
    bottom: "8vh", // Adjust as needed
    right: "2vh", // Adjust as needed
    zIndex: 1000, // Ensure the button is above other content
  };

  return (
    <a href={chatbotUrl} target="_blank" rel="noopener noreferrer">
      <button style={buttonStyle}>
        <Image
          src={mascotImageUrl}
          alt="Chatbot Mascot"
          width={100}
          height={100}
        />
      </button>
    </a>
  );
};

export default ChatButton;

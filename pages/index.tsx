import ChatButton from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LawCards from "@/components/LawCards";
import Navbar from "@/components/Navbar";

import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";

import { English } from "@/constants/Englishdata";
import { Hindi } from "@/constants/hindidata";
import { Language } from "@/enums/language";

export default function Home() {
    return (
        <div>
            <Hero />
            <LawCards />
            <ChatButton />
        </div>
    );
}

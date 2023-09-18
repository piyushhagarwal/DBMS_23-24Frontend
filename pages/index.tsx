import ChatButton from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LawCards from "@/components/LawCards";


export default function Home() {
    return (
        <div>
            <Hero />
            <LawCards />
            <ChatButton />
        </div>
    );
}

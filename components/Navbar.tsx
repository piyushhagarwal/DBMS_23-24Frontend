import React, { useContext } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuItem,
    NavbarMenuToggle,
    Select,
    SelectItem,
    NavbarMenu,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";

import { AcmeLogo } from "../public/AcmeLogo.jsx";
import { LanguageContext } from "@/context/LanguageContext";
import { Language } from "@/enums/language";
import localfont from "next/font/local";

const sfmedium = localfont({
    src: "../public/fonts/SF-Pro-Display-Medium.otf",
    variable: "--font-sfmedium",
});

const Languages = [
    { label: "English", value: "english", description: "English" },
    { label: "Hindi", value: "hindi", description: "Hindi" },
    { label: "Marathi", value: "marathi", description: "Marathi" },
];

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { language, setLanguage } = useContext(LanguageContext); // Get the language state from the context

    const menuItems = [
        "Contact Lawyers",
        "Fill-a-Form",
        "Take Action",
        "Profile",
        "Dashboard",
        "My Settings",
        "Help & Feedback",
        "Contact Us",
        "Log Out",
    ];

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            isBordered={true}
            isBlurred={true}
            className=""
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <Link href="/">
                    <NavbarBrand>
                        <AcmeLogo />
                        <p className="font-bold text-inherit">Juris</p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem className={sfmedium.className}>
                    <Link color="foreground" href="#">
                        Contact Lawyers
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Take Action
                    </Link>
                </NavbarItem>
                <NavbarItem className={sfmedium.className}>
                    <Link color="foreground" href="#">
                        News
                    </Link>
                </NavbarItem>
                <NavbarItem className={sfmedium.className}>
                    <Link color="foreground" href="#">
                        Contact Us
                    </Link>
                </NavbarItem>
                <NavbarItem className={`w-full ${sfmedium.className}`}>
                    <div className="flex w-full max-w-xs flex-col gap-2">
                        <Select
                            label="Select Language"
                            variant="bordered"
                            size="sm"
                            placeholder="Language"
                            selectedKeys={language}
                            className="max-w-l min-w-max"
                            onSelectionChange={setLanguage}
                        >
                            {Languages.map((language) => (
                                <SelectItem
                                    key={language.value}
                                    value={language.value}
                                >
                                    {language.label}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="secondary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2
                                    ? "primary"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

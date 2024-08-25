import {
  Navbar,
  // NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarBrand,
  Image,
} from "@nextui-org/react";
import { useState } from "react";
import HeroSection from "./HeroSection";
import BookLogo from "../assets/booklogo.jpg";
const Header = () => {
  const menuItems = ["Books", "Authors"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
      >
        <NavbarContent className="sm:hidden pr-3" justify="space-between">
          <NavbarBrand className="flex gap-4">
            <Image
              width={30}
              height={30}
              alt="logo"
              src={BookLogo}
              className="mb-2"
            />
            <p className="font-bold text-inherit">BookClub</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex">
          <NavbarBrand className="flex gap-4 ml-7">
            <Image
              width={60}
              height={50}
              alt="logo"
              src={BookLogo}
              className="mb-4"
            />
            <p className="font-bold  items-center">BookClub</p>
          </NavbarBrand>
          <div className="flex gap-7 mr-7">
            <NavbarItem isActive justify="end">
              <Link color="foreground" href="/book" aria-current="page">
                Books
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/author" aria-current="page" color="foreground">
                Authors
              </Link>
            </NavbarItem>
          </div>
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={index === 0 ? "/book" : "/author"}
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <HeroSection />
    </>
  );
};

export default Header;

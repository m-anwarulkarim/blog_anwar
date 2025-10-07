import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
// import { ModeToggle } from "../theme/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { IoSearchSharp } from "react-icons/io5";
import { Input } from "../ui/input";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className=" bg-muted relative z-50">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full"
            >
              Sign In
            </Button>
            {/* <div className="rounded-[50%]">
              <ModeToggle />
            </div> */}
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="">
                    {/* search icon */}
                    <IoSearchSharp />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Search...</DialogTitle>

                    <Input></Input>

                    <DialogDescription>Dialog Description</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

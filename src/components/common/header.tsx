import { useState } from "react";
import { NavLink } from "react-router";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-3">
      <Section className="py-0">
        <div className="flex items-center justify-between h-16 bg-white border border-gray-200 rounded-full px-6 shadow-sm">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-orange-500">Paul</span>
            <span className="text-gray-900"> John</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium px-4 py-2 rounded-full transition-colors",
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:text-orange-500"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Section>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <nav className="bg-white border border-gray-200 rounded-2xl px-6 py-4 flex flex-col gap-2 shadow-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium px-4 py-2 rounded-full",
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-600 hover:text-orange-500"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
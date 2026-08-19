import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <NavLink
            to="/"
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-orange-600">Paul</span>
            <span className="text-gray-900"> John</span>
          </NavLink>

          <p className="text-sm text-gray-500">
            IT Student & Web Developer
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-100 pt-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Paul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
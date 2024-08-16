import { PropTypes } from "prop-types";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SwitchLanguage from "./SwitchLenguage/SwitchLanguage";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = ({ navigationItems, Logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Agregar event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar event listener en desmontaje
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderNavItem = (item) => (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        item.current
          ? "text-naranja font-extrabold"
          : "text-azul hover:text-naranja font-bold",
        "inline-flex items-center px-1 pt-1 text-sm"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </a>
  );

  const renderMobileNavItem = (item) => (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        item.current
          ? "border-naranja text-naranja bg-primary font-bold"
          : "border-transparent text-azul hover:border-naranja hover:text-naranja font-semibold",
        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
      )}
      aria-current={item.current ? "page" : undefined}
      onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
    >
      {item.name}
    </a>
  );

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex w-full justify-between">
            <div className="flex flex-shrink-0 items-center">
              <a href="/#">
                <img
                  className="block h-10 w-auto lg:hidden"
                  src={Logo}
                  alt="Argentrade"
                />
                <img
                  className="hidden h-10 w-auto lg:block"
                  src={Logo}
                  alt="Argentrade"
                />
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navigationItems.map(renderNavItem)}
              <SwitchLanguage />
            </div>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 ${isOpen ? "text-naranja" : "text-azul"} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-naranja`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        ref={menuRef} // Asigna el ref al contenedor del menú
        className={`md:hidden ${
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="space-y-1 pt-2 pb-3">
          {navigationItems.map(renderMobileNavItem)}
          <SwitchLanguage setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  navigationItems: PropTypes.array.isRequired,
  Logo: PropTypes.string.isRequired,
};

export default Navbar;

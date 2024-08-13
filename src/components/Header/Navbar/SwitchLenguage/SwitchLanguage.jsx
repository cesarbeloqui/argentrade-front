import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguage, setLanguage } from "../../../../redux/languageSlice";
import { useEffect } from "react";
import arg from "../../../../assets/arg.png"
import eeuu from "../../../../assets/eeuu.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (language === "es") {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [language])
  const changeLanguage = () => {
    if (language === "es") {
      dispatch(setLanguage("en"));
    } else {
      dispatch(setLanguage("es"));
    }
  };
  const tamaño = "5"
  const banderas = `w-${tamaño} h-${tamaño} `;

  return (
    <div className="flex justify-center items-center">
      <span className="mr-2 bg-naranja p-1 rounded-full">
        <img src={arg} alt="es" className={`${banderas}`} />
      </span>
      <Switch
        checked={enabled}
        onChange={changeLanguage}
        className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-naranja focus:ring-offset-2"
      >
        <span className="sr-only">Change language</span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute h-full w-full rounded-md bg-white"
        />
        <span
          aria-hidden="true"
          className={classNames(
            "bg-naranja",
            "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
          )}
        />
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-secondary shadow ring-0 transition-transform duration-200 ease-in-out"
          )}
        />
      </Switch>
      <span className="ml-1 bg-naranja p-1 rounded-full">
        <img src={eeuu} alt="en" className={`${banderas}`} />
      </span>
    </div>
  );
}

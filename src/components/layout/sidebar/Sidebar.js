import React, { useState } from "react";
import states from "../../../states.json";
import { formatNumber } from "../../../utils/formatters";
const Sidebar = ({ handleState, countryInfo }) => {
  const [state, setState] = useState();

  const handleOnChange = (e) => {
    const value = e.target.value;
    handleState(value);
    setState(value);
  };

  const total =
    countryInfo &&
    countryInfo.confirmed + countryInfo.recovered + countryInfo.dead;
  return (
    <aside className="bg-gray-500 w-4/5 sm:w-1/3 md:w-1/5 p-5">
      <div className="text-white text-2xl font-black mb-4">
        Coronavirus Application
      </div>
      <div className="mb-4">
        <div className="inline-block relative w-full">
          <select
            onChange={handleOnChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={state}
          >
            <option>Select state</option>
            {Object.keys(states).map((state) => (
              <option key={state} value={state}>
                {states[state]}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg text-gray-600 mb-2">
            Total de casos confirmados
          </h2>
          <span className="block text-right text-red-700 text-xl">
            {formatNumber(total)}
          </span>
          <div className="flex justify-between mb-2">
            <span className="text-yellow-500">Casos Activos</span>
            <span className="text-gray-600">
              {countryInfo && formatNumber(countryInfo.confirmed)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-green-400">Casos Recuperados</span>
            <span className="text-gray-600">
              {countryInfo && formatNumber(countryInfo.recovered)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-red-400">Casos Mortales</span>
            <span className="text-gray-600">
              {countryInfo && formatNumber(countryInfo.dead)}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

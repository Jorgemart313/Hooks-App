import { useState } from "react";
import { TrafficLight } from "../01-useState/TrafficLight";
import { TrafficLightWithEffect } from "../02-useEffect/TrafficLightWithEffect";
import { TrafficLightWithhook } from "../02-useEffect/TrafficLightWithhook";
import { PokemonPage } from "../03-Examples/PokemonPage";
import { FocusScreen } from "../04-useRef/FocusScreen";
import { HooksApp } from "../HooksApp";

// Definimos un tipo para los nombres de los componentes, para mayor seguridad de tipo
type ComponentName =
  | "Home"
  | "TrafficLight"
  | "TrafficLightWithEffect"
  | "TrafficLightWithhook"
  | "PokemonPage"
  | "FocusScreen";

export const HooksShowcase = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentName>("Home");

  // Función para renderizar el componente activo
  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <HooksApp />;
      case "TrafficLight":
        return <TrafficLight />;
      case "TrafficLightWithEffect":
        return <TrafficLightWithEffect />;
      case "TrafficLightWithhook":
        return <TrafficLightWithhook />;
      case "PokemonPage":
        return <PokemonPage />;
      case "FocusScreen":
        return <FocusScreen />;
      default:
        return (
          <div className="text-center text-xl font-thin text-gray-400">
            Seleccione un Hook para ver su ejemplo.
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient from-slate-900 via-gray-900 to-slate-800 text-white p-4">
      <nav className="p-4 bg-gray-800 rounded-lg shadow-lg mb-8">
        <ul className="flex flex-col justify-center gap-6">
          <li className="grow md:grow-0">
            <button
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 "
              onClick={() => setActiveComponent("Home")}
            >
              Home (HooksApp)
            </button>
          </li>

          <li className="grow md:grow-0">
            <button
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              onClick={() => setActiveComponent("TrafficLight")}
            >
              useState (Semáforo Simple)
            </button>
          </li>
          <li className="grow md:grow-0">
            <button
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              onClick={() => setActiveComponent("TrafficLightWithEffect")}
            >
              useEffect (Semáforo con Timer)
            </button>
          </li>
          <li className="grow md:grow-0">
            <button
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              onClick={() => setActiveComponent("TrafficLightWithhook")}
            >
              Custom Hook (Semáforo)
            </button>
          </li>
          <li className="grow md:grow-0">
            <button
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              onClick={() => setActiveComponent("PokemonPage")}
            >
              useCounter (Pokémon)
            </button>
          </li>
          <li className="grow md:grow-0">
            <button
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
              onClick={() => setActiveComponent("FocusScreen")}
            >
              useRef (Focus Input)
            </button>
          </li>
        </ul>
      </nav>

      <div className="container mx-auto p-4 bg-gray-700 rounded-lg shadow-xl">
        {renderComponent()}
      </div>
    </div>
  );
};

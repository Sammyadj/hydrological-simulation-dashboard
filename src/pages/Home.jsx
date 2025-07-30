import { useState } from "react";
import MapOverlay from "../components/MapOverlay";
import InputForm from "../components/InputForm";
import ResultCard from "../components/ResultCard";
import { calculateRunoff } from "../services/api";

const Home = () => {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await calculateRunoff(formData);
      setResult(response);
    } catch (error) {
      console.error("Error calculating runoff:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Hydrological Simulation Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Enter rainfall, area, and curve number to calculate runoff.
        </p>
        <InputForm onSubmit={handleFormSubmit} />
        {result && <ResultCard result={result} />}
        <div className="mt-6">
          <MapOverlay />
        </div>
      </div>
    </div>
  );
};

export default Home;
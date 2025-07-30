

const ResultCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className="bg-white border border-blue-100 shadow-lg rounded-lg p-6 mt-8 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Simulation Results</h2>
      <div className="text-gray-800 text-lg space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">Runoff Depth:</span>
          <span>{result.runoff_depth} mm</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Runoff Volume:</span>
          <span>{result.runoff_volume} m³</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
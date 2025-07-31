import React, { useEffect, useState } from "react";
import StatsList from "./components/StatsList";

export default function App() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">📊 Social Media Analytics</h1>
      {loading ? (
        <p className="text-lg">Loading stats...</p>
      ) : (
        <StatsList stats={stats} />
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { getStats } from './api/statsApi';

export default function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-pink-600 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-2">📊 Social Media Analytics</h1>
      <p className="mb-6">Live stats fetched from backend.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat._id} className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold">{stat.platform}</h2>
            <p>Followers: {stat.followers}</p>
            <p>Engagement Rate: {stat.engagementRate}</p>
            <p>Sentiment Score: {stat.sentimentScore}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

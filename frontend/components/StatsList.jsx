import React from "react";

export default function StatsList({ stats }) {
  if (stats.length === 0) {
    return <p className="text-gray-500">No stats yet. Add some data!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
      {stats.map((stat) => (
        <div
          key={stat._id}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
        >
          <h2 className="text-xl font-semibold mb-2">{stat.platform}</h2>
          <p>Followers: <strong>{stat.followers}</strong></p>
          <p>Engagement Rate: <strong>{stat.engagementRate}</strong></p>
          <p>Sentiment Score: <strong>{stat.sentimentScore}</strong></p>
        </div>
      ))}
    </div>
  );
}

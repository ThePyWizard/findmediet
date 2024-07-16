import React from 'react';
import Link from 'next/link';

const DietPlanCard = ({ dietPlan }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 m-4">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{dietPlan.title}</h2>
      <p className="text-gray-600 mb-4">{dietPlan.description}</p>
      <Link href={`/diet-plans/${dietPlan.id}`} legacyBehavior>
        <p className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-colors duration-200">
          View Details
        </p>
      </Link>
    </div>
  </div>
);

export default DietPlanCard;
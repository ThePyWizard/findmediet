import React from 'react';
import Link from 'next/link';

const DietPlanCard = ({ dietPlan }) => (
  <div>
    <h2>{dietPlan.title}</h2>
    <p>{dietPlan.description}</p>
    <Link href={`/diet-plans/${dietPlan.id}`}>View Details</Link>
  </div>
);

export default DietPlanCard;

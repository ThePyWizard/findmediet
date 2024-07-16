import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Layout from '../../components/Layout';

const DietPlanCardInfo = () => {
  const router = useRouter();
  const { dietPlanId } = router.query;
  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDietPlan = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/diet_plans/${dietPlanId}`);
        setDietPlan(response.data);
      } catch (error) {
        console.error('Error fetching diet plan:', error);
        setError(error.message || 'Error fetching diet plan');
      } finally {
        setLoading(false);
      }
    };

    if (dietPlanId) {
      fetchDietPlan();
    }
  }, [dietPlanId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!dietPlan) return null; // Or render a placeholder or loading state

  return (
    <Layout>
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{dietPlan.title}</h2>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">Description:</p>
          <p className="text-gray-800">{dietPlan.description}</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">Meals:</p>
          <ul className="list-disc list-inside text-gray-800">
            <li><strong>Breakfast:</strong> {dietPlan.meals.breakfast}</li>
            <li><strong>Lunch:</strong> {dietPlan.meals.lunch}</li>
            <li><strong>Dinner:</strong> {dietPlan.meals.dinner}</li>
            <li><strong>Snacks:</strong> {dietPlan.meals.snacks}</li>
          </ul>
        </div>

        <div className="flex items-center text-gray-600">
          <p className="mr-4">Upvotes: {dietPlan.upvotes}</p>
          <p>Created At: {new Date(dietPlan.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default DietPlanCardInfo;

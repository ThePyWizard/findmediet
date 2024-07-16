import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import DietPlanCard from '../components/DietPlanCard';

const Home = () => {
  const [dietPlans, setDietPlans] = useState([]);

  useEffect(() => {
    async function fetchDietPlans() {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/diet_plans`);
      setDietPlans(response.data);
    }
    fetchDietPlans();
  }, []);

  return (
    <Layout>
      <h1 className='underline '>Trending Diet Plans</h1>
      <div>
        {dietPlans.map((plan) => (
          <DietPlanCard key={plan.id} dietPlan={plan} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;

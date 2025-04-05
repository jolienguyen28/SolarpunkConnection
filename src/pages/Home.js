import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { testGoogleSheets } from '../services/testGoogleSheets';

const categories = [
  {
    id: 'Internship',
    name: 'Internship, Grant, Job Opportunity, Graduate School',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'Home',
    name: 'Upgrade your Home',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'Work',
    name: 'At work',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'Community',
    name: 'Community Engagement',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'Waste',
    name: 'Waste Reduction/ Disposal',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'Government',
    name: 'Government',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'USF',
    name: 'USF Specific (Go Bulls!)',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'Donate',
    name: 'Donate/ Use your Resources',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  },
  {
    id: 'Entertainment',
    name: 'Entertainment, Utility, Education, News',
    color: 'bg-earth-olive hover:bg-earth-olive-light'
  }
];

const Home = () => {
  useEffect(() => {
    // Run the test when the component mounts
    const runTest = async () => {
      console.log('Running Google Sheets API test...');
      const result = await testGoogleSheets();
      console.log('Test result:', !!result);
    };
    
    runTest();
  }, []);
  
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-earth-dark">
          Choose a Category
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${encodeURIComponent(category.id)}`}
              className={`
                ${category.color}
                rounded-2xl py-6 px-8
                transform hover:scale-105 transition-all duration-300
                shadow-lg hover:shadow-xl
                flex items-center justify-center
                min-h-[150px]
                text-earth-white
              `}
            >
              <h2 className="text-xl font-semibold text-center">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 
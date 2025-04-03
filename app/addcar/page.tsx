import { useState } from 'react';
import AddCarForm from '@/components/AddCar/AddCarForm';
import Filter from './Filter';  // Assuming Filter component is imported
import { Car } from '@/types';  // Make sure the Car type is correctly imported

const Page = () => {
  // Updated state initialization to ensure it doesn't allow null
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);  // Default to an empty array

  return (
    <div className='padding-layout relative my-[30px] flex flex-col rounded-[10px] bg-white-0 px-6 py-10 dark:bg-gray-850 md:my-[50px] md:py-[30px]'>
      <div className='inline-flex flex-col items-start justify-start gap-2.5'>
        <div className='text-xl font-bold text-gray-900 dark:text-white-0'>
          Add a Car for Rent
        </div>
        <div className='text-sm font-medium text-gray-400'>
          Please enter your car info
        </div>
      </div>
      <div className='inline-flex flex-col items-start justify-start gap-6 pt-[34px]'>
        <div className='text-lg font-extrabold text-blue-500'>CAR INFO</div>
        <AddCarForm />
      </div>

      {/* Filter component */}
      <section className='hidden lg:grid lg:gap-14'>
        <Filter
          setFilteredCars={setFilteredCars}  // Pass setFilteredCars here
          cars={filteredCars}  // Assuming cars data is used in Filter component
          setLoading={/* You should provide a setLoading function here */}
        />
      </section>
    </div>
  );
};

export default Page;

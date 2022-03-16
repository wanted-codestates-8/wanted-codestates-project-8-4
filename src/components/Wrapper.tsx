import React from 'react';
import Tab from './Tab';
import DetailedList from './DetailedList';
import NewPage from './NewPage';

const Wrapper = () => {
  return (
    <div>
      <Tab />
      <NewPage />
      <DetailedList />
    </div>
  );
};

export default Wrapper;
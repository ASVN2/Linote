import React from 'react';
import Contantside from '../components/Contantside';
import Sidebar from '../components/Sidebar';
import useCollection from '../hooks/useCollection';
import useProvider from '../hooks/useProvider';

const Home = () => {
  const { user } = useProvider();
  const { docs } = useCollection('notes', ['createdAt', 'desc'], ['uid', '==', user.uid]);

  return (
    <div className="flex mt-20 gap-10 ">
      <Sidebar notes={docs} />
      <Contantside />
    </div>
  );
};

export default Home;

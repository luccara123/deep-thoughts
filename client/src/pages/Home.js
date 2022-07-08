import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
// @apollo/client library provides a loading property to indicate that the request isn't done just yet. When it's finished and we have data returned from the server, that information is stored in the destructured data property.
  const thoughts = data?.thoughts || [];
  // if data exists, store it in the thoughts constant we just created. If data is undefined, then save an empty array to the thoughts component.
  // This is called optional chaining, and it's new to JavaScript
  //Optional chaining negates the need to check if an object even exists before accessing its properties.
  console.log(thoughts);
  return (
    <main>
  <div className="flex-row justify-space-between">
    <div className="col-12 mb-3">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
      )}
    </div>
  </div>
</main>
  );
};

export default Home;

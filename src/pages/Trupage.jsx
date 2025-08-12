import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trupage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/auth/profile',{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
    }) // no need to hardcode localhost
      .then((response) => {
        setData(response.data);
        console.log(response.data.user);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []); // ✅ run only once when the component mounts

  return (
    <div>
      <h1>Trupage</h1>
      {data ? <p>{JSON.stringify(data, null, 2)}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Trupage;

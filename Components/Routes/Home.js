import React, { useContext } from 'react';
import { DataContext } from '../Context/ContextAPI';
import UserTable from '../UserTable/UserTable';


const Home = () => {

  const {name,userData} = useContext(DataContext);
  return (

    <div className='home'>
      
<div>Welcome {name}</div>
{/* <UserTable /> */}
          {/* <div>
            {userData.map((user) => (
                <p>User Name: {user.name}</p>
            ))}
        </div> */}
      
    </div>
  );
};

export default Home;

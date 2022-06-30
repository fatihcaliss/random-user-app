import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { GoMailRead } from "react-icons/go";
import { CgPhone } from "react-icons/cg";
import { GrMapLocation } from "react-icons/gr";

const url = "https://randomuser.me/api/"
function App() {
  const [loading, isLoading] = useState(true);
  const [data, setData] = useState([]);

  const users = async () => {
    try {
      const response = await axios(url);
      const { data } = response;
      setData(data.results[0]);
      isLoading(false)
    } catch (error) {
      console.log("hatttaaaa");
    }
  };

  useEffect(() => { users() }, []);
  if (loading) {
    return (<h1> Loading...</h1>)
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <h2><img src={data.picture.large} alt="qwe" /> {Object.values(data.name).join(" ")}</h2>
          <div className='threeElement'>
            <div className='icons'>
              <GoMailRead />
              <CgPhone />
              <GrMapLocation />
            </div>
            <div className='iconDesc'>
              <p> {data.email}</p>
              <p>{data.phone}</p>
              <p>{data.location.city} {data.location.country}</p>
            </div>
          </div>

          <p>Age: {data.dob.age}</p>
          <p>Registered Date: {data.registered.date.slice(0,10)}</p>
        </div>
        <button onClick={() => users()}>Random User</button>
      </div>
    </>
  );
}

export default App;

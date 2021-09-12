import { useEffect, useState } from "react";
import { Form } from "./components/form";
import { Table } from "./components/table";
import { URL } from "./service";

function App() {
  const [cars, setCars] = useState([])
  
  async function getCars() { 
    fetch(URL)
      .then(response => response.json())
      .then(response => setCars(response))
      .catch(e => ({ error: true, message: e.message }))
  }

  async function handleDeleteCar(plate) { 
    await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ plate }),
   })

   getCars();
  }

  useEffect(() => {
    getCars();
  },[])


  return (
    <>
      <Form 
        updateTable={getCars}
      />
      <Table
        cars={cars}
        handleDeleteCar={handleDeleteCar}
      />
    </>
  );
}

export default App;

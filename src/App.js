import React, { createContext, useState } from 'react';
import Form from './Components/Form';
export const MyContext = createContext();

function App() {
  const [prod, setProd] = useState([])
  return (
    <div className="App">
      <MyContext.Provider value={{ prod, setProd }}>
        <Form />
      </MyContext.Provider>
    </div>
  );
}

export default App;


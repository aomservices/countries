import React, { useState } from 'react';
import { Header } from './components/Header/Header'

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

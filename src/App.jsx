import { useState } from 'react';
import Card from './ui/components/Card/Card';
import CustomInput from './ui/components/CustomInput/CustomInput';

function App() {
  return (
    <div className="App">
      <CustomInput></CustomInput>
      <Card tarea={{title: "Tarea random"}}></Card>
    </div>
  )
}

export default App

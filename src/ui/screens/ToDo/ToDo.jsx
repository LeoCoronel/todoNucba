import React from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import CardList from '../../components/CardList/CardList';

const ToDo = () => {
  return (
    <div className='todo'>
        <CustomInput></CustomInput>
        <CardList></CardList>
    </div>
  )
}

export default ToDo
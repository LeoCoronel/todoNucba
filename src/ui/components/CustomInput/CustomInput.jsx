import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../redux/slices/taskSlice';
import { v4 as uuid } from 'uuid';

const CustomInput = () => {
  const [task, setTask] = useState({title: ''});

  const handleChange = e => {
    // [e.target.name] => ex: name="title" -- title: value
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      status: false,
      id: uuid()
    }));
    setTask({title: ''});
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
        <input value={task.title} type="text" name="title" id="title" className='form__input' onChange={handleChange} />
        <button type="submit" className='form__btn'>Agregar</button>
    </form>
  )
}

export default CustomInput
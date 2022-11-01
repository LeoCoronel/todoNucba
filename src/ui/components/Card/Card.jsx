import React, { useState } from 'react';
import Wait from '../../../assets/img/wait.svg';
import Finished from '../../../assets/img/success.svg';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../../../redux/slices/taskSlice';

const Card = ({task}) => {
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  }

  const handleStatus = (id) => {
    dispatch(updateTask({status, id}));
  }

  return (
    <div className='card'>
        <div className="card__top">
          {!status ? <img src={Wait} alt="" /> : <img src={Finished} alt="" />  }
          <button className='card__top__deleteBtn' onClick={() => handleDelete(task.id)}>X</button>
        </div>
        <div className='card__bottom'>
            <div className="check">
              <input checked={status} type="checkbox" name="finished" id="finished" onChange={() => {
                setStatus(!status)
                handleStatus(task.id)
              }} />
            </div>
          <p>{task.title}</p>
        </div>
    </div>
  )
}

export default Card
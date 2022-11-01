import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Up from '../../../assets/img/up.svg';
import Down from '../../../assets/img/down.svg';

const CardList = () => {
  const [showFinished, setShowFinished] = useState(true);
  const [showNoFinished, setShowNoFinished] = useState(true);

  const tasks = useSelector(state => state.tasks);
  const finished = tasks ? tasks.filter(task => {
    return task.status;
  }) : [];
  const notFinished = tasks ? tasks.filter(task => {
    return !task.status;
  }) : [];

  return (
    <div className='cardList'>
      <div className="notFinished">
        <div className="notFinished__title">
          <p>No finalizados</p>
          <button onClick={() => setShowNoFinished(!showNoFinished)}><img src={showNoFinished ? Up : Down } alt="" /></button>
        </div>
        {showNoFinished &&
          notFinished.map(task => {
              return <Card task={task} key={`card-uid-${task.id}`}></Card>
          })
        }
      </div>
      <div className="finished">
        <div className="finished__title">
          <p>Finalizados</p>
          <button onClick={() => setShowFinished(!showFinished)}><img src={showFinished ? Up : Down } alt="" /></button>
        </div>
        {showFinished &&
          finished.map(task => {
              return <Card task={task} key={`card-uid-${task.id}`}></Card>
          })
        }
      </div>
    </div>
  )
}

export default CardList
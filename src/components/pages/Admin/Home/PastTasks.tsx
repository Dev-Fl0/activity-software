import React, { useContext } from 'react';

// Logos
import {
  FaPersonSkiing,
  FaClock,
  FaRegHourglass,
  FaEuroSign,
} from 'react-icons/fa6';
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { RxAvatar } from 'react-icons/rx';

import { TasksContext } from '../../../../utils/context/tasksContext';

import './Task.scss';

export default function PastTasks() {
  const tasks = useContext(TasksContext);

  // Obtenir l'heure actuelle
  const currentTime = new Date();

  const currentTasks = tasks.filter((task) => {
    const taskStartTime = new Date(task.startAt);
    const taskEndTime = new Date(task.startAt);
    taskEndTime.setMinutes(
      taskEndTime.getMinutes() + parseInt(task.duration, 10)
    );

    // Une tâche est en cours si son début est inférieur à l'heure actuelle
    // et si son heure de fin est supérieure à l'heure actuelle
    return taskStartTime < currentTime && taskEndTime < currentTime;
  });

  return (
    <div className="tasks">
      <ul className="tasks-list">
        {currentTasks.map((task) => (
          <div className="tasks-item" key={task.id}>
            <li className="tasks-item__link past">
              <div className="tasks-item__name">
                <FaPersonSkiing className="tasks-item__image" />
                <p className="tasks-item__name-p">{task.name}</p>
              </div>
              <div className="tasks-item__technician">
                <HiMiniWrenchScrewdriver className="tasks-item__image" />
                <p className="tasks-item__technician-p">
                  {task.technician?.firstname} {task.technician?.lastname}
                </p>
              </div>
              <div className="tasks-item__client">
                <RxAvatar className="tasks-item__image" />
                <p className="tasks-item__client-p">
                  {task.client?.firstname} {task.client?.lastname}
                </p>
              </div>
              <div className="tasks-item__hour past-time">
                <FaClock className="tasks-item__image" />
                <p className="tasks-item__hour-p">
                  {task.startAt.toLocaleTimeString('fr-FR', {
                    year: 'numeric', // année (2024)
                    month: 'numeric', // mois (février)
                    day: 'numeric', // jour du mois (9)
                    hour: 'numeric', // heure (11)
                    minute: 'numeric', // minute (20)
                  })}
                </p>
              </div>
              <div className="tasks-item__duration">
                <FaRegHourglass className="tasks-item__image" />
                <p className="tasks-item__duration-p">
                  {task.duration} minutes
                </p>
              </div>
              <div className="tasks-item__price">
                <p className="tasks-item__price-p">{task.price}</p>
                <FaEuroSign className="tasks-item__price-logo" />
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

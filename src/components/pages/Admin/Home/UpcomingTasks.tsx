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

export default function UpcomingTasks() {
  const tasks = useContext(TasksContext);

  // Obtenir l'heure actuelle
  const currentTime = new Date().getTime();

  const futureTasks = tasks.filter((task) => {
    const taskStartTime = new Date(task.startAt).getTime();

    // Une tâche est future si son heure de début est supérieure à l'heure actuelle
    return taskStartTime > currentTime;
  });

  return (
    <div className="tasks">
      <ul className="tasks-list">
        {futureTasks.map((task) => (
          <div className="tasks-item" key={task.id}>
            <li className="tasks-item__link future">
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
              <div className="tasks-item__hour future-time">
                <FaClock className="tasks-item__image" />
                <p className="tasks-item__hour-p ">
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

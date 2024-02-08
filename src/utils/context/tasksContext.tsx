import React, { ReactElement, createContext, useEffect, useState } from 'react';

import { TaskType } from '../../@types';

import usersData from '../../data/users';
import tasksData from '../../data/task';
import clientsData from '../../data/clients';

const TasksContext = createContext<TaskType[]>([]);

function TasksProvider({ children }: { children: ReactElement }) {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const updatedTasks = tasksData.map((task) => {
      const taskClient = clientsData.find(
        (client) => client.id === task.clientId
      );
      const taskTechnician = usersData.find((user) => user.id === task.userId);
      return {
        ...task,
        client: taskClient || null,
        technician: taskTechnician || null,
      };
    });
    setTasks(updatedTasks);
  }, []);

  return (
    <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };

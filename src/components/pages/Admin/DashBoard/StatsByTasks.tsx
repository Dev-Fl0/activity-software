import {
  Chart as ChartJS,
  ArcElement,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import './Dashboard.scss';
import { useContext } from 'react';
import { TasksContext } from '../../../../utils/context/tasksContext';

ChartJS.register(
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function StatsByTasks() {
  const tasks = useContext(TasksContext);

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}60`;
  };

  const currentTime = new Date();

  const tasksCompletedByUser: {
    [key: string]: number;
  } = {};

  tasks.forEach((task) => {
    const taskStartTime = new Date(task.startAt);

    // Vérifie si la tâche a déjà été effectuée
    if (taskStartTime < currentTime) {
      // Incrémente le nombre de tâches effectuées par ce technicien
      tasksCompletedByUser[
        `${task.technician?.firstname} ${task.technician?.lastname}`
      ] =
        (tasksCompletedByUser[
          `${task.technician?.firstname} ${task.technician?.lastname}`
        ] || 0) + 1;
    }
  });

  const uniqueLabels = Object.keys(tasksCompletedByUser);

  const statsData = {
    labels: uniqueLabels,
    datasets: [
      {
        label: 'Technicien ayant éffectué le plus de tâches',
        data: uniqueLabels.map((label) => tasksCompletedByUser[label] || 0),
        // fill: false,
        backgroundColor: uniqueLabels.map(() => generateRandomColor()),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
  };

  return (
    <div className="stats">
      <Bar className="w-full" options={options} data={statsData} />
    </div>
  );
}

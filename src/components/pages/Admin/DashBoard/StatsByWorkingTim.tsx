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

export default function StatsByWorkingTime() {
  const tasks = useContext(TasksContext);

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}60`;
  };

  const currentTime = new Date();

  const totalDurationByTechnician: {
    [key: string]: number;
  } = {};

  tasks.forEach((task) => {
    const taskStartTime = new Date(task.startAt);

    // Vérifie si la tâche a déjà été effectuée
    if (taskStartTime < currentTime) {
      // Ajoute la durée de la tâche à la durée totale du technicien
      const technicianName = `${task.technician?.firstname} ${task.technician?.lastname}`;
      totalDurationByTechnician[technicianName] =
        (totalDurationByTechnician[technicianName] || 0) +
        parseInt(task.duration, 10);
    }
  });
  // Trouver le technicien avec la durée de travail la plus longue
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let maxDurationTechnician = '';
  let maxDuration = 0;
  Object.entries(totalDurationByTechnician).forEach(
    ([technician, duration]) => {
      if (duration > maxDuration) {
        maxDurationTechnician = technician;
        maxDuration = duration;
      }
    }
  );

  const statsData = {
    labels: Object.keys(totalDurationByTechnician),
    datasets: [
      {
        label: 'Technicien ayant travaillé le plus longtemps (en minutes)',
        data: Object.values(totalDurationByTechnician),
        backgroundColor: Object.keys(totalDurationByTechnician).map(() =>
          generateRandomColor()
        ),
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

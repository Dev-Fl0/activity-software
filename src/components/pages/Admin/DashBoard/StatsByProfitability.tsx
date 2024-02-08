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

export default function StatsByProfitability() {
  const tasks = useContext(TasksContext);

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}60`;
  };

  const currentTime = new Date();

  const revenueByTechnician: {
    [key: string]: number;
  } = {};

  tasks.forEach((task) => {
    const taskStartTime = new Date(task.startAt);

    // Vérifie si la tâche a déjà été effectuée
    if (taskStartTime < currentTime) {
      // Ajoute le prix de la tâche au chiffre d'affaires du technicien
      const technicianName = `${task.technician?.firstname} ${task.technician?.lastname}`;
      revenueByTechnician[technicianName] =
        (revenueByTechnician[technicianName] || 0) + task.price;
    }
  });
  // Trouver le technicien avec le revenu le plus élevé
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let maxRevenueTechnician = '';
  let maxRevenue = 0;
  Object.entries(revenueByTechnician).forEach(([technician, revenue]) => {
    if (revenue > maxRevenue) {
      maxRevenueTechnician = technician;
      maxRevenue = revenue;
    }
  });

  const statsData = {
    labels: Object.keys(revenueByTechnician),
    datasets: [
      {
        label: "Technicien ayant rapporté le plus d'argent",
        data: Object.values(revenueByTechnician),
        backgroundColor: Object.keys(revenueByTechnician).map(() =>
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

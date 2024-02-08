import StatsByProfitability from './StatsByProfitability';

import StatsByTasks from './StatsByTasks';

import './Dashboard.scss';
import StatsByWorkingTime from './StatsByWorkingTim';

export default function Dashboard() {
  return (
    <div className="planning-content">
      <StatsByTasks />
      <StatsByProfitability />
      <StatsByWorkingTime />
    </div>
  );
}

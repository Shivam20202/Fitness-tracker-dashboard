import './App.css';
import './style.css';

import React from 'react';
import ActivityTracker from './components/ActivityTracker';
import StatsDisplay from './components/StatsDisplay';
import WorkoutPlan from './components/WorkoutPlan';

function App() {
  return (
    <div className="App">
      
      <h1>Fitness Tracker Dashboard</h1>
      <ActivityTracker />
      <StatsDisplay />
      <WorkoutPlan />
    </div>
  );
}

export default App;


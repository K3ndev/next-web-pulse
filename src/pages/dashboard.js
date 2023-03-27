import React from 'react';

const AsyncDashboard = React.lazy(() => import('../modules/Dashboard/index'));

export default function Dashboard() {
  return <AsyncDashboard />;
}

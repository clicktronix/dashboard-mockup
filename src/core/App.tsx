import { Layout } from 'components/Layout';
import { MetricsTable } from 'components/MetricsTable';
import { SpecificDashboard } from 'components/SpecificDashboard';
import { DashboardPage } from 'pages/DashboardPage';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/instruments/:id" element={<MetricsTable />} />
        <Route path="/uuids/:id" element={<SpecificDashboard />} />
      </Routes>
    </Layout>
  );
}

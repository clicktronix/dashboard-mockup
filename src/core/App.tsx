import { InstrumentsTable } from 'components/InstrumentsTable';
import { Layout } from 'components/Layout';
import { MetricsDashboard } from 'components/MetricsDashboard';
import { DashboardPage } from 'pages/DashboardPage';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/instruments/:instrument" element={<InstrumentsTable />} />
        <Route path="/profitability/:id" element={<MetricsDashboard />} />
        <Route path="/close_volume/:id" element={<MetricsDashboard />} />
      </Routes>
    </Layout>
  );
}

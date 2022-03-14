import { Layout } from 'components/Layout';
import { MetricsTable } from 'components/MetricsTable';
import { Mockup } from 'components/Mockup';
import { MockupSec } from 'components/MockupSec';
import { SpecificDashboard } from 'components/SpecificDashboard';
import { DashboardPage } from 'pages/DashboardPage';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/mockup" element={<Mockup />} />
        <Route path="/mockup2" element={<MockupSec />} />
        <Route path="/instruments/:id" element={<MetricsTable />} />
        <Route path="/uuids/:id" element={<SpecificDashboard />} />
      </Routes>
    </Layout>
  );
}

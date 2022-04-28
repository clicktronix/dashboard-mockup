import { Manipulator } from 'components/Manipulator';
import { Layout } from 'components/shared/Layout';
import { Tile } from 'components/shared/Tile';
import { DashboardPage, SymbolDashboardPage, UuidDashboardPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Layout>
      <>
        <Tile sx={{ marginBottom: 3, padding: 2 }}>
          <Manipulator />
        </Tile>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/symbol" element={<SymbolDashboardPage />} />
          <Route path="/symbol/:id" element={<SymbolDashboardPage />} />
          <Route path="/uuid" element={<UuidDashboardPage />} />
          <Route path="/uuid/:id" element={<UuidDashboardPage />} />
        </Routes>
      </>
    </Layout>
  );
}

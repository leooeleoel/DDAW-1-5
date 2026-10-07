import { Routes, Route, useParams } from 'react-router';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

function ContactDetailPage() {
  const { id } = useParams();

  return <h1>Detalle del contacto {id}</h1>;
}

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactos" element={<ContactsPage />} />
          <Route
            path="/contactos/:id"
            element={<ContactDetailPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

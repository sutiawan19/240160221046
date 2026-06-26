import './App.css';
import TombolAuth from './components/TombolAuth';

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Aplikasi dengan State Persisten</h1>

        <p>
          Coba klik Login, lalu refresh halaman browser Anda.
        </p>

        <TombolAuth />
      </div>
    </div>
  );
}

export default App;
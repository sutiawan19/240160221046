import { useState } from 'react'
import './App.css'

// Komponen InputTeks
function InputTeks() {
  const [teks, setTeks] = useState('');

  function handleChange(event) {
    setTeks(event.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={teks}
        onChange={handleChange}
        placeholder="Ketik sesuatu..."
      />
      <p className="display-teks">
        Anda mengetik: <strong>{teks}</strong>
      </p>
    </div>
  );
}

// Komponen TombolAuth
function TombolAuth() {
  const [sudahLogin, setSudahLogin] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setSudahLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setSudahLogin(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      {sudahLogin ? (
        <>
          <h2>Selamat Datang Kembali!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Anda belum login. Silakan login.</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

// Komponen Utama App
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Pratikum 5 - Belajar React</h1>

      <h2>Contoh State dan Event Handling</h2>
      <InputTeks />

      <h2>Aplikasi dengan State Persisten</h2>
      <p>Coba klik Login, lalu refresh halaman. Status login akan tetap tersimpan.</p>
      <TombolAuth />
    </div>
  );
}

export default App
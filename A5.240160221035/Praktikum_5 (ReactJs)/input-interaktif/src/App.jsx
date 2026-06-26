import React from 'react';
import InputTeks from './components/InputTeks';
import TombolAuth from './components/TombolAuth';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Aplikasi dengan State Persisten & Interaktif</h1>
      <p>Coba klik Login, lalu refresh halaman browser Anda. Status login Anda akan tetap tersimpan.</p>
      
      {/* Studi Kasus 2 */}
      <TombolAuth />
      
      <hr style={{ margin: '40px auto', width: '50%' }} />
      
      {/* Studi Kasus 1 */}
      <InputTeks />
    </div>
  );
}

export default App;
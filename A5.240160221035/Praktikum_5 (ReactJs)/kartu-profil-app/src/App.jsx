import React from 'react';
import ProfilPengguna from './components/ProfilPengguna';
import Pengumuman from './components/Pengumuman'; 
import { users } from './data/users';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      
      {/* Bagian Pengumuman */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <Pengumuman 
          judul="Info Praktikum"
          isi="Pastikan semua tugas dikumpulkan sebelum batas waktu yang ditentukan."
        />
      </div>
      
      <h1 style={{ textAlign: 'center', color: '#333' }}>Tim Kami</h1>
      
      {/* Bagian Daftar Profil Pengguna */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        marginTop: '20px' 
      }}>
        {users.map(user => (
          <ProfilPengguna
            key={user.id}
            nama={user.nama}
            pekerjaan={user.pekerjaan}
            gambar={user.gambar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
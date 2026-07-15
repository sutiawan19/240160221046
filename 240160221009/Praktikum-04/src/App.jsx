import './App.css'

import ProfilPengguna from './components/ProfilPengguna'
import Pengumuman from './components/Pengumuman'
import InputTeks from './components/InputTeks'
import TombolAuth from './components/TombolAuth'

import { users } from './data/users'

function App() {
  return (
    <div className="app-container">

      <Pengumuman
        judul="Info Praktikum"
        isi="Pastikan semua tugas dikumpulkan sebelum batas waktu."
      />

      <h1>Tim Kami</h1>

      <div className="profil-list">

        {users.map(user => (
          <ProfilPengguna
            key={user.id}
            nama={user.nama}
            pekerjaan={user.pekerjaan}
            gambar={user.gambar}
          />
        ))}

      </div>

      <InputTeks />

      <TombolAuth />

    </div>
  )
}

export default App
import React from 'react';
import Card from './Card';
import './ProfilPengguna.css';

function ProfilPengguna({ gambar, nama, pekerjaan }) {
  return (
    <Card>
      <img src={gambar} alt={`Foto ${nama}`} className="profile-img" />
      <h3 className="profile-name">{nama}</h3>
      <p className="profile-job">{pekerjaan}</p>
    </Card>
  );
}

export default ProfilPengguna;
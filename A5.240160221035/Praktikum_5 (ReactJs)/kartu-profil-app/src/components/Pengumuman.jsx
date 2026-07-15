import React from 'react';
import Card from './Card';

function Pengumuman({ judul, isi }) {
  return (
    <Card>
      <h3 style={{ margin: '0 0 10px 0', color: '#ff4a4a' }}>📢 {judul}</h3>
      <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{isi}</p>
    </Card>
  );
}

export default Pengumuman;
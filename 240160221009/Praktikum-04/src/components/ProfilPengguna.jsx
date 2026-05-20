import Card from './Card'
import './ProfilPengguna.css'

function ProfilPengguna({ gambar, nama, pekerjaan }) {
  return (
    <Card>

      <img src={gambar} alt={nama} />

      <h3>{nama}</h3>

      <p>{pekerjaan}</p>

    </Card>
  )
}

export default ProfilPengguna
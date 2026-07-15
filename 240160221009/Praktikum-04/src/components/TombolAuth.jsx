import { useState } from 'react'

function TombolAuth() {

  const [sudahLogin, setSudahLogin] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true')
    setSudahLogin(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setSudahLogin(false)
  }

  return (
    <div>

      {sudahLogin ? (
        <>
          <h2>Selamat Datang Kembali!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Anda belum login</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}

    </div>
  )
}

export default TombolAuth
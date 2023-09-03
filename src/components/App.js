import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import authService from 'fBase';

function App() {
  const [initializeed, setInitializeed] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // 로그인 여부를 판단
  useEffect(() => {

  }, [])
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;

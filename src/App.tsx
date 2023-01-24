import { useEffect } from 'react';
import { Main, Header, Footer } from './components'
import AOS from 'aos';
function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (<>
      <Header />
      <Main />
      <Footer />
  </>
  );
}

export default App;

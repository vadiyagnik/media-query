import './assets/css/style.css';
import { Router } from './config/Routes';

function App() {
  // const isMobile = window.innerWidth <= 767;
  return (
    <>
      {/* {isMobile ? <MobileHeader /> : <Header />} */}
      <Router />
    </>
  );
}

export default App;
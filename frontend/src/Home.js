import Navbar from './components/navbar/index';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <h2>Quazar City</h2>
      <Button variant="success">Cadastrar</Button>
    </div>
  );
}

export default Home;

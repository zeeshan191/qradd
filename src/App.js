// eslint-disable-next-line
import './App.css';
import Menu from './Menu.js';
import Navbar from './Navbar';
import data from './data';






function App() {

  const { products } = data;
console.log(products)
  return (
    <>
      <Navbar />
      <Menu />



    </>
  );
}

export default App;

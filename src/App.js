import './App.css';
import Header from './components/header/Header';
import Section from './components/section/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/Footer';
import Data from './components/data/Data';



function App() {
  const showmessage = (arr) =>{
    arr.forEach(element => {
      console.log(element);
    });
  }
  return (
    <div >
      <Header />
      <Section />
      <Footer />
      <Data showmessage = {showmessage} />
    </div>
   
  );
}

export default App;

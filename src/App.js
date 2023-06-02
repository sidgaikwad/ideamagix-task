import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Tabs from './components/Tabs';
import Banner from './components/banner';
import Carousal from './components/carousal';
import FlexboxComponent from './components/flex';
import Footer from './components/footer';
import PreLoader from './components/preloader';

function App() {
  return (
    <>
      <PreLoader/>
      <Header/>
      <Navbar/>
      <Banner/>
      <Tabs/>
        <div class="w-full h-auto  border-b-2 border-dotted  border-blue-400 mb-1 bg-white ">
        <div className="flex flex-row  items-center justify-between ">
        <div>
         <h1 className="font-bold text-3xl mx-4  ">Treatment Overview</h1>
          <p className="my-3 mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            explicabo, quis quos quod eum, autem numquam <br /> ex debitis animi
            doloribus dolor error nam consequatur odit, aspernatur id molestias
            soluta velit!
          </p>
          </div>
          <img
            className="hidden h-auto w-72 lg:block p-4 "
            src="https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q="
            alt=""
          />
        </div>
      </div>
      <FlexboxComponent/>
      <Carousal/>
      <Footer/>
      
      

    </> 
  );
}

export default App;

import Logo from './assets/cmc-logo.svg';
import './App.css';
import { MostPopularTable } from './components/mostPopular';
// import { ForexTable} from './components/forex'

function App() {
  return (
<div class="container mx-auto flex flex-wrap p-5 flex-col items-center md:flex-row bg-cmc-background text-sm h-screen">
     <a href='' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src={Logo} class="w-100 h-10 mr-2" alt="Logo"/>
     </a>
     
     <div class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <a class="mr-5 text-cmc-text">Markets</a>
       <a class="mr-5 text-cmc-text">Trading Platform</a>
       <a class="mr-5 text-cmc-text">Learn</a>
       <a class="mr-5 text-cmc-text">Why CMC</a>
     </div>
     <button class="inline-flex items-center border-solid border-cmc-text rounded-md text-cmc-text mx-3 border py-1 px-9 mt-4 md:mt-0 justify-center"> Login </button> 
     <button class="inline-flex items-center border-solid bg-cmc-blue rounded-md py-1 px-3 mt-4 mx-3 md:mt-0 justify-center">Start Trading</button>
     
     <div class="md:ml-auto p-20 md:mr-auto flex flex-wrap items-center justify-center">
      <p class="text-2xl mr-5 py-2 text-cmc-text text-center">
        Competitive spreads for 11,500 + CFDs
      </p>
      <p class="mr-5 py-2 text-cmc-text text-center">
        Spread bet and trade CFDs on thousands of global markets, including forex, indices, commodities and shares.
      </p>
     </div>
    
     <div><MostPopularTable/></div>
     {/* <div><ForexTable/></div> */}
</div>
  );
}

export default App;

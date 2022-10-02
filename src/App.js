import './App.css';
import Header from './components/Header';
import Conversion from './components/Conversion';
import Footer from './components/Footer';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDxrcMlHF9mllhOFMVLFnz-B7WOSDosj5k",
    authDomain: "quotesvinu.firebaseapp.com",
    projectId: "quotesvinu",
    storageBucket: "quotesvinu.appspot.com",
    messagingSenderId: "286825011458",
    appId: "1:286825011458:web:f168c99d4d260aba330a1b",
    measurementId: "G-32NEVCK0M3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log(analytics)
  
  return (
   <div className="mainBox">
      <Header/>
      <Conversion/>
      <Footer/>
   </div>
  );
}

export default App;

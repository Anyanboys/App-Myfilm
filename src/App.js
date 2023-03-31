import './App.css';
import NavigationBar from './Components/NavigationBar';
import Intro from "./Components/Intro"
import Trending from "./Components/Trending"

import "./Style/landingPage.css"
import Warword from './Components/Warword';

function App() {
  return (
    <div>
      {/* intro section */}
      <div className='myBG border'>
      <NavigationBar/>
      <Intro/>
      </div>
      {/*end of intro*/}

      {/*trending section*/}
      <div className='trending'>
        <Trending/>
      </div>
      {/*end of trending section*/}

      {/*warword section*/}
    <div className='warword'>
    <Warword/>
    </div>
    {/*end of warword section*/}
    </div>
  );
}

export default App;

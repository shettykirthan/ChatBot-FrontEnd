import React from 'react';
import { LNavBar } from '../components';
import { LHeader} from '../containers';
import './light.css';
const LHomePage = () => {
  return (
    <div className='Light-mode'>
      <LNavBar /> {/* Include Navbar component here */}
      <LHeader />
      {/* Any other content specific to your home page */}
    </div>
  );
}

export default LHomePage;   
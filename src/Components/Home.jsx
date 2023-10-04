import React  from 'react';
import '../CSS/reset.css';
import HeaderComponent from './Header';
import '../CSS/Home.css';

const Home = () => {
  
  return (
    <div >
        <HeaderComponent></HeaderComponent>
        <div className='home-body'>
            <div class="text-box">
                 <h1 class="heading-primary">
                     <span class="heading-primary-main">ASEL</span>
                     <span class="heading-primary-sub">Is where life happens</span>
                </h1> 
            </div> 
        </div>
    </div>
  );
};

export default Home;

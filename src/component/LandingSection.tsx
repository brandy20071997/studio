import React from 'react';
import "../Style/Landing.css"
import GeneralCards from './Cards';
import CustomSlider from './CustomSlider';
import CommonNavbar from './Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Menu from './Menu';
import "../Style/Menu.css"
import CustomMap from './CustomMap';


interface MenuData {
    Title: string;
    subdata: string;
    text: string;
    Amount: number;

}
const titles = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];

const menuData: MenuData[] = [
    {
        Title: 'STARTERS',
        subdata: 'QUINOA CROQUETTAS',
        text: "Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)",
        Amount: 10.99,
    },
  
  
];

function LandingSection() {





    return (
        <><div className="landing-section">
            <div className="content-container">
                <div className='LandingImage'>
                    <CommonNavbar/>
                    <div className='headingText '>
                    <p>THE BEST FOODIES</p>
                    <p>EXPIERENCE</p>
                    <p>NOW IN LONDON</p>
                    </div>
                    
                </div>
            </div>

        </div>
    
        <CustomSlider/>
        <div className='Menu'>
        <div className='m-5 DIN-font '>
        <div className='text-center  DIN-font mt-5'>
                <h1 style={{fontSize:"45px"}}>OUR MENU</h1>
                <p>KNOW MORE</p>
            </div>
            {menuData.map((menu,index)=>(
            <Menu key={index} {...menu} />
            ))}

        </div>
        </div>
        <div>
        <iframe src="https://my.atlist.com/map/73715080-292d-4399-bce3-3c1cbdc708e7/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="400px" loading="lazy" scrolling="no" allowFullScreen id="atlist-embed"></iframe>
        </div>
       

       
        </>
    );
}

export default LandingSection;
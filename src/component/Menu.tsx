import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Style/Menu.css'


    
interface Props {
    
        Title:string;
        subdata:string;
        text:string;
        Amount:number;
    }

const Menu : React.FC<Props> = ({Title,subdata,text,Amount})=>{
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='m-5 p-5'>

           
             <Container>
      
      <Row>
    
        <Col>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     >

<h1 style={{fontSize:"55px"}}>{Title}</h1>
        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>


        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>



        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>
</div>
        </Col>
       
        
      

        <Col>
        <div data-aos="fade-up"
         data-aos-easing="linear"
    >
        <h1 style={{fontSize:"55px",marginTop:"90px"}}>{Title}</h1>
        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>


        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>



        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>
</div>
        </Col>

       


        <Col>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     >
        <h1 style={{fontSize:"55px"}}>{Title}</h1>
        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>


        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>



        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>

</div>
        </Col>
        <Col>
        <h1 style={{fontSize:"55px"}}>{Title}</h1>
        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>


        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>



        <p>{subdata}</p>
        <p style={{width:"155px"}}>{text}</p>
<button>{Amount}</button>
        </Col>
       
      </Row>
    </Container>
            
        </div>
    );
}

export default Menu;
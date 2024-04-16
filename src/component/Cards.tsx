import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import firstImg from "../Assets/Img/1000132337.png"
import '../Style/CardStyling.css'

function GeneralCards() {
  return (
    <Card className='cardStyle ' style={{ width: '100%' }}>
      <Card.Img variant="top" src={firstImg} />
      <Card.Body>
        <Card.Title>DIFFICULTY</Card.Title>
        <Card.Text>
        CHARRED BROCCOLI & CHEAT’S VEGGIE
ROMESCO TOAST
<br>
</br>
<span>
Make a speedy version of romesco sauce with its
famous almond and red pepper flavours. Serve on
sourdough and add broccoli for a colourful, veget…
</span>
        </Card.Text>
     
      </Card.Body>
    </Card>
  );
}

export default GeneralCards;
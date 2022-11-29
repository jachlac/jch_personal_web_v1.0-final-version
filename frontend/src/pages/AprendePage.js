import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Pages/Aprende.css'


// const Learn = (props) => {
//     return (
//         <section className='holder'>
//             <h2>Learn</h2>
//             <h3>titulo</h3>
//             <h4>subtitulo</h4>
//             <p>cuerpo</p>
//             </section>
//         );
//     }
//     export default Learn;


function Learn() {
  return (
    <section className='holder boxes'>
      <Card className='box' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/Pages/learn/BTC.jpg" width='20' />
        <Card.Body>
          <Card.Title>BTC</Card.Title>
          <Card.Text>
            Info about Bitcoin.
          </Card.Text>
          <Button type="button" variant="primary" href='https://bitcoin.org/en/'>Go official</Button>
        </Card.Body>
      </Card>

      <Card className='box' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/Pages/learn/ETH.jpg" />
        <Card.Body>
          <Card.Title>ETH</Card.Title>
          <Card.Text>
            Info about Ethereum.
          </Card.Text>
          <Button type="button" variant="primary" href='https://ethereum.org/en/'>Go official</Button>
        </Card.Body>
      </Card>

      <Card className='box' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/Pages/learn/KDA.jpg" />
        <Card.Body>
          <Card.Title>KDA</Card.Title>
          <Card.Text>
            Info about Kadena.
          </Card.Text>
          <Button type="button" variant="primary" href='https://kadena.io/'>Go official</Button>
        </Card.Body>
      </Card>

      <Card className='box' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/Pages/learn/USDT.jpg" />
        <Card.Body>
          <Card.Title>USDT</Card.Title>
          <Card.Text>
            Info about USDT.
          </Card.Text>
          <Button type="button" variant="primary" href='https://tether.to/en/'>Go official</Button>
        </Card.Body>
      </Card>

      <Card className='box' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/Pages/learn/ADA.png" />
        <Card.Body>
          <Card.Title>ADA</Card.Title>
          <Card.Text>
            Info about Cardano.
          </Card.Text>
          <Button type="button" variant="primary" href='https://cardano.org/'>Go official</Button>
        </Card.Body>
      </Card>

      <Card className='box' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/Pages/learn/SOL.png" />
        <Card.Body>
          <Card.Title>SOL</Card.Title>
          <Card.Text>
            Info about Solana.
          </Card.Text>
          <Button type="button" variant="primary" href='https://solana.com/'>Go official</Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Learn;


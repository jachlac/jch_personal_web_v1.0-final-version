import React from 'react';
import '../styles/Pages/HomePage.css';



const HomePage = (props) => {
    return (
        <main className='holder'>

            <div className='inicio'>
                <h3>Welcomen to Crypto State</h3>
                <div className='intro style1'>
                    <img src="./images/login.jpg" width="220" alt="Crypto" />
                    <p>We are a group of enthusiastic people about Bitcoin and Cryptocurrencies. We believe that Crypto has to mucho to offer to the world today, especially in finantial issues. In this website you will find information about Bitcoin and the main Cryptocurrencies around the ecosystem</p>
                    <p>Our goal is to share with the comunity information that helps to know about crptografy and its value for diferent aplicattions.</p>
                </div>
                <h3>What is Bitcoin</h3>
                <p>Bitoin is the first descentralize digital currency. Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvement in financial transactions. It is rewarded to blockchain miners for the work done to verify transactions and can be purchased on several exchanges.   </p>
                <p>Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.</p>
                <h3>Bitcoin: A Peer-to-Peer Electronic Cash System</h3>
                <p>A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a
                    financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.
                    We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of
                    hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of
                    events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to
                    attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort
                    basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone.</p>
            </div>
        </main>
    );
}
export default HomePage;
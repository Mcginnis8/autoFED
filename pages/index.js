import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Modal from '/modules/modal.js';
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect, useRouter } from 'react';
import { firestore } from '/modules/firebase.js';
import { doc, getDoc } from "firebase/firestore";

export default function Home() {
  async function getDocumentDataI() {
    const docRef = doc(firestore, "Daily Interest Predict", "predictNums");
    let docSnap = await getDoc(docRef);
    docSnap = docSnap.data();
    return docSnap;
  }
  
  const [firesnap, setDocData] = useState({});

  useEffect(() => {
    getDocumentDataI().then(data => setDocData(data));
  }, []);
  
  const fStoreInterestRate = Object.values(firesnap)[0];

  async function getDocumentDataS() {
    const docRef = doc(firestore, "Daily Interest Speech", "speech");
    let docSnap = await getDoc(docRef);
    docSnap = docSnap.data();
    return docSnap;
  }
  const [firesnapS, setDocDataS] = useState({});

  useEffect(() => {
    getDocumentDataS().then(data => setDocDataS(data));
  }, []);

  const fStoreSpeech = Object.values(firesnapS)[0];

  return (
    <>
      <Head>
        <title>autoFed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="full-screen">
          <div className="title0">
            <h1>autoFED</h1>
          </div>
          <div className="Para1">
          <h4>Interest Rate Prediction for Interest Rate Prediction for Next FED Announcement</h4>
          </div>
          <div className="Para1half">
            <h1>{fStoreInterestRate}%</h1>
          </div>
          <section className="container2">
          <div className="card">
            <div className="content">
              <h5>Suggested Speech on Interest Change</h5>
              <div className="hover_content">
                <p id="h69">{fStoreSpeech}</p>
              </div>
            </div>
          </div>       
          </section>
          <div className="app-container">
            <Modal>
	          <div className="photo-details">
		        <h1 id = "modalH1">Model Info</h1>
		      <div className="photo-tags">
			    <h4 id="modalH4">Inputs</h4>
			      <ul>
				    <li><a href="https://fred.stlouisfed.org/series/UNRATE" target="_blank">Unemployment</a></li>
            <li><a href="https://fred.stlouisfed.org/series/FPCPITOTLZGUSA" target="_blank">Inflation Rate</a></li>
				    <li><a href="https://fred.stlouisfed.org/series/NASDAQCOM" target="_blank">NasDaq Monthly Change</a></li>
				    <li><a href="https://fred.stlouisfed.org/series/VIXCLS" target="_blank">Volatility Index</a></li>
				    <li><a href="https://fred.stlouisfed.org/series/RSXFS" target="_blank">Retail Sales</a></li>
				    <li><a href="https://fred.stlouisfed.org/series/UMCSENT" target="_blank">Consumer Sentiment</a></li>
            <li><a href="https://fred.stlouisfed.org/series/WM2NS" target="_blank">M2</a></li>
            <li><a href="https://fred.stlouisfed.org/series/PCEC96" target="_blank">Personal Consumption</a></li>
            <li><a href="https://fred.stlouisfed.org/series/DFF" target="_blank">Previous Month Interest Rate</a></li>
			</ul>
		</div>
    </div>
    <dl className="model-stats">	
            <dd className="model-stat-number">Stats</dd>	
				<div>
					<dt className="model-stat">R-Square</dt>
					<dd className="model-stat-number">0.98</dd>
				</div>
				<div>
					<dt className="model-stat">MSE</dt>
					<dd className="model-stat-number">0.04</dd>
				</div>
			</dl>
            </Modal>
          </div>
          <h4 className = "SoftwareP">Frameworks, DB, Libraries Used:</h4>
  <div className="slider">
	<div className="slide-track">
		<div className="slide">
			<img src="../slideNextJs.png" height="100" width="250" alt="NextJs" />
		</div>
		<div className="slide">
			<img src="../slideTensorflow.png" height="100" width="250" alt="Tensorflow" />
		</div>
		<div className="slide">
			<img src="../slidePandas.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideFirebase.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideReact.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideScikit.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slidePython.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideWebdev.png" height="100" width="250" alt="" />
		</div>
    <div className="slide">
			<img src="../slideNextJs.png" height="100" width="250" alt="NextJs" />
		</div>
		<div className="slide">
			<img src="../slideTensorflow.png" height="100" width="250" alt="Tensorflow" />
		</div>
		<div className="slide">
			<img src="../slidePandas.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideFirebase.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideReact.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideScikit.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slidePython.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="../slideWebdev.png" height="100" width="250" alt="" />
		</div>
	    </div>
        </div>
        </div>
      </main>
      <Analytics />
    </>
  )
}

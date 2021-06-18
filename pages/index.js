import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Layout from './../components/layout';
import Tutorial from './../components/tutorial';
import TutorialesService from './../services/tutorales-service';

import {useState, useEffect} from 'react';

export default function Home() {
  const [tutoriales, setTutoriales] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    TutorialesService.getAll(function(data){
      setTutoriales(data);
    });
  }, []);

  const btnSearchOnClick = () => {
    TutorialesService.getByTitle(searchText, function(data){
      setTutoriales(data);
    });
  };

  return (
    <div className={styles.container}>
      

      <Layout>
        <div className="search-conatiner">
          <label>Buscar</label>
          {
           // (event.target.value) ya es parte de  el evento 
          }
          <input type="text" placeholder="Escribe para buscar..." value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
          <button className="btn-search" onClick={btnSearchOnClick}>Ok</button>
        </div>
        <div className="tutoriales-container">
          {
            tutoriales && tutoriales.map((item, index)=>{
              return <Tutorial url={item.url} title={item.title} description={item.description} key={index}/>
            })
          }
        </div>
      </Layout>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results  from '../components/Results'
import requests from '../utils/requests'
//this function is rendered on the client side
export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu clone</title>
        <link rel= "icon" href="/favicon.ico"/>
      </Head>

      {/*Header*/}
      <Header/>
      
      {/*Nav*/}
      <Nav/>

      {/*content*/}
      <Results results={results}/> 

    </div>
  )
}

//this func is getting rendered by server
//this func executed first then previous func gets executed
export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url 
    }`
  ).then((res) => res.json());

  return{
    props: {
      results: request.results,
    },
  }

}
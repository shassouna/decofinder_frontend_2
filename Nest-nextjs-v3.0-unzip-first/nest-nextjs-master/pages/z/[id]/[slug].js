
// import libraries
import axios from 'axios'

// import from next
import { useRouter } from 'next/router'
import Link from 'next/link'

function index({exposant}) {
  // ----------------------------------------------------Routers Début----------------------------------------------------
  const router = useRouter()

  return (
    <>
    <div>{exposant['attributes']['LIB']}</div>
    <Link href={router['asPath']} locale={'fr'}>fr</Link>
    <Link href={router['asPath']} locale={'en'}>en</Link>
    <Link href={router['asPath']} locale={'de'}>de</Link>
    <Link href={router['asPath']} locale={'es'}>es</Link>
    <Link href={router['asPath']} locale={'it'}>it</Link>
    </>
  )
}

export default index

export async function getServerSideProps (context) {

  // declarations
  let exposant = undefined

  const { locale } = context 

  const exposantRes = await axios.get(`http://localhost:1337/api/motifs/326?populate=*`)

  if(locale==="fr"){
    exposant = exposantRes['data']['data']
  }
  else if(locale==="en"){
    exposant = exposantRes['data']['data']['attributes']['localizations']['data'][3]
  }
  else if(locale==="de"){
    exposant = exposantRes['data']['data']['attributes']['localizations']['data'][2]
  }
  else if(locale==="es"){
    exposant = exposantRes['data']['data']['attributes']['localizations']['data'][1]
  }
  else if(locale==="it"){
    exposant = exposantRes['data']['data']['attributes']['localizations']['data'][0]
  }
  return {
    props: {
      exposant : exposant,
    }
}
}

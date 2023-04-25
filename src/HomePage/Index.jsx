import React, { lazy, Suspense } from 'react';
import GenerateOne from './GenerateOne';
import "./Index.css"
// import Comments from './Comments';
// import GenerateTwo from './GenerateTwo';
// import GenerateThree from './GenerateThree';
import BannerImg from "../banner.webp"
const Comments = lazy(()=> import("./Comments"))
const GenerateTwo = lazy(()=> import("./GenerateTwo"))
const GenerateThree = lazy(()=> import("./GenerateThree"))


const Home = () => {

    return (
        <div className='section-container'>
            <div className='banner-img'>
                    <div>
                        <h2 className='main-heading'>Adventure Begins Here !</h2>
                        <div className='sub-heading'>Get Noticed with a Killer Name on the Battlegrounds</div>
                    </div>
            </div>
            <GenerateOne />
            <Suspense fallback={<p>Loading...</p>}>
            <GenerateTwo />
            <GenerateThree />
            <Comments />
            </Suspense>
           </div >
    )
}
export default Home
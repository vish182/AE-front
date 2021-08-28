import React, {useEffect} from 'react';
import grid_big from '../assets/home-grid-big.jpg';
import grid_small1 from '../assets/home-grid-small1.jpg';
import grid_small2 from '../assets/home-grid-small2.jpg';
import grid_small3 from '../assets/home-grid-small3.jpg';

import home_middle_img from '../assets/home_middle.jpg';


import '../styles/home.css'

export const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <ImageGrid/>
            <HomeMiddle/> 
        </div>
    );
}

// const ImageGrid = () => {
//     return(
//         <div className="image-grid">
//             <div className="grid-item-big" style={{gridColumn: '1/4', gridRow: '1/6', alignItems: 'center', backgroundImage: `url(${grid_big})` }}>
//                <p className="home-text-big"> Big Tesxt </p>
//             </div>
//             <div className="grid-item" style={{gridColumn: '1/2', gridRow: '5/7', alignContent: 'center', backgroundImage: `url(${grid_small1})`}}>
//                 <p className="home-text-small"> Small Text 1 </p>
//             </div>
//             <div className="grid-item" style={{gridColumn: '2/3', gridRow: '5/7', alignContent: 'center', backgroundImage: `url(${grid_small2})`}}>
//                 <p className="home-text-small"> Small Text 2 </p>
//             </div>
//             <div className="grid-item" style={{gridColumn: '3/4', gridRow: '5/7', alignContent: 'center',backgroundImage: `url(${grid_small3})`}}>
//                 <p className="home-text-small"> Small Text 3</p>
//             </div>
//         </div>
//     );
// }

const ImageGrid = () => {
    return(
        <div className="image-grid">
            <div className="grid-item-big" style={{backgroundImage: `url(${grid_big})` }}>
               <p className="home-text-big"> Title </p>
            </div>
            <div className="grid-item" style={{backgroundImage: `url(${grid_small1})`}}>
                <p className="home-text-small"> Tile </p>
            </div>
            <div className="grid-item2" style={{backgroundImage: `url(${grid_small2})`}}>
                <p className="home-text-small"> Tile </p>
            </div>
            <div className="grid-item3" style={{backgroundImage: `url(${grid_small3})`}}>
                <p className="home-text-small"> Tile</p>
            </div>
        </div>
    );
}
// style={{transform: 'translateY(50%)'}}
const HomeMiddle = () => {
    return(
        <div className="home-middle">
            <div className="home-middle-img">
                <img src={home_middle_img}/>
            </div>

            <div className="home-middle-text">
                <div>
                    <p className="home-middle-text-big">Title</p>
                    <p className="home-middle-text-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque ultricies aliquam. Morbi sed dui felis. Nulla viverra lacus sem, 
                    et finibus ipsum pretium vitae. Etiam eu dolor in magna tempor pharetra et mattis metus. 
                    Praesent vehicula leo quis sem mattis, sit amet iaculis mauris hendrerit. Sed vehicula placerat magna, a iaculis augue semper vel.
                    </p>
                </div>
            </div>
        </div>
    );
}


import React from 'react'
import preloaderImg from '../../../assets/images/Pacman.gif'

function Preloader(props){
    return <div >
        <img src={preloaderImg} alt={'preloader'}/>
    </div>
}

export default Preloader
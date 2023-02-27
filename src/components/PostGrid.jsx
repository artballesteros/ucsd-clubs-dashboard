import React from 'react';
import acmlogo from '../assets/acmlogo.png';
import hknlogo from '../assets/hknlogo.png';
import nsbelogo from '../assets/NSBE.png';
import saselogo from '../assets/SASE.png';
import shpelogo from '../assets/SHPE.png';
import sublogo from '../assets/subrobotclub.png';
import tselogo from '../assets/tritonsoftware.png';
import uaslogo from '../assets/UAS.png';
import videogamelogo from '../assets/videogameclub.png';
import wiclogo from '../assets/WIC.png';
import ieeelogo from '../assets/ieee.png';
import Post from './Post'

const PostGrid = () => {
    return (
        <div className='PostGrid'>
            <div><Post name='ACM@UCSD' focus='General Computer Science' link='https://acmucsd.com/' image={acmlogo}/></div>
            <div><Post name='WIC' focus='Women in Computing' link='https://wic.ucsd.edu/' image={wiclogo}/></div>
            <div><Post name='NSBE' focus='National Society of Black Engineers' link='https://nsbe.ucsd.edu/' image={nsbelogo}/></div>
            <div><Post name='SASE' focus='Society of Asian Scientists & Engineers' link='' image={saselogo}/></div>
            <div><Post name='SHPE' focus='Society of Hispanic Professional Engineers' link='https://sites.google.com/view/shpeucsd/home' image={shpelogo}/></div>
            <div><Post name='TSE' focus='Triton Software Engineering' link='https://tse.ucsd.edu/' image={tselogo}/></div>
            <div><Post name='VGDC' focus='Video Game Development Club' link='https://vgdc.dev/' image={videogamelogo}/></div>
            <div><Post name='Eta Kappa Nu' focus='Engineering Honors Society' link='https://hkn.ucsd.edu/' image={hknlogo}/></div>
            <div><Post name='IEEE@UCSD' focus='General Electrical Engineering' link='https://ieeeucsd.org/' image={ieeelogo}/></div>
            <div><Post name='HPS' focus='Human Powered Submarines' link='https://hps-ucsd-2020.github.io/About.html' image={sublogo}/></div>
            <div><Post name='TUA' focus='Triton Unmanned Aerial Systems' link='https://tuas.ucsd.edu/' image={uaslogo}/></div>
        </div>
    )
}

export default PostGrid;
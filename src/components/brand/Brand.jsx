import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './Brand.css';

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            <div className=''>
                <img alt="google" src={google}/>
            </div>
            <div className=''>
                <img alt="slack" src={slack}/>
            </div>
            <div className=''>
                <img alt="atlassian" src={atlassian}/>
            </div>
            <div className=''>
                <img alt="dropbox" src={dropbox}/>
            </div>
            <div className=''>
                <img alt="shopify" src={shopify}/>
            </div>
        </div>
    )
}

export default Brand
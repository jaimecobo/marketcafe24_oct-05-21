import React, { Component } from 'react';
import '../css/MarketCafeBar03.css';
import breadBar from '../images/BreadsBar04.png'
import text_bread from '../images/TEXTOS_PAN.svg'
import logo01 from '../images/LogoScone04.svg'
import logo02 from '../images/LogoScone02.svg'
import logoBread03 from '../images/edited/01_Logo01_3_01.svg'


class MarketCaFeBar03 extends Component {

text_cafe
    render() {
        return (

            <div className="image-container" id="image_container_bar03">

                <img id="breadBar" alt="" src={breadBar} /> 

                <span>
                    <img alt="" id="logoBreadBar01" src={logoBread03}/>
                </span>
                <span>
                    <img alt="" id="logoBreadBar02" src={logoBread03}/>
                </span>
                 <span>
                    <img alt="" id="text_bread" src={text_bread}/>
                </span>
                <span>
                    <img alt="" id="logoBreadBar03" src={logoBread03}/>
                </span>
                <span>
                    <img alt="" id="logoBreadBar04" src={logoBread03}/>
                </span>

            </div>

        );
    }
}

export default MarketCaFeBar03



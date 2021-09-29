import React, { Component } from 'react';
import '../css/VisitsCounter.css';

class VisitsCounter extends Component {


    render() {


        return(

            <div className="bg-light text-center text-lg-start">
                {/* <footer class="bg-light text-center text-lg-start"> */}
                <div id="div_footer" className="text-center p-3">
            
                        © 2021 Copyright.
                    <div id="div_footer" className="text-center p-3">

                        <div id="result" className="text-center p-3"></div>
                        <div id="visitors_counter" className="text-center p-3">
                            <p>This page was viewed</p>
                            <h1 id="count">0</h1>
                            <p>times</p>
                        </div>
                    </div>
                </div>
            {   /* </footer> */}
            </div>

        );

    }
}

export default VisitsCounter;
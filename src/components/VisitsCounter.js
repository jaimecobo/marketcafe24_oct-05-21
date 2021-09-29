import React, { Component } from 'react';
import '../css/VisitsCounter.css';


let expiration = new Date;
expiration.setMonth(expiration.getMonth()+6)
let counter = eval(cookieVal("total_visited"))
counter++
document.cookie = "total_visited="+counter+";expires=" + expiration.toGMTString()
 
let times = ""
if (counter === 1){
    times = "time"
}else times = "times"

function cookieVal(cookieName) {
	let thisCookie = document.cookie.split("; ")
	for (let i=0; i<thisCookie.length; i++){
		if (cookieName == thisCookie[i].split("=")[0]){
			return thisCookie[i].split("=")[1]
		}
	}
	return 0;
}

function updateVisitCount() {
	console.log('### nameSpace is = ' + nameSpace)
	console.log('### countApiKey is = ' + countApiKey)
	fetch('https://api.countapi.xyz/update/' + nameSpace + '/' + countApiKey + '/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}


const countEl = document.getElementById('count');


const nameSpace = process.env.REACT_APP_NAMESPACE
const countApiKey = process.env.REACT_APP_COUNT_API_KEY

console.log('$$$ nameSpace is = ' + nameSpace)
console.log('$$$ countApiKey is = ' + countApiKey)
 


updateVisitCount();

 
document.getElementById('result').innerHTML = "<h6>You visited this website <label class='text-info'>" + counter + "</label> " + times + ".</h6>";




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
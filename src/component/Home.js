
import './home.css';
import React, { useEffect, useState } from "react";
import Time from './time';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Input1 from './Input1';
import Input2 from './Input2';
import Faucet1 from './Faucet1';
import Faucet2 from './Faucet2';

const Home = () => {
    const [inputText, setInputText] = useState("");
    const [is_clicked, setIs_clicked] = useState(false);
    const [data,setData]=useState([])
    useEffect(()=>{get_data()},[])
    const get_data =() => {
        axios({
            method: "get",
            url: 'http://94.101.187.211:4000/status',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          })
            .then((res) => {
              
              setData(res.data)
              
            })
            .catch((err) => {
              console.log(err);
        
            });

    }
    const BOOOl=()=>{
        // var html = <Faucet_Info/>;
        setIs_clicked(true)
        // var root = ReactDOM.createRoot(document.getElementById('test'));
        
       
        // const element = <Faucet/>;
        // root.render(element);
    }

    return (
    
        <div>
            
            <div class="split left">
                    <div>
                    <h2 class = "faucet1">Faucet1</h2>
                    <div style={{ marginTop: "10%", textAlign: "center" }}>
                    <Input1></Input1>
                    <div>
                        <div>
                           
                        </div>
                    </div>
                </div>
                </div>
                {/* <button class="reportB1" onClick={BOOOl}>Show Report</button> */}
                <div id = "test">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr/>
                    {is_clicked && <Faucet1 data={data}/>}
                    
                </div>
            </div>
    
            <div class="split right">
                <div>
                
                <h2 class = "faucet2">Faucet2</h2>
                
                </div>
                
                <div style={{ marginTop: "10%", textAlign: "center" }}>
                    <Input2></Input2>
                </div>
                <div id = "test"></div>
                <button class="reportB2" onClick={BOOOl} >Show Schedule</button>
                <button class="reportB1" onClick={get_data} >update</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr/>
                <div id = "test">
                    {is_clicked && <Faucet2 data={data}/>}
                </div>
            </div>
            
        </div>
      );
}
 
export default Home;

// function Home() {
  
// const [inputText, setInputText] = useState("");
// console.log(inputText)
// var myelement=( '<div><label for="appt">Choose a time for your water systerm:</label><input type="time" id="appt" name="appt" min="00:00" max="23:00" value={inputText} required onChange={(e) => setInputText(e.target.value)}/><button onClick={() =>this.time=inputText }>Set Time</button></div>');
// var parsed;
// var flag = false;
// // for (let index = 0; index < inputText; index++) {
// //     // render("myelement", document.getElementById('test'));
// //     console.log(myelement);
// // }

// function BOOOl(){
//     // var html = <Faucet_Info/>;
//     var root = ReactDOM.createRoot(document.getElementById('test'));
    
    
//     const element = <Faucet/>;
//     root.render(element);
// }


// // function Report1(res){ 
// //     console.log(parsed['1']['is_on'])
// //     var string1 = JSON.stringify(response.data);

// //     parsed = JSON.parse(string1);  
// //     console.log(parsed['1']['is_on'])
// // }

// // document.getElementById("test").innerHTML = myelement;
// // document.getElementById("datePicker").valueAsDate = new Date()
//   return (
    
//     <div>
        
//         <div class="split left">
//                 <div>
//                 <h2 class = "faucet1">Faucet1</h2>
//                 <div style={{ marginTop: "10%", textAlign: "center" }}>
//                 <Input1></Input1>
//                 <div>
//                     <div>
                       
//                     </div>
//                 </div>
//             </div>
//             </div>
//             <button class="reportB1" onClick={BOOOl}>Show Report</button>
//         </div>

//         <div class="split right">
//             <div>
            
//             <h2 class = "faucet2">Faucet2</h2>
            
//             </div>
            
//             <div style={{ marginTop: "10%", textAlign: "center" }}>
//                 <Input2></Input2>
//             </div>
//             <div id = "test"></div>
//             <button class="reportB2" >Show Report</button>
//             <div id = "test">

//             </div>
//         </div>
        
//     </div>
//   );
// }

// export default Home;

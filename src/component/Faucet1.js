import React, { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
const Field = ["s_from", "s_to"];

const Faucet1 = (props) => {
    const [schedule1,setSchedule1] = useState([])
    const [Is_on,setOn] = useState()
    const [Is_ok,setOk] = useState()
    let flag ;
    useEffect(()=>{
        setSchedule1(props.data[1].schedule)
        setOn(props.data[1].is_on)
        setOk(props.data[1].is_ok)
        document.getElementById("t1").innerHTML = Is_on;
        document.getElementById("t2").innerHTML = Is_ok;
        // console.log(flag)
        },[props.data])
   
        
    return (<div style={{display:"flex", justifyContent:"space-around"}}>
        <table>
             <tr>
                
                 <th>is_on</th>
                 <th >is_ok</th>
                 
             </tr>
             <tr>
                <td id="t1"></td>
                <td id ="t2">Maria Anders</td>
               
            </tr>
             
         </table>
       

         <DataTable value={schedule1} >
                    <Column field="s_from" header="s_from"></Column>
                    <Column field="s_to" header="s_to"></Column>
                
              
        </DataTable>
        
        
     </div>
     );
}
 
export default Faucet1;


// async function Faucet_Info(){
     
//      let parsed=await axios('http://193.105.234.110:3000/status', {
//       method: 'GET',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
      
//       credentials: 'same-origin',
//       crossdomain: true,
//     }).then(response => {
//         // var string1 = JSON.stringify(response.data);

//         // return(JSON.parse(string1) )
       
//         //
//         console.log(response.data)
//     })
//     // console.log(parsed['1'])
//     return(
//             <div>
//                <table>
//                     <tr>
//                         <th>{parsed['1']['is_on']}</th>
//                         <th>Contact</th>
//                         <th>Country</th>
//                     </tr>
//                     <tr>
//                         <td>Alfreds Futterkiste</td>
//                         <td>Maria Anders</td>
//                         <td>Germany</td>
//                     </tr>
//                     <tr>
//                         <td>Centro comercial Moctezuma</td>
//                         <td>Francisco Chang</td>
//                         <td>Mexico</td>
//                     </tr>
//                 </table>
//             </div>
            
//         );
    
// }
// export default Faucet_Info;

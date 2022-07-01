import React, { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
const Field = ["s_from", "s_to"];

const Faucet2 = (props) => {
    const [schedule1,setSchedule1] = useState([])
    const [schedule2,setSchedule2] = useState([])
    useEffect(()=>{
        setSchedule1(props.data[1].schedule)
        setSchedule2(props.data[2].schedule)

        
        },[props.data])
    return (<div style={{display:"flex", justifyContent:"space-around"}}>
        {/* {data && 
        <table>
             <tr>
                {console.log(data[0]?.s_form)}
                 <th>{data[0]?.s_form}</th>
                 <th>Contact</th>
                 <th>Country</th>
             </tr>
             <tr>
                 <td>Alfreds Futterkiste</td>
                 <td>Maria Anders</td>
                 <td>Germany</td>
             </tr>
             <tr>
                 <td>Centro comercial Moctezuma</td>
                 <td>Francisco Chang</td>
                 <td>Mexico</td>
             </tr>
         </table>} */}
       

      
        <DataTable value={schedule2}>
                    <Column field="s_from" header="s_from"></Column>
                    <Column field="s_to" header="s_to"></Column>
                   
        </DataTable>
     </div>
     );
}
 
export default Faucet2;


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

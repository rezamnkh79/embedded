import React, { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

const Faucet2 = (props) => {
    const [schedule1,setSchedule1] = useState([])
    const [schedule2,setSchedule2] = useState([])
    const [Is_on,setOn] = useState()
    const [Is_ok,setOk] = useState()
    const actionBodyTemplate = (rowData) => {
        console.log(rowData)
        return (
          <React.Fragment>
            <a href={rowData.link}>
                link
            </a>
          </React.Fragment>
        );
      };
    useEffect(()=>{
        
        setSchedule2(props.data[2].schedule)
        
        setOn(props.data[2].is_on)
        setOk(props.data[2].is_ok)
        console.log(Is_ok)
        document.getElementById("t3").innerHTML = Is_on;
        document.getElementById("t4").innerHTML = Is_ok;
        },[props.data])

    return (<div style={{display:"flex", justifyContent:"space-around", width:'100%'}} >
        
        <table>
             <tr>
                
                 <th>is_on</th>
                 <th >is_ok</th>
                 
             </tr>
             <tr>
                
                <th id ="t3"></th>
                <th id ="t4"></th>
                
            </tr>
             
         </table>
       

      
        <DataTable className="table2"value={schedule2} stripedRows resizableColumns>
                    <Column field="s_from" ></Column>
                    <Column field="s_to" ></Column>
                    <Column
                        body={actionBodyTemplate}
                        
                        bodyStyle={{ textAlign: "right" }}
                    ></Column>
                   
        </DataTable>
     </div>
     );
}
 
export default Faucet2;


// async function Faucet_Info(){
     
//      let parsed=await axios('http://94.101.187.211:4000/status', {
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

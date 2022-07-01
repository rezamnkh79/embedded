import { useState } from 'react';
import axios from 'axios';

function Input2() {

  // const [inputTime1, setInputTime1] = useState("");
  // const [inputTime2, setInputTime2] = useState("");
  // const [inputDate, setInputDate] = useState("");
  // const [formFields, setFormFields] = useState([
  //   { s_date:inputDate,
  //     s_from:inputTime1,
  //     s_to :inputTime2,   
      
  //   },
  // ])

  // const handleFormChange = (event, index) => {
  //   let data = [...formFields];
  //   data[index][event.target.time] = event.target.value;
  //   setFormFields(data);
  // }


  // const submit = (e) => {
  //   e.preventDefault();
  //   let object = {
  //     "Scheduler":{
  //       s_date:inputDate,
  //       s_from:inputTime1,
  //       s_to :inputTime2,   
  //     }
      
  //   }
    
  //   setFormFields([formFields, object])
  //   console.log(setFormFields([formFields, object]))
  // }

  // const addFields = () => {
  //   let object = {
  //     s_date:inputDate,
  //     s_from:inputTime1,
  //     s_to :inputTime2,   
      
  //   }


  //   setFormFields([...formFields, object])
  // }

  // const removeFields = (index) => {
  //   let data = [...formFields];
  //   data.splice(index, 1)
  //   setFormFields(data)
  // }

  // return (
  //   <div className="App">
  //     <form onSubmit={submit}>
  //       {formFields.map((form, index) => {
  //         return (
  //           <div key={index}>
  //              <label for="date">Date:</label>
  //             <input type="date" id="date" name="date" value={inputDate} required onChange={(e) => setInputDate(e.target.value)}></input>
  //             <hr/>
  //             <label for="time">Time:</label>
  //              <input type="Time" id="appt" name="appt"  pattern="[0-23]{2}:[0-9]{2}"
  //               min="00:00" max="23:00" value={inputTime1} required onChange={(e) => setInputTime1(e.target.value)}/>
  //               until
  //               <input type="time" id="appt" name="appt"
  //               min="00:00" max="23:00" value={inputTime2} required onChange={(e) => setInputTime2(e.target.value)}/>
  //             <button onClick={() => removeFields(index)}>Remove</button>
  //           </div>
  //         )
  //       })}
  //     </form>
        
  //     <button onClick={addFields}>Add More..</button>
  //     <br />
  //     <button onClick={submit}>Submit</button>
  //   </div>
  
  // );

  const [formFields, setFormFields] = useState([
    
    { },
  ])


  

  function handleClick() {
    
    // Send data to the backend via POST
    // fetch('http://193.105.234.110:3000/update_schedule', {  // Enter your IP address here
    // headers: {
    //   'Content-Type': 'application/json',
    //   'Accept' :'application/json'
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
    //   method: 'POST', 
    //   mode: 'no-cors', 
    //   body: JSON.stringify({a: 1, b: jsonData})

    // }).then(res => {
    //   console.log(res);
    //   // console.log(res.data);
    // })
    axios(
      {
          url: 'http://193.105.234.110:3000/update_schedule',
          method: 'POST',
          data: jsonData,
          
          headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },

          credentials: 'same-origin',
          crossdomain: true,
      }
  ).then(function (response) {
      console.log(response);
  }
  ).catch(function (error) {
      console.log(error);
  });
    // axios('http://193.105.234.110:3000/status', {
    //   method: 'GET',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
      
    //   credentials: 'same-origin',
    //   crossdomain: true,
    // }).then(response => {
    //   console.log(response.data)
    // })
    
  }
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }
  let jsonData = {
    "faucet_id": 2,
    "schedule": formFields
}
  const submit = (e) => {
    e.preventDefault();
    // console.log({"schedular":formFields})
    handleClick()
    
  }

  const addFields = () => {
    let object = {
      
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            
            <div key={index}>

              <label for="s_date">date:</label>
              <input
                name='s_date'
                type="date"
                placeholder='Date'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              <hr></hr>
              <label for="s_from">Time:</label>
              <input
                name='s_from'
                type="time"
                placeholder='Time'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              Until
               
              <input
                name='s_to'
                type="time"
                placeholder='Time'
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
              <br/>
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}


export default Input2;
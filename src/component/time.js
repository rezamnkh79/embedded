
// import './home.css';
import React, { useState } from "react";
function Time() {
    
    const [inputText, setInputText] = useState("");
    return (
    
        <div>
            
            <label for="appt">Choose a time for your water systerm:</label>

            <input type="time" id="appt" name="appt"
                min="00:00" max="23:00" value={inputText} required onChange={(e) => setInputText(e.target.value)}/>
            <input  type="time" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button onClick={() =>this.time=inputText }>Set Time</button>                       
            

            
        </div>
        
      );
}

export default Time;

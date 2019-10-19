import React, { useState } from "react";
import ReactDOM from "react-dom";
import JSONForm from "../src/index"


const App = ()=> {

     let JSONState = [
          {
            "key": "name",
            "value": "Nishchit",
            "type": "string"
          },
          {
            "key": "a",
            "value": "b",
            "type": "file"
          }
        ]

     let [ state, setState] = useState(JSONState)

     return (
          <div>

               <pre>
                    {
                         JSON.stringify(state, 4, 4)
                    }
               </pre>
               <JSONForm  
                    json={state} 
                    debug={true} 
                    onChange={(v)=> {

                         console.log(v)
                         debugger
                         setState(v)
                    }}
               />
          </div>
     )
}

ReactDOM.render( <App/>, document.getElementById('root') );
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


function blahblah() {
  let baseUrl='http://localhost:1818';
  let options23 = {
    headers: {
      "isKohli": true
    }
  }
  
  let data1=axios.get(baseUrl, options23);
  data1.then(res=>{
    console.log('base path ===', res.data);
  })
  
  let data2=axios.get(baseUrl+'/playerInfo');
   data2.then(res=>{
    console.log("base path ===", res.data);
  });

  let data3 =axios.post(baseUrl+'/maxi',{clubName:"RCB", stadium:"chinaswamy"});
  data3.then(USA =>{
    console.log("RCBB ",USA.data);
  });


  let data4 =axios.get(baseUrl+`/users/${Date.now()}`);
  // let dummy22 = Date.now();
  // let data5 =axios.get(baseUrl+`/users/${dummy22}`);
  data4.then(USA =>{
    console.log("RCBB ",USA.data);
  })
}
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={blahblah}>
          click cheies
        </button>

      </header>
    </div>
  );
}

export default App;

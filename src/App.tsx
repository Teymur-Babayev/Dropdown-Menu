
import * as jsonData from './JsonData.tsx';
import './App.css';
function App() {
  var set_visitState = [];
  const myFunction = (flag) => {
    if(flag == 1) {
      document.getElementById("myDropdown")?.classList.remove("close");
      document.getElementById("myDropdown")?.classList.add("show");
      
      document.getElementById("open-close")?.classList.remove("close_menu");
      document.getElementById("open-close")?.classList.add("show_menu");

    }else {
      document.getElementById("myDropdown")?.classList.remove("show");
      document.getElementById("myDropdown")?.classList.add("close");

      document.getElementById("open-close")?.classList.remove("show_menu");
      document.getElementById("open-close")?.classList.add("close_menu");
      
    }
  }
  const show_Detail = (e) =>{
    if(set_visitState.length != 0 ) {
      var index =  set_visitState.indexOf(e);
      if(index != -1) {
        document.getElementById("current" + e)?.classList.remove("displayNone_")
        document.getElementById("current" + e)?.classList.add("displayBlock");
        document.getElementById("new"+e)?.classList.remove("displayBlock");
        document.getElementById("new"+e)?.classList.add("displayNone_");
        var value = set_visitState.indexOf(e);
        if (value >= 0) {
          set_visitState.splice(value, 1);
          }
        }
      else{
        set_visitState.push(e);
        document.getElementById("new" + e)?.classList.remove("displayNone_")
        document.getElementById("new" + e)?.classList.add("displayBlock");
        document.getElementById("current"+e)?.classList.remove("displayBlock");
        document.getElementById("current"+e)?.classList.add("displayNone_");
      }
    }
    else{
      const element = document.getElementById("current" + e);
      if (element) {
        set_visitState.push(e);
        document.getElementById("new" + e)?.classList.remove("displayNone_")
        document.getElementById("new" + e)?.classList.add("displayBlock");
        document.getElementById("current"+e)?.classList.remove("displayBlock");
        document.getElementById("current"+e)?.classList.add("displayNone_");
      } else {
          console.error("Element not found with ID 'current" + e + "'");
      }
    }
  }


  return (
    <>
        <div className=" dropdown">
            <button  className="dropbtn" onClick={ () => myFunction(1)}>Dropdown</button>
            <div id="myDropdown" className="dropdown-content" style={{display: "none"}}>
              {jsonData.jsonData.map((item) => (
                <div className="system-groups" key={item.index}>
                 
                 { item.systems.map((system, idx) => (
                   
                  <table className="system-group" key={idx}>
                    <thead>
                      <tr className='parent'>
                        <th className='group-name'>SYSTEM GROUP</th>
                        <th id='show-detail' onClick={() =>show_Detail(system.system_group.slice(7,8))}>Show Details</th>
                      </tr>
                    </thead>


                    <tbody className={`system${idx}`} id={`current${system.system_group.slice(7,8)}`}>
                    {system.ship_systems.map((ship_system, idx_) => (
                        <tr key={`${item.index}-${idx_}`}>
                          <td className='ship-system-group'>{ship_system}</td>
                          <div  className='right-state '>
                             <img src="./img/m_piechart.png" alt="" className='lifebelt' />
                          </div>
                        </tr>
                    ))}
                    </tbody>

                    <tbody id={`new${system.system_group.slice(7,8)}`} className='new_list '>
                    {system.ship_systems.map((ship_system, idx_) => (
                        <tr key={`${item.index}-${idx_}`}>
                          <td className='ship-system-group'>{ship_system}</td>
                          <div  id='show-count'>
                              <span className="each-count_red">06</span>
                              <span className="each-count_yellow">04</span>
                              <span className="each-count_white">03</span>
                              <span className="each-info">i</span>
                          </div>
                        </tr>
                    ))}
                    </tbody>
                  </table>
                 ))
                }
                </div>
              ))}
            </div>
            <span className='open-close' id='open-close' onClick={ () => myFunction(2)}></span>
          </div>
    </>
  )
}

export default App

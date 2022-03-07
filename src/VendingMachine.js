import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <ul>
        <li><Link to="/cookie">Cookie</Link></li>
        <li><Link to="/banana">Banana</Link></li>
        <li><Link to="/chip">Chips</Link></li>
      </ul>
    </div>
  )
}


export default VendingMachine;
import Link from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <ul>
        <li><Link to="/Cookie">Cookie</Link></li>
        <li><Link to="/Banana">Banana</Link></li>
        <li><Link to="/Chip">Chips</Link></li>
      </ul>
    </div>
  )
}


export default VendingMachine;
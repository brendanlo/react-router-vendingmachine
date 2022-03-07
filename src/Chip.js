import { Link } from "react-router-dom";



function Chip() {
  return (
    <div className="Chip">
      <span>Here is a single chip.</span>
      <Link to="/">Go Back</Link>
    </div>
  );
}


export default Chip;
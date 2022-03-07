import { Link } from "react-router-dom";


function Banana() {
  return (
    <div className="Banana">
      <span>Enjoy your banana!</span>
      <Link to="/">Go Back</Link>
    </div>
  );
}


export default Banana;
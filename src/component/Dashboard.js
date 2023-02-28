import BubblesGraph from "./BubblesGraph";
import Sidebar from "./Sidebar";

const Dashboard = () => {
 
  return (
    <div className="row">

<div className="col-md-4">
    <Sidebar/>
    </div>
    <div className="col-md-8">
      <BubblesGraph/>
    </div>
    </div>
  )
}

export default Dashboard;


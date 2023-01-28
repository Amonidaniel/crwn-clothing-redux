import { Outlet } from 'react-router-dom'
import Directory from '../../component/directory/directory.component.jsx';




const Home = () => {
  return (
    <div>
         <Outlet />
        <Directory />
       
    </div>
  );
};

export default Home;
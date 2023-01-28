import { Outlet } from 'react-router-dom'

const NavigationBar = () => {
   return (
    <div>
        <div>
            <h2>I am the navigation bar</h2>
        </div>
        <Outlet />
    </div>

   );
};

export default NavigationBar
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
   return (
      <div>
         <header>Header</header>
         <div>
            <div>Sidebar</div>
            <Outlet />
         </div>
      </div>
   );
};

export default DashboardLayout;

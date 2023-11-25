import {Outlet, useLocation} from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';
import DashboardHeader from '../../components/dashboards/DashboardHeader';

export default function Dashboard () {
  const location = useLocation ();
  const isPatientsProfileRoute =
    location.pathname === '/dashboard/patients-profile';

  return (
    <div>
      <SideBar />
      <div className="pl-[305px]">
        {isPatientsProfileRoute ? null : <DashboardHeader />}
        <Outlet />
      </div>
    </div>
  );
}

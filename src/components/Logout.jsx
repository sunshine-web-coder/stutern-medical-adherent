import {useDispatch} from 'react-redux';
import {clearToken, clearUser} from '../redux/authActions';
import {Icon} from '@iconify/react';
import {useNavigate} from 'react-router-dom';

export default function LogoutButton () {
  const dispatch = useDispatch ();
  const navigate = useNavigate ();

  const handleLogout = () => {
    dispatch (clearUser ());
    dispatch (clearToken ());
    navigate ('/auth/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-base font-semibold leading-normal text-white hover:bg-white hover:text-blue-700"
    >
      <p className={``}>Log out</p>
      <Icon icon="line-md:log-out" className="text-xl" />
    </button>
  );
}

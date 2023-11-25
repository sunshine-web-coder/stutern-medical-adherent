import {SideBarLinks} from '../../contants/sidebarLinks';
import {Link, useLocation} from 'react-router-dom';
import LogoutButton from '../Logout';

export default function SideBar () {
  const location = useLocation ();

  return (
    <div
      className={`fixed left-0 top-0 flex h-screen w-[305px] flex-col justify-between bg-blue-700`}
    >
      <div>
        <div className="flex h-[200px] flex-col items-center justify-center gap-5">
          <svg
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 12056">
              <rect
                x="1"
                y="0.5"
                width="35"
                height="35"
                rx="7.5"
                fill="#F4F4F4"
              />
              <rect
                x="1"
                y="0.5"
                width="35"
                height="35"
                rx="7.5"
                stroke="#0000FF"
              />
              <path
                id="Vector"
                d="M16.7436 7C15.4358 7.02203 14.2545 7.80203 13.7201 9.00812L20.1186 10.9408C20.3998 9.26312 19.392 7.63656 17.7701 7.14297C17.4795 7.05484 17.1748 7.00656 16.8701 7H16.7436ZM13.4764 9.81625C13.1904 11.4986 14.1983 13.1298 15.8248 13.622C17.4561 14.1142 19.1951 13.308 19.8795 11.747L13.4764 9.81625ZM25.9217 11.8923C24.7358 11.897 23.4748 12.4689 22.5233 13.8142L16.6733 22.1064C15.1029 24.3283 15.7873 26.6533 17.3342 27.7502C18.8858 28.8517 21.2998 28.7252 22.8701 26.5033L28.7154 18.2158C30.2858 15.9892 29.6014 13.6689 28.0545 12.5673C27.4733 12.1548 26.7748 11.9158 26.0389 11.8923H25.9217ZM25.8373 12.7033C25.8983 12.7033 25.9592 12.7033 26.0154 12.708C26.5826 12.7314 27.117 12.933 27.567 13.2564C28.7717 14.1095 29.3764 15.8111 28.0217 17.7283L24.9983 22.0173C23.3201 21.5673 21.1639 20.0345 20.1842 18.5955L23.217 14.3017C24.0092 13.1814 24.9514 12.722 25.8373 12.7033ZM10.8303 16.2752C10.3794 16.2798 9.93451 16.3736 9.52107 16.5564C7.96904 17.2361 7.16138 18.9705 7.63482 20.6017L13.7623 17.9252C13.1483 16.8892 12.0326 16.2611 10.8303 16.2752ZM14.0951 18.6939L7.96857 21.3752C8.83341 22.847 10.6545 23.4377 12.2154 22.758C13.7717 22.0736 14.5779 20.3298 14.0951 18.6939Z"
                fill="#0000FF"
              />
            </g>
          </svg>
          <p className={`text-2xl font-normal leading-normal text-white`}>
            MedikTrakka
          </p>
        </div>
        <nav className="w-full px-2">
          <ul>
            {SideBarLinks.map (sideLinks => {
              return (
                <li key={sideLinks.slug}>
                  <Link
                    to={sideLinks.slug}
                    className={
                      location.pathname === sideLinks.slug
                        ? 'active sidebar_link flex w-full items-center justify-start gap-2 rounded-md bg-white px-3 py-2 text-base font-medium leading-normal text-blue-700'
                        : 'sidebar_link flex w-full items-center justify-start gap-2 rounded-md px-3 py-2 text-base font-medium leading-normal text-white'
                    }
                  >
                    <span className="sidebar-svg">{sideLinks.svg}</span>
                    <span className="sidebar-svg">{sideLinks.icon}</span>
                    <span>{sideLinks.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mb-10 px-2">
        <LogoutButton />
      </div>
    </div>
  );
}

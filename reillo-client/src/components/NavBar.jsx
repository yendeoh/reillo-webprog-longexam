import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
 
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to:'/auth/signin' }
];
 
const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200',
    isActive
      ? 'border-[#FED211] bg-[#FED211] text-[#1b2454] shadow-md shadow-black/20'
      : 'border-transparent text-white/70 hover:border-white/20 hover:bg-white/10 hover:text-white',
  ].join(' ');
 
const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#11183d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Bulldoggy"
            className="h-10 w-10 rounded-full border border-white/15 bg-white object-contain p-1 shadow-md shadow-black/20"
          />
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">Bulldoggy Shop</p>
            <p className="text-xs uppercase tracking-[0.18em] text-[#FED211]">
              Campus Store
            </p>
          </div>
        </NavLink>
 
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
 
export default NavBar;
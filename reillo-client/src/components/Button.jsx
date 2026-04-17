import { Link } from 'react-router-dom';
 
const variantClasses = {
  primary:
    'border-[#354099] bg-[#354099] text-white hover:bg-[#2c357f] hover:border-[#2c357f] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#354099]/30',
  secondary:
    'border-[#FED211] bg-[#FED211] text-[#1b2454] hover:bg-[#e5bd0f] hover:border-[#e5bd0f] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#FED211]/20',
  ghost:
    'border-white/15 bg-white/5 text-white hover:border-[#FED211]/60 hover:bg-white/10 hover:text-[#FED211]',
};
 
const Button = ({
  children,
  to,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-[#FED211]/50',
    variantClasses[variant] ?? variantClasses.primary,
    className,
  ]
    .join(' ')
    .trim();
 
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
 
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};
 
export default Button;
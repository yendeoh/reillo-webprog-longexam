const Footer = () => {
  return (
    <footer className="mt-8 border-t border-white/10 bg-[#0b1029] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-white">Bulldoggy Shop</p>
          <p className="mt-1 text-sm text-white/60">
            Campus essentials, simple ordering.
          </p>
        </div>
 
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FED211]">
          Products | Cart | Pickup
        </p>
      </div>
    </footer>
  );
};
 
export default Footer;
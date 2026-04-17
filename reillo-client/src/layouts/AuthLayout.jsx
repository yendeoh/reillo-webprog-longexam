import { Outlet } from 'react-router-dom';
 
const AuthLayout = () => {
  return (
    <section className="min-h-screen text-white">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="flex items-center justify-center border-b border-white/10 bg-[#1b2454] px-8 py-10 lg:border-b-0 lg:border-r lg:px-16">
          <div className="flex w-full max-w-md items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
            <div className="relative aspect-square w-full max-w-[18rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#354099] to-[#11183d]">
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rotate-45 bg-[#FED211]/50" />
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 -rotate-45 bg-[#FED211]/50" />
            </div>
          </div>
        </div>
 
        <main className="flex items-center bg-[#0f1533] px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};
 
export default AuthLayout;
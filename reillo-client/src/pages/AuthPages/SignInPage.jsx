import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/img/logo.png';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100';

const actionButtonClassName = 'w-full rounded-2xl py-3 text-sm font-semibold tracking-[0.18em] uppercase';

const SignInPage = () => {
  return (
    <>
      <div className="mb-10 text-center">
        <img src={logo} alt="Bulldoggy logo" className="mx-auto h-16 w-16 rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-600">Campus marketplace</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Welcome back</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Sign in to manage orders, saved products, and easy pickup details.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-slate-700">
            Email address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Use at least 8 characters including numbers and symbols.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-600">
          <label className="flex items-center gap-2 text-slate-700">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-indigo-600" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-indigo-600 transition hover:text-indigo-700">
            Forgot password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log in with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log in with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-center text-sm text-slate-600">
        Don&apos;t have an account?{' '}
        <Link to="/auth/signup" className="font-semibold text-indigo-600 transition hover:text-indigo-700">
          Create one
        </Link>
      </div>
    </>
  );
};

export default SignInPage;

import { useState, useEffect } from 'react';
import { useNavigate } from '../hooks/useNavigate';
import { useAppContext } from '../context/AppContext';
import { Home, Tv, Package, CreditCard, SendHorizontal, Users, User, Bell } from 'lucide-react';
import { format } from 'date-fns';

export function Navigation() {
  const { state } = useAppContext();
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/watch-ads', icon: Tv, label: 'Watch Ads' },
    { path: '/packages', icon: Package, label: 'Packages' },
    { path: '/deposit', icon: CreditCard, label: 'Deposit' },
    { path: '/withdraw', icon: SendHorizontal, label: 'Withdraw' },
    { path: '/refer', icon: Users, label: 'Refer' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      <nav className="hidden md:block fixed left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 p-4">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">PK</span>
          </div>
          <span className="text-xl font-bold text-white">REWARDS</span>
        </div>
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = window.location.hash.slice(1) === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? 'bg-emerald-500 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 px-2 py-3">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = window.location.hash.slice(1) === item.path;
            return (
              <button key={item.path} onClick={() => navigate(item.path)} className="relative flex flex-col items-center gap-1">
                <div className={`p-2 rounded-lg transition-all ${isActive ? 'bg-emerald-500 text-white' : 'text-slate-400'}`}>
                  <item.icon size={20} />
                </div>
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

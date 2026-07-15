import { AppProvider, useAppContext } from './context/AppContext';
import { AuthScreen } from './screens/AuthScreen';
import { HomeScreen } from './screens/HomeScreen';
import { WatchAdsScreen } from './screens/WatchAdsScreen';
import { PackagesScreen } from './screens/PackagesScreen';
import { DepositScreen } from './screens/DepositScreen';
import { WithdrawScreen } from './screens/WithdrawScreen';
import { ReferScreen } from './screens/ReferScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { Navigation } from './components/Navigation';
import { NotificationToast } from './components/NotificationToast';

function AppContent() {
  const { state } = useAppContext();

  if (!state.currentUser) {
    return <AuthScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <NotificationToast />
      <main className="pb-20 md:pb-0 md:ml-64 p-4">
        <Routes />
      </main>
    </div>
  );
}

function Routes() {
  const path = window.location.hash.slice(1) || '/';

  const renderScreen = () => {
    switch (path) {
      case '/': return <HomeScreen />;
      case '/watch-ads': return <WatchAdsScreen />;
      case '/packages': return <PackagesScreen />;
      case '/deposit': return <DepositScreen />;
      case '/withdraw': return <WithdrawScreen />;
      case '/refer': return <ReferScreen />;
      case '/profile': return <ProfileScreen />;
      default: return <HomeScreen />;
    }
  };

  return renderScreen();
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;

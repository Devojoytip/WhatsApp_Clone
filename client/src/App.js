import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientID='';
  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <AccountProvider>
        <Messenger />
        </AccountProvider>
      </GoogleOAuthProvider>;
    </>
  );
}

export default App;

import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientID='1002432567611-rpivqf34si8pjmo6nu8atq0jr7vfqmrm.apps.googleusercontent.com';
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

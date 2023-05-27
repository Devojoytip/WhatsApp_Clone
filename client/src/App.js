import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientID='';
  return (
    <>
      <GoogleOAuthProvider clientId={clientID}>
        <Messenger />
      </GoogleOAuthProvider>;
    </>
  );
}

export default App;

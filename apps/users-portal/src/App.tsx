import { Route, Routes } from 'react-router-dom';

import { SignIn } from '@/pages/onboarding/sign-in.tsx';
import { SignUp } from '@/pages/onboarding/sign-up.tsx';

function App () {

  return (
    <>
      <Routes>
        <Route path={'/sign-in'} element={<SignIn/>}/>
        <Route path={'/sign-up'} element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;

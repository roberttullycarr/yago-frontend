import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { createNewSession } from '../api/fetches/createNewSession';

const Authenticate = () => {
  const router = useRouter();
  const loginToken = router.query.login_token;
  
  const authenticateUser = async () => {
    try {
      const login = await createNewSession(loginToken);
      localStorage.auth_token = login.data.auth_token;
      router.push(`/client/dashboard?id=${router.query.id}`);
    } catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    if (loginToken !== undefined){
      authenticateUser();
    }
  }, [loginToken])

  return (
    <div>login</div>
  )
}

export default Authenticate;
import React from 'react';


const Logout = () => {

  const handleLogout=()=> {
    sessionStorage.clear()
    window.location.pathname = "/"
  }

  return ( 
    <>
      <button onClick={handleLogout}></button>
    </>
   );
}
 
export default Logout;
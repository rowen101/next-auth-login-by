import React from "react";
import { useSession, signOut } from "next-auth/client";
import Image from "next/image";
// import logo from '../image/logo';
const Nav = () => {
  const [session, loading] = useSession();
  console.log({ session, loading });
  if (!session) return null;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand d-flex">
          {/* <Image src={} alt="Logo" width={30} height={30} /> */}
          <span className="ms-1"> FSC IT Monitoring</span>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={session.user.image}
            className="img-fluid rounded-circle"
            alt={session.user.image}
            width={35}
            height={35}
          />
          <h5 className="me-3 ms-1 mt-1 text-danger text-capitalize">
            {session.user.name}
          </h5>
          <button className="btn btn-outline-danger" onClick={() => signOut()}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

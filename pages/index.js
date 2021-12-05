import React from "react";
import { signOut, getSession } from "next-auth/client";
import Nav from "../components/Nav";
import TicketInput from "../components/TicketInput";
const Home = ({ session }) => {
  return (
    <div>
      <Nav />
      <main>
        <TicketInput />
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
export default Home;

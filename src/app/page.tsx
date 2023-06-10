import React from "react";
import PortalList from "@components/PortalList";
import SearchBar from "@components/SearchBar";
import { prismaClient, supabaseClient } from "./lib/providerClient";

export interface Portal {
  id: number;
  url: string;
}

//export const revalidate = 0;

const Home = async () => {
  const portals = await prismaClient.portalJob.findMany();

  console.log(portals);

  return (
    <div>
      <h1>Job Portal Directory</h1>
      <SearchBar />
      <PortalList portals={portals} />
    </div>
  );
};

export default Home;

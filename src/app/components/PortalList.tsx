import React from "react";
import { Portal } from "@app/page";
import PortalItem from "./PortalItem";

interface PortalListProps {
  portals: Portal[];
}

const PortalList: React.FC<PortalListProps> = ({ portals }) => (
  <ul>
    {portals.map((portal) => (
      <PortalItem key={portal.id} portal={portal} />
    ))}
  </ul>
);

export default PortalList;

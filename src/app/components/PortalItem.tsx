import React from "react";

import { Portal } from "@app/page";

interface PortalItemProps {
  portal: Portal;
}

export const PortalItem: React.FC<PortalItemProps> = ({ portal }) => (
  <li>
    <a href={portal.url}>{portal.url}</a>
  </li>
);

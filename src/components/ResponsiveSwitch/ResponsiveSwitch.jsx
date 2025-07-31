import React from "react";
import { useMobileDetection } from "../../hooks/useMobileDetection";
import MobileVersion from "../MobileVersion/MobileVersion";

const ResponsiveSwitch = ({ children }) => {
  const { isMobile } = useMobileDetection();

  // If screen size is tablet or smaller, show mobile version
  if (isMobile) {
    return <MobileVersion />;
  }

  // Otherwise, show the desktop version (original content)
  return <>{children}</>;
};

export default ResponsiveSwitch;

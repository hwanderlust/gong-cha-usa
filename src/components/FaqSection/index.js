import React from "react";

import FaqSectionContent from "./FaqSectionContent";
import { SectionalData } from "../common";
import { FAQ_SECTIONS } from "../../constants";

function FaqSection() {
  return (
    <SectionalData sections={FAQ_SECTIONS}>
      <FaqSectionContent />
    </SectionalData>
  );
}

export default FaqSection;
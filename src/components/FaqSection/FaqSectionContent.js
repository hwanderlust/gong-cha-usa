import React from "react";
import PropTypes from "prop-types";

import { sectionsPropType } from "../../helpers/faq";

// TODO: Layout and styling

function FaqSectionContent(props) {
  const { sections, selectedSection } = props;
  const section = sections.find(section => section.group === selectedSection);
  const items = section ? section.items : null;

  return (
    <div>
      <h3>{items}</h3>
    </div>
  );
}

FaqSectionContent.propTypes = {
  /* both are passed via <SectionalData/> ignore PropType's console errors */
  selectedSection: PropTypes.string.isRequired,
  sections: sectionsPropType
}

export default FaqSectionContent;
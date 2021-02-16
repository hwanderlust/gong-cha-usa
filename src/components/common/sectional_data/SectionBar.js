import React from "react";
import PropTypes from "prop-types";

import Tab from "./Tab";
import "./SectionalData.css";
import { sectionsPropType } from "../../../helpers/faq";

/**
 * The 'bar' a user would tap/click on to select a section
 * All the following are passed via SectionalData API:
 * @param sections the list containing the section name and their items
 * @param selectedSection the name of the currently active section
 * @param onSelect the callback to update the currently active section
 */
function SectionBar(props) {
  const { sections, selectedSection, onSelect } = props;

  return sections.map((section, index) => {

    return (
      <Tab
        section={section.group}
        isSelected={selectedSection === section.group}
        index={index}
        totalTabs={sections.length}
        key={section.group}
        onSelect={() => onSelect(section.group)}
      />
    );
  })
}

SectionBar.propTypes = {
  selectedSection: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  sections: sectionsPropType
}

export default SectionBar;
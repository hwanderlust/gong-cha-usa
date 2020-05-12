import React from "react";
import PropTypes from "prop-types";

import "./SectionalData.css";

/**
 * The individual sectional tab on the SectionBar.
 * @param section the name of this section
 * @param index the location of the section in the list of sections
 * @param totalTabs the number of tabs or sections
 * @param onSelect (lives in SectionalData)
 */
function Tab(props) {
  const { section, isSelected, index, totalTabs, onSelect } = props;

  let containerClass = "section-bar__tab-container";
  if (isSelected) {
    containerClass = containerClass.concat(" section-bar__tab-container--selected");
  }
  if (index === 0) {
    containerClass = containerClass.concat(" section-bar__tab-container--first");
  }
  if (index === totalTabs - 1) {
    containerClass = containerClass.concat(" section-bar__tab-container--last");
  }

  let textClass = "section-bar__tab-text";
  if (isSelected) {
    textClass = textClass.concat(" section-bar__tab-text--selected");
  }

  return (
    <div className={containerClass} onClick={onSelect}>
      <span className={textClass}>
        {section}
      </span>
    </div>
  );
}

Tab.propTypes = {
  section: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  totalTabs: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default Tab;
import React from "react";
import PropTypes from "prop-types";

import SectionBar from "./SectionBar";
import "./SectionalData.css";
import { sectionsPropType } from "../../../helpers/faq";

/**
 * Takes a 'sections' prop and abstracts the 'bar' and the handling of props.
 * The required 'content' component is passed in as children and is without a standard/default -- it's up to you to create a custom component / UI.
 * The render will look like: (
 *   <SectionalData sections={}>
 *     <CustomSectionContent />
 *   </SectionalData>
 * )
 */
class SectionalData extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedSection: null, // ignore the PropTypes console error as 'sections' is still unavailable
      onSelect: this.onSelect
    };

    this.contentChild = null;
  }

  componentDidMount() {
    const { sections } = this.props;

    if (!sections[0]) {
      console.error("No data in 'sections'")
      return;
    }

    const initialSection = sections[0].group;

    this.setState({
      selectedSection: initialSection,
    });

    this.createContentChild(initialSection);
  }

  onSelect = (selectedSection) => {
    this.setState(prevState => {
      if (prevState.selectedSection === selectedSection) return null;

      this.createContentChild(selectedSection);

      return { selectedSection }
    });
  }

  createContentChild = (section) => {
    this.contentChild = React.cloneElement(this.props.children, {
      sections: this.props.sections,
      selectedSection: section,
      onSelect: this.onSelect,
    });
  }

  render() {
    return (
      <div className="section-bar__container">
        <SectionBar
          sections={this.props.sections}
          selectedSection={this.state.selectedSection}
          onSelect={this.onSelect}
        />
        {this.contentChild}
      </div>
    );
  }
}

SectionalData.propTypes = {
  children: PropTypes.element.isRequired, /* a custom Content component */
  sections: sectionsPropType
}

export default SectionalData;
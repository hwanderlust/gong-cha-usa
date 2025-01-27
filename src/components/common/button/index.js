import React from 'react';
import PropTypes from "prop-types";

import { isInternalPath } from "../../../helpers";

import "./Button.css";
import { Color } from "../../../styles";

function Button(props) {

    if (typeof props.onClick == "string") {
        return <LinkButton {...props} />
    }

    return (
        <div
            className="button-container"
            style={backgroundColor(props.color)}
            onClick={props.onClick}
        >
            <p
                className="button-text"
                style={props.color === "white" ? { color: Color.black } : undefined}
            >
                {props.text}
            </p>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    color: PropTypes.oneOf(["red", "black", "white"]).isRequired,
};

function LinkButton(props) {
    if (!isInternalPath(props.onClick)) {
        return (
            <a
                className="button-container"
                style={backgroundColor(props.color)}
                href={props.onClick}
                target="_blank"
                rel="noopener noreferrer"
            >
                <p className="button-text">{props.text}</p>
            </a>
        );
    }

    // TODO: use <NavLink/> for internal paths
    return null;
}

function backgroundColor(color) {
    if (color === "white") {
        return { backgroundColor: Color.white };
    }

    if (color === "black") {
        return { backgroundColor: Color.black };
    }

    return { backgroundColor: Color.red };
}

export default Button;
import React from "react";
import PropTypes from "prop-types";

type ButtonProps = {
  icon?: string;
  label?: string;
  to?: string;
  color?: string;
  variant?: string;
  size?: string;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

/**
 * Button
 * @param {string} icon
 * @param {string} label
 * @param {string} to
 * @param {string} color - (success, primary, secondary, warning, error)
 * @param {string} variant - (contained, outlined, text)
 * @param {string} size - (small, medium, large)
 * @param {bool} fullWidth
 * @param {bool} loading
 * @param {bool} disabled
 */
const Button = ({ icon, label, to, ...props }: ButtonProps) => {
  return (
    <a href={to} {...props}>
      {icon} {label}
    </a>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  variant: "contained",
  color: "primary"
};

export default Button;

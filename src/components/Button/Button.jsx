import { useEffect, useRef } from "react";
import Icon from "../Icon/Icon.jsx";
import "./Button.css";

function Button({
  type,
  size,
  startIcon = "",
  endIcon = "",
  linkColor,
  linkHoverColor,
  label = "",
  disabled,
  onClick = () => {},
}) {
  const ref = useRef(null);

  let classList = [type, size];
  let iconColor = size == "#ffffff";
  const isIconBtn = !label && (startIcon || endIcon);
  let iconSize = isIconBtn && size == "xl2" ? 24 : 20;
  if (isIconBtn) {
    classList.push("icon-button");
  }

  useEffect(() => {
    if (linkColor) {
      ref.current.style.setProperty("--link-color", linkColor);
    }
    if (linkHoverColor) {
      ref.current.style.setProperty("--link-hover-color", linkHoverColor);
    }
  }, [linkColor, linkHoverColor]);

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={`button ${classList.join(" ")}`}
      onClick={onClick}
    >
      <span className="button__label">
        {startIcon ? (
          <Icon name={startIcon} size={iconSize} color={iconColor} />
        ) : (
          ""
        )}
        {label}
        {endIcon ? (
          <Icon name={endIcon} size={iconSize} color={iconColor} />
        ) : (
          ""
        )}
      </span>
    </button>
  );
}

export default Button;

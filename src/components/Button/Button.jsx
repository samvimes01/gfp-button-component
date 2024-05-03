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
  ariaLabel = "",
  disabled,
  onClick = () => {},
  href = "",
}) {
  const ref = useRef(null);
  let classList = [type, size];

  const isIconBtn = !label && (startIcon || endIcon);
  let iconSize = isIconBtn && size == "xl2" ? 24 : 20;
  if (isIconBtn) {
    classList.push("icon-button");
  }
  if (isIconBtn && !ariaLabel) {
    throw new Error("ariaLabel is required for icon buttons");
  }

  useEffect(() => {
    if (linkColor) {
      ref.current.style.setProperty("--link-color", linkColor);
    }
    if (linkHoverColor) {
      ref.current.style.setProperty("--link-hover-color", linkHoverColor);
    }
  }, [linkColor, linkHoverColor]);

  if (type == "link") {
    return (
      <a
        ref={ref}
        disabled={disabled}
        className={`button ${classList.join(" ")}`}
        href={href}
      >
        <span className="button__label">
          {startIcon ? (
            <Icon name={startIcon} size={iconSize} />
          ) : (
            ""
          )}
          {label}
          {endIcon ? (
            <Icon name={endIcon} size={iconSize} />
          ) : (
            ""
          )}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      className={`button ${classList.join(" ")}`}
      aria-label={ariaLabel ? ariaLabel : label}
      onClick={onClick}
    >
      <span className="button__label">
        {startIcon ? <Icon name={startIcon} size={iconSize} /> : ""}
        {label}
        {endIcon ? <Icon name={endIcon} size={iconSize} /> : ""}
      </span>
    </button>
  );
}

export default Button;

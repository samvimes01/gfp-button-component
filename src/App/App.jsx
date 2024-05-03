import Button from "../components/Button/Button";

import "./App.css";

function App() {
  const types = [
    "primary",
    "secondary",
    "tertiary",
    "link",
    "link_gray",
    "destructive",
  ];
  const kinds = [
    {
      size: "sm",
      startIcon: "",
      endIcon: "",
      label: "Button CTA",
      ariaLabel: "",
    },
    {
      size: "lg",
      startIcon: "Star",
      endIcon: "",
      label: "Button CTA",
      ariaLabel: "",
    },
    {
      size: "xl",
      startIcon: "",
      endIcon: "Star",
      label: "Button CTA",
      ariaLabel: "",
    },
    {
      size: "xl2",
      startIcon: "",
      endIcon: "",
      label: "Button CTA",
      ariaLabel: "",
    },
    {
      size: "xl2",
      startIcon: "Star",
      endIcon: "",
      label: "",
      ariaLabel: "star btn",
    },
  ];
  let linkColor = "";
  let linkHoverColor = "";

  return (
    <div className="card">
      {types.map((type, i) => (
        <div className="card__row" key={i}>
          {kinds.map((kind, j) => {
            if (type === "link_gray") {
              type = "link";
              linkColor = "#525252";
              linkHoverColor = "#171717";
            }
            return (
              <Button
                key={type + kind.size + j}
                type={type}
                linkColor={linkColor}
                linkHoverColor={linkHoverColor}
                size={kind.size}
                startIcon={kind.startIcon}
                endIcon={kind.endIcon}
                label={kind.label}
                ariaLabel={kind.ariaLabel}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;

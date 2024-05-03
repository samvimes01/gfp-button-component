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
    { size: "sm", startIcon: "", endIcon: "", label: "Button CTA" },
    { size: "lg", startIcon: "Star", endIcon: "", label: "Button CTA" },
    { size: "xl", startIcon: "", endIcon: "Star", label: "Button CTA" },
    { size: "xl2", startIcon: "", endIcon: "", label: "Button CTA" },
    { size: "xl2", startIcon: "Star", endIcon: "", label: "" },
  ];
  let linkColor = "";
  let linkHoverColor = "";

  return (
    <div className="card">
      {types.map((type, i) => (
        <div className="card__row" key={i}>
          {kinds.map(({ size, startIcon, endIcon, label }, j) => {
            if (type === "link_gray") {
              type = "link";
              linkColor = "#525252";
              linkHoverColor = "#171717";
            }
            return (
              <Button
                key={type + size + j}
                type={type}
                linkColor={linkColor}
                linkHoverColor={linkHoverColor}
                size={size}
                startIcon={startIcon}
                endIcon={endIcon}
                label={label}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;

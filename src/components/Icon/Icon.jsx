import { icons } from "lucide-react";

function Icon({ name, size = 16 }) {
  const LucideIcon = icons[name];

  return <LucideIcon size={size} />;
}

export default Icon;

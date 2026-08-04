import {
  siInstagram,
  siSteam,
  siX,
  siYoutube,
} from "simple-icons";

type SocialIconProps = {
  name:
    | "youtube"
    | "steam"
    | "x"
    | "instagram";
};

const icons = {
  youtube: siYoutube,
  steam: siSteam,
  x: siX,
  instagram: siInstagram,
};

export function SocialIcon({
  name,
}: SocialIconProps) {
  const icon = icons[name];

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width="18"
      height="18"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
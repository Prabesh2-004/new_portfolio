import type { IconType } from "react-icons";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import {
  LuArrowRight,
  LuArrowUp,
  LuArrowUpRight,
  LuCheck,
  LuCopy,
  LuDownload,
  LuGithub,
  LuGlobe,
  LuLinkedin,
  LuMail,
  LuMenu,
  LuPhone,
  LuServer,
  LuSmartphone,
  LuX,
  LuYoutube,
} from "react-icons/lu";

const ICONS = {
  "arrow-right": LuArrowRight,
  "arrow-up": LuArrowUp,
  "arrow-up-right": LuArrowUpRight,
  check: LuCheck,
  copy: LuCopy,
  download: LuDownload,
  github: LuGithub,
  globe: LuGlobe,
  linkedin: LuLinkedin,
  mail: LuMail,
  menu: LuMenu,
  phone: LuPhone,
  server: LuServer,
  smartphone: LuSmartphone,
  close: LuX,
  whatsapp: FaWhatsapp,
  x: FaXTwitter,
  youtube: LuYoutube,
} satisfies Record<string, IconType>;

export type IconName = keyof typeof ICONS;

export function hasIcon(name: string): name is IconName {
  return name in ICONS;
}

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

/** Decorative icon. Pair it with visible text or an aria-label on the parent. */
export default function Icon({ name, size = 18, className }: IconProps) {
  const Component = ICONS[name];
  return <Component size={size} className={className} aria-hidden="true" focusable="false" />;
}

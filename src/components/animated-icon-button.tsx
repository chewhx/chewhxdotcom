import { MoveRightIcon, MoveUpRightIcon } from "lucide-react";
import React from "react";

function DefaultIconSet() {
  return (
    <div className="relative h-[12px] w-[12px]">
      <MoveUpRightIcon
        size="12"
        className="absolute transform opacity-100 group-hover:opacity-0 duration-300 ease-in-out"
      />
      <MoveRightIcon
        size="12"
        className="absolute transform opacity-0 group-hover:opacity-100 duration-300 ease-in-out"
      />
    </div>
  );
}

export default function AnimatedIconButton({
  label,
  icon: Icon,
  hoverIcon: HoverIcon,
  href,
}: {
  label: string;
  icon?: React.ElementType;
  hoverIcon?: React.ElementType;
  href: string;
}) {
  return (
    <a
      key={label}
      className="group flex flex-row justify-center items-center gap-1"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon && HoverIcon ? (
        <div className="h-[12px] w-[12px]">
          <Icon
            size="12"
            className="absolute transform opacity-100 group-hover:opacity-0 duration-300 ease-in-out"
          />
          <HoverIcon
            size="12"
            className="absolute transform opacity-0 group-hover:opacity-70 duration-300 ease-in-out"
          />
        </div>
      ) : (
        <DefaultIconSet />
      )}
      <span className="group-hover:opacity-70">{label}</span>
    </a>
  );
}

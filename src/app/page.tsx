import AnimatedIconButton from "@/components/animated-icon-button";
import {
  GalleryVerticalEndIcon,
  GalleryVerticalIcon,
  NotebookIcon,
  NotebookTextIcon,
  PackageIcon,
  PackageOpenIcon,
} from "lucide-react";

const links: {
  icon?: React.ElementType;
  hoverIcon?: React.ElementType;
  label: string;
  href: string;
}[] = [
  {
    icon: GalleryVerticalEndIcon,
    hoverIcon: GalleryVerticalIcon,
    label: "demos",
    href: "https://demos.chewhx.com/",
  },
  {
    icon: NotebookIcon,
    hoverIcon: NotebookTextIcon,
    label: "learning notes",
    href: "https://chewhx.notion.site/1c51c508156a8058a50dd407bbb49bdb?v=1c51c508156a806fbf50000c77a08d3c&pvs=4",
  },
  { href: "https://www.github.com/chewhx", label: "github" },
  { href: "https://www.linkedin.com/in/chewhx", label: "linkedin" },
  // { href: "https://www.chewhx.com/cv", label: "cv" },
];

export default function Home() {
  return (
    <div className="max-w-xl mx-auto tracking-tight h-screen flex flex-col px-8">
      <div className="h-18" />
      <p className="text-xl font-medium leading-5 pointer-events-none select-none">
        Chew Han Xiang
      </p>
      <p className="text-md pointer-events-none select-none text-zinc-400">
        Software Engineer
      </p>
      <div className="h-8" />
      <div className="flex flex-row flex-wrap gap-x-6 gap-y-2 text-zinc-400">
        {links.map((item) => (
          <AnimatedIconButton {...item} key={item.label} />
        ))}
      </div>
      <div className="h-12" />
      <a
        className="group flex flex-row gap-2 items-center tracking-normal"
        href="https://www.npmjs.com/package/@chewhx/google-books"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="h-[14px] w-[14px]">
          <PackageIcon
            size="14"
            className="absolute transform opacity-100 group-hover:opacity-0 duration-300 ease-in-out"
          />
          <PackageOpenIcon
            size="14"
            className="absolute transform opacity-0 group-hover:opacity-70 duration-300 ease-in-out"
          />
        </div>
        <p className="group-hover:opacity-70">Google API Wrapper</p>
      </a>
      <p className="text-zinc-400">
        TypeScript wrapper for Google Books API. Simplify access to searching
        books.
      </p>
      <div className="mt-auto">
        <p className="text-sm">© {new Date().getFullYear()}</p>
      </div>
      <div className="h-12" />
    </div>
  );
}

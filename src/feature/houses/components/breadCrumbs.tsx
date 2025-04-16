import { ChevronRightIcon } from "@heroicons/react/24/solid";

 

interface BreadcrumbProps {
  links: { name: string; href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <nav aria-label="Breadcrumb" className="w-full py-3">
      <ol className="flex items-center space-x-2 xs:space-x-0  text-white">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <ChevronRightIcon className="h-4 w-4 text-gray-300" />}
            {index === links.length - 1 ? (
              <span className="ml-2 font-medium xs:text-xs text-white">{link.name}</span>
            ) : (
              <a
                href={link.href}
                className="ml-2 text-white hover:text-blue-700 transition xs:text-xs "
              >
                {link.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

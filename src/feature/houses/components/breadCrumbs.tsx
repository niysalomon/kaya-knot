import { ChevronRightIcon } from "@heroicons/react/24/solid";

 

interface BreadcrumbProps {
  links: { name: string; href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <nav aria-label="Breadcrumb" className="w-full py-3">
      <ol className="flex items-center space-x-2 text-gray-600">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <ChevronRightIcon className="h-4 w-4 text-gray-400" />}
            {index === links.length - 1 ? (
              <span className="ml-2 font-medium text-gray-900">{link.name}</span>
            ) : (
              <a
                href={link.href}
                className="ml-2 text-blue-500 hover:text-blue-700 transition"
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

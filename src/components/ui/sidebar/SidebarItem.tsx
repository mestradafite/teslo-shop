import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const SidebarItem = ({ title, href, icon, onClick }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
      onClick={onClick}
    >
      {icon}
      <span className="ml-3 text-xl">{title}</span>
    </Link>
  );
};

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const navitems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Pertanyaan',
      path: '/pertanyaan',
    },
    {
      name: 'Tutorial',
      path: '/',
    },
  ];

  return (
    <div className="fixed z-50 w-screen bg-secondary">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="h-12 w-40 relative ">
            <Image src={'logo-name.svg'} fill className="" />
          </div>

          <div>
            <ul className="flex items-center ">
              {navitems.map((item, index) => (
                <li key={index} className="uppercase font-semibold text-tertiary ">
                  <Link href={item.path} className="hover:bg-gray-300 p-4">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top bar with social media and shipping info */}
      <div className="bg-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-gray-600 text-sm">
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaPinterestP /></a>
            <a href="#" className="hover:text-red-500"><FaGooglePlusG /></a>
            <a href="#" className="hover:text-red-500"><FaInstagram /></a>
          </div>
          <div className="hidden md:block">
            Free shipping for standard order over $100
          </div>
          <div>
            <a href="mailto:fashe@example.com">fashe@example.com</a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            Fashe<span className="text-red-500">.</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/shop" className="hover:text-red-500">Shop</Link>
            <Link to="/sale" className="hover:text-red-500">Sale</Link>
            <Link to="/features" className="hover:text-red-500">Features</Link>
            <Link to="/blog" className="hover:text-red-500">Blog</Link>
            <Link to="/about" className="hover:text-red-500">About</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </div>

          {/* User and Cart */}
          <div className="flex items-center gap-4">
            <button className="hover:text-red-500">
              <FaUser />
            </button>
            <div className="relative">
              <button className="hover:text-red-500">
                <FaShoppingCart />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 
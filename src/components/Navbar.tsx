import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/the-learning-craft-logo.png"
import africa from "../assets/images/Vector.png"

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  if (pathname === "/child-policy") {
    return (
      <div>
        <nav className="w-full flex items-center justify-center py-6 bg-white border-b border-gray-100">
          <a href="" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <img src={logo} alt="The Learning Craft" className="w-40 h-15 object-contain" />
          </a>
        </nav>
      </div>
    );
  }

  if (pathname === "/foundation/pascel") {
    return (
      <div>
        <nav className="flex flex-row border-b border-b-[#F5C518] gap-3 w-full flex items-center justify-between py-5 px-6 lg:px-15 font-semibold" style={{ backgroundColor: "#10502F" }}>
          <a href="" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <span className="text-[#F5C518] text-xl font-black tracking-widest flex items-center gap-2">
              <img className="size-5" src={africa} alt="" />  PACSEL
            </span>
          </a>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/get-involved')}
              className="text-sm font-semibold px-4 py-2 rounded-md border transition-colors hover:bg-[#F5C518]/10"
              style={{ borderColor: "#F5C518", color: "#F5C518", background: "transparent" }}
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/get-involved')}
              className="text-sm font-semibold px-4 py-2 rounded-md transition-colors hover:brightness-110"
              style={{ backgroundColor: "#F5C518", color: "#10502F" }}
            >
             Get Involved
            </button>
          </div>
        </nav>
      </div>
    );
  }

  if (pathname.startsWith("/foundation")) {
    return (
      <div>
        <nav className="w-full flex items-center justify-between py-6 px-6 lg:px-15 bg-white font-semibold border-b border-gray-100 relative">
          <a href="" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <img src={logo} alt="The Learning Craft" className="w-32 lg:w-40 h-12 lg:h-15 object-contain" />
          </a>
          <ul className="hidden lg:flex flex-row items-center gap-10 text-sm">
            <li className="hover:underline cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="hover:underline cursor-pointer" onClick={() => navigate('/about')}>About Us</li>
            <li className="hover:underline cursor-pointer" onClick={() => navigate('/foundation/programs')}>Programs</li>
            <li className="hover:underline cursor-pointer" onClick={() => navigate('/foundation/pascel')}>PASCEL</li>
          </ul>
          <button
            onClick={() => navigate('/get-involved')}
            className="hidden lg:block border-[1.7px] border-black text-sm px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </button>
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
          {menuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 px-6 py-4 flex flex-col gap-4">
              <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/'); setMenuOpen(false); }}>Home</span>
              <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/about'); setMenuOpen(false); }}>About Us</span>
              <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/foundation/programs'); setMenuOpen(false); }}>Programs</span>
              <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/foundation/pascel'); setMenuOpen(false); }}>PASCEL</span>
              <button
                onClick={() => { navigate('/get-involved'); setMenuOpen(false); }}
                className="border-[1.7px] border-black text-sm px-4 py-2 rounded-md hover:bg-gray-50 transition-colors w-full"
              >
                Contact Us
              </button>
            </div>
          )}
        </nav>
      </div>
    );
  }
  return (
    <div>
      <nav className="w-full flex items-center justify-between py-6 border-b border-gray-100 px-6 lg:px-15 bg-white font-semibold relative">
        <a href="" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <img src={logo} alt="The Learning Craft" className="w-32 lg:w-40 h-12 lg:h-15 object-contain" />
        </a>

        <ul className="hidden lg:flex flex-row items-center justify-between gap-10 text-sm">
          <li className="hover:underline cursor-pointer" onClick={() => navigate('/about')}>About</li>
          <li className="hover:underline cursor-pointer" onClick={() => navigate('/resources')}>Resources</li>
          <li className="hover:underline cursor-pointer" onClick={() => navigate('/get-involved')}>Get Involved</li>
          <li className="hover:underline cursor-pointer" onClick={() => navigate('/foundation')}>Foundation</li>
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => navigate('/foundation/payment')}
            className="bg-[#119B53] text-sm text-white px-4 py-2 rounded-lg border border-gray-300"
          >
            Donate
          </button>
          <button
            onClick={() => navigate('/get-involved')}
            className="border-[1.7px] border-black text-sm px-3 py-2 rounded-md"
          >
            Contact Us
          </button>
        </div>
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 px-6 py-4 flex flex-col gap-4">
            <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/about'); setMenuOpen(false); }}>About</span>
            <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/resources'); setMenuOpen(false); }}>Resources</span>
            <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/get-involved'); setMenuOpen(false); }}>Get Involved</span>
            <span className="text-sm font-semibold cursor-pointer hover:text-[#119B53]" onClick={() => { navigate('/foundation'); setMenuOpen(false); }}>Foundation</span>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => { navigate('/foundation/payment'); setMenuOpen(false); }}
                className="flex-1 bg-[#119B53] text-sm text-white px-4 py-2 rounded-lg"
              >
                Donate
              </button>
              <button
                onClick={() => { navigate('/get-involved'); setMenuOpen(false); }}
                className="flex-1 border-[1.7px] border-black text-sm px-3 py-2 rounded-md"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar
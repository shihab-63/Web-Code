import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logoimg from "../../assets/logos/logo.png";
import MyContainer from "../../Container/MyContainer";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-green-900 to-pink-900 text-white pt-12 pb-6">
      <MyContainer>
        {/* Top Section: Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-400 pb-8 border-dashed">
          <div className="flex items-center gap-2">
            <div className="">
              {/* এখানে তোমার লোগো আইকনটি বসাবে */}
              <img src={logoimg} alt="" />
            </div>
            <h2 className="text-2xl font-semibold italic">Web Code</h2>
          </div>

          <div className="flex w-full md:w-auto items-stretch gap-4">
            <div className="relative grow md:w-80">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2  text-xl" />
              <input
                type="email"
                placeholder="Enter your email to get the latest news..."
                className="w-full pl-10 pr-8 py-3 border border-gray-200 rounded "
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section: Links and Socials */}
        <div className="flex flex-wrap md:flex-row justify-between gap-10 py-12 border-b border-gray-400 border-dashed">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4">Column One</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Twenty One</li>
              <li>Thirty Two</li>
              <li>Fourty Three</li>
              <li>Fifty Four</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Column Two</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Sixty Five</li>
              <li>Seventy Six</li>
              <li>Eighty Seven</li>
              <li>Ninety Eight</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">Column Three</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>One Two</li>
              <li>Three Four</li>
              <li>Five Six</li>
              <li>Seven Eight</li>
            </ul>
          </div>

          {/* Column 4: App Links & Social */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold mb-4">Column Four</h3>
            <div className="flex flex-col gap-3 mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="w-32 cursor-pointer"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="w-32 cursor-pointer"
              />
            </div>

            <h4 className="font-bold mb-3 text-sm">Join Us</h4>
            <div className="flex gap-4 text-xl">
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Extra Links */}
        <div className="flex flex-col md:row justify-between items-center pt-8 text-xs text-gray-300 gap-4">
          <p>CompanyName @ 202X. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Eleven</span>
            <span className="cursor-pointer hover:text-white">Twelve</span>
            <span className="cursor-pointer hover:text-white">Thirteen</span>
          </div>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiStar, FiGlobe } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSlash } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-8">
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="w-full md:w-1/3">
          <div className="mb-8">
            <h2 className="flex items-center gap-3 text-2xl font-extrabold uppercase tracking-wide">
              <FiMail className="w-6 h-6" />
              GET IN TOUCH
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 shrink-0" />
                <span className="font-semibold">Whatsapp:</span>
                <a href="tel:+919606081463" className="ml-2 underline">
                  +91 9606081463
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 shrink-0" />
                <span className="font-semibold">Support:</span>
                <a href="mailto:hello@wearcomet.com" className="ml-2 underline">
                  hello@wearcomet.com
                </a>
              </div>

              <div>
                <div className="font-semibold">
                  Gifting and Corporate Orders:
                </div>
                <a
                  href="mailto:bulkorders@wearcomet.com"
                  className="underline block"
                >
                  bulkorders@wearcomet.com
                </a>
              </div>

              <div>
                <div className="font-semibold">
                  Marketing &amp; Partnership:
                </div>
                <a
                  href="mailto:partnerships@wearcomet.com"
                  className="underline block"
                >
                  partnerships@wearcomet.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <div className="font-semibold">Careers:</div>
                <a href="#" className="underline">
                  Apply Here
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-700 mb-6 w-3/4" />

          {/* REACH US */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide mb-4">
              <FiMapPin className="w-5 h-5" />
              REACH US
            </h3>

            <address className="not-italic text-sm leading-6">
              57, 60 Feet Rd, KHB Colony, 6th Block,
              <br /> Koramangala, Bengaluru, Bengaluru Urban,
              <br /> Karnataka, 560095
            </address>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div>
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide">
              <FiGlobe className="w-5 h-5" />
              SOCIAL
            </h3>
            <div className="flex items-center gap-8 py-12">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="h-px bg-gray-700 w-3/4" />

          {/* ABOUT US */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide my-6">
              <FiStar className="w-5 h-5" />
              ABOUT US
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#" className="hover:underline">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  CRAFTSMANSHIP
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  THE VAULT
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  THE GARAGE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide mb-6">
            <FiSlash className="w-5 h-5" />
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a href="#" className="hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                MY ACCOUNT
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                RETURN AND EXCHANGE PORTAL
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CARE
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                T&C
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                RETURN & EXCHANGES POLICY
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                PRIVACY POLICY
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                REFUND POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm">
        © 2025,{" "}
        <span className="underline hover:text-[#eceb0b] hover:cursor-pointer hover:no-underline">
          Grails Marketing Private Limited. All Rights Reserved.
        </span>
      </p>
    </div>
  );
};

export default Footer;

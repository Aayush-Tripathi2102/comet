import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiStar, FiGlobe } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSlash } from "react-icons/fi";
const Footer = () => {
  return <div className="min-h-screen bg-black text-white py-10 px-8" data-uid="element-1775114870156-161">
      <div className="flex flex-col lg:flex-row w-full " data-uid="element-1775114870156-162">
        <div className="w-full md:w-1/3" data-uid="element-1775114870156-163">
          <div className="mb-8" data-uid="element-1775114870156-164">
            <h2 className="flex items-center gap-3 text-2xl font-extrabold uppercase tracking-wide" data-uid="element-1775114870156-165">
              <FiMail className="w-6 h-6" data-uid="component-1775114870156-166" />
              GET IN TOUCH
            </h2>

            <div className="mt-6 space-y-4" data-uid="element-1775114870156-167">
              <div className="flex items-center gap-3" data-uid="element-1775114870156-168">
                <FaWhatsapp className="w-5 h-5 shrink-0" data-uid="component-1775114870157-169" />
                <span className="font-semibold" data-uid="element-1775114870157-170">Whatsapp:</span>
                <a href="tel:+919606081463" className="ml-2 underline" data-uid="element-1775114870157-171">
                  +91 9606081463
                </a>
              </div>

              <div className="flex items-center gap-3" data-uid="element-1775114870157-172">
                <FiMail className="w-5 h-5 shrink-0" data-uid="component-1775114870157-173" />
                <span className="font-semibold" data-uid="element-1775114870157-174">Support:</span>
                <a href="mailto:hello@wearcomet.com" className="ml-2 underline" data-uid="element-1775114870157-175">
                  hello@wearcomet.com
                </a>
              </div>

              <div data-uid="element-1775114870157-176">
                <div className="font-semibold" data-uid="element-1775114870157-177">
                  Gifting and Corporate Orders:
                </div>
                <a href="mailto:bulkorders@wearcomet.com" className="underline block" data-uid="element-1775114870157-178">
                  bulkorders@wearcomet.com
                </a>
              </div>

              <div data-uid="element-1775114870157-179">
                <div className="font-semibold" data-uid="element-1775114870157-180">
                  Marketing &amp; Partnership:
                </div>
                <a href="mailto:partnerships@wearcomet.com" className="underline block" data-uid="element-1775114870157-181">
                  partnerships@wearcomet.com
                </a>
              </div>

              <div className="flex items-center gap-2" data-uid="element-1775114870157-182">
                <div className="font-semibold" data-uid="element-1775114870157-183">Careers:</div>
                <a href="#" className="underline" data-uid="element-1775114870157-184">
                  Apply Here
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-700 mb-6 w-3/4" data-uid="element-1775114870157-185" />

          {/* REACH US */}
          <div data-uid="element-1775114870157-186">
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide mb-4" data-uid="element-1775114870157-187">
              <FiMapPin className="w-5 h-5" data-uid="component-1775114870157-188" />
              REACH US
            </h3>

            <address className="not-italic text-sm leading-6" data-uid="element-1775114870157-189">
              57, 60 Feet Rd, KHB Colony, 6th Block,
              <br data-uid="element-1775114870157-190" /> Koramangala, Bengaluru, Bengaluru Urban,
              <br data-uid="element-1775114870157-191" /> Karnataka, 560095
            </address>
          </div>
        </div>
        <div className="w-full md:w-1/3" data-uid="element-1775114870157-192">
          <div data-uid="element-1775114870157-193">
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide" data-uid="element-1775114870157-194">
              <FiGlobe className="w-5 h-5" data-uid="component-1775114870157-195" />
              SOCIAL
            </h3>
            <div className="flex items-center gap-8 py-12" data-uid="element-1775114870157-196">
              <a href="#" aria-label="Instagram" data-uid="element-1775114870157-197">
                <FaInstagram className="w-6 h-6" data-uid="component-1775114870157-198" />
              </a>
              <a href="#" aria-label="LinkedIn" data-uid="element-1775114870157-199">
                <FaLinkedinIn className="w-6 h-6" data-uid="component-1775114870157-200" />
              </a>
            </div>
          </div>

          <div className="h-px bg-gray-700 w-3/4" data-uid="element-1775114870157-201" />

          {/* ABOUT US */}
          <div data-uid="element-1775114870157-202">
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide my-6" data-uid="element-1775114870157-203">
              <FiStar className="w-5 h-5" data-uid="component-1775114870157-204" />
              ABOUT US
            </h3>
            <ul className="space-y-3 text-sm font-medium" data-uid="element-1775114870157-205">
              <li data-uid="element-1775114870157-206">
                <a href="#" className="hover:underline" data-uid="element-1775114870157-207">
                  ABOUT US
                </a>
              </li>
              <li data-uid="element-1775114870157-208">
                <a href="#" className="hover:underline" data-uid="element-1775114870157-209">
                  CRAFTSMANSHIP
                </a>
              </li>
              <li data-uid="element-1775114870157-210">
                <a href="#" className="hover:underline" data-uid="element-1775114870157-211">
                  THE VAULT
                </a>
              </li>
              <li data-uid="element-1775114870157-212">
                <a href="#" className="hover:underline" data-uid="element-1775114870157-213">
                  THE GARAGE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3" data-uid="element-1775114870157-214">
          <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide mb-6" data-uid="element-1775114870157-215">
            <FiSlash className="w-5 h-5" data-uid="component-1775114870157-216" />
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-sm font-medium" data-uid="element-1775114870157-217">
            <li data-uid="element-1775114870157-218">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-219">
                HOME
              </a>
            </li>
            <li data-uid="element-1775114870157-220">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-221">
                MY ACCOUNT
              </a>
            </li>
            <li data-uid="element-1775114870157-222">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-223">
                RETURN AND EXCHANGE PORTAL
              </a>
            </li>
            <li data-uid="element-1775114870157-224">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-225">
                CONTACT US
              </a>
            </li>
            <li data-uid="element-1775114870157-226">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-227">
                CARE
              </a>
            </li>
            <li data-uid="element-1775114870157-228">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-229">
                FAQ
              </a>
            </li>
            <li data-uid="element-1775114870157-230">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-231">
                T&C
              </a>
            </li>
            <li data-uid="element-1775114870157-232">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-233">
                RETURN & EXCHANGES POLICY
              </a>
            </li>
            <li data-uid="element-1775114870157-234">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-235">
                PRIVACY POLICY
              </a>
            </li>
            <li data-uid="element-1775114870157-236">
              <a href="#" className="hover:underline" data-uid="element-1775114870157-237">
                REFUND POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm" data-uid="element-1775114870157-238">
        © 2025,{" "}
        <span className="underline hover:text-[#eceb0b] hover:cursor-pointer hover:no-underline" data-uid="element-1775114870157-239">
          Grails Marketing Private Limited. All Rights Reserved.
        </span>
      </p>
    </div>;
};
export default Footer;
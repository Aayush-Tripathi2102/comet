import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiStar, FiGlobe } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiSlash } from "react-icons/fi";
const Footer = () => {
  return <div className="min-h-screen bg-black text-white py-10 px-8" data-uid="element-1775085187969-161">
      <div className="flex flex-col lg:flex-row w-full " data-uid="element-1775085187969-162">
        <div className="w-full md:w-1/3" data-uid="element-1775085187969-163">
          <div className="mb-8" data-uid="element-1775085187969-164">
            <h2 className="flex items-center gap-3 text-2xl font-extrabold uppercase tracking-wide" data-uid="element-1775085187969-165">
              <FiMail className="w-6 h-6" data-uid="element-1775085187969-166" />
              GET IN TOUCH
            </h2>

            <div className="mt-6 space-y-4" data-uid="element-1775085187969-167">
              <div className="flex items-center gap-3" data-uid="element-1775085187969-168">
                <FaWhatsapp className="w-5 h-5 shrink-0" data-uid="element-1775085187969-169" />
                <span className="font-semibold" data-uid="element-1775085187969-170">Whatsapp:</span>
                <a href="tel:+919606081463" className="ml-2 underline" data-uid="element-1775085187969-171">
                  +91 9606081463
                </a>
              </div>

              <div className="flex items-center gap-3" data-uid="element-1775085187969-172">
                <FiMail className="w-5 h-5 shrink-0" data-uid="element-1775085187969-173" />
                <span className="font-semibold" data-uid="element-1775085187969-174">Support:</span>
                <a href="mailto:hello@wearcomet.com" className="ml-2 underline" data-uid="element-1775085187969-175">
                  hello@wearcomet.com
                </a>
              </div>

              <div data-uid="element-1775085187969-176">
                <div className="font-semibold" data-uid="element-1775085187969-177">
                  Gifting and Corporate Orders:
                </div>
                <a href="mailto:bulkorders@wearcomet.com" className="underline block" data-uid="element-1775085187969-178">
                  bulkorders@wearcomet.com
                </a>
              </div>

              <div data-uid="element-1775085187969-179">
                <div className="font-semibold" data-uid="element-1775085187969-180">
                  Marketing &amp; Partnership:
                </div>
                <a href="mailto:partnerships@wearcomet.com" className="underline block" data-uid="element-1775085187969-181">
                  partnerships@wearcomet.com
                </a>
              </div>

              <div className="flex items-center gap-2" data-uid="element-1775085187969-182">
                <div className="font-semibold" data-uid="element-1775085187969-183">Careers:</div>
                <a href="#" className="underline" data-uid="element-1775085187969-184">
                  Apply Here
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-700 mb-6 w-3/4" data-uid="element-1775085187969-185" />

          {/* REACH US */}
          <div data-uid="element-1775085187969-186">
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide mb-4" data-uid="element-1775085187969-187">
              <FiMapPin className="w-5 h-5" data-uid="element-1775085187969-188" />
              REACH US
            </h3>

            <address className="not-italic text-sm leading-6" data-uid="element-1775085187969-189">
              57, 60 Feet Rd, KHB Colony, 6th Block,
              <br data-uid="element-1775085187969-190" /> Koramangala, Bengaluru, Bengaluru Urban,
              <br data-uid="element-1775085187969-191" /> Karnataka, 560095
            </address>
          </div>
        </div>
        <div className="w-full md:w-1/3" data-uid="element-1775085187969-192">
          <div data-uid="element-1775085187969-193">
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide" data-uid="element-1775085187969-194">
              <FiGlobe className="w-5 h-5" data-uid="element-1775085187969-195" />
              SOCIAL
            </h3>
            <div className="flex items-center gap-8 py-12" data-uid="element-1775085187969-196">
              <a href="#" aria-label="Instagram" data-uid="element-1775085187969-197">
                <FaInstagram className="w-6 h-6" data-uid="element-1775085187969-198" />
              </a>
              <a href="#" aria-label="LinkedIn" data-uid="element-1775085187969-199">
                <FaLinkedinIn className="w-6 h-6" data-uid="element-1775085187969-200" />
              </a>
            </div>
          </div>

          <div className="h-px bg-gray-700 w-3/4" data-uid="element-1775085187969-201" />

          {/* ABOUT US */}
          <div data-uid="element-1775085187969-202">
            <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide my-6" data-uid="element-1775085187969-203">
              <FiStar className="w-5 h-5" data-uid="element-1775085187969-204" />
              ABOUT US
            </h3>
            <ul className="space-y-3 text-sm font-medium" data-uid="element-1775085187969-205">
              <li data-uid="element-1775085187969-206">
                <a href="#" className="hover:underline" data-uid="element-1775085187969-207">
                  ABOUT US
                </a>
              </li>
              <li data-uid="element-1775085187969-208">
                <a href="#" className="hover:underline" data-uid="element-1775085187970-209">
                  CRAFTSMANSHIP
                </a>
              </li>
              <li data-uid="element-1775085187970-210">
                <a href="#" className="hover:underline" data-uid="element-1775085187970-211">
                  THE VAULT
                </a>
              </li>
              <li data-uid="element-1775085187970-212">
                <a href="#" className="hover:underline" data-uid="element-1775085187970-213">
                  THE GARAGE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/3" data-uid="element-1775085187970-214">
          <h3 className="flex items-center gap-3 text-xl font-extrabold uppercase tracking-wide mb-6" data-uid="element-1775085187970-215">
            <FiSlash className="w-5 h-5" data-uid="element-1775085187970-216" />
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-sm font-medium" data-uid="element-1775085187970-217">
            <li data-uid="element-1775085187970-218">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-219">
                HOME
              </a>
            </li>
            <li data-uid="element-1775085187970-220">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-221">
                MY ACCOUNT
              </a>
            </li>
            <li data-uid="element-1775085187970-222">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-223">
                RETURN AND EXCHANGE PORTAL
              </a>
            </li>
            <li data-uid="element-1775085187970-224">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-225">
                CONTACT US
              </a>
            </li>
            <li data-uid="element-1775085187970-226">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-227">
                CARE
              </a>
            </li>
            <li data-uid="element-1775085187970-228">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-229">
                FAQ
              </a>
            </li>
            <li data-uid="element-1775085187970-230">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-231">
                T&C
              </a>
            </li>
            <li data-uid="element-1775085187970-232">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-233">
                RETURN & EXCHANGES POLICY
              </a>
            </li>
            <li data-uid="element-1775085187970-234">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-235">
                PRIVACY POLICY
              </a>
            </li>
            <li data-uid="element-1775085187970-236">
              <a href="#" className="hover:underline" data-uid="element-1775085187970-237">
                REFUND POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm" data-uid="element-1775085187970-238">
        © 2025,{" "}
        <span className="underline hover:text-[#eceb0b] hover:cursor-pointer hover:no-underline" data-uid="element-1775085187970-239">
          Grails Marketing Private Limited. All Rights Reserved.
        </span>
      </p>
    </div>;
};
export default Footer;
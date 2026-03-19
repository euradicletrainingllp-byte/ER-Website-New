import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const footerRef = useRef(null);

  return (
    <footer
      ref={footerRef}
      className="bg-[var(--color-bg-muted)] text-black py-16 md:py-24 2xl:py-28 px-6 md:px-12 2xl:px-20 z-90 border-t border-brand-400/10"
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 2xl:gap-12">
        
        <div className="lg:col-span-3 flex flex-col justify-between items-center lg:items-start space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="space-y-6 sm:space-y-8">
            <img
              src="/Home/logo.gif"
              alt="EuRadicle Logo"
              className="w-auto h-28 md:h-32 2xl:h-36 object-contain"
            />
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 text-lg sm:text-xl text-primary-navy/80">
              <a href="https://www.linkedin.com/company/euradicle-training-india/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-brand-400/20 hover:bg-white hover:text-[var(--color-primary-mauve)] transition-all duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/euradicle/?hl=en" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-brand-400/20 hover:bg-white hover:text-[var(--color-primary-mauve)] transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/EuRadicleTrainingIndia/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-brand-400/20 hover:bg-white hover:text-[var(--color-primary-mauve)] transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/channel/UC5pBaWce56rhEgrfEtj--3g" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-brand-400/20 hover:bg-white hover:text-[var(--color-primary-mauve)] transition-all duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-40 hidden lg:block">
            © 2026 EuRadicle Learning Inc.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-subheading 2xl:text-xl mb-8 2xl:mb-10 pb-3 border-b border-brand-400/10 w-full">
            Our Capabilities
          </h3>
          <nav className="flex flex-col space-y-4 2xl:space-y-5 text-body-sm 2xl:text-base text-primary-navy/80">
            <Link to="/capabilities/leadership-development" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">Leadership Development</Link>
            <Link to="/capabilities/consulting-talent-management" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">Consulting & Talent Management</Link>
            <Link to="/capabilities/assessment-development-centers" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">Assessment & Development Centers</Link>
            <Link to="/capabilities/power-skills-development" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">Power Skills Development</Link>
            <Link to="/capabilities/digital-business-transformation" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">Digital & Business Transformation</Link>
            <Link to="/capabilities/commercial-sales-enablement" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">Commercial & Sales Enablement</Link>
            <Link to="/capabilities/dei-culture-building" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">DEI & Culture Building</Link>
            <Link to="/capabilities/creative-solutions" className="hover:text-[var(--color-primary-mauve)] transition-colors w-fit">Creative Solutions</Link>
          </nav>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-subheading mb-8 pb-3 border-b border-brand-400/10 w-full">
            Contact Details
          </h3>

          <div className="flex flex-col space-y-6 2xl:space-y-8 text-body-sm 2xl:text-base text-primary-navy/80">
            
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2">
                Email
              </p>
              <a
                href="mailto:info@euradicle.com"
                className="hover:text-[var(--color-primary-mauve)] transition-colors block text-base font-medium"
              >
                info@euradicle.com
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-2">
                Inquiries
              </p>

              <a
                href="tel:+914031003306"
                className="flex items-center gap-3 hover:text-[var(--color-primary-mauve)] transition-colors"
              >
                <img
                  src="https://flagcdn.com/in.svg"
                  alt="India Flag"
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span>+91 40 3100 3306</span>
              </a>

              <a
                href="tel:+919661188313"
                className="flex items-center gap-3 hover:text-[var(--color-primary-mauve)] transition-colors"
              >
                <img
                  src="https://flagcdn.com/in.svg"
                  alt="India Flag"
                  className="w-5 h-4 object-cover rounded-sm"
                />
                <span>+91 966 118 8313</span>
              </a>

              <div
                className="flex items-center gap-3 hover:text-[var(--color-primary-mauve)] transition-colors"
              >
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="USA Flag"
                  className="w-5 h-4 object-cover rounded-sm"
                />  
                <span>+1 (713) 429-3753</span>
                <FaWhatsapp className="text-green-500 text-sm ml-1" />
              </div>

            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-subheading mb-8 pb-3 border-b border-brand-400/10 w-full">
            Global Presence
          </h3>

          <div className="space-y-8 2xl:space-y-10 text-body-sm 2xl:text-base text-primary-navy/80">
            <div className="space-y-2">
              <p className="font-bold text-primary-navy text-[10px] uppercase tracking-[0.2em] opacity-40">
                India
              </p>
              <p className="leading-relaxed">
                2nd floor Building no: 8-2-120/86/5/B<br />
                Road No 3, Banjara Hills, Hyderabad<br />
                Telangana - 500034
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-primary-navy text-[10px] uppercase tracking-[0.2em] opacity-40">
                USA
              </p>
              <p className="leading-relaxed">
                EuRadicle Learning Inc<br />
                10301 Northwest Freeway, Suite 314<br />
                Houston Texas - 77092
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-full pt-12 mt-12 2xl:pt-16 2xl:mt-16 border-t border-brand-400/10 lg:hidden text-center">
          <p className="text-[10px] uppercase tracking-widest opacity-40">
            © 2026 EuRadicle Learning Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
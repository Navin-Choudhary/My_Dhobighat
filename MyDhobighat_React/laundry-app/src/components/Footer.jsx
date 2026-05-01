function Footer() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#f8fafc] pt-16 pb-8 border-t border-gray-100 font-sans w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* Logo + About */}
          <div className="flex flex-col">
            <img
              src="https://image2url.com/r2/default/images/1773720250876-63c4399e-9abb-4864-9041-cc45e7fc2690.png"
              alt="DhobiGhat Logo"
              className="h-12 w-auto object-contain mb-6 self-start"
            />
            <p className="text-[#475569] leading-relaxed font-medium">
              Premium laundry services for your wardrobe. Quality care you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[#102052] font-bold tracking-wider text-sm mb-6 uppercase">
              Quick Links
            </h4>

            <ul className="space-y-4">

              <li>
                <button
                  onClick={() => scrollTo("home")}
                  className="text-[#475569] hover:text-[#1e3a8a] transition font-medium block text-left"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="text-[#475569] hover:text-[#1e3a8a] transition font-medium block text-left"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo("contact")}
                  className="text-[#475569] hover:text-[#1e3a8a] transition font-medium block text-left"
                >
                  Contact
                </button>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-[#102052] font-bold tracking-wider text-sm mb-6 uppercase">
              Contact Us
            </h4>

            <ul className="space-y-5">

              <li className="flex items-start space-x-3 text-[#475569] font-medium">
                <span>📞 +91 98765 43210</span>
              </li>

              <li className="flex items-start space-x-3 text-[#475569] font-medium">
                <span>✉️ mydhobighat2026@gmail.com</span>
              </li>

              <li className="flex items-start space-x-3 text-[#475569] font-medium">
                <span>
                  Shop No.2 A- Wing ITUS Dinanath Co- Hsg Society Andheri West Mumbai-400053 India
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#475569] font-medium">
          <p>© Copyright mydhobhighat All right reserved</p>

          <p>
            Designed and Developed by{" "}
            <a
              href="https://zen-tech.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3a8a] font-bold hover:text-blue-600 hover:underline transition"
            >
              Zen-Tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
function Footer() {
  return (
    <footer>
      <div className="p-4 bg-midnightBlue text-white flex flex-wrap">
        <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
          <h2 className="text-lg font-bold mb-2">LOCATION</h2>
          <p>123 Main St, Anytown, USA 12345</p>
        </div>
        <div className="w-full sm:w-1/3 text-center mb-4 sm:mb-0">
          <h2 className="text-lg font-bold mb-2">AROUND THE WEB</h2>
          <div className="space-x-4">
            <a href="#" target="_blank">
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-solid fa-globe text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 text-center">
          <h2 className="text-lg font-bold mb-2">ABOUT FREELANCER</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="px-4 py-6 bg-[#1a252f] text-white text-center">
        <p>Copyright © Your Website 2024</p>
      </div>
    </footer>
  );
}

export default Footer;

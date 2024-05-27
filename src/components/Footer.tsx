
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            Experienced Full Stack Dev adept in JavaScript, Node.js, React for
            scalable web apps on both ends.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex flex-col  justify-start">
            <a
               href="https://www.linkedin.com/in/sarvesh207/"
               target="blank"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/gaynar_sarvesh"
              target="blank"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>

            <a
              href="https://www.instagram.com/sarvesh207_/"
              target="blank"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://github.com/Sarvesh207"
              target="blank"
              className="hover:text-white transition-colors cursor-pointer duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p className="text-sm">Pune,Maharashtra</p>
          <p  className="text-sm">Email: sarveshgaynar@gmail.com</p>
          <p  className="text-sm">Phone: 7083457304</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 sarveshgaynar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

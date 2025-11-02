import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 lg:px-32">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Brand Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-3">Asit Sahoo</h1>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Passionate Full Stack Developer building creative, scalable, and
            user-friendly web solutions. Let’s connect and create something
            impactful together.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex-1 space-y-3">
          <h2 className="text-lg font-semibold text-white mb-3">Contact Info</h2>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-indigo-400" />
            <span>asitsahoo2005@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-indigo-400" />
            <span>+91 7849047603</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span>Bhadraka, Odisha</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-white mb-3">Follow Me</h2>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/asit-sahoo-28"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/asit-sahoo-41b510320"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            
           
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Asit Sahoo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

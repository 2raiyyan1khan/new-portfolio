import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-700 p-7">
      <section className="container mx-auto flex justify-center">
        <span className="text-md font-normal text-primary">
          &copy; {new Date().getFullYear()} Made with Love
        </span>
      </section>
    </footer>
  );
};

export default Footer;

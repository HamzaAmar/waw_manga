import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

function Header() {
  Router.onRouteChangeStart = () => {
    console.log("hello");
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => {
    console.log("hello");
    NProgress.done();
  };
  Router.onRouteChangeError = () => {
    NProgress.done();
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <h1 className="">WaW Manga</h1>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"></button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/mangas">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Mangas
            </a>
          </Link>
          <Link href="about_us">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              About Us
            </a>
          </Link>
          <Link href="contact_us">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Contact Us
            </a>
          </Link>
        </div>
        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className=" cursor-pointer flex px-10 sm:px-20 text-xl whitespace-nowrap
      space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {/*the requests here is from file util/requests*/}
          {/*key is fetchTrending*/}
          {/*title and url is value*/}
          {Object.entries(requests).map(([key, {title, url}]) => (
              <h2    
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
                className="last:pr-16 cursor-pointer transition duration-100 
                transform hover:scale-125 hover:text-white 
                active:text-lime-400"
              >
                {title}
              </h2>

          ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </nav>
  );
}

export default Nav;

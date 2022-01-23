import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>
          {/*the requests here is from file util/requests*/}
          {/*key is fetchTrending*/}
          {/*title and url is value*/}
          {Object.entries(requests).map(([key, {title, url}]) => (
              <h2>{title}</h2>
          ))}
      </div>
    </nav>
  );
}

export default Nav;

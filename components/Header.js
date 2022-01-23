import {BadgeCheckIcon,
        CollectionIcon,
        HomeIcon,
        LightningBoltIcon,
        SearchIcon,
        UserIcon,
        ChartBarIcon,
        CalendarIcon,
    } from "@heroicons/react/outline"
import Image from "next/image";
import HeaderNav from "./HeaderNav";


function Header() {
  return( 
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
          <div className="flex flex-grow justify-evenly max-w-2xl">
              <HeaderNav title='HOME' Icon={HomeIcon }/>
              <HeaderNav title='TRENDING' Icon={LightningBoltIcon }/>
              <HeaderNav title='VERIFIED' Icon={BadgeCheckIcon }/>
              <HeaderNav title='COLLECTION' Icon={CollectionIcon }/>
              <HeaderNav title='SEARCH' Icon={SearchIcon}/>
              <HeaderNav title='ACCOUNT' Icon={UserIcon}/>
          </div>
          {/*object contain doesnt brake the pixel of logo*/}
          <Image className="object-contain " src="https://links.papareact.com/ua6" width={200} height={100}/>
      </header>
  );
}

export default Header;

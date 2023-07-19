import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map(item => <a href={`#${item}`} key={item}>{item}</a>)}
    </nav>
  );
}

export default NavBar;

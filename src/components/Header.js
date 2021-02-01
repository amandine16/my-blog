import NavigationMenu from "./NavigationMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>My Blog</h1>
        <h2>An awesome baseline</h2>
      </div>
      <NavigationMenu />
    </div>
  );
};

export default Header;

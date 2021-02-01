import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

function App() {
  return (
    <div className="app container">
      <Header />
      <div className="main">
        <div className="mainContent">
          <MainContent
            title="TITLE TOP"
            titleDescription="Title description top"
            description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
          />
          <MainContent
            title="TITLE BOTTOM"
            titleDescription="Title description bottom"
            description="Morbi at pharetra odio. Quisque eget erat ipsum. Praesent cursus ac augue a rutrum. Vestibulum hendrerit nulla eget justo tempor commodo. Nam quis tincidunt tortor. Vivamus eu posuere nisi, at ullamcorper dui. Integer pulvinar, nisl a lacinia egestas, nisi nulla mollis urna, a tempus odio augue sit amet est. Aenean commodo congue velit non eleifend. Donec ac metus in diam lobortis feugiat vitae ac ligula."
          />
        </div>
        <SideContent
          title="ABOUT ME"
          description="Cras interdum pharetra felis eu faucibus."
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;

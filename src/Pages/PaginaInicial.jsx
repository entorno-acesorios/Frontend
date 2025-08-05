import Hero from '../Components/Home/Hero.jsx';
import Banner from '../Components/Home/Banner.jsx';
import ProductHighlights from '../Components/Home/ProductHighlights.jsx';
import DropdownMenu from '../Components/Home/DropdownMenu.jsx';
import SearchBar from '../Components/Search/SearchBar.jsx';

  const PaginaInicial = () => {
    return (
      <main>
        <Hero />
        <DropdownMenu />
        <SearchBar />
        <Banner />
        <ProductHighlights />
      </main>
    );
  }

export default PaginaInicial;



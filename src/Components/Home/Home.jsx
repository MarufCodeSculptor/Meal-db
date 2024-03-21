import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';
import Banner from '../Headers/Banner';
import Nav from '../Headers/Nav';

const Home = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <Nav></Nav>
      <Banner></Banner>

      <div className="min-h-screen container mx-auto">
        <Foods></Foods>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;

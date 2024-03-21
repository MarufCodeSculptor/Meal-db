import Footer from '../Footer/Footer';
import Banner from '../Headers/Banner';
import Nav from '../Headers/Nav';

const Home = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <Nav></Nav>
      <Banner></Banner>
      <h2 className="text-4xl  bg-blue-100 text center p-10 rounded-lg shadow-lg font-bold text-blue-600 cursor-pointer">
        Home section
      </h2>

      <Footer></Footer>
    </div>
  );
};

export default Home;

import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import InstagramFeed from '../components/sections/InstagramFeed';
import Diagnostic from '../components/sections/Diagnostic';
import Company from '../components/sections/Company';

const Home = () => {
    return (
        <div className="bg-luxury-black min-h-screen text-white">
            <Hero />
            <About />
            <Services />
            <InstagramFeed />
            <Diagnostic />
            <Company />
        </div>
    );
};

export default Home;

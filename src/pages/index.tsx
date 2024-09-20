import AboutLaboratory from '@/components/aboutLaboratory';
import Carousel from '@/components/carousel';
import Collaborators from '@/components/collaborators';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Carousel />
        <AboutLaboratory />
        <Collaborators />
      </main>
      <Footer />
    </div>
  );
}

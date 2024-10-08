import Carousel from '@/components/carousel';
import RecentPublications from '@/components/recentPublications';
import ServiceRequest from '@/components/serviceRequest';

export default function Home() {
  return (
    <>
      <Carousel />
      <ServiceRequest />
      <RecentPublications />
    </>
  );
}

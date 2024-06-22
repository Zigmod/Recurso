import TopicsList from "../components/TopicsList";
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Navbar />
      <TopicsList />

    </div>
  );
}

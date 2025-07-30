
import { Footer } from "./(notAuthentificated)/Footer";
import { Navbar } from "./(notAuthentificated)/Navbar";
import HomePage from "./(notAuthentificated)/site/page";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage /> 
      <Footer/>
    </div>
  );
}

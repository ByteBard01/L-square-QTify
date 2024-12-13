import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        data={[
          {
            image: "https://via.placeholder.com/150",
            title: "New Bollywood",
            follows: 100,
          },
          {
            image: "https://via.placeholder.com/150",
            title: "New English Songs",
            follows: 100,
          },
        ]}
      />
      <h1 className="app-title">New Albums</h1>
      <Section
        title="New Albums"
        data={[
          {
            image: "https://via.placeholder.com/150",
            title: "New Bollywood",
            follows: 100,
          },
          {
            image: "https://via.placeholder.com/150",
            title: "New English Songs",
            follows: 100,
          },
    
        ]}
      />
    </div>
  );
}

export default App;

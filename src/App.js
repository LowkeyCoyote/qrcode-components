
import './App.css';
import Card from "./components/Card/Card.js"

function App() {

    const cardItems = {
        title : "Improve your front-end skills by building projects",
        description : "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    }

  return (
    <main className="App">
      <Card
      title={cardItems.title}
      description={cardItems.description}
      />
    </main>
  );
}

export default App;

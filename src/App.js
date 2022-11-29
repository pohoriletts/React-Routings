import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from "./components/header";
import List from "./components/list"
import Home from "./components/home"

const paintings = [
  { title: "Picture", description: "Beatiful picture", genre: "Picture", author: "Van Gogh", year: 1900, img: "https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg" },
  { title: "Picture", description: "Beatiful picture", genre: "Picture", author: "Van Gogh", year: 1453, img: "https://www.thisiscolossal.com/wp-content/uploads/2021/03/van-gogh-2.jpg" },
  { title: "Picture", description: "Beatiful picture", genre: "Picture", author: "Van Gogh", year: 1564, img: "http://cdn.shopify.com/s/files/1/0223/4033/articles/V1716_1024x1024.jpg?v=1490384051" },
  { title: "Picture", description: "Beatiful picture", genre: "Picture", author: "Van Gogh", year: 1345, img: "https://www.artyfactory.com/art_appreciation/great-artists/vincent-van-gogh/images/van-gogh-chateau-at-auvers-at-sunset-1890.jpg" },
]

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="List" element={<List list={paintings} />} />
            <Route path="*" element={<img className="error" src="https://i.makeagif.com/media/3-19-2020/PsagVG.gif"></img>}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

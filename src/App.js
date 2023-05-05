import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/homescreen";
import Aboutscreen from "./screens/aboutscreen";
import Productscreen from "./screens/productscreen";
import Galleryscreen from "./screens/galleryscreen";
import Contactscreen from "./screens/contactscreen";
import Errorscreen from "./screens/errorscreen";
import Signupscreen from "./screens/signupscreen";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* this names going to the components as props... */}
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<Aboutscreen name="about" />} />
          <Route path="/product" element={<Productscreen name="product" />} />
          <Route path="/gallery" element={<Galleryscreen name="gallery" />} />
          <Route path="/contact" element={<Contactscreen name="contact" />} />
          <Route path="/signup" element={ <Signupscreen/> } />
          <Route path="*" element={<Errorscreen name="error_404" />} />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

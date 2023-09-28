import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="container">
    <div className="image-container ">
      <h1> Super over League</h1>
      <div className="images">
        <div className="image">
          <img
            src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1695903228/royal_b6aqjd.webp"
            height="70px"
            width="70px"
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/ddsus8zy7/image/upload/v1695903264/csk_tyjtxq.jpg"
            height="70px"
            width="70px"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

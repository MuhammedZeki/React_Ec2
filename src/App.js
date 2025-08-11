import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchMessage = async () => {
      const res = await axios.get(`http://localhost:5000/message`);
      if (res.status === 200) {
        setMessage(res.data.message);
      }
    };
    fetchMessage();
  }, []);
  return <div className="">{message}</div>;
}

export default App;

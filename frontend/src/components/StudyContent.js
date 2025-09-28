import { useEffect, useState } from "react";
import API from "../api";

export default function StudyContent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/study");
      setContent(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>DevOps & SRE Study Material</h2>
      {content.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

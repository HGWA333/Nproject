import axios from "axios";
import { useEffect } from "react";
export const Sample2 = () => {
  useEffect(() => {
    (async () => {
      await axios.post("http://localhost:8080/api/nft");
    })();
  }, []);

  return <div>Sample2</div>;
};

export default Sample2;

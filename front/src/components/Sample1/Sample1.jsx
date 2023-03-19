import { useEffect, useState } from "react";
import { nft } from "../../api/index";
export const Sample1 = () => {
  const [Nft, setNft] = useState();

  useEffect(() => {
    nft().then(nftData => {
      setNft(nftData);
    });
  }, []);

  return <div>Sample1</div>;
};

export default Sample1;

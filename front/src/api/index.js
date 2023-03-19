import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const nft = async nftData => {
  return (await request.post("nft/find", nftData)).data;
};

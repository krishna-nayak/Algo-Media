import axios from "axios";

const client = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const API_DEFAULT_PARAMS = {
  part: "replies,snippet,id",
  maxResults: 100,
};
export const listThreadDataApi = async (videoId) => {
  const response = await client.get("/commentThreads", {
    params: {
      // spread the default params
      ...API_DEFAULT_PARAMS,
      // add your own parameters here
      videoId: videoId,
    },
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_MY_AUTH_KEY,
    },
  });

  console.log(response.data);
  return response.data;
};

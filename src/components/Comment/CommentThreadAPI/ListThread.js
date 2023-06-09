import axios from "axios";

const client = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

const API_DEFAULT_PARAMS = {
  part: "replies,snippet,id",
  maxResults: 100,
};

export const listThreadDataApi = async (videoId) => {
  console.log("videoId", videoId);
  const response = await client.get("/commentThreads", {
    params: {
      ...API_DEFAULT_PARAMS,
      videoId: videoId,
    },
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_MY_AUTH_KEY,
    },
  });

  console.log(response.data);
  return response.data;
};


// Add comment

// Update comment

// Delete comment

// set moderation status

// mark as Span

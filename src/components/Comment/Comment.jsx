import { Box, Button, Divider, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import UserComment from "./UserComment";
import CommentInput from "./CommentInput";

// This data is used to display the comment of the each user
import listThreadData from "./CommentThreadsData/listThreadData";
import { listThreadDataApi } from "./CommentThreadAPI/ListThread";
// This function is used to display the comment of the each user

const Comment = ({ id }) => {
  useEffect(() => {
    console.log("id", id);

    const commentList = async () => {
      const response = await listThreadDataApi(id);
      console.log(response);
      setCommentThreadsData(response);
    };
    commentList();
  }, [id]);

  const [alignment, setAlignment] = useState("top");
  console.log(listThreadData);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [CommentThreadsData, setCommentThreadsData] = useState(listThreadData);
  return (
    <Box style={{ background: "#fff", border: "1px solid #bbb", borderRadius: "10px", padding: "20px 20px 0", maxWidth: "calc(100vh-300px)" }}>
      {/* TODO: TYPOGRAPHY */}
      <Stack direction={"row"} justifyContent={"space-between"} marginY={"1rem"}>
        <Typography variant="h5" component={"h5"} fontWeight="bold">
          Comment
        </Typography>
        <ToggleButtonGroup size="small" color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
          <ToggleButton value="top">Top</ToggleButton>
          <ToggleButton value="newest">Newest</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <CommentInput />
      <Divider />

      <div>
        {CommentThreadsData.items.map((data, index) => (
          <UserComment key={index} {...{ data }} />
        ))}
      </div>

      {/* FIXME: moblie screen button display  */}
      {/* <Button sx={{ width: "100%" }} variant="outlined">
        Show More
      </Button> */}
    </Box>
  );
};

export default Comment;

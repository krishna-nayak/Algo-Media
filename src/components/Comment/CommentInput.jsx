import { Box, IconButton, Input, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const CommentInput = () => {
  return (
    <Stack component="form" direction={"row"} gap={3} marginY={"1rem"} alignItems={"center"} justifyContent={"center"} sx={{ width: "100%" }} autoComplete="off">
      {/* TODO: ICON user */}
      <Box sx={{ display: "inline" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width={"40"} alt="profile-img" />
      </Box>
      <Input id="outlined-basic" name="comment" placeholder="Add a comment..." label="" variant="outlined" style={{ width: "80%" }} autoComplete="off" />
      <IconButton aria-label="send" color="primary" size="large">
        <SendIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default CommentInput;

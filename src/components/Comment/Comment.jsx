import { Box, Button, Divider, IconButton, Input, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import UserComment from "./UserComment";

const Comment = () => {
  const [alignment, setAlignment] = useState("top");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Box style={{ background: "#fff", border: "1px solid #bbb", borderRadius: "10px", padding: "20px" }}>
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
      <Divider />

      <div>
        {[{}].map((data) => (
          <UserComment />
        ))}
      </div>

      <Button sx={{ width: "100%" }} variant="outlined">
        Show More
      </Button>
    </Box>
  );
};

export default Comment;

import { Box, Button, Divider, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

import React, { useState } from "react";
import UserComment from "./UserComment";
import CommentInput from "./CommentInput";

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
      <CommentInput />
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

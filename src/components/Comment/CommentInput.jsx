import { Box, IconButton, Input, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const CommentInput = (props) => {
  const { replyname } = props;

  const [comment, setComment]=React.useState(replyname || "");
  return (
    <Stack component="form" direction={"row"} gap={3} marginY={"1rem"} alignItems={"center"} justifyContent={"center"} sx={{ width: "100%" }} autoComplete="off">
      {/* TODO: ICON user */}
      <Box sx={{ display: "inline" }}>
        <img
          src="https://yt3.ggpht.com/ytc/AGIKgqPbuTr_miPkiANBbeCy2PAzB9oaptatMWPp3_fc2w=s48-c-k-c0x00ffffff-no-rj"
          width={"50"}
          alt="profile-img"
          style={{ borderRadius: "100%" }}
        />
      </Box>
      <Input
        value={comment}
        autoFocus={true}
        id="outlined-basic"
        name="comment"
        placeholder="Add a comment..."
        variant="outlined"
        style={{ width: "80%" }}
        autoComplete="off"
        onChange={(e) => setComment(e.target.value)}
      />
      <IconButton aria-label="send" color="primary" size="large">
        <SendIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default CommentInput;

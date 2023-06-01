import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CommentInput from "./CommentInput";

const UserReplies = ({ reply }) => {
  const { snippet } = reply;
  const { authorDisplayName, authorProfileImageUrl, textDisplay } = snippet;

  const [showReplyInput, setShowReplyInput] = React.useState(false);
  return (
    <Box>
      <Stack direction={"row"} gap={2} sx={{ paddingTop: "20px" }}>
        <img src={authorProfileImageUrl} width="50" height={"50"} alt="profile-pic" style={{ borderRadius: "100%", objectFit: "cover" }} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" component="h6" fontWeight="bold">
            {authorDisplayName}
          </Typography>
          {/* TODO: Text "Show More" button option so that overflow of message does not affect the user experience. */}
          <Typography variant="body1" component="p" dangerouslySetInnerHTML={{ __html: textDisplay }}></Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="text" color="secondary" onClick={() => setShowReplyInput((prev) => !prev)}>
              {showReplyInput ? "Cancel" : "Reply"}
            </Button>
          </Box>
          {showReplyInput && <CommentInput replyname={"@" + authorDisplayName} />}
        </Box>
      </Stack>

      {/* <Divider /> */}
    </Box>
  );
};

export default UserReplies;

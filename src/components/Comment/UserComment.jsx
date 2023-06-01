import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CommentInput from "./CommentInput";
import UserReplies from "./UserReplies";
// import UserReplies from "./UserReplies";

// This function is used to display the comment of the each user
const UserComment = ({ data }) => {
  // const  = props;
  // console.log(data.snippet?.topLevelComment);
  const { snippet, replies } = data;
  // console.log(snippet);
  const { topLevelComment, totalReplyCount } = snippet;
  const { authorDisplayName, authorProfileImageUrl, textDisplay, publishedAt } = topLevelComment?.snippet;
  // console.log(snippet?.topLevelComment?.snippet);

  const [showReplyInput, setShowReplyInput] = React.useState(false);
  const [showReplies, setShowReplies] = React.useState(false);

  return (
    <Box>
      <Stack direction={"row"} gap={2} sx={{ paddingY: "20px" }}>
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
          {showReplyInput && <CommentInput />}
          {totalReplyCount > 0 && (
            <Button startIcon={showReplies ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} onClick={() => setShowReplies((prev) => !prev)}>
              {totalReplyCount} Reply
            </Button>
          )}
          {showReplies && replies?.comments.map((reply, index) => <UserReplies key={index} {...{ reply }} />)}
        </Box>
      </Stack>

      <Divider />
    </Box>
  );
};

export default UserComment;

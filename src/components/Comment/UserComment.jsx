import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CommentInput from "./CommentInput";
// import UserReplies from "./UserReplies";

// This function is used to display the comment of the each user
const UserComment = ({ data }) => {
  // const  = props;
  // console.log(data.snippet?.topLevelComment);
  const { snippet } = data;
  const { topLevelComment, totalReplyCount } = snippet;
  const { authorDisplayName, authorProfileImageUrl, textDisplay, publishedAt } = topLevelComment?.snippet;
  // console.log(snippet?.topLevelComment?.snippet);

  const [showReplyInput, setShowReplyInput] = React.useState(false);

  return (
    <Box>
      <Stack direction={"row"} gap={2} sx={{ paddingY: "20px" }}>
        <img src={authorProfileImageUrl} width="50" height={"50"} alt="profile-pic" style={{ borderRadius: "100%", objectFit: "cover" }} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" component="h6" fontWeight="bold">
            {authorDisplayName}
          </Typography>
          {/* TODO: Text "Show More" button option so that overflow of message does not affect the user experience. */}
          <Typography variant="body1" component="p">
            {textDisplay}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="text" color="secondary" onClick={() => setShowReplyInput((prev) => !prev)}>
              {showReplyInput ? "Cancel" : "Reply"}
            </Button>
          </Box>
          {showReplyInput && <CommentInput />}
          {totalReplyCount > 0 && <Button startIcon={<ArrowDropDownIcon />}>{totalReplyCount} Reply</Button>}
          {/* {reply.length > 0 && <UserReplies replies={replies} />} */}
        </Box>
      </Stack>

      <Divider />
    </Box>
  );
};

export default UserComment;

import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// This function is used to display the comment of the each user
const UserComment = (props) => {
  const {
    message = "What's your favorite song by The Chainsmokers?",
    name = "keishna",
    profilePic = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    reply = [{ name: "keishna", message: "I love the song Closer" }],
  } = props;

  return (
    <Box>
      <Stack direction={"row"} gap={2} sx={{ paddingY: "20px" }}>
        <img src={profilePic} width="50" height={"50"} alt="profile-pic" style={{ borderRadius: "100%", objectFit: "cover" }} />
        <Box>
          <Typography variant="h6" component="h6" fontWeight="bold">
            {name}
          </Typography>
          {/* TODO: Text "Show More" button option so that overflow of message does not affect the user experience. */}
          <Typography variant="body1" component="p">
            {message}
          </Typography>
          {reply.length > 0 && <Button startIcon={<ArrowDropDownIcon />}>{reply.length} Reply</Button>}
        </Box>
      </Stack>

      <Divider />
    </Box>
  );
};

export default UserComment;

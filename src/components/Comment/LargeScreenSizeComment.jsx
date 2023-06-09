import { Box, Divider, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import UserComment from "./UserComment";

const LargeScreenSizeComment = ({ CommentThreadsData }) => {
    const [alignment, setAlignment] = useState("top");
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Box style={{ background: "#fff", border: "1px solid #bbb", borderRadius: "10px", padding: "20px 20px 0", maxWidth: "calc(100vh-300px)" }}>
            <Stack direction={"row"} justifyContent={"space-between"} marginY={"1rem"}>
                <Typography variant="h5" component={"h5"} fontWeight="bold">
                    Large
                </Typography>
                <ToggleButtonGroup size="small" color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                    <ToggleButton value="top">Top</ToggleButton>
                    <ToggleButton value="newest">Newest</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <CommentInput />
            <Divider />

            <div>
                {CommentThreadsData?.items.map((data, index) => (
                    <UserComment key={index} {...{ data }} />
                ))}
            </div>
        </Box>
    );
};

export default LargeScreenSizeComment;

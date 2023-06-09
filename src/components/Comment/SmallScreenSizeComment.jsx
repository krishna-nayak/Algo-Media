import { Box, Button, Divider, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import UserComment from "./UserComment";
import { useEffect } from "react";

import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const SmallScreenSizeComment = ({ CommentThreadsData }) => {
    const [alignment, setAlignment] = useState("top");

    const [commentData, setCommentData] = useState([]);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        if (showMore) setCommentData(CommentThreadsData?.items);
        else setCommentData(CommentThreadsData?.items.slice(0, 1));
    }, [CommentThreadsData, showMore]);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleShowMore = () => {
        if (showMore)
            window.scrollTo({
                top: 10,
                left: 0,
                behavior: "smooth",
            });
        setShowMore((prev) => !prev);
    };

    return (
        <Box style={{ background: "#fff", border: "1px solid #bbb", borderRadius: "10px", padding: "2px 20px 10px", maxWidth: "calc(100vh-300px)" }}>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                marginY={"1rem"}
                sx={{
                    background: "white",
                    padding: "25px 0 10px",
                    position: showMore ? "sticky" : "relative",
                    top: "0",
                    zIndex: "1",
                }}
            >
                <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                    {showMore && (
                        <IconButton aria-label="cancel" onClick={handleShowMore}>
                            <ClearOutlinedIcon fontSize="large" />
                        </IconButton>
                    )}

                    <Typography variant="h5" component={"h5"} fontWeight="bold">
                        Small Comment
                    </Typography>
                </Stack>
                <ToggleButtonGroup size="small" color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
                    <ToggleButton value="top">Top</ToggleButton>
                    <ToggleButton value="newest">Newest</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <CommentInput />
            <Divider />

            <div>
                {commentData?.map((data, index) => (
                    <UserComment key={index} {...{ data }} />
                ))}
                <Button sx={{ width: "100%" }} variant="outlined" onClick={handleShowMore}>
                    {showMore ? "Show Less" : "Show More"}
                </Button>
            </div>
        </Box>
    );
};

export default SmallScreenSizeComment;

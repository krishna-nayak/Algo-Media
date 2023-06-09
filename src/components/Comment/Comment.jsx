import React, { useEffect, useState } from "react";
import { listThreadDataApi } from "./CommentThreadAPI/ListThread";
import LargeScreenSizeComment from "./LargeScreenSizeComment";
import useWindowSize from "../../hooks/useWindowSize";
import SmallScreenSizeComment from "./SmallScreenSizeComment";

const Comment = ({ id }) => {
    const [CommentThreadsData, setCommentThreadsData] = useState();
    useEffect(() => {
        console.log("id", id);

        const commentList = async () => {
            const response = await listThreadDataApi(id);
            console.log(response);
            setCommentThreadsData(response);
        };
        commentList();
    }, [id]);

    const { width } = useWindowSize();
    return width >= 900 ? <LargeScreenSizeComment CommentThreadsData={CommentThreadsData} /> : <SmallScreenSizeComment CommentThreadsData={CommentThreadsData} />;
};

export default Comment;

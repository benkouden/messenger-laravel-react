import { usePage } from "@inertiajs/react";
import React from "react";

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedconversations = page.props.selectedconversations;

    console.log("conversaton", conversations);
    console.log("selectedconversations", selectedconversations);

    return (
        <>
            chattt
            <div>{children}</div>
        </>
    );
};

export default ChatLayout;

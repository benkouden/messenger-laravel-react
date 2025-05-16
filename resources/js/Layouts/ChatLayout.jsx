import { usePage } from "@inertiajs/react";
import Echo from "laravel-echo";
import React, { useEffect } from "react";

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedconversations = page.props.selectedconversations;

    console.log("conversaton", conversations);
    console.log("selectedconversations", selectedconversations);

    useEffect(() => {
        Echo.join("online")
            .here((users) => {
                console.log("here", users);
            })
            .joining((user) => {
                console.log("here", user);
            })
            .leaving((user) => {
                console.log("here", user);
            })
            .error((error) => {
                console.log("error", error);
            });
    }, []);

    return (
        <>
            chattt
            <div>{children}</div>
        </>
    );
};

export default ChatLayout;

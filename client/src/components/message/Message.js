import { useEffect } from "react";

const Message = ({messages}) => {

    const content = messages?.map((item, i) => <li key={i}>{item}</li>)

    return (
        <ul>
            {content}
        </ul>
    )
}
export default Message;
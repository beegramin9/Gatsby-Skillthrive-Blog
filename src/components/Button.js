import React from "react";
import { ButtonWrapper } from "../styles";

export const Button = ({children, href}) => {
    console.log('href',href);
    return (
        <ButtonWrapper to={'/'+href}>{children}</ButtonWrapper>
        /* to={"/" + href},  to={href}*/
        /* Gatsby에는 문제가 없고, 왜? slug가 앞에 페이지 없이
        깔꿈하게 들어오거든, Link에 문제가 있는 것으로 판명 */
        /* Gatsby Link Doc에서도 /blog 이런식으로 앞에 / 붙이라고 나와있음 */
    )
}
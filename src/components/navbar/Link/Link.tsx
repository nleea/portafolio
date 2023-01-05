import { PropsWithChildren } from "react";
import styled from "styled-components";


interface PropsLink {
    link: string;
    route: string;
    className?: any;
    font?: boolean;
    size?: number;
}

type Props<Props = {}> = PropsWithChildren<Props>

const LinkComponent = (props: Props<PropsLink>) => {
    return (
        <a href={props.route} className={props.className}>
            {props.link}
        </a>
    )
}

export const Link = styled(LinkComponent)`
    padding-top: 1rem;
    font-size: ${({ size }) => size +"px"}; 
    font-weight: 700;
    padding: 10px;
    line-height:1;
    display: block;
    color:black;
    text-decoration: none;
    font-family: ${({ font }) => font && "Over the Rainbow,cursive;"};
    max-width: fit-content;
`;
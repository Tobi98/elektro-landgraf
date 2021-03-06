import { sbEditable } from "@storyblok/storyblok-editable";
import React, { FunctionComponent } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import styled from "styled-components";

// interface Text extends DefaultBlok {
//     text: Richtext;
// }

interface Props {
    blok: any;
}

const TextBlock: FunctionComponent<Props> = ({ blok: { text, component, _editable, _uid } }) => {
    return (
        <Wrapper {...sbEditable({ text, component, _editable, _uid })} key={_uid}>
            {render(text)}
        </Wrapper>
    );
};

export default TextBlock;

const Wrapper = styled.div`
    a {
        color: black;

        &:hover {
            color: white;
        }
    }

    p,
    a {
        font-size: 12px;

        ${({ theme }) => theme.breakpoints.up("sm")} {
            font-size: 14px;
        }

        ${({ theme }) => theme.breakpoints.up("md")} {
            font-size: 16px;
        }
    }
`;

import React, { FunctionComponent } from "react";
import { StoryData } from "storyblok-js-client";
import styled from "styled-components";

import DynamicComponent from "../components/DynamicComponent";

interface Props {
    footer: StoryData;
}

const Footer: FunctionComponent<Props> = ({ footer }) => {
    return <Wrapper>{footer && <DynamicComponent blok={footer.content} />}</Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.palette.secondary.main};
    background: ${({ theme }) =>
        `linear-gradient(10deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 37%, ${theme.palette.primary.light} 100%)`};
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    margin-top: auto;
    min-height: 100px;
`;

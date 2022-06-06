import { Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { StoryData } from "storyblok-js-client";
import styled from "styled-components";

interface Props {
    footer: StoryData;
}

const Footer: FunctionComponent<Props> = ({ footer }) => {
    return (
        <Wrapper>
            <NameTypography>Elektrotechnik Landgraf GmbH</NameTypography>
            <OtherTextTypography>
                5310 St. Lorenz, Höribachstraße 46 Top 1 | Tel.: <a href="tel:06232 36731">06232 36731</a> |{" "}
                <a href="mailto:office@elektrotechnik-landgraf.at">office@elektrotechnik-landgraf.at</a>
            </OtherTextTypography>
            {/* {footer && <DynamicComponent blok={footer.content} />} */}
        </Wrapper>
    );
};

export default Footer;

const Wrapper = styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.palette.secondary.main};
    background: ${({ theme }) =>
        `linear-gradient(10deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 37%, ${theme.palette.primary.light} 100%)`};
    /* padding-top: 50px; */
    /* display: grid; */
    /* grid-template-columns: repeat(24, 1fr); */
    margin-top: auto;
    min-height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    padding: 20px 0;
`;

const NameTypography = styled(Typography)`
    && {
        font-size: 1.15rem;
        font-weight: 700;
        text-align: center;
    }
`;

const OtherTextTypography = styled(Typography)`
    && {
        font-size: 1.15rem;
        text-align: center;
    }
`;

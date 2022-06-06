import { Typography } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import CookieBot from "react-cookiebot";
import { StoryData } from "storyblok-js-client";
import styled from "styled-components";

import Logo from "../assets/Logo.png";
import Footer from "./Footer";
import Header, { MenuProps } from "./Header";

interface Props {
    footer: StoryData;
    menu: MenuProps[];
    popUp: any;
    children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ footer, children, menu, popUp }) => {
    const cookiebotId: string = String(process.env.REACT_APP_COOKIEBOTID);

    return (
        <>
            {/* <PopUp content={popUp[0].content} /> */}
            <Header menuItems={menu} />
            <ContentWrapper>
                <MoreTypography variant="h1">More coming soon...</MoreTypography>
                <LogoWrapper>
                    <Link href="/" passHref>
                        <a>
                            <Image src={Logo} alt="Logo Elektrotechnik Landgraf" />
                        </a>
                    </Link>
                </LogoWrapper>
                <JobTypography variant="h2">Gesucht Lehrling: Elektroinstallationstechniker</JobTypography>
            </ContentWrapper>
            {/* <Content open={false}>{children}</Content> */}
            <Footer footer={footer} />
            <CookieBot domainGroupId={cookiebotId} />
        </>
    );
};

export default Layout;

interface ContentProps {
    open?: boolean;
}

const Content = styled.main<ContentProps>`
    transition: all 0.5s ease-in;
    margin-left: ${({ open }) => (open ? -100 : 0)}vw;
    position: relative;
    /* width: 100vw; */
    min-height: calc(100vh - 225px);
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        margin-left: ${({ open }) => (open ? -450 : 0)}px;
    }
`;

const ContentWrapper = styled(Content)`
    justify-content: center;
`;

const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 100px;

    ${({ theme }) => theme.breakpoints.down("md")} {
        padding: 20px 20px;
        padding: 20px 50px;
    }
`;

const MoreTypography = styled(Typography)`
    && {
        font-weight: 500;
        padding: 20px 100px;

        ${({ theme }) => theme.breakpoints.down("md")} {
            padding: 20px 50px;
        }

        ${({ theme }) => theme.breakpoints.down("sm")} {
            padding: 20px 20px;
            font-size: 3rem;
        }
    }
`;

const JobTypography = styled(Typography)`
    && {
        padding: 20px 100px;
        overflow-wrap: break-word;

        ${({ theme }) => theme.breakpoints.down("md")} {
            padding: 20px 50px;
        }

        ${({ theme }) => theme.breakpoints.down("sm")} {
            padding: 20px 20px;
            font-size: 1.75rem;
        }
    }
`;

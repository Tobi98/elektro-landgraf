import Link from "next/link";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface MenuProps {
    url: string;
    name: string;
    position: number;
}

interface HeaderProps {
    menuItems: MenuProps[];
}

const Header: FunctionComponent<HeaderProps> = ({ menuItems }) => {
    return (
        <Wrapper>
            <MenuItemsWrapper>
                {menuItems.length === 1 ? (
                    <></>
                ) : (
                    menuItems.map((item: MenuProps) => (
                        <MenuItem key={item.position}>
                            <Link passHref href={item.url === "home" ? "/" : item.url}>
                                <LinkInner>{item.name}</LinkInner>
                            </Link>
                        </MenuItem>
                    ))
                )}
            </MenuItemsWrapper>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.header`
    background: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) =>
        `linear-gradient(162deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 37%, ${theme.palette.primary.light} 100%)`};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    position: relative;
    min-height: 75px;
`;

const MenuItemsWrapper = styled.div`
    grid-column: 12 / span 12;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;

    ${({ theme }) => theme.breakpoints.up("sm")} {
        grid-column: 12 / span 12;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
        grid-column: 12 / span 12;
    }
`;

const LinkInner = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.palette.text.primary};
`;

const MenuItem = styled.div``;

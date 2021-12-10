import React from 'react'
import styled from 'styled-components/macro'

import { BREAK_POINTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import Icon from '../Icon'
import UnstyledButton from '../UnstyledButton'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <BigNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </BigNav>
        <SmallNav>
          <Icon id="shopping-bag" strokeWidth={2} />
          <Icon id="search" strokeWidth={2} />
          <Button onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </Button>
        </SmallNav>
        <Side />
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-top: 1px solid var(--color-gray-300);

  @media (max-width: ${BREAK_POINTS.laptop}) {
    border-top: 4px solid var(--color-gray-900);
    border-bottom: 1px solid var(--color-gray-300);
    align-items: center;
  }
`

const SmallNav = styled.nav`
  display: none;
  gap: 40px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;

  @media (max-width: ${BREAK_POINTS.phone}) {
    gap: 24px;
  }
`

const BigNav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 7vw - 2.75rem, 2.5rem);
  margin: 0px 48px;
  overflow: auto;

  @media (max-width: ${BREAK_POINTS.tablet}) {
    display: none;

    & + ${SmallNav} {
      display: flex;
    }
  }
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Button = styled(UnstyledButton)``

export default Header

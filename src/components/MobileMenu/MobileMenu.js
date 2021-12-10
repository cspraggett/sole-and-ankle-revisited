/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label={'Menu'}>
        <Button onClick={onDismiss}>
          <Icon id="close" />
        </Button>
        <NavContent aria-label={'Main options'}>
          <VisuallyHidden>Main options</VisuallyHidden>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavContent>
        <FooterContent aria-label={'Footer'}>
          <VisuallyHidden>Footer</VisuallyHidden>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterContent>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 75px;
  background: var(--color-backdrop);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled(DialogContent)`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  width: 300px;
  margin-left: 32px;
  padding-bottom: 8px;

  & a {
    text-decoration: none;
  }
`
const Button = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: 32px;
  margin-right: 22px;
  color: var(--color-gray-900);
`

const NavContent = styled(Content)`
  font-size: ${() => 18 / 16 + 'rem'};
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  & a {
    margin-bottom: 22px;
  }
  & a:link {
    color: var(--color-gray-900);
  }

  & a:visited {
    color: var(--color-secondary);
  }
`

const FooterContent = styled(Content)`
  font-size: ${() => 14 / 16 + 'rem'};

  & a {
    margin-bottom: 14px;
  }
  & a:link {
    color: var(--color-gray-700);
  }
`

export default MobileMenu

/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { COLORS, QUERIES } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay>
      <Content aria-label={'hello'}>
        <Button onClick={onDismiss}>
          <Icon id="close" />
        </Button>
        <NavContent aria-label={'hello'}>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavContent>
        <FooterContent aria-label={'hello'}>
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
  // left: 0;
  bottom: 0;
  right: 0;
  padding-left: 75px;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled(DialogContent)`
  background: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  width: 300px;
  margin-left: 32px;
  margin-bottom: 18px;

  & a {
    text-decoration: none;
  }
`
const Button = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: 32px;
  margin-right: 22px;
  color: ${COLORS.gray[900]};
`

const NavContent = styled(Content)`
  font-size: ${() => 18 / 16 + 'rem'};
  font-weight: 600;
  text-transform: uppercase;
  & a {
    margin-bottom: 22px;
  }
  & a:link {
    color: ${COLORS.gray[900]};
  }

  & a:visited {
    color: ${COLORS.secondary};
  }
`

const FooterContent = styled(Content)`
  font-size: ${() => 14 / 16 + 'rem'};

  & a {
    margin-bottom: 14px;
  }
  & a:link {
    color: ${COLORS.gray[700]};
  }
`

export default MobileMenu

import React from 'react'

import { Container } from 'components/atoms/Container'
import { Margin, Padding } from 'components/atoms/Spacing'

import { Breakpoint } from 'components/organisms/Breakpoint'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {process.env.GATSBY_BREAKPOINT_PREVIEW && <Breakpoint />}
      <Container>
        <main>{children}</main>
        <Margin $base="1rem 0 0">
          <Padding $base="2rem 0">
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>{' '}
          </Padding>
        </Margin>
      </Container>{' '}
    </>
  )
}

import { FC } from 'react'

export const PageSectionHeading: FC = ({ children }) => <h2>{children}</h2>

export const PageSection: FC = ({ children }) => <article>{children}</article>

export const PageHeading: FC = ({ children }) => <h1>{children}</h1>

export const Page: FC = ({ children }) => {
  return (
    <>
      <header>Odygazing</header>
      <main>
        {children}
      </main>
    </>
  )
}
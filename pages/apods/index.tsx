import apodRepository from '@apods/data/repository'
import Apod from '@apods/data/types/Apod'
import { Page, PageHeading, PageSection, PageSectionHeading } from '@shared/ui/components/Page'
import { GetServerSideProps, NextPage } from 'next'

interface Props {
  apod: Apod
}

const ApodsHomePage: NextPage<Props> = ({ apod }) => {
  return (
    <Page>
      <PageHeading>Astronomy Picture of the Day</PageHeading>
      <PageSection>
        <h3>{apod.date}</h3>
        <PageSectionHeading>{apod.title}</PageSectionHeading>
        <figure>
          <img src={apod.hdUrl || apod.url || undefined} alt={apod.title} />
          <figcaption>
            <small>{apod.copyright}</small>
          </figcaption>
        </figure>
        <p>{apod.explanation}</p>
      </PageSection>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      apod: await apodRepository.latest()
    }
  }
}

export default ApodsHomePage
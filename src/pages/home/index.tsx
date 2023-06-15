import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import previewImage from '../../assets/app-preview.png'
import { ClaimusernameForm } from './components/ClaimusernameForm'

import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimusernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            alt="Calendário sibolizando aplicação em funcionamento"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </>
  )
}

import { CodesandboxLogo } from 'phosphor-react'
import {
  PresentationContainer,
  PresentationDescription,
  PresentationGradient,
  PresentationHello,
} from './styles'

import image from '../../assets/image.svg'
import { Social } from '../socials'

export function Presentation() {
  return (
    <PresentationContainer>
      <PresentationHello>
        <CodesandboxLogo size={32} color="#333333" />
        <h1>Hello</h1>
      </PresentationHello>
      <h1>
        I’m <PresentationGradient>Vittor Emanoel</PresentationGradient>
      </h1>
      <PresentationDescription>
        I am a JavaScript web developer
      </PresentationDescription>

      <img src={image} alt="" />

      <Social />
    </PresentationContainer>
  )
}

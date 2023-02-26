import Discord from '../../assets/Discord.svg'
import Github from '../../assets/Github.svg'
import Google from '../../assets/Google.svg'
import LinkedIn from '../../assets/LinkedIn.svg'
import Telegram from '../../assets/Telegram.svg'
import { SocialContainer } from './styles'

export function Social() {
  return (
    <SocialContainer>
      <img src={Google} alt="Letra G com colores do arco-iris" />
      <img src={Github} alt="formato de um gato" />
      <img src={LinkedIn} alt="letra i e l com o fundo azul" />
      <img src={Telegram} alt="avião em branco com o fundo azul" />
      <img src={Discord} alt="controle de video-game na cor roxa" />
    </SocialContainer>
  )
}

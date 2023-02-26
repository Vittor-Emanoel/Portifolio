import { Header } from '../../components/Header'
import { Presentation } from '../../components/presentation'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Presentation />
    </LayoutContainer>
  )
}

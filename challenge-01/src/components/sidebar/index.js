import { Button } from '../button'

import * as S from './styles'

export function Sidebar() { 
  return (
  <S.Aside>
    <Button kind="primary">Primary </Button>
    <Button kind="secondary">Secondary</Button>
  </S.Aside>
  )
}

import * as S from './styles'

export function Button({kind, children}) { 
  return <S.Button className={kind}>{children}</S.Button>
}
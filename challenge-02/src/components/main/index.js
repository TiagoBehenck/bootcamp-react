import { H1 } from '../heading'

export function Main({ title, content }) { 
  return (
  <main>
    <H1>{title}</H1>
    <p>{content}</p>
  </main>
  )
}

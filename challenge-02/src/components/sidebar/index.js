export function Sidebar({ data }) { 
  return (
  <aside>
    {data.map(({ id, title }) => ( 
      <a key={id} href='/'>
        {title}
      </a>
    ))}
  </aside>
  )
}

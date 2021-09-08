export function Sidebar({ 
  data,
  onChangeTitle,
  onChangeContent,
 }) { 

  const handleChangeContent = (e, title, content) =>  { 
    e.preventDefault();
    onChangeContent(content)
    onChangeTitle(title)
  }

  return (
  <aside>
    {data.map(({ id, title, content }) => ( 
      <a 
        key={id}
        href='/'
        onClick={(e) => handleChangeContent(e, title, content)}
      >
        {title}
      </a>
    ))}
  </aside>
  )
}

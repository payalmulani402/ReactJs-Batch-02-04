import List from './ListData'

const ListRendering2 = () => {

    const ListItem = List.filter(List => List.title === 'car')

  return (
    <div>
      <ul>
        {
            ListItem.map(List => <li>{List.price}</li>)
        }
      </ul>
    </div>
  )
}

export default ListRendering2


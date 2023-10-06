import React from 'react'


const List = [
  'The purpose of our lives is to be happy.',
  'Life is what happens when youre busy making other plans',
  'Get busy living or get busy dying.',
  'You only live once, but if you do it right, once is enough.',
  'Many of life’s failures are people who did not realize how close they were to success when they gave up'
]


const ListRender = () => {

  const ListItem = List.map(List => <tr><td className='border'>{List}</td></tr>);

  return (
    <div>
      {
        <table>
          {ListItem}
        </table>
      }
    </div>
  )
}

export default ListRender

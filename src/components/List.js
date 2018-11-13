import React from 'react';

const List = (props) => {
  const { arr isAuthenticated } = props;
  return (
    <div>
      if (isAuthenticated === 'a') {
        return <ul>
        {arr.map((todo, i) => {
          return <li key={`todo${i}`}>{todo}</li>
        })}
      </ul> :
      null }
    </div>
  )
}

export default List;
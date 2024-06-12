import React from 'react'

const Title = ({children, addedClass}) => {
  return (
    <div className={`${addedClass}`}>{children}</div>
  )
}

export default Title
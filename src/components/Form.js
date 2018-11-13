import React from 'react';

const Form = (props) => {
  const { handleChange, handleSubmit, currentText } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        {/*{currentText}*/}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

// const Form = () => (
//   <div>

//   </div>
// )

export default Form;
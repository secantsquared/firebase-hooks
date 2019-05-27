import React from 'react'

function CreateLink(props) {
  return (
    <form className="flex flex-column mt3">
      <input
        name="description"
        placeholder="description for your link"
        autoComplete="off"
        type="text"
      />
      <input
        name="url"
        placeholder="URL for your link"
        autoComplete="off"
        type="text"
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  )
}

export default CreateLink

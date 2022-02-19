const React = require('react')
const Default = require('./layouts/Default')

function edit ({bread, index}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form method='POST' action={`/breads/${index}?_method=PUT`}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={bread.name}
            required
            />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={bread.image}
            />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
            />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = edit
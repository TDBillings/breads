const React = require('react')
const Default = require('./layouts/default')

function New () {
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    required
                />
                <label htmlFor='image'>Image</label>
                <input
                    type='text'
                    name='image'
                    id='image'
                    pattern="https?://.+"
                />
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input
                    type='text'
                    name='hasGluten'
                    id='hasGluten'
                    defaultChecked
                />
                <label htmlFor='baker'>Baker</label>
                <select name='baker' id='baker'>
                    <option value="Shiv">Shiv</option>
                    <option value="Roman">Roman</option>
                    <option value="Logan">Logan</option>
                    <option value="Greg">Greg</option>
                    <option value="Tom">Tom</option>
                    <option value="Kendall">Kendall</option>
                    <option value="Conner">Conner</option>
                    <option value="Willa">Willa</option>
                </select>
                <br></br>
                <input type='submit'/>
            </form>
            <div className='backButton'>
                <a href='/breads'><button>Go back</button></a>
            </div>
        </Default>
    )
}

module.exports = New
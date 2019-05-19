import React from 'react'

class MonsterForm extends React.PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { onAddMonster } = this.props
    return (
      <form className="card">
        <input
          type="text"
          aria-label="monster name"
          placeholder="name"
          name="name"
          onChange={this.onInputChange}
          tabIndex="0"
          autoFocus
        />
        <input
          type="number"
          aria-label="monster hp"
          placeholder="hp"
          name="totalHp"
          onChange={this.onInputChange}
        />
        <button
          className="btn"
          type="button"
          onClick={() => onAddMonster(this.state)}
        >
          Add
        </button>
      </form>
    )
  }
}

export default MonsterForm

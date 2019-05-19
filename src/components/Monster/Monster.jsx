import React from 'react'
import LifeBar from '../LifeBar/LifeBar'
import './monster.css'

class Monster extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      hp: this.props.totalHp,
      damage: '',
      restore: '',
    }
  }

  takeDamage = damage => {
    const { hp } = this.state
    const hitPointsLeft = hp - damage
    this.setState({ hp: hitPointsLeft, damage: '' })
  }

  restoreLife = restore => {
    const { hp } = this.state
    const restored = Number(hp) + Number(restore)
    this.setState({ hp: restored, restore: '' })
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { name, position, totalHp } = this.props
    const { hp, damage, restore } = this.state
    const percent = (hp * totalHp) / 100
    return (
      <div className="monster">
        <p className="monster__name">{`${name} ${position}`}</p>
        <div className="monster__lifebar-container">
          <LifeBar percent={percent} />{' '}
          <span className="monster__hp">{hp}</span>
        </div>
        <div className="monster__hp-buttons">
          <button
            className="btn__hp-handler btn__hp-handler--minus"
            onClick={() => this.takeDamage(1)}
          >
            -1
          </button>
          <button
            className="btn__hp-handler btn__hp-handler--plus"
            onClick={() => this.restoreLife(1)}
          >
            +1
          </button>
        </div>
        <div className="monster__life-handler">
          <input
            type="number"
            aria-label="damage"
            name="damage"
            placeholder="How much damage"
            value={damage}
            onChange={this.onInputChange}
            className="monster__input-damage"
          />
          <button
            className="btn__hp-damage"
            onClick={() => this.takeDamage(damage)}
          >
            Damage
          </button>
        </div>
        <div className="monster__life-handler">
          <input
            type="number"
            name="restore"
            placeholder="How much to restore"
            value={restore}
            onChange={this.onInputChange}
            className="monster__input-restore"
          />
          <button
            className="btn__hp-restore"
            onClick={() => this.restoreLife(restore)}
          >
            Restore
          </button>
        </div>
      </div>
    )
  }
}

export default Monster

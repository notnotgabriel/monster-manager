import React from 'react'
import MonsterList from '../../components/MonsterList/MonsterList'
import MonsterForm from '../../components/MonsterForm/MonsterForm'
import nanoid from 'nanoid'
import './monsterListContainer.css'

class MonstersListContainer extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      monsters: [{ id: 'x', name: 'orc', totalHp: 100 }],
    }
  }

  addMonster = monster => {
    const { monsters } = this.state
    this.setState({
      monsters: [...monsters, { id: nanoid(), ...monster }],
    })
  }

  removeMonster = id => {
    const { monsters } = this.state
    this.setState({
      monsters: monsters.filter(monster => monster.id !== id),
    })
  }

  render() {
    const { monsters } = this.state
    return (
      <div className="monster-list-container">
        <MonsterForm onAddMonster={this.addMonster} />
        <MonsterList monsters={monsters} onRemove={this.removeMonster} />
      </div>
    )
  }
}

export default MonstersListContainer

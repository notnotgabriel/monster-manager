import React from 'react'
import Monster from '../../components/Monster/Monster'
import { ReactComponent as RipIcon } from '../../skull.svg'

export default ({ monsters, onRemove }) =>
  monsters.map((monster, index) => (
    <section className="monster-list card" key={monster.id}>
      <button
        aria-label={`remove ${monster.name} ${index + 1}`}
        type="button"
        onClick={() => onRemove(monster.id)}
        className="btn__remove-monster"
      >
        <RipIcon />
      </button>
      <Monster {...monster} position={index + 1} />
    </section>
  ))

import React from 'react'
import { Line } from 'rc-progress'

const progressStyle = percent => {
  if (percent >= 75) return '#31cb00'
  if (percent < 75 && percent >= 30) return '#e6d506'
  return '#f70304'
}

export default ({ percent }) => (
  <Line
    percent={percent}
    strokeWidth="4"
    trailColor="#fff"
    strokeColor={progressStyle(percent)}
  />
)

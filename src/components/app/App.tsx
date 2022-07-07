import React, { useState } from 'react'
import { defaultGraphValue } from '../../mock/graph'
import { getRandomValue } from '../../utils/utils'
import Chart from '../chart/chart'
import { ChartsType } from '../../types/chartType'
import styles from './app.module.scss'

function App() {
  let position = 0
  const total = defaultGraphValue.reduce((sum, currentValue) => sum + currentValue.time, 0)
  const [totalValue, setTotal] = useState<number>(total)
  const [graphValue, setGraphvalue] = useState<ChartsType>(defaultGraphValue)

  const handleClick = () => {
    const randomGraphValue = [
      { name: 'Landing Page', time: getRandomValue() },
      { name: 'Configurator', time: getRandomValue() },
      { name: 'Check-out', time: getRandomValue() },
      { name: 'Deal', time: getRandomValue() }
    ]

    position = 0
    setGraphvalue(randomGraphValue)
    setTotal(randomGraphValue.reduce((sum, currentValue) => sum + currentValue.time, 0))
  }

  setTimeout(() => {
    handleClick()
  }, 15000)

  return (
    <div>
      <h1 className={styles.title}>SPENT TIME (SECONDS)</h1>
      {graphValue.map(chart => {
        position = position + (chart.time * 100) / totalValue
        return (
          <Chart
            key={chart.name}
            width={(chart.time * 100) / totalValue}
            position={position}
            name={chart.name}
            time={chart.time}
            total={totalValue}
          />
        )
      })}
      <button className={styles.randomValue} onClick={handleClick}>
        Random value
      </button>
    </div>
  )
}

export default App

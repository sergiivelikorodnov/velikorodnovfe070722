import React from 'react'
import styles from './chart.module.scss'

type ChartProps = {
  name: string
  time: number
  width: number
  position: number
  total: number
}

function Chart({ name, time, total, width, position }: ChartProps) {
  return (
    <div className={styles.chartContainer}>
      <p className={styles.chartTitle}>{name}</p>
      <div className={styles.chart} data-testid='chartTest'>
        <div className={styles.chartColor} style={{ width: `${width}%`, left: `${position - width}%` }}>
          <p className={styles.chartValue}>{time}</p>
        </div>
      </div>
    </div>
  )
}

export default Chart

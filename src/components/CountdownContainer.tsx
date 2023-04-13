import { useEffect, useState } from 'react'

type CountdownContainerProps = {
  countdownTime: number,
  currentTeam: string
}

export default function CountdownContainer (props: CountdownContainerProps) {
  const { countdownTime, currentTeam } = props

  return (
    <div id='countdown-timer' style={{margin: 'auto', color: '#000', width: 600, textAlign: 'center', paddingTop: 20, paddingBottom: 10}}>
      <div style={{fontSize: 24, lineHeight: 0.8}}>Time {currentTeam} escolhendo</div>
      <div style={{fontSize: 64, lineHeight: 1}}>{countdownTime}</div>
    </div>
  )
}
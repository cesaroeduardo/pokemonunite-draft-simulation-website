import { CSSProperties } from 'react'

type CountdownContainerProps = {
  countdownTime: number,
  currentTeam: string,
  draftFinished: boolean
}

const styles: Record<string, CSSProperties> = {
  countdownTimerContainer: {
    margin: 'auto',
    color: '#000',
    width: 400,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10
  }
}

export default function CountdownContainer (props: CountdownContainerProps) {
  const { countdownTime, currentTeam , draftFinished} = props

  return (
    <div id='countdown-timer-container' style={styles.countdownTimerContainer}>

      {draftFinished ? (
        <div style={{}}>Draft Finalizado!</div>
      ) : (
        <>
          <div style={{fontSize: 24, lineHeight: 0.8}}>Time {currentTeam} escolhendo</div>
          <div style={{fontSize: 64, lineHeight: 1}}>{countdownTime}</div>
        </>
      )}
      
    </div>
  )
}
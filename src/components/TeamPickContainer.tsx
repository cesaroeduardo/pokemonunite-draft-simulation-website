import { Team } from '@/types/Team'
import { useEffect, useState } from 'react'

type TeamPickContainerProps = {
  team: any,
  side: string,
  pickTurn: {
    team: number,
    picks: string[],
  }
}

const styles = {
  blueSidePosition: {
    top: 90,
    left: 60
  },
  redSidePosition: {
    top: 90,
    right: 60
  },
  teamPickContainer: {
    position: 'absolute',
  },
  selectedPickNameStyle: {
    width: '100%',
    lineHeight: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#0009',
    bottom: 0,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    textAlign: "center",
    position: 'absolute'
  },
  selectedPickStyle: (side: string) => ({
    width: 300,
    height: 110,
    borderColor: side,
    borderWidth: 3,
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 5
  })
}

export default function TeamPickContainer(props: TeamPickContainerProps) {
  const { team, side, pickTurn } = props

  const [teamInfo, setTeamInfo] = useState<Team>(team)

  useEffect(() => {
    const teamInfoTemp = team

    setTeamInfo(teamInfoTemp)
  }, [team])

  return (
    <div id={`${side}-team-picks`} style={{ ...styles.teamPickContainer, ...( side === 'blue' ? styles.blueSidePosition : styles.redSidePosition ) }}>
      <div
        id={`${side}-team-pick-1`}
        style={{
          ...styles.selectedPickStyle(side),
          position: 'relative',
          ...(
            teamInfo.pick1.images ? {
              backgroundImage: `url('${teamInfo.pick1.images.main}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            } : {}
          )
        }}
      >
        {teamInfo.pick1.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{teamInfo.pick1.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-2`}
        style={{
          ...styles.selectedPickStyle(side),
          position: 'relative',
          ...(
            teamInfo.pick2.images ? {
              backgroundImage: `url('${teamInfo.pick2.images.main}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            } : {}
          )
        }}
      >
        {teamInfo.pick2.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{teamInfo.pick2.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-3`}
        style={{
          ...styles.selectedPickStyle(side),
          position: 'relative',
          ...(
            teamInfo.pick3.images ? {
              backgroundImage: `url('${teamInfo.pick3.images.main}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            } : {}
          )
        }}
      >
        {teamInfo.pick3.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{teamInfo.pick3.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-4`}
        style={{
          ...styles.selectedPickStyle(side),
          position: 'relative',
          ...(
            teamInfo.pick4.images ? {
              backgroundImage: `url('${teamInfo.pick4.images.main}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            } : {}
          )
        }}
      >
        {teamInfo.pick4.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{teamInfo.pick4.name}</div>
          </>
        )}
      </div>
      <div
        id={`${side}-team-pick-5`}
        style={{
          ...styles.selectedPickStyle(side),
          position: 'relative',
          ...(
            teamInfo.pick5.images ? {
              backgroundImage: `url('${teamInfo.pick5.images.main}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            } : {}
          )
        }}
      >
        {teamInfo.pick5.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{teamInfo.pick5.name}</div>
          </>
        )}
      </div>
    </div>
  )
}
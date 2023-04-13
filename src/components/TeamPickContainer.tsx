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
    width: '40%',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: '#000',
    right: 25,
    top: '50%',
    transform: 'translateY(-50%)',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    position: 'absolute'
  },
  labelTypeStyle: (side: string) => ({
    width: '100%',
    height: 30,
    lineHeight: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: side,
    borderRadius: 17,
    textAlign: "center"
  }),
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

  function getPokemonSelectedImageStyle(image: string) {
    return {
      backgroundImage: `url('${image}')`,
      backgroundPosition: 'left',
      backgroundSize: '40%',
      backgroundRepeat: 'no-repeat'
    }
  }

  return (
    <div id={`${side}-team-picks`} style={{ ...styles.teamPickContainer, ...( side === 'blue' ? styles.blueSidePosition : styles.redSidePosition ) }}>

      <div style={styles.labelTypeStyle(side)}>BAN</div>

      <div
        id={`${side}-team-ban-1`}
        style={{
          ...styles.selectedPickStyle(side),
          position: 'relative',
          ...(
            teamInfo.ban.images ? getPokemonSelectedImageStyle(teamInfo.ban.images.main) : {}
          )
        }}
      >
        {teamInfo.ban.name !== undefined && (
          <>
            <div style={styles.selectedPickNameStyle}>{teamInfo.ban.name}</div>
          </>
        )}
      </div>

      <div style={{...styles.labelTypeStyle(side), marginTop: 30 }}>PICKS</div>

      <div
        id={`${side}-team-pick-1`}
        style={{
          ...styles.selectedPickStyle(side),
          position: 'relative',
          ...(
            teamInfo.pick1.images ? getPokemonSelectedImageStyle(teamInfo.pick1.images.main) : {}
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
            teamInfo.pick2.images ? getPokemonSelectedImageStyle(teamInfo.pick2.images.main) : {}
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
            teamInfo.pick3.images ? getPokemonSelectedImageStyle(teamInfo.pick3.images.main) : {}
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
            teamInfo.pick4.images ? getPokemonSelectedImageStyle(teamInfo.pick4.images.main) : {}
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
            teamInfo.pick5.images ? getPokemonSelectedImageStyle(teamInfo.pick5.images.main) : {}
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
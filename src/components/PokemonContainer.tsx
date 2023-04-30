import { CSSProperties, useEffect } from 'react'
import { BattleType, BattleTypeColor, Pokemon } from '@/types/Pokemon'
import { DraftStatus } from '@/types/DraftStatus'

type PokemonContainerProps = {
  pickList: Array<Pokemon>,
  pickTurn: {
    turn: number,
    team: number,
    picks: string[],
  },
  selectPick: Function,
  countdownTime: number,
  setCountdownTime: Function,
  draftStatus: DraftStatus,
  setDraftStatus: Function,
  MAX_COUNTDOWN_TIMER: number
}

const MAX_WIDTH_PKMN_BOX = 100
const MAX_HEIGHT_PKMN_BOX = 126

const styles: Record<string, CSSProperties> = {
  pickOverlay: {
    position: 'absolute',
    width: '100%',
    height: MAX_HEIGHT_PKMN_BOX,
    zIndex: 100
  }
}

export default function PokemonContainer(props: PokemonContainerProps) {

  const {
    pickList,
    selectPick,
    pickTurn,
    countdownTime,
    setCountdownTime,
    draftStatus,
    setDraftStatus,
    MAX_COUNTDOWN_TIMER
  } = props

  useEffect(() => {
    const intervalCd = setInterval(() => {
      if (countdownTime > 0) {
        const cdTime = countdownTime - 1
        setCountdownTime(cdTime)
      } else if (draftStatus) {
        pickTurn.picks.forEach(_ => {
          const notSelectedPokemonList = pickList.filter(pkmn => pkmn.picked === undefined)
          const randomNumber = Math.random() * notSelectedPokemonList.length

          selectPick(notSelectedPokemonList[Math.round(randomNumber) - 1])

          if (pickTurn.turn < 7) {
            setCountdownTime(MAX_COUNTDOWN_TIMER)
          } else if (pickTurn.turn === 7) {
            setDraftStatus(3)
          }
        })
      }
    }, 1000)

    return () => clearInterval(intervalCd)
  })

  function selectBackgroundPickColor(picked: number) {
    switch (picked) {
      case 0:
        return '#4A1885'

      case 1:
        return '#AF4417'

      default:
        return '#220A3D'
    }
  }

  function selectBackgroundPickOpacity(picked: number) {
    switch (picked) {
      case 0:
        return 0.5

      case 1:
        return 0.5

      default:
        return 1
    }
  }

  function getPokemonImageStyle(pokemon: any): CSSProperties {
    return {
      backgroundImage: `url('${pokemon.images.main}')`,
      backgroundPosition: 'top',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      marginTop: -12,
      marginBottom: 12,
      width: '100%',
      height: MAX_HEIGHT_PKMN_BOX,
      opacity: selectBackgroundPickOpacity(pokemon.picked),
      zIndex: 9999
    }
  }

  function selectBackgroundColorByBattleType(battleType: number) {
    switch (battleType) {
      case BattleType.ATTACKER:
        return BattleTypeColor.ATTACKER;

      case BattleType.SPEEDSTER:
        return BattleTypeColor.SPEEDSTER;

      case BattleType.ALLROUNDER:
        return BattleTypeColor.ALLROUNDER;

      case BattleType.DEFENDER:
        return BattleTypeColor.DEFENDER;

      case BattleType.SUPPORTER:
        return BattleTypeColor.SUPPORTER;

      default:
        return 'white'
    }
  }

  function getPickButtonStyle(pokemon: any): CSSProperties {
    return {
      cursor: 'pointer',
      position: 'relative',
      backgroundColor: selectBackgroundColorByBattleType(pokemon.battleType),
      overflow: 'hidden',
      borderRadius: 12,
      backgroundImage: `url('/pattern-bg.svg')`,
      backgroundPosition: 'top',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      borderColor: selectBackgroundPickColor(pokemon.picked),
      borderWidth: 3,
      margin: 5,
      zIndex: 999
    }
  }

  function getPokemonName(pokemon: any): CSSProperties {
    return {
      width: '100%',
      fontSize: 13,
      fontFamily: 'Exo',
      paddingTop: 4,
      paddingBottom: 4,
      textTransform: 'uppercase',
      letterSpacing: '.5px',
      fontStyle: 'italic',
      fontWeight: '900',
      borderInlineWidth: 3,
      borderInlineColor: selectBackgroundPickColor(pokemon.picked),
      backgroundColor: selectBackgroundPickColor(pokemon.picked),
      bottom: 0,
      color: '#ffffff',
      textAlign: "center",
      position: 'absolute',
      zIndex: 99
    }
  }

  return (
    <>
      <div id='pokemon-list-select' className="grid mt-16 ml-auto mr-auto w-7/12 gap-x-1 sm:grid-cols-3 sm:scale-[.75] sm:-mt-64 md:grid-cols-6 md:w-8/12 md:gap-x-[1rem] md:scale-[1] md:mt-16 lg:grid-cols-8 lg:gap-x-[.5rem] lg:gap-y-[.5rem] lg:mt-16 lg:w-7/12">
        {pickList.map((pokemon, key) => (
          <div className="w-28"
            onClick={pokemon.picked !== undefined ? () => { } : () => {
              selectPick(pokemon)

              if (pickTurn.turn < 7) {
                setCountdownTime(MAX_COUNTDOWN_TIMER)
              } else if (pickTurn.turn === 7) {
                setDraftStatus(3)
              }
            }} key={key} style={getPickButtonStyle(pokemon)}>
            {pokemon.picked !== undefined ? <div style={styles.pickOverlay}></div> : <></>}
            <div style={getPokemonName(pokemon)}>{pokemon.name}</div>
            <div className="transform transition-all duration-300 hover:scale-110" style={getPokemonImageStyle(pokemon)} />
          </div>
        ))}
      </div>
    </>
  )
}
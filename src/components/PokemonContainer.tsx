import { CSSProperties, useEffect, useState } from 'react'
import { Pokemon } from '@/types/Pokemon'
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

function selectBackgroundPickColor (picked: number) {
  switch (picked) {
    case 0:
      return 'blue'

    case 1:
      return 'red'

    default:
      return 'black'
  }
}

const styles: Record<string, CSSProperties> = {
  pokemonName: {
    width: MAX_WIDTH_PKMN_BOX,
    lineHeight: 1,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#0009',
    bottom: 0,
    textAlign: "center",
    position: 'absolute'
  },
  pickOverlay: {
    backgroundColor: '#6669',
    position: 'absolute',
    width: MAX_WIDTH_PKMN_BOX,
    height: MAX_WIDTH_PKMN_BOX,
    zIndex: 100
  }
}

export default function PokemonContainer (props: PokemonContainerProps) {

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

          selectPick(notSelectedPokemonList[Math.round(randomNumber)-1])

          if (pickTurn.turn < 7) {
            setCountdownTime(MAX_COUNTDOWN_TIMER)
          } else if (pickTurn.turn === 7) {
            setDraftStatus(3)
          }
        })
      }
    }, 1000)

    return () => clearInterval(intervalCd)
  }, [countdownTime])

  function getPokemonImageStyle (pokemon: any): CSSProperties {
    return {
      backgroundImage: `url('${pokemon.images.main}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: 5,
      width: MAX_WIDTH_PKMN_BOX,
      height: MAX_WIDTH_PKMN_BOX
    }
  }

  function getPickButtonStyle (pokemon: any): CSSProperties {
    return {
      cursor: 'pointer',
      position: 'relative',
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: selectBackgroundPickColor(pokemon.picked),
      borderWidth: 3,
      margin: 5
    }
  }

  return (
    <>
      <div id='pokemon-list-select' className="flex flex-wrap" style={{width: 813, margin: 'auto'}}>
      {pickList.map((pokemon, key) => (      
        <div onClick={pokemon.picked !== undefined ? () => {} : () => {
          selectPick(pokemon)
          
          if (pickTurn.turn < 7) {
            setCountdownTime(MAX_COUNTDOWN_TIMER)
          } else if (pickTurn.turn === 7) {
            setDraftStatus(3)
          }
        }} key={key} style={getPickButtonStyle(pokemon)}>
          {pokemon.picked !== undefined ? <div style={styles.pickOverlay}></div> : <></>}
          <div style={styles.pokemonName}>{pokemon.name}</div>
          <div style={getPokemonImageStyle(pokemon)} />
        </div>
      ))}
    </div>
    </>
  )
}
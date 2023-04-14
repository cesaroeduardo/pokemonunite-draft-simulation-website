import { CSSProperties, useEffect, useState } from 'react'
import CountdownContainer from './CountdownContainer'
import { Pokemon } from '@/types/Pokemon'

type PokemonContainerProps = {
  pickList: Array<Pokemon>,
  pickTurn: {
    turn: number,
    team: number,
    picks: string[],
  },
  selectPick: Function
}

const MAX_WIDTH_PKMN_BOX = 100
const MAX_COUNTDOWN_TIMER = 20

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

  const { pickList, selectPick, pickTurn } = props
  const [countdownTime, setCountdownTime] = useState(MAX_COUNTDOWN_TIMER)
  const [ draftFinished, setDraftFinished ] = useState(false)
  
  useEffect(() => {
    const intervalCd = setInterval(() => { 
      if (countdownTime > 0) {
        const cdTime = countdownTime - 1
        setCountdownTime(cdTime)
      } else {
        // TODO select pick automatically
        pickTurn.picks.forEach(el => {
          const notSelectedPokemonList = pickList.filter(pkmn => pkmn.picked === undefined)
          const randomNumber = Math.random() * notSelectedPokemonList.length

          selectPick(notSelectedPokemonList[Math.round(randomNumber)-1])

          if (pickTurn.turn < 7) {
            setCountdownTime(MAX_COUNTDOWN_TIMER)
          } else if (pickTurn.turn === 7) {
            setDraftFinished(true)
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
      <CountdownContainer currentTeam={pickTurn.team === 0 ? 'azul' : 'vermelho'} draftFinished={draftFinished} countdownTime={countdownTime} />

      <div id='pokemon-list-select' className="flex flex-wrap" style={{width: 813, margin: 'auto'}}>
      {pickList.map((pokemon, key) => (      
        <div onClick={pokemon.picked !== undefined ? () => {} : () => {
          selectPick(pokemon)
          
          if (pickTurn.turn < 7) {
            setCountdownTime(MAX_COUNTDOWN_TIMER)
          } else if (pickTurn.turn === 7) {
            setDraftFinished(true)
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
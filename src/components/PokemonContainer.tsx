import { useEffect, useState } from 'react'
import CountdownContainer from './CountdownContainer'
import { Pokemon } from '@/types/Pokemon'

type PokemonContainerProps = {
  pickList: Array<Pokemon>,
  pickTurn: {
    team: number,
    picks: string[],
  },
  selectPick: Function
}

const MAX_WIDTH_PKMN_BOX = 100
const MAX_COUNTDOWN_TIMER = 20

function selectBackgroundPickColor (picked) {
  switch (picked) {
    case 0:
      return 'blue'

    case 1:
      return 'red'

    default:
      return 'black'
  }
}

const styles = {
  pickButton: (pokemon: any) => ({
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: selectBackgroundPickColor(pokemon.picked),
    borderWidth: 3,
    
    margin: 5
  }),
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
  pokemonImage: (pokemon: any) => ({
    backgroundImage: `url('${pokemon.images.main}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: 5,
    width: MAX_WIDTH_PKMN_BOX,
    height: MAX_WIDTH_PKMN_BOX
  })
}

export default function PokemonContainer (props: PokemonContainerProps) {

  const { pickList, selectPick, pickTurn } = props
  const [countdownTime, setCountdownTime] = useState(MAX_COUNTDOWN_TIMER)
  
  useEffect(() => {
    const intervalCd = setInterval(() => { 
      if (countdownTime > 0) {
        const cdTime = countdownTime - 1
        setCountdownTime(cdTime)
      }
    }, 1000)

    return () => clearInterval(intervalCd)
  }, [countdownTime])

  return (
    <>
      <CountdownContainer currentTeam={pickTurn.team === 0 ? 'azul' : 'vermelho'} countdownTime={countdownTime} />

      <div id='pokemon-list-select' className="flex flex-wrap" style={{width: 1000, margin: 'auto'}}>
      {pickList.map((pokemon, key) => (      
        <div onClick={pokemon.picked !== undefined ? () => {} : () => {
          selectPick(pokemon)
          setCountdownTime(MAX_COUNTDOWN_TIMER)
        }} key={key} style={styles.pickButton(pokemon)}>
          {pokemon.picked !== undefined ? <div style={{background: '#6669', position: 'absolute', width: MAX_WIDTH_PKMN_BOX, height: MAX_WIDTH_PKMN_BOX, zIndex: 100}}></div> : <></>}
          <div style={styles.pokemonName}>{pokemon.name}</div>
          <div style={styles.pokemonImage(pokemon)} />
        </div>
      ))}
    </div>
    </>
  )
}
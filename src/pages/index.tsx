import { Inter } from 'next/font/google'
import pokemons from '../data/pokemons'
import { useEffect, useState } from 'react'
import TeamPickContainer from '@/components/TeamPickContainer'
import PokemonContainer from '@/components/PokemonContainer'
import { Team } from '@/types/Team'

const inter = Inter({ subsets: ['latin'] })

const PICK_ORDER = [
  {team: 0, picks: ['pick1']},
  {team: 1, picks: ['pick1','pick2']},
  {team: 0, picks: ['pick2','pick3']},
  {team: 1, picks: ['pick3','pick4']},
  {team: 0, picks: ['pick4','pick5']},
  {team: 1, picks: ['pick5']}
]

const styles = {
  
}

export default function Home() {

  const [pickList, setPickList] = useState(pokemons.map(pkmn => ({...pkmn, picked: undefined})))
  const [teams, setTeams] = useState<Team[]>([
    {
      teamName: 'blueTeam',
      ban: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    },
    {
      teamName: 'redTeam',
      ban: {},
      pick1: {},
      pick2: {},
      pick3: {},
      pick4: {},
      pick5: {},
    }
  ])
  const [pickTurn, setPickTurn] = useState(0)

  useEffect(() => {
    if (pickTurn === PICK_ORDER.length) {
      alert("finished")
    }
  }, [pickTurn]);

  function selectPick (pokemon: any) {
    const currentPickTurn = PICK_ORDER[pickTurn]
    const teamsTemp = teams

    for (let i = 0; i < currentPickTurn.picks.length; i++) {
      const pick = currentPickTurn.picks[i]

      if (teams[currentPickTurn.team][pick].name === undefined) {
        teams[currentPickTurn.team] = {
          ...teams[currentPickTurn.team],
          [pick]: pokemon
        }

        const selectedPokemon = pickList.find(pkmn => pkmn.name === pokemon.name)
        selectedPokemon && (selectedPokemon.picked = currentPickTurn.team)

        break;
      }
    }

    console.log('setting team', {teamsTemp})
    setTeams([...teamsTemp])

    const finishTurn = currentPickTurn.picks.every(pick => teams[currentPickTurn.team][pick].name !== undefined)

    if (finishTurn) {
      const nextPickTurn = pickTurn + 1

      if (nextPickTurn < PICK_ORDER.length) {
        setPickTurn(nextPickTurn)
      }
    } 
  }

  return (
    <div style={{position: 'relative'}}>

      <TeamPickContainer team={teams[0]} side="blue" />
      <TeamPickContainer team={teams[1]} side="red" />

      <PokemonContainer pickList={pickList} pickTurn={PICK_ORDER[pickTurn]} selectPick={selectPick} />
      
    </div>
  )
}

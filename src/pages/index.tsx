import { useEffect, useState } from 'react'
import pokemons from '@/data/pokemons'
import TeamPickContainer from '@/components/TeamPickContainer'
import PokemonContainer from '@/components/PokemonContainer'
import CountdownContainer from '@/components/CountdownContainer'
import { DraftStatus } from '@/types/DraftStatus'

const PICK_ORDER = [
  { turn: 0, team: 0, picks: ['ban']},
  { turn: 1, team: 1, picks: ['ban']},
  { turn: 2, team: 0, picks: ['pick1']},
  { turn: 3, team: 1, picks: ['pick1','pick2']},
  { turn: 4, team: 0, picks: ['pick2','pick3']},
  { turn: 5, team: 1, picks: ['pick3','pick4']},
  { turn: 6, team: 0, picks: ['pick4','pick5']},
  { turn: 7, team: 1, picks: ['pick5']}
]
const MAX_COUNTDOWN_TIMER = 20

const styles = {
  
}

export default function Home() {
  const [pickList, setPickList] = useState<Record<string, any>[]>(
    pokemons
      .filter(pkmn => pkmn.active)
      .map(pkmn => ({...pkmn, picked: undefined}))
  )
  const [teams, setTeams] = useState<Record<string, any>[]>([
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
  const [draftStatus, setDraftStatus] = useState<DraftStatus>(DraftStatus.NotStarted) // 0 not-started, 1 started, 2 paused, 3 finished
  const [countdownTime, setCountdownTime] = useState(0)

  useEffect(() => {
    switch(draftStatus) {
      case DraftStatus.Started:
        setCountdownTime(MAX_COUNTDOWN_TIMER)
        break

    }
  }, [draftStatus]);

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
    <div className='grid'>

      <CountdownContainer 
        currentTeam={PICK_ORDER[pickTurn].team === 0 ? 'roxo' : 'laranja'}
        draftStatus={draftStatus}
        setDraftStatus={setDraftStatus}
        countdownTime={countdownTime} />

        <div className='grid'>

        <div className='flex justify-between sm:mx-4 md:mx-6 lg:mx-8'>
          {teams.map((team, idx) => <TeamPickContainer key={idx} team={team} side={idx === 0 ? "blue" : "red"} />)}
        </div>
        <PokemonContainer
          pickList={pickList}
          pickTurn={PICK_ORDER[pickTurn]}
          selectPick={selectPick}
          MAX_COUNTDOWN_TIMER={MAX_COUNTDOWN_TIMER}
          countdownTime={countdownTime}
          draftStatus={draftStatus}
          setDraftStatus={setDraftStatus}
          setCountdownTime={setCountdownTime}
          />

        </div>
      
    </div>
  )
}

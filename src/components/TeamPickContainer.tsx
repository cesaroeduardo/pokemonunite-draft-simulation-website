import { CSSProperties } from 'react'
import Image from 'next/image'

type TeamPickContainerProps = {
  team: any,
  side: string,
}

function Avatar() {
  return (
    <Image
      src="/avatar.png"
      alt="Avatar image"
      width={86}
      height={86}
    />
  )
}

const styles: Record<string, CSSProperties> = {
  selectedBanStyle: {
    width: 53,
    height: 53,
    borderColor: '#BE433C',
    borderWidth: 4,
    backgroundColor: '#52556750',
    borderRadius: 8,
    position: 'relative',
    backgroundImage: `url('/icon-ban.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  blueSidePositionBan: {
    float: 'left'
  },
  redSidePositionBan: {
    float: 'right' 
  },
  blueSidePositionPicks: {
    flexDirection: 'row'
  },
  redSidePositionPicks: {
    flexDirection: 'row-reverse'
  },
  blueSidePositionFrame: {
    borderColor: '#C3B4FA',
    backgroundColor: '#4A1885',
    backgroundImage: `url('/symbol-blue.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  redSidePositionFrame: {
    borderColor: '#FADAA2',
    backgroundColor: '#AF4417',
    backgroundImage: `url('/symbol-red.svg')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  blueSidePositionTrainer: {
    alignItems: 'flex-start'
  },
  redSidePositionTrainer: {
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  blueSidePositionName: {
    marginLeft: -10,
    borderBottomRightRadius: 12,
    backgroundColor: '#C3B4FA',
    paddingLeft: 20
  },
  redSidePositionName: {
    marginRight: -10,
    borderBottomLeftRadius: 12,
    backgroundColor: '#FADAA2',
    paddingRight: 20
  },
}

export default function TeamPickContainer(props: TeamPickContainerProps) {
  const { team, side } = props

  function getPokemonSelectedImageStyle(image: string): CSSProperties {
    return {
      backgroundImage: `url('${image}')`,
      backgroundPosition: 'left',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat'
    }
  }

  function selectedPickNameStyle(side: string): CSSProperties {
    return {
      width: 170,
      fontWeight: '500',
      fontStyle: 'normal',
      fontSize: '18px',
      color: '#220A3D',
      lineHeight: '24px',
      letterSpacing: '.24px',
      position: 'relative',
      fontFamily: "PT Sans",
      paddingLeft: 14,
      paddingBottom: 4,
      paddingRight: 14,
      zIndex: 9
    }
  }

  function getSelectedPickStyle (side: string) {
    return {
      height: 96,
      backgroundColor: '#00000040',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }

  function getSelectedPickFrame (side: string) {
    return {
      width: 96,
      height: 96,
      borderWidth: 3,
      backgroundColor: '#fff',
      borderRadius: 12,
      zIndex: 99
    }
  }

  function getSelectedPickTrainer (side: string): CSSProperties {
    return {
      flexDirection: 'column'
    }
  }

  return (
    <div className='grid gap-y-2 sm:scale-[.65] md:scale-[1] lg:scale-[1] sm:-mt-44' id={`${side}-team-picks`} style={{ ...styles.teamPickContainer, ...( side === 'blue' ? styles.blueSidePosition : styles.redSidePosition ) }}>

{/* BAN AREA */}
      <div
        className='sm:w-24 md:w-24 lg:w-auto sm:mb-2 md:mb-4 lg:mb-4'
        id={`${side}-team-ban-1`}
        style={{ ...styles.selectedBanStyle, ...( side === 'blue' ? styles.blueSidePositionBan : styles.redSidePositionBan ), 
        ...(team.ban.images ? getPokemonSelectedImageStyle(team.ban.images.main) : {}) }}
      >
      </div>

<div className='grid sm:gap-y-3 md:gap-y-7 lg:gap-y-7'>

{/* TEAM PICK 1 */}
      <div
        id={`${side}-team-pick-1`}
        className='w-auto sm:w-24 md:w-24 lg:w-auto'
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick1.images ? getPokemonSelectedImageStyle(team.pick1.images.main) : {}
          )
        }}></div>
        <div
        className='flex xs:hidden sm:hidden md:hidden lg:flex'
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <Avatar />
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>1</span> : <span>6</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 2 */}
      <div
        id={`${side}-team-pick-2`}
        className='w-auto sm:w-24 md:w-24 lg:w-auto '
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick2.images ? getPokemonSelectedImageStyle(team.pick2.images.main) : {}
          )
        }}></div>
        <div
        className='flex xs:hidden sm:hidden md:hidden lg:flex'
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <Avatar />
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>2</span> : <span>7</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 3 */}
<div
        id={`${side}-team-pick-3`}
        className='w-auto sm:w-24 md:w-24 lg:w-auto '
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick3.images ? getPokemonSelectedImageStyle(team.pick3.images.main) : {}
          )
        }}></div>
        <div
        className='flex xs:hidden sm:hidden md:hidden lg:flex'
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <Avatar />
          <div
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>3</span> : <span>8</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 4 */}
<div
        id={`${side}-team-pick-4`}
        className='w-auto sm:w-24 md:w-24 lg:w-auto '
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick4.images ? getPokemonSelectedImageStyle(team.pick4.images.main) : {}
          )
        }}></div>
        <div
        className='flex xs:hidden sm:hidden md:hidden lg:flex'
        style={{
          ...getSelectedPickTrainer(side),
          ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <Avatar />
          <div 
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>4</span> : <span>9</span>}
          </div>
        </div>
      </div>

{/* TEAM PICK 5 */}
<div
        id={`${side}-team-pick-5`}
        className='w-auto sm:w-24 md:w-24 lg:w-auto '
        style={{
          ...getSelectedPickStyle(side),
          ...( side === 'blue' ? styles.blueSidePositionPicks : styles.redSidePositionPicks )
        }}
      >
        <div
          style={{
          ...getSelectedPickFrame(side),
          ...( side === 'blue' ? styles.blueSidePositionFrame : styles.redSidePositionFrame ),
          position: 'relative',
          ...(
            team.pick5.images ? getPokemonSelectedImageStyle(team.pick5.images.main) : {}
          )
        }}></div>
        <div
        className='flex xs:hidden sm:hidden md:hidden lg:flex'
        style={{
            ...getSelectedPickTrainer(side),
            ...( side === 'blue' ? styles.blueSidePositionTrainer : styles.redSidePositionTrainer )
        }}>
          <Avatar />
          <div
            style={{ 
            ...selectedPickNameStyle(side), 
            ...( side === 'blue' ? styles.blueSidePositionName : styles.redSidePositionName ) 
          }}
          >
            Trainer {side === 'blue' ? <span>5</span> : <span>10</span>}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
import Timer from './Timer'
import Avatar from './Avatar'
import Map from './Map'
import { useState, useEffect } from 'react'
import Switch from 'react-ios-switch'
import Emoticon from './Emoticon'

function Start() {
  const [checked, setChecked] = useState(false)
  const [skippedBreaks, setSkippedBreaks] = useState(0)
  const [resting, setResting] = useState(false)

  function handleSetResting(value: React.SetStateAction<boolean>) {
    if (value && skippedBreaks > 0) {
      setSkippedBreaks(skippedBreaks - 1)
    }
    setResting(value)
  }

  function onSkipBreak() {
    setSkippedBreaks(skippedBreaks + 1)
  }

  const handleSwitchChange = (checked: boolean) => {
    setChecked(checked)
  }

  useEffect(() => {
    document.body.style.backgroundColor = checked ? '#293241 ' : '#F6C12D'
  }, [checked])

  return (
    <>
      <Switch
        checked={checked}
        className="my-switch"
        disabled={false}
        handleColor="white"
        name="mySwitch"
        offColor="white"
        onChange={handleSwitchChange}
        onColor="#B8336A"
        readOnly={false}
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          zIndex: 99,
          margin: '50px 30px 0px 0px',
        }}
        aria-label="Toggle switch"
      />
      <div>
        <h1 className="start-title">POCKET DORO</h1>
        <div className="flex-container">
          <div className="avatar-overlay">
            <Avatar />
          </div>
          <Map checked={checked} />
          <div className="emoticon-overlay">
            <Emoticon skippedBreaks={skippedBreaks} resting={resting} />
          </div>
          <div className="timeBubble">
            <Timer
              skippedBreaks={skippedBreaks}
              onSkipBreak={onSkipBreak}
              resting={resting}
              setResting={handleSetResting}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Start

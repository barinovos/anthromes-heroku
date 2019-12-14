import React from 'react'
import PropTypes from 'prop-types'

import '../../assets/fonts/fonts.css'

const AbstractCard = ({ onClose, onNext, title, body, imgSrc, steps, button, top, left }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: `${top}`,
        left: `${left}`,
        maxHeight: 170,
        width: 445,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingLeft: 24,
        paddingTop: 21,
        zIndex: 11111,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 150,
          paddingRight: 10,
        }}
      >
        <div
          style={{
            position: 'absolute',
          }}
        >
          <img src={imgSrc} width={40} height={40} fill='black' alt="Paint.garden" />
        </div>
        <div
          style={{
            marginLeft: 50,
            flex: '0.2 0.2 100%',
          }}
        >
          <p style={{ fontSize: 14, fontFamily: 'Proxima Nova Semibold', marginTop: -5, marginBottom: 5, }}>{title}</p>
          <div style={{ flexBasis: '100%', height: 0 }} />
          <p style={{ fontSize: 14, fontFamily: 'Proxima Nova Light', }}>{body}</p>
        </div>
        <div style={{ flexBasis: '100%', height: 0 }} />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: 'rgb(243,244,247)',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '46px',
            paddingTop: '5px',
            justifyContent: 'flex-end',
            borderBottomLeftRadius: '9px',
            borderBottomRightRadius: '9px',
          }}
        >
          <div style={{ display: 'flex', marginRight: '20px', paddingTop: '7px', fontFamily: 'Proxima Nova Semibold', }}>
            <p style={{ color: 'lightGray', fontSize: 15, cursor: 'pointer' }}>{steps}</p>
          </div>
          <div style={{ marginRight: '20px', paddingTop: '7px' }}>
            <p onClick={onClose} style={{ color: 'lightGray', fontSize: 15, cursor: 'pointer' }}>
              Skip the tour
            </p>
          </div>
          <div
            style={{
              background: 'rgb(86, 145, 210)',
              padding: '8px 15px 9px 13px',
              borderRadius: 4,
              fontSize: 15,
              color: 'white',
              height: 38,
              marginRight: 15,
              cursor: 'pointer',
            }}
            onClick={() => {
              onClose()
              onNext()
            }}
          >
            {button}
          </div>
        </div>
      </div>
    </div>
  )
}

AbstractCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default AbstractCard

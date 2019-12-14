import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, OnboardingModal } from './Styled'

const AbstractCard = ({ onClose, onNext, title, body, imgSrc, steps }) => {
  return (
    <OnboardingModal>
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
          <img src={imgSrc} width={40} height={40} alt="Paint.garden" />
        </div>
        <div
          style={{
            marginLeft: 50,
            flex: '0.2 0.2 100%',
          }}
        >
          <p style={{ fontSize: 14 }}>{title}</p>
          <div style={{ flexBasis: '100%', height: 0 }} />
          <p style={{ fontSize: 14 }}>{body}</p>
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
          <div style={{ display: 'flex', marginRight: '20px', paddingTop: '7px', justifyContent: 'flex-start' }}>
            <p style={{ color: 'lightGray', fontSize: 15, cursor: 'pointer' }}>{steps}</p>
          </div>
          <div style={{ marginRight: '20px', paddingTop: '7px' }}>
            <p onClick={onClose} style={{ color: 'lightGray', fontSize: 15, cursor: 'pointer' }}>
              Skip the tour
            </p>
          </div>
          <Pagination
            onClick={() => {
              onClose()
              onNext()
            }}
          >
            Next
          </Pagination>
        </div>
      </div>
    </OnboardingModal>
  )
}

AbstractCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default AbstractCard

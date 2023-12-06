import './style.scss';

const Notification= ({ message, subMessage, onClick, type }) => {
  return (
    <div>
      <div className='message-box-custom'>
        <div
          className='message-box-custom-inner'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              marginRight: '12px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                type === 'green' ? '#33C25E'
                  : type === 'red' ? '#DC1E00'
                  : type === 'orange' ? '#D74C10'
                    : '#33C25E',
              borderRadius: '12px',
              color: '#fff',
            }}
          >
            {type === 'green' ? (
              <i className='fas fa-check' style={{ fontSize: '20px' }}></i>
            )
              : type === 'red' ? (
                <i className='fas fa-info-circle' style={{ fontSize: '20px' }}></i>
              )
                : (
                  <i className='fas fa-check'></i>
                )}
          </div>
          <div style={{ display: 'grid', alignItems: 'center' }}>
            <h5
              style={{ color: '#27282e', fontSize: '16px', fontWeight: 'bold' }}
              dangerouslySetInnerHTML={{ __html: message }}
            >
            </h5>
            {subMessage && <h6
              style={{
                fontSize: '16px',
                fontWeight: 'normal',
                color: '#6C6A73',
              }}
              dangerouslySetInnerHTML={{ __html: subMessage }}
            >
            </h6>
            }
          </div>
          <button
            style={{
              marginLeft: '30px',
              width: '16px',
              height: '24px',
              background: 'transparent',
              border: 'none',
              color: '#27282E',
              opacity: '0.5',
              alignSelf: 'self-start',
              fontWeight: '600',
              fontSize: '16px',
            }}
            onClick={onClick}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;

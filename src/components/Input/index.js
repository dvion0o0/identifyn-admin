import React, { useEffect, useRef, useState } from 'react'
import "./style.scss"
const Index = ({
  type = 'text',
  placeholder,
  label,
  value,
  className,
  onChange,
  style,
  optional,
  required = false,
  search = false,
  radio=false,
  name,
  otherText,
  isDisabled=false,
  defaultValue=''
}) => {
  const [showPlaceHolder, setShowPlaceHolder] = useState(required)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (value) {
      setShowPlaceHolder(false)
    }
  }, [value])


  return (
    <>
     {!radio && <div style={{ position: 'relative', width: '100%' }} className='input-wrapper'>
        {showPlaceHolder && <div className="placeholder">
          <label>{label}</label>
          <span style={{ color: 'rgba(220, 30, 0, 1)' }}> *</span>
        </div>
        }
        <input type={showPassword ? 'text' : type} value={value} placeholder={placeholder} disabled={isDisabled} className={className} onChange={onChange} style={style} defaultValue={defaultValue} autoComplete='off' readOnly onBlur={() => !value && required ? setShowPlaceHolder(true) : setShowPlaceHolder(false)} onFocus={(e) => {
          e.target.readOnly = false
        }}
          onTouchStart={(e) => {
            e.target.readOnly = false
          }} />
        {type === 'password' && <span className='show-password' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <i className='fas fa-eye-slash'></i> : <i className='fas fa-eye'></i>}</span>}
        {optional && <span className='optional' >Optional</span>}
        {search && <i className='fas fa-search search'></i>}
        {otherText && <span className='other-text' >{otherText}</span>}
      </div>
}
    {radio &&  <label class="radio-containers" style={style} className={className}>
        <input type="radio" name={name} value={value} onChange={onChange} />
        <span class="checkmark"></span>
        <span>{value}</span>
      </label>
}
    </>
  )
}

export default Index
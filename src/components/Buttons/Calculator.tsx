import { useState } from 'react'
import '../../scss/buttons/Calculator.scss'
import calculatorUse from '../../util/calculatorUse'
import mobileCheck from '../../util/isMobile'

const Calculator = () => {
  const isMobile = new mobileCheck().isMobile()
  const [value, setValue] = useState('')

  const onNumberClick = (num: string) => {
    setValue(value + num)
  }

  const result = () => {
    setValue(calculatorUse(value))
  }

  return (
    <div className="main_cal" style={{ bottom: isMobile ? '130px' : '' }}>
      <div className="card">
        <input type="text" className="value" id="txt" readOnly={true} value={value} />
        <span className="clear" onClick={() => setValue('')} style={{ marginLeft: '10px' }}>c</span>
        <span className="num" onClick={() => onNumberClick('/')} >/</span>
        <span className="num" onClick={() => onNumberClick('*')} style={{ marginRight: '10px' }}>*</span>
        <span className="num" onClick={() => onNumberClick('7')} style={{ marginLeft: '10px' }}>7</span>
        <span className="num" onClick={() => onNumberClick('8')} >8</span>
        <span className="num" onClick={() => onNumberClick('9')} >9</span>
        <span className="num" onClick={() => onNumberClick('-')} >-</span>
        <span className="num" onClick={() => onNumberClick('4')} style={{ marginLeft: '10px' }}>4</span>
        <span className="num" onClick={() => onNumberClick('5')} >5</span>
        <span className="num" onClick={() => onNumberClick('6')} >6</span>
        <span className="num" onClick={() => onNumberClick('+')} >+</span>
        <span className="num" onClick={() => onNumberClick('1')} style={{ marginLeft: '10px' }}>1</span>
        <span className="num" onClick={() => onNumberClick('2')} >2</span>
        <span className="num" onClick={() => onNumberClick('3')} >3</span>
        <span className="num" onClick={() => onNumberClick('0')} >0</span>
        <span className="num" onClick={() => onNumberClick('00')} style={{ marginLeft: '10px' }}>00</span>
        <span className="num" onClick={() => onNumberClick('.')} >.</span>
        <span className="result" onClick={() => result()}>=</span>
      </div>
    </div>
  )
}

export default Calculator
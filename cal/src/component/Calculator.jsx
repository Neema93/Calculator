export default function Calculator(){
    return(
 <div className="calculator">
        <div className="display">
         {result ?  <span>({result})</span> :''}
         &nbsp;
         {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate} >=</button>
         
        </div>
     </div>

    )
}
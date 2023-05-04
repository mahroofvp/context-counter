
import './button.css'

export const Button = ({btnTxt, actions}) => {
    
    


  return (
    <div className='btn-div'>
      <button className='btn' onClick={actions}>{btnTxt}</button> 
     
      </div>
  )
}

 
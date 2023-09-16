

const Passwordmiddle = ({length}) => {
  return (
  
        <div className="middle flex flex-row justify-between">
        <div className="charlength text-2xl font-medium py-2">
          Character Length
        </div>
        <div className="length p-2 text-2xl">{length}</div>
      </div>
   
  )
}

export default Passwordmiddle
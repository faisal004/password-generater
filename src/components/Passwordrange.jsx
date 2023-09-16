

const Passwordrange = ({length,setLength}) => {
  return (
    <div>
        <input
          className="w-full"
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
  )
}

export default Passwordrange
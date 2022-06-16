
const Error = ({mensaje}) => {
  return (
        <div className="bg-red-600 text-white p-3 font-bold text-center mb-3 rounded-md">
            <p>{mensaje}</p>
        </div>
  )
}

export default Error
import Allert from "./Allert"

const SeactionHeader = ({ allert, title, description, h, children }) => {
  return (
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        {allert&&<Allert title={allert} />}
        <h1 className={`${h} mb-4`} >{title}</h1>
        <p className="text-xl text-gray-400 mb-8">{description}</p>
        {children}
    </div>
  )
}

export default SeactionHeader
const FeatureBlock = ({ children, title, text }) => {
  return (
    <div className='relative flex flex-col items-center'>
        {children}
        <h4 className='h4 mb-2'>{title}</h4>
        <p 
            className="text-lg text-gray-400 text-center"
        >
            {text}
        </p>
    </div>
  )
}

export default FeatureBlock
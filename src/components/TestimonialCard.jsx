import Avatar from "./Avatar"

const TestimonialCard = ({ img, text, user, job }) => {
  return (
    <div className="flex flex-col h-full p-6 bg-gray-800">
        {/* avatar */}
        <Avatar img={img} />
        {/* content */}
        <blockquote className="text-lg text-gray-400 grow">{text}</blockquote>
        <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">{user}</cite> - <a className="text-primary hover:text-gray-200 transition duration-150 ease-in-out" href="#0">{job}</a>
        </div>
    </div>
  )
}

export default TestimonialCard
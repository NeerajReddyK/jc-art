
// Used in paragraph tags to reduce redundant code
interface SpanProps {
  content: string
}
const Span:React.FC<SpanProps> = ({content}) => {
  return (
    <>
      <span className=" text-customPurple px-2 font-bold">
        {content}
      </span>
    </>
  )
}

export default Span;

interface Props {
    visible: boolean
}
export const Header = ({visible}:Props) => {

  return (
    <header
    className={`fixed top-0 z-10 left-0 w-full h-16 duration-300 ${visible ? 'bg-secondary-100' : 'bg-none'}`}
    >
        <nav className="w-full flex gap-5 justify-center items-center h-full">
            <span className="link">Link 1</span>
            <span className="link">Link 2</span>
            <span className="link">Link 3</span>

        </nav>
    </header>
  )
}

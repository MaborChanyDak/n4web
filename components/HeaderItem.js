
function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-blue-500 ">
        <Icon className="h-8 mb-1 mt-2 group-hover:animate-bounce" />
        <p className="opacity-0 mr-1 justify-between group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  )
}

export default HeaderItem
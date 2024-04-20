
// const Avatar = ({ name }: { name: string}) => {
const Avatar = () => {
    return(
        <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img alt="User Avatar" src="https://github.com/shadcn.png" />
            {/* <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span> */}
        </div>
    )

}
export default Avatar;
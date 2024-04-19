
const Avatar = ({ name }: { name: string}) => {
    return(
        <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
            </div>
    )

}
export default Avatar;
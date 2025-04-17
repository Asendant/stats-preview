interface Props {
    number: string
    category: string
}

const Statistic = ({ number, category } : Props) => {
    return (
        <div className="w-full text-center mb-6 lg:w-auto lg:mr-6">
            <h2 className="font-bold text-2xl">{number}</h2>
            <p className="text-very-transparent-white font-medium text-xs">{category}</p>
        </div>
    )
}

export default Statistic
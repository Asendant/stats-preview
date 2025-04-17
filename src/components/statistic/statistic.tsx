interface Props {
    number: string
    category: string
}

const Statistic = ({ number, category } : Props) => {
    return (
        <div className="text-center mt-6">
            <h2 className="font-bold text-white text-[1.1rem] xs:text-[1.25rem] sm:text-[1.5rem] leading-tight">{number}</h2>
            <p className="text-slightly-transparent-white text-[0.65rem] xs:text-[0.7rem] sm:text-[0.75rem] leading-tight uppercase">{category}</p>
        </div>
    )
}

export default Statistic
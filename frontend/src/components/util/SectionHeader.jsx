

const SectionHeader = ({title, dir = "r"}) => {

    return (
        <div
        className="flex items-center gap-8 mb-12"
        style={{flexDirection: dir === 'r' ? "r" : "row-reverse"}}
        >
            <div className="w-full h-[1px] bg-primary-content"/>
            <h2>
                <span className="text-3xl md:text-5xl font-black text-end tracking-tighter">
                    {title}
                </span>
            </h2>
        </div>
    )
}

export default SectionHeader;
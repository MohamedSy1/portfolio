import Resume from "../../assets/Mohamed Sy resume.pdf"
import { FiArrowRight } from "react-icons/fi"

const ResumeButton = () => {

    return (
        <div className=" inline-block">
            <a href={Resume} download="Mohamed Sy Resume" className="inline-block">
                <button className="flex">
                    <span className="p-1">
                        <FiArrowRight />
                    </span>
                    <span className="tracking-tighter text-neutral-500 transition-colors hover:text-indigo-300 ">Download resume</span>
                </button>
            </a>
        </div>
    )
}

export default ResumeButton;
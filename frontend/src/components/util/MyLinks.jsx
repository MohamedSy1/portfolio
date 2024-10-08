import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

const MyLinks = () => {

    return (
        <section className="flex gap-3 items-center pt-3">
            <p>My Links</p>
            <FiArrowRight />
            <ul className="flex flex-rows gap-4">
                <li className=" hover:text-indigo-300"><a href="https://github.com/MohamedSy1"><FaGithub/></a></li>
                <li className=" hover:text-indigo-300"><a href="https://www.linkedin.com/in/mohamed-s-179b20230/"> <FaLinkedin/></a></li>
            </ul>
        </section>
    )
}

export default MyLinks;
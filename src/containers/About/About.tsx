import tailwindIco from "../../assets/tailwind_icon.png";
import viteIcon from "../../assets/vite_icon.svg";
import gitIco from "../../assets/git_icon.svg";
import typescriptIco from "../../assets/typescript_icon.svg";

const About = () =>  {
    return (
        <div className="flex flex-col justify-center box-border pt-[5rem] pb-[6rem]">
            <div className="bg-gray-500 bg-opacity-50 flex flex-col p-[1rem] rounded-lg box-border mx-auto max-w-full mr-[2rem] ml-[2rem]" >
                <p className="text-center text-white mb-10 text-[1.5rem] sm:text-[2rem]">Добро пожаловать на страницу "О нас"</p>
                <p className="break-words text-[#98ec65] p-0 m-0">
                    Мы творческая команда профессиональных дизайнеров, стремимся создавать уникальные и впечатляющие визуальные решения для вашего бренда или проекта. Свяжитесь с нами сегодня, и давайте начнем создавать вместе!
                </p>
                <div className="flex flex-wrap justify-center gap-[2.25rem] pt-[2rem]">
                    <img className="w-[50px] sm-w-[100px]" src={tailwindIco} alt={"tailwind"}/>
                    <img className="w-[50px] sm-w-[100px]" src={viteIcon} alt={"vite"}/>
                    <img className="w-[50px] sm-w-[100px]" src={gitIco} alt={"git"}/>
                    <img className="w-[50px] sm-w-[100px]" src={typescriptIco} alt={"typescript"}/>
                </div>
            </div>
        </div>
    )
}

export default About;
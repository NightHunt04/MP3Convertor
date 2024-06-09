import { LinearGradient } from "react-text-gradients"

function MainOperation() {
    return (
        <div className="w-full flex flex-col items-center justify-center font-inter text-[14px] lg:text-[16px] mt-[40px] lg:mt-[50px]">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252525] rounded-[26px] w-[80%] lg:w-[40%]">
                <i className="fa-brands fa-youtube px-2 text-[#FF0000]"></i>

                <input 
                    type="text" 
                    className="w-full bg-transparent outline-none text-[14px] lg:text-[16px] px-2 py-2"
                    placeholder="Enter the youtube video link"
                />

                <LinearGradient gradient={['to right', '#17acff, #ff68f0']}>
                    <i className="fa-solid fa-paper-plane px-2 hover:cursor-pointer"></i>
                </LinearGradient>
            </div>
        </div>
    )
}

export default MainOperation
import { useState } from "react"
import { LinearGradient } from "react-text-gradients"
import APICall from "../utils/APICall"
import YouTube from "react-youtube"

function MainOperation() {
    const [link, setLink] = useState('')
    const [size, setSize] = useState(0)
    const [downloadLink, setDownloadLink] = useState('')
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState(false)
    const [firstTime, setFirstTime] = useState(false)
    const [ID, setID] = useState('')
    const [err, setErr] = useState(false)

    function downloadURI(uri, name) {
        let link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleRequest = async() => {
        setLink('')
        setLoad(prev => !prev)

        if(!firstTime)
            setFirstTime(prev => !prev)
        
        let {response, id} = await APICall(link)

        if(response === 'ERROR') {
            console.log('err')
            setLoad(prev => !prev)

            if(!err)
                setErr(prev => !prev)
        }  

        else if(response.status === 'ok') {
            setID(id) 

            if(err)
                setErr(prev => !prev)

            // calculate the file size 
            const calSize = parseInt(response.filesize) / 1048576
            setSize(calSize)
            
            // download link
            setDownloadLink(response.link)
            // title
            setTitle(response.title)

            setLoad(prev => !prev)
        }
    }

    return (
        <div className="w-full flex flex-col items-center justify-center font-inter text-[14px] lg:text-[16px] mt-[40px] lg:mt-[50px]">
            <div className="flex items-center justify-between px-4 py-2 bg-[#252525] rounded-[26px] w-[80%] lg:w-[40%]">
                <i className="fa-brands fa-youtube px-2 text-[#FF0000]"></i>

                <input 
                    type="text" 
                    className="w-full bg-transparent outline-none text-[14px] lg:text-[16px] px-2 py-2"
                    placeholder="Enter the youtube video link"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'Enter')
                            handleRequest()
                    }}
                />

                <LinearGradient gradient={['to right', '#17acff, #ff68f0']} onClick={handleRequest}>
                    <i className="fa-solid fa-paper-plane px-2 hover:cursor-pointer"></i>
                </LinearGradient>
            </div>
            
            <div className={`${load ? 'block' : 'hidden'} flex flex-col items-center justify-center`}>
                <img 
                    src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExODBnd2FvdzkwZWNncDdpcm1pZ3k1YTl4azltOXdoZzMwOTd5MTM0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3AMRa6DRUhMli/giphy.gif" 
                    alt="loading"
                    className={`w-[80%] lg:w-[90%] rounded-lg mt-[20px] lg:mt-[40px]`}/>
                <p className="pt-2">Converting...</p>
            </div>
            
            <div className={`${!load && firstTime && !err ? 'block' : 'hidden'} flex flex-col items-center justify-center`}>
                <YouTube videoId={String(ID)} opts={{height: 300, width: 350}} className="flex items-center justify-center mt-[30px] w-[400px] lg:w-[600px]"/>
                <div className="flex flex-col items-center justify-center mt-4">
                    <p className="px-3 text-center"><span className="font-bold">Title:&nbsp;</span>{title}</p>
                    <p className="px-3 text-center mt-2"><span className="font-bold">File size:&nbsp;</span>{size.toFixed(2)} mb</p>
                </div>
                <button className="px-4 py-1 mt-[30px] bg-[#343434] rounded-2xl hover:opacity-80" onClick={() => downloadURI(downloadLink, title)}>Download&nbsp;<i className="fa-solid fa-download text-[#50C878]"></i></button>
            </div>

        </div>
    )
}

export default MainOperation
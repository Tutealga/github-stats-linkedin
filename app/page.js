'use client'

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAward, faBookBookmark, faCircleExclamation, faClockRotateLeft, faCodePullRequest, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

  const ranks = {
    Diamante: {border:'border-[#70d1f4] bg-[linear-gradient(120deg,rgb(0,61,83,0.1)0%,rgb(112,209,244,0.1)100%)]', text:'text-[#70d1f4]', borderb: 'border-b-[#70d1f4]'}, 
    Oro: {border:'border-[#ffd700] bg-[linear-gradient(120deg, rgba(179,156,33,0.1)0%,rgb(255,215,0,0.1)100%)]', text:'text-[#ffd700]', borderb: 'border-b-[#ffd700]'}, 
    Bronze: {border:'border-[#cd7f32] bg-[linear-gradient(120deg,rgb(205,127,50,0.1)0%,rgb(255,127,0,0.1)100%)]', text:'text-[#cd7f32]', borderb: 'border-b-[#cd7f32]'},
    Plata: {border:'border-[#bec2cb] bg-[linear-gradient(120deg,rgb(190,194,203,0.1)0%,rgb(255,255,255,0.1)100%)]', text:'text-[#bec2cb]', borderb: 'border-b-[#bec2cb]'},
    Platino: {border:'border-[#046307] bg-[linear-gradient(120deg,rgb(4,99,7,0.1)0%,rgb(0,255,8,0.1)100%)]', text:'text-[#046307]', borderb: 'border-b-[#046307]'},
    Maestro: {border:'border-[#884dA7] bg-[linear-gradient(120deg,rgb(136,77,167,0.1)0%,rgb(167,0,255,0.1)100%)]', text:'text-[#884dA7]', borderb: 'border-b-[#884dA7]'}
  }

export default function Home() {
const [rank, setRank] = useState(ranks.Diamante)

useEffect(()=>{
  const keys = Object.keys(ranks)
  const length = keys.length
  
  const intervalId = setInterval(()=> {
    const randomKey = keys[Math.floor(Math.random() * length)]
    setRank(ranks[randomKey])
  }, 2500)

  return () => {
    clearInterval(intervalId)
  }
}, [])

  return (
    <article id="user-card" className={`border p-5 rounded-lg w-full h-[450px] justify-between flex flex-col ${rank.border} ease-in-out duration-500 transition`}>
      <div className={`flex items-center justify-between border-opacity-20 ${rank.borderb} border-b pb-6`}>
        <div className="flex gap-2">
      <Image src="https://avatars.githubusercontent.com/u/1561955?v=4" width={50} height={50} className="rounded-full w-14 h-14"/>
     <p className="text-white flex font-bold items-center">Miguel Ángel Durán</p>
        </div>
     <FontAwesomeIcon className={`${rank.text} w-10 h-10`} icon={faAward} />
      </div>
     <div className="grid grid-cols-2 gap-4">
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faStar} /><span>Stars:</span></div><p className="font-bold">12.5k</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faCodePullRequest} /><span>Pull Requests:</span></div><p className="font-bold">729</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faClockRotateLeft} /><span>Commits:</span></div><p className="font-bold">32.1k</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faUserGroup} /><span>Followers:</span></div><p className="font-bold">17.8k</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faBookBookmark} /><span>Repositories:</span></div><p className="font-bold">200</p></div>
     <div className="flex flex-col text-sm"><div className="flex gap-1 items-center"><FontAwesomeIcon className="w-4 h-4" icon={faCircleExclamation} /><span>Issues:</span></div><p className="font-bold">133</p></div>
     </div>
     <div className="flex flex-start gap-6 text-sm opacity-80">
     <Link className="gap-2 flex items-center" href="https://github.com/midudev"><FontAwesomeIcon className="w-4 h-4" icon={faGithub} />midudev</Link>
     <Link href="https://twitter.com/midudev" className="gap-2 flex items-center"><FontAwesomeIcon className="w-4 h-4" icon={faXTwitter} />midudev</Link>
     </div>
      </article>
  )
}

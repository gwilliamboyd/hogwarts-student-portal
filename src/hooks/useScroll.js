import { useEffect } from "react"

const useScroll = (e) => {

  if((e.target.innerHeight + e.target.scrollY) >= document.body.offsetHeight) {
    console.log('bottom of page')
  }
}

export default useScroll
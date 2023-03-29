import { gsap } from 'gsap'

export default function changeHeaderColor(){
    let tl = gsap.timeline({
      duration: 0.3,
      scrollTrigger: {
        trigger: '#hero',
        start: 'bottom 10%',  
        end: 'bottom center', 
        toggleActions: 'play none none reverse',
      }
    })

    tl.to('#logoText, #logoNumber, #headerCart', {
      color: '#333',
    })

    tl.to('#burger', {
      border: '1px solid #333',
    },"-=0.3")

    tl.to('.line1, .line2, .line3', {
     backgroundColor: '#333',
    },'-=0.6')
    
    gsap.to('#headerCart', {
      duration: 0.3,
      fill: '#555',
      scrollTrigger: {
        trigger: '#hero',
        start: 'bottom bottom',  
        end: 'bottom center', 
        toggleActions: 'play none none reverse',
      }
    })
   }

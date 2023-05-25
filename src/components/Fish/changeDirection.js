export default (selector, {setSwim, setX, x, setY, y, coordConteiner, classesCSS}) => {
    if(!classesCSS) return false
    
    const alterClass = (test, classesCSS, elem) => classesCSS.forEach(classCSS => classCSS == test ? setSwim(classCSS) : false)

    function keyPress(key, selector) {
        
        const fish = document.getElementById(selector)
        const coord = fish.getBoundingClientRect()
        let vel = 8*1
        switch(key){
            case 'ArrowUp': alterClass('swimTop', classesCSS, fish)
            if(coord.y <= 0) break
                setY(y-vel)
            break
            case 'ArrowDown': alterClass('swimDown', classesCSS, fish)
            if(coord.y + coord.height + vel >= coordConteiner().height) { setY(coordConteiner().height-12 - coord.height ); break}
            setY(y+vel) 
            break
            case 'ArrowLeft': alterClass('swimLeft', classesCSS, fish)
            if(coord.x <= 0) break
                setX(x-vel)
            break
            case 'ArrowRight': alterClass('swimRigth', classesCSS, fish)
            if(coord.x + coord.width + vel >= coordConteiner().width) {setX(coordConteiner().width-12 - coord.width); break}
            setX(x+vel*1.6) 
                break
            default:
                break
        }
}
    
    window.document.onkeydown = ({key}) => keyPress(key, selector)
}
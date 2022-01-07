window.onload = function () {


    let snows = document.querySelector('#snows')
    for (let i = 0; i <= 200; i++) {
        let snow = document.createElement('div')
        snows.appendChild(snow)
        snow.className = 'snow'
        let randomT = Math.random() * 100
        snow.style.transform = `translate(${randomT}vw, -10px) scale(${randomT * 0.01})`
        snow.style.opacity = `${randomT * 0.01}`
        snow.style.animationDuration = `${randomT}s`
        let snowName = snow.style.animationName = `snow-${i}`
        let snowAnimation = `@keyframes ${snowName}{
            from{
                transform: translate(${randomT}vw, -${randomT}vh) scale(${randomT * 0.01});
            }
            to{
                transform: translate(${randomT * Math.random()}vw, ${randomT * Math.random()}vh) scale(${randomT * Math.random() * 0.01});

            }
        }`
        let snowAnimationStyle = document.styleSheets[0]
        snowAnimationStyle.insertRule(snowAnimation)
    }

    const toggleTheme = document.querySelector('.toggle-theme')
    toggleTheme.onclick = function(){
        toggleTheme.classList.toggle('active')
        snows.classList.toggle('active')
    }

}
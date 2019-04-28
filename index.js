;(() => {
    /**
     * Create the parallax function
     * 
     * @param {String} selector CSS Selector
     */
    const makeParallax = selector => {
        
        const items = [ ...document.querySelectorAll(selector) ]
            .map (element => ({ element, offset: 0 }))
    
        return () => {
            items.forEach (item => {
                const rect = item.element.getBoundingClientRect ()
                const transformY = item.offset
                const origin = rect.top - transformY + rect.height / 2
    
                const offset = (origin - window.innerHeight / 2) * item.element.dataset.speed
    
                if (rect.top < window.innerHeight || offset < window.innerHeight / 2) {
                    item.offset = offset
                    item.element.style.transform = `translateY(${offset}px)`
                }
            })
        }
    }
    
    const parallax = makeParallax ('[data-speed]')
    window.addEventListener ('scroll', parallax, {
        passive: true
    })
    
}) ()
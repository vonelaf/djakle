function djak(opt){ 
    if(opt.to !== undefined) {
        this.elem = document.querySelector(opt.to);

        if(opt.moveX !== undefined) {
            this.elem.style.transition = 'all 1s ease';
            this.elem.style.transform = 'translateX(' + opt.moveX +'px)'
        }
        if(opt.duration !== undefined) {
            this.elem.style.transition = 'all ' + opt.duration + "s ease";
            if(opt.easing !== undefined) {
                this.elem.style.transition = 'all ' + opt.duration + 's ' + opt.easing;
            }
        }
        if(opt.moveY !== undefined) {
            this.elem.style.transform = 'translateY(' + opt.moveY +'px)'
        }
        if(opt.bg !== undefined) {
            this.elem.style.backgroundColor = opt.bg;
        }
    }
    else {
        throw new Error('Undefined key "to"')
    }
}

module.exports.djak = djak
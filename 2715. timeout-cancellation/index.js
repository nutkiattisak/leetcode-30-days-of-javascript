const cancellable = (fn, args, t) => {
    var timer = setTimeout(() => {
        fn.apply(this, args)
    }, t)
    return () => {
        clearTimeout(timer)
    }
}

const DomBuilder = (what, where) => {
    document.querySelector(where).appenChild(what)
}


module.exports = DomBuilder;
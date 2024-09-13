const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s3 = document.getElementById('s3')
const s4 = document.getElementById('s4')

s1.addEventListener("click", () => {
    document.getElementById('slTooltip').style.display = 'block'
    var line = new LeaderLine(
        document.getElementById('slTooltip'),
        document.getElementById('selector'),
    );
})
s2.addEventListener("click", () => {
    document.getElementById('prop1Tooltip').style.display = 'block'

    var line = new LeaderLine(
        document.getElementById('prop1Tooltip'),
        document.getElementById('prop1'),
    );
})
s3.addEventListener("click", () => {
    document.getElementById('value1Tooltip').style.display = 'block'
    var line = new LeaderLine(
        document.getElementById('value1Tooltip'),
        document.getElementById('value1'),
    );
})
s4.addEventListener("click", () => {
    document.getElementById('cmnt').style.visibility = 'visible'

})



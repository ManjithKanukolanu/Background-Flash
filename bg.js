const randomcolor = function()
{
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++)
    {
       color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let clear
const startChange = function()
{
    clear = setInterval(Change,1000)
    function Change()
    {
        document.body.style.backgroundColor = randomcolor();
    }
}
const removeChange =function()
{
    clearInterval(clear)
    clear=null
}
document.querySelector("#start").addEventListener('click',startChange)

document.querySelector("#stop").addEventListener('click',removeChange)
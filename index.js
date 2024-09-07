let counter = 0;
document.getElementById('myh1').textContent = counter;

document.getElementById('dec').onclick = function()
{
    counter--;
    document.getElementById('myh1').textContent = counter;
}
document.getElementById('Increase').onclick = function()
{
    counter++;
    document.getElementById('myh1').textContent = counter;
}
document.getElementById('reset').onclick = function()
{
    counter = 0;
    document.getElementById('myh1').textContent = counter;
}
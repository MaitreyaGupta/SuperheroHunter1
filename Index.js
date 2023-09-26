var table=document.getElementById("MyTable")
var Search=document.getElementById("SearchBar")
var OnSubmit=document.getElementById("OnSubmit")
var OnOther=document.getElementById("SearchedHero")
OnSubmit.addEventListener("click",SearchFunction)
function SearchFunction(){
    var hero=Search.value
    var tr=table.getElementsByTagName("tr")
for(var i=0;i<tr.length;i++)
{
    console.log("Bhul")
    let td1=tr[i].getElementsByTagName("td")[1]
    if(td1)
    {
        console.log("This")
        //OnOther.innerHTML=tr[i].getElementsByTagName("td")[0].innerHTML+tr[i].getElementsByTagName("td")[1].innerHTML+tr[i].getElementsByTagName("td")[2].innerHTML+tr[i].getElementsByTagName("td")[3].innerHTML
        if(td1.innerHTML==Search.value)
        {
            OnOther.innerHTML=tr[i].getElementsByTagName("td")[0].innerHTML+tr[i].getElementsByTagName("td")[1].innerHTML+tr[i].getElementsByTagName("td")[2].innerHTML+tr[i].getElementsByTagName("td")[3].innerHTML
        }
    }
}
}
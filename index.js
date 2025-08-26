var inputElemnt = document.getElementById("inputText")




function add()
{
    localStorage.setItem("inputValues",inputElemnt.value);
    inputElemnt.value = ""
}
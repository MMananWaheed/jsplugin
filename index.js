
let myLeads = []
let inputEl = document.getElementById('input-el')
let unList = document.getElementById('ul-el')

let inputBtn = document.getElementById('input-btn')
let tabBtn = document.getElementById("tabSave-btn")
let deleteBtn = document.getElementById('delete-btn')
let urlname = document.getElementById("urls-get")

let localStorageValue = JSON.parse( localStorage.getItem("leads"))
if (localStorageValue){
    myLeads =  localStorageValue
    render()

}


inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    unList.textContent = ""
    inputEl.value=""


    localStorage.setItem("leads", JSON.stringify(myLeads))
    
    let localStorageValue = localStorage.getItem("leads")

    console.log(localStorageValue)

    render()
})




deleteBtn.addEventListener('dblclick', function(){

    localStorage.clear()
    myLeads = []
    unList.innerHTML = ""
    


})

tabBtn.addEventListener('click', function(){
    unList.innerHTML =""

    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
    
        
    myLeads.push(tabs[0].url)
    localStorage.setItem("leads", JSON.stringify(myLeads))
    render()


    });
})

function render(){

    for (let i = 0; i< myLeads.length; i++ ){
    unList.innerHTML += 
    `<li>
    
    <a href='${myLeads[i]}' target='_blank'>"${myLeads[i]}"</a>
    
    </li>`
    }
}


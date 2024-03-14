var arr =[
    {dp:"https://images.unsplash.com/photo-1709835485647-cd2f1e7f9117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1710172510079-9a1703c3fd05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},

    {dp:"https://images.unsplash.com/photo-1709790129436-c36d1479b2d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1709545300835-d9b8992c26ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"},

    {dp:"https://images.unsplash.com/photo-1709835485647-cd2f1e7f9117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1710172510079-9a1703c3fd05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D"},

    {dp:"https://images.unsplash.com/photo-1709790129436-c36d1479b2d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1709545300835-d9b8992c26ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D"}
]

var stories=document.querySelector("#stories")
var clutter=""
arr.forEach(function(elem,idx){
    clutter+=`   <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`        
})


document.querySelector("#stories").innerHTML=clutter


stories.addEventListener("click",function(dets){
    var value=arr[dets.target.id].story

    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${value})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"

    },2000)
})


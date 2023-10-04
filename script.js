var arr = [
    {dp:"https://images.unsplash.com/photo-1445052858312-134745f190f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
    story:"https://plus.unsplash.com/premium_photo-1664203573232-1074bf1e7cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"},
    {dp:"https://media.istockphoto.com/id/1344666370/photo/attractive-asian-woman-who-thinks.jpg?s=612x612&w=0&k=20&c=-9a-DxlHT0APIMWzDbbkyK-3XlHVNo4I_S58uhbDbts=",
    story:"https://media.istockphoto.com/id/1306245568/photo/woman-on-background.jpg?s=612x612&w=0&k=20&c=qMdQSuoGSJpJveqoNu2FiTkXCgMqOPgIo0LvZhNiAeA="},
    {dp:"https://media.istockphoto.com/id/1457287834/photo/photo-of-young-asian-girl-posing-on-blue-background.jpg?s=612x612&w=0&k=20&c=z3kSbIPrucyPqDaieE_QjDuVFKT18FkIgAsxHXdIe4M=",
    story:"https://media.istockphoto.com/id/1132006307/photo/portrait-of-her-she-nice-looking-cute-lovely-adorable-sweet-attractive-cheerful-cheery.jpg?s=612x612&w=0&k=20&c=ro3XUE4aojzfRdEb9tqKTKtUrVHFSkPlfStgXnGpQkM="},
    {dp:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
    story:"https://images.unsplash.com/photo-1486663845017-3eedaa78617f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
    {dp:"https://media.istockphoto.com/id/1161091093/photo/active-young-woman-in-casual-summer-outfit-having-fun-indoor.jpg?s=612x612&w=0&k=20&c=JuvE6rEatQfVMHaYi7JzhwSSR2UKUL1pqqoClaAlluY=",
    story:"https://media.istockphoto.com/id/1304283300/photo/young-curly-woman-and-cute-little-girl-look-at-each-other-and-clapping-hands-gesturing-high.jpg?s=612x612&w=0&k=20&c=RSJWDbliRAwTdYB0c050KFBBJIbPeoavHV5G1t7Kmgs="},
];


var clutter = ""
arr.forEach(function(elem, id){
    clutter += ` <div class="story">
            <img id="${id}"
            src="${elem.dp}" alt=""/>
                </div>`
});

stories.innerHTML = clutter;


stories.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display="block"

    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },2000)
    
});
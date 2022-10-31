 //DropMenu

 let avatar =document.querySelector(".avatar");
 let notification =document.querySelector(".notification");

 dropMenu(avatar)
 dropMenu(notification) 
 function dropMenu(selector)
 {
    selector.addEventListener("click",()=>
    {
        let dropDownMenu = selector.querySelector(".dropdown-menu");
        dropDownMenu.classList.contains("active") ? dropDownMenu.classList.remove("active") : dropDownMenu.classList.add("active");
    }
    )
 }
 // end DropMenu


 //sidebar
  let sidebar =document.querySelector(".sidebar");
  let bars =document.querySelector(".bars");

  bars.addEventListener("click",function()
  {
    sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active");

})

//End Sidebar


let vistors=[800,320,190,250,400,600],
hired=[502,203,70,200,350,400],
years=[2015,2016,2017,2018,2019,2020];
//chart 
var options ={
    chart:{
        type:'area',
        height:'80%',
        width:'100%'
    },
    series:[{
        type:'area',
        name:"vistors",
        data:vistors
    },
    {
        type:'area',
        name:"hired", 
        data:hired
    },

],


    xaxis:{
        categories:years
    },
    colors:['#F44336', '#E91E63', '#9C27B0']        
} 
var chart =new ApexCharts(document.querySelector("#chart"),options);
chart.render();



//mode
let mode=document.querySelector(".mode");
mode.addEventListener("click",function(){
    document.body.classList.contains("dark") ? document.body.classList.remove("dark") :
    document.body.classList.add("dark")
})
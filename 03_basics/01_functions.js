//{}-yo nai scope ho

//nested scope


function one (){
    const username = "satish"
    
    function two(){
        website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()




if (true) {
    const username = "satish"
    if (username === "satish"){
        const website = "youtube"
       // console.log(username + website);
    }
        //console.log(website);
    }
   // console.log(username);
    


   // +++++++++++++++++++++++++++++ interesting


   function addOne(num){
    return num +1
   }
   addOne(5)


   const addTwo = function(num){
    return num + 4
   }
   addTwo(4)
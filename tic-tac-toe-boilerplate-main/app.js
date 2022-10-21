const reset = document.getElementById("reset-game");
let combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let x=true
let click = 0

let res=new Array(9)

document.querySelectorAll(".box").forEach((abc, i) => {
    abc.onclick=()=>{
        if(res[i]!==undefined){
            alert("DO next click,Already clicked.")
            return
        }
        res[i] = x

        if(x){
            abc.innerText = 'X'
        }
        else{
            abc.innerText = 'O'
        }
        x = !x
        click ++
        checkWinner()
    };
})

function checkWinner(){
    combinations.forEach((e)=>{
        let n1 = res[e[0]];
        let n2 = res[e[1]];
        let n3 = res[e[2]];
        if(n1 == n2 && n2 == n3 && n1!=undefined){
        end(n1?'X':'O')
        return;
    }else if(click == 9){
        end("draw")
        return ;
        
    }
})
}

function end(status){
    if(status == "draw"){
        result.innerText = "It's a Draw"
    }
    else{
        player.innerText=status;
    }
    overlay.classList.add('active')

}

reset.onclick=()=>{
    window.location.reload()
}
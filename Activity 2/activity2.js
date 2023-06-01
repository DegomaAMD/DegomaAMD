let act2 = [{ 
    x : 1.5 , 
    y : 2 } , 
    { x : -1 , 
    y : -1 } , 
    { x : 0.5 , 
    y : -2.5} , 
    { x : 10 , 
    y : 4 } , 
    { x : 2.5 , 
    y : 3 }]
    
    let ans = '';
    const activityAns = () => { 
        for (i = 0 ; i < act2.length ; i++){
            if (act2[i].x < 0){
            ans = (act2[i].x / act2[i].y) * act2[i].x + 4;
        }else if (act2[i].y < 0){
            ans = act2[i].x - act2[i].y;
        }else if (act2[i].x > act2[i].y){
            let z = ((act2[i].x * 5) / 2) % act2[i].y;
            ans = z; }
        else{
            let z = (act2[i].x % 5) * (2 * act2[i].y);
            ans = z; }
    
    console.log(act2[i]);
    console.log("Condition1 ==", act2[i].x < 0); 
    console.log("Condition2 ==", act2[i].y < 0); 
    console.log("Condition3 ==", act2[i].x > act2[i].y); 
    console.log(ans);
        }
    };
    activityAns();
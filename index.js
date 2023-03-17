// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity='go to the office'){
return `This Monday, I will ${activity}.`
}

function wrapAdjective(activity='*'){
    return function(flair="special"){
        return `You are ${activity}${flair}${activity}!`
        
    }
    }
  //  const encouragingPromptFunction = wrapAdjective("*")
   // wrapAdjective("||")("a dedicated programmer")

function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){

return document.querySelector('#nested .target')
}

  function increaseRankBy(n){
        // increases rank of .rankedlists by n - useparseInt()
    const num = document.querySelectorAll('ul.ranked-list')
    for(let j=0; j< num.length;j++){
        let len = num[j].children
      for(let i=0 ; i < len.length;i++){
          let newValue = parseInt(num[j].children[i].innerHTML)+n;
          num[j].children[i].innerHTML = newValue;
          console.log(newValue);
      }
    }
  }
  // console.log(newValue1);
  // console.log(num1[i]);
  // console.log(" ")
  // console.log(newValue2);
  // console.log(num2[i]);
  // console.log("----")
function deepestChild(){

const deepest = document.querySelector('div#grand-node div div div div')
return deepest;

}

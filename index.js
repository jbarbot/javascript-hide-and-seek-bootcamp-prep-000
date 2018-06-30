function getFirstSelector(selector) {
  return document.querySelector(selector);
}



function nestedTarget() {
 return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for (i = 0; i < rankedLists.length; i++) {
    let x = rankedLists[i].children
    
    for (let y = 0; y < x.length; y++) {
      children[j].innerHTML = parseInt(x[y].innerHTML) + n
    }
    
  }
}


function deepestChild() {
  var x = document.getElementById('grand-node');
  let y = x.children[0];
  
 while (y) {
    x = y
   y = x.children[0]
   
 }
return x
}
  

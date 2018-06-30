function getFirstSelector(selector) {
  return document.querySelector(selector);
}



function nestedTarget() {
 return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  
  for (i = 0; i < rankedLists.length; i++) {
    
  }
}


function deepestChild() {
  var node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  
 while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
   
 }
return node
}
  

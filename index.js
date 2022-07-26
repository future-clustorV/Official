const manuButton = document.getElementById('menu-btn');
const manuList = document.getElementById('header');


manuButton.addEventListener("click", showHideManuList);

function showHideManuList(){
  if(manuList.classList.contains('active')){
    manuList.classList.remove('active');
  }else{
    manuList.classList.add('active');
  }
}


const eachVButton = document.getElementsByClassName('eachVsButton')[0];
const eachVListItem = document.getElementById('headerVs')

eachVButton.addEventListener('click', showHideEachVList);

function showHideEachVList(){
  if(eachVListItem.classList.contains('active')){
    eachVListItem.classList.remove('active');
  }else{
    eachVListItem.classList.add('active');
  }
}

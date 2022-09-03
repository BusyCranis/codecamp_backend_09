
// 커피 목록 조회 API를 요청해주세요.
const getCoffee = () => {
 

 
  // 1. 백엔드 서버로 /starbucks API 요청해 커피 데이터를 받는다.

  axios.get("http://localhost:3000/starbucks").then((res) => {
    console.log(res.data.posts);
    createMenuCard(res.data.posts)
  }).catch((e) => {
    console.error(e.message);
  });

 


}

const createMenuCard = (data) => {

  for (var i = 0; i < data.length; i++) {

    const menuCardWrapper = document.createElement('div')
    menuCardWrapper.className = 'Menu_Card_Wrapper'

    const menuCardImgBox = document.createElement('div')
    menuCardImgBox.className = 'Menu_Card_ImgBox'

    const menuCardName = document.createElement('div')
    menuCardName.className = 'Menu_Card_Name'
    menuCardName.textContent = data[i].name || '메뉴이름'

    const menuCardInfo = document.createElement('div')
    menuCardInfo.className = 'Menu_Card_Info'
    menuCardInfo.textContent = data[i].kcal || '칼로리'

    const menuWrapper = document.querySelector('#Menu_Background')
    menuCardWrapper.appendChild(menuCardImgBox)
    menuCardWrapper.appendChild(menuCardName)
    menuCardWrapper.appendChild(menuCardInfo)
    menuWrapper.appendChild(menuCardWrapper)

  }



  console.log(data)


}





















const openMenu = () => {
  console.log("메뉴 열기 버튼 클릭")
  // 모달창 열기
  let wrapper = document.getElementById('Wrapper')
  let menu = document.getElementById('Menu_Background')
  let button = document.getElementById('Open_Menu_Btn')
  let closeButton = document.getElementById('CloseBtn')
  let naviWrapper = document.getElementById('Navi_Wrapper')
  let titleWrapper = document.getElementById('Title_Wrapper')
  wrapper.style.backgroundImage = 'url()'
  wrapper.style.backgroundColor = 'rgba(0,0,0,0.9)'
  button.style.display = 'none'
  menu.style.display = 'flex'
  closeButton.style.display = 'flex'
  naviWrapper.style.display = 'none'
  titleWrapper.style.display = 'none'

  // 커피 목록 조회 API 요청
  getCoffee()
}
const closeMenu = () => {
  let wrapper = document.getElementById('Wrapper')
  let menu = document.getElementById('Menu_Background')
  let button = document.getElementById('Open_Menu_Btn')
  let closeButton = document.getElementById('CloseBtn')
  let naviWrapper = document.getElementById('Navi_Wrapper')
  let titleWrapper = document.getElementById('Title_Wrapper')
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild)
  }
  wrapper.style.backgroundImage = 'url(../img/menu-back-ground.jpg)'
  wrapper.style.backgroundColor = 'rgba(0,0,0,0.2)'
  wrapper.style.backgroundPosition = 'center'
  button.style.display = 'flex'
  menu.style.display = 'none'
  closeButton.style.display = 'none'
  naviWrapper.style.display = 'flex'
  titleWrapper.style.display = 'block'
}

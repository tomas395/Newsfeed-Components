/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

function displayArticle(array) {
  const newMenu = document.createElement("div");
  const menuList = document.createElement("ul");
  const menuHidden = document.querySelector(".menu-button");
  const header = document.querySelector(".header");
  header.appendChild(newMenu);
  newMenu.appendChild(menuList);

  array.forEach(item => {
    menuItem = document.createElement("li");
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
    return menuList;
  });

  newMenu.classList.add("menu");
  menuHidden.addEventListener("click", event => {
    console.log("opened", event.target);
    newMenu.classList.toggle("menu--open");
  });

  return newMenu;
}
displayArticle(menuItems);

/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// let rubbishSmashChars = [
//   {
//     title: 'Gannondorf',
//     date: 'November 28th 1986'
//     firstParagraph: 'Gannondorf is a bully.',
//     secondParagraph: 'I get killed when i try to gimp him offstage.'
//     thirdParagraph: 'He needs to be nerfed cuz he killed me with 3 hits!'
//   }
//   {
//     title: 'Ness',
//     date: 'December 25th 1993'
//     firstParagraph: 'Ness is actually Negan.',
//     secondParagraph: 'I get killed when i try to gimp him while he/s PK Thundering back to ledge.'
//     thirdParagraph: 'He needs to be nerfed cuz his yoyo and pk fire are hacks!'
//   }
// ]

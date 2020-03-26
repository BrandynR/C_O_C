![](https://i.imgur.com/v8JkaeP.png)

---

# Clash of Conjurers

Clash of Conjurers is a 1 vs 1 card based attack game, built using the [Phaser 3](https://phaser.io/) framework in conjunction with Javascript, NodeJS, HTML5, and CSS.

Created by Brandyn Reindel, John Knight and Adam Sedki as our end of Foundations portfolio project for Holberton School, it is inspired by the computer game Slay the Spire, and the mobile game Puzzles and Empires. Where two wizards chose cards with an elemental value to attack each other.

When we started this project we set out to design and build a game with little to no learning curve so that users could open the game and play without needing to memorize a bunch of rules, or learn a bunch of controls. A game where players could enjoy themselves by playing a few rounds with a friend to kill some time, without worrying about having to invest an afternoon just learning how to play.

Visit our landing page for Clash of Conjurers here: http://unbouncepages.com/clash-of-conjurers/

---

## Things to Come...
We plan on pushing our build to a live server so that players can sign in remotely to a game to play against their friends. However as of now (3/25/20) this functionality remains in developement. We have other ambitions to implent as well. Such as a deck of cards that will randomly deal each player their own hand of 5 cards. So that as a player chooses a card it is discarded and the player is dealt another card from the deck. We are going to add the ability for players to choose multiple cards of the same element in order to create a stronger attack, and add a defensive value to each card in order to provide players with more strategic options on their turn.

While these things were all part of our inital proposal when we were planning out what to create, we faced some challenges throughout the course of building this MVP that hindered our ability to implement them. The biggest challenge we faced was working in Phaser 3 for the first time. With no experience using this framework we all learned as we went, but what made this difficult was the lack of documentation. Without any sort of proper documentation, the learning curve for Phaser 3 was far steeper than anticipated, so implementing all of our ideas proved difficult in the timeframe we had. 

We also decided to switch from a Player vs Computer model to a 1v1 game in the middle of development. When we made this switch we did not anticipate that successfully deploying our game to a server would be so difficult, and at this point we again fell victim to our deadline.

Lastly, working together as a team became nearly impossible towards the end of our project due to a national pandemic. During the last week or so before our project deadline, the state of Connecticut began to shut down all public buildings and institute a quartine due to the COVID-19 virus. Which made it impossible to work together in person, so everything had to be done remotely.

---

## Installation

To install the application, you need to download the project from github, https://github.com/BrandynR/C_O_C.

<img src="https://i.imgur.com/ItP83lL.png" alt="clone" width="750" height="400"/>

You need to ensure you have nodejs installed, if you don't open your terminal and type:

<code>npm install</code>

Lastly, you need a web browser to navigate to your localhost.

---

## Usage
After following the installation instructions above, to start the game, change directory to the downloaded project directory and type: <code>npm start</code> in your terminal. The game will be served on localhost:8081.

In the web browser of your choosing navigate to the Clash of Conjurers landing page at http://unbouncepages.com/clash-of-conjurers/ and click "Go to Game" found in the center of the page, or you can go directly to http://localhost:8081. The game's menu screen will load up, from there click the "play" button to load the game.

![](https://i.imgur.com/taGmBaU.jpg)


Once you are in the game, click on any of the element cards on the bottom of your screen to initialize an attack.

![](https://i.imgur.com/nDxhJux.jpg)
*As of now (3/25/20) the first three cards Earth, Air, and Fire will attack the Ice Wizard on the right. While the Water and Earth card on the bottom right will attack the Fire Wizard on the left.*

Players will alternate turns selecting a card and dealing damage to the opposing wizard. The first player to deplete the opposing wizard of their health wins!

![](https://i.imgur.com/nwYrtgV.jpg)



---

## Contributors :computer:
![](https://i.imgur.com/Unn435I.png)

Brandyn Reindel 
* Project Manager
* Developer 


![](https://i.imgur.com/ZR3KhGu.png)

Adam Sedki 
* Assets and Artwork
* Project designer


![](https://i.imgur.com/EL6fuOG.png)

John Knight
* Server manager 
* Developer


---

## Related Projects
For other Phaser 3 projects and examples please visit:
[phaser.io](https://phaser.io)

or

[http://phaser.io/examples](http://phaser.io/examples)


---

## Technologies Used :building_construction:

<b>Clash of Conjurers was built with:</b>

    - [Node.js](https://nodejs.org/en/)
    
    - [Phaser 3](https://phaser.io/phaser3)
    
    - HTML 5.0
    
    - CSS
    
    -TextCraft (https://www.codeandweb.com/texturepacker)
    
    -Open Game Art (https://opengameart.org/)
    
    -TexturePacker (https://www.codeandweb.com/texturepacker)


---

## Licensing
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/digitsensitive/phaser3-typescript/blob/master/LICENSE) file for details.

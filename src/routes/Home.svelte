<script>
    import Word from "../lib/word.svelte";
    alert("This website isn't designed for mobile, so if you're on a mobile device it will not display properly. Sorry :(");
</script>
  
  <main>
  <br>
  <div class="container">
    <div>
      <img class="pfp" src="images/pfp.png" width="230px" alt="profile pic">
    </div>
    <div>
      <Word/>
      <h1>freeparty enjoyer, amateur dj | free tekno for free people &lt;3</h1>
      <h1>
      <a href="https://soundcloud.com/eatincatfood">soundcloud</a> |
      <a href="https://open.spotify.com/user/isyg8ky5hrcmptz626tcn35n5?si=4e4fc2c03e8b49fc">spotify</a> |
      <a href="https://github.com/Akwaaa">github</a> |
      <a href="https://twitch.tv/444Akwa">twitch</a> |
      <a href="#popup1">discord</a> |
      <a href="https://last.fm/user/akwajpn">last.fm</a> |
      <a href="#popup2">steam</a>
      </h1>
  
      <div id="popup1" class="overlay">
        <div class="popup">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="close" href="#">&times;</a>
          <div class="content">
            <h1>accounts:</h1>
            <h2>
              <a href="https://discord.com/users/610214508937347082">@akwa</a> - main account<br>
              <a href="https://discord.com/users/1122147961170821262">@akwa.top</a> - alt (inactive) account
            </h2>
            <h3>
              (note: hyperlinks to the accounts might not work if we have no servers in common, just add my <b>main</b> account instead to contact me)
            </h3>
          </div>
        </div>
      </div>
  
      <div id="popup2" class="overlay">
        <div class="popup">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a class="close" href="#">&times;</a>
          <div class="content">
            <h1>accounts:</h1>
            <h2>
              <a href="https://steamcommunity.com/id/0g_">/id/0g_/</a> - hvh (inactive) account<br>
              <a href="https://steamcommunity.com/id/akwajpn">/id/akwajpn/</a> - old (semi active) account<br>
              <a href="https://steamcommunity.com/id/616b7761">/id/616b7761/</a> - main account<br>
              <a href="https://steamcommunity.com/id/eveecs">/id/eveecs/</a> - csgo-only account
            </h2>
          </div>
        </div>
      </div>
  
      <h1>
        <a href="https://kanab.top">kanab</a> x
        <span class="nolink">mth</span> x
        <span class="nolink">dea</span>
      </h1>
    </div>
  </div>
  <br>
   <div class="buttons">
    <h1 class="smol">buttons!</h1>
    <p class="smol centered">
      <img src="images/buttons/anonymize.gif" width=88 height=31 alt="anonymize the web!">
      <a href="https://archlinux.org/"><img src="images/buttons/archlinux.gif" width=88 height=31 alt="arch linux"></a>
      <img src="images/buttons/arizona.gif" width=88 height=31 alt="powered by arizona green tea">
      <img src="images/buttons/construction.gif" width=88 height=31 alt="website under construction">
      <img src="images/buttons/htmldream.gif" width=88 height=31 alt="i dream in html"><br>
      <a href="https://smokepowered.com/"><img src="images/buttons/smokepowered.gif" width=88 height=31 alt="high on smoke"></a>
      <img src="images/buttons/powered.gif" width=88 height=31 alt="this site is powered by imagination">
      <img src="images/buttons/rainbow_bev.gif" width=88 height=31 alt="rainbow/LGBTQ flag">
      <img src="images/buttons/seedyourtorrents.gif" width=88 height=31 alt="seed your torrents!">
      <img src="images/buttons/tyg.gif" width=88 height=31 alt="trans your gender!">
      <img src="images/buttons/webpassion.gif" width=88 height=31 alt="web design is my passion">
    </p>
   </div>
   <br>
   <footer>
   <hr>
   <br>
    <p class="centered">
      made with &lt;3 by <a href="https://github.com/Akwaaa">ākwa</a>, with the help of <a href="https://github.com/Imbwbl">bwbl</a> | hosted by <a href="https://damioski.de">damioski netzwerk</a>
    </p>
  </footer>
  </main>
  
  <style>
    :root {
      background: #C082FF;
      margin-left: 15%;
      margin-right: 15%;
    }
    
    h1 {
      color: white;
      font-size: 30px;
      font-family: Inter;
      font-weight: 400;
      word-wrap: break-word;
      line-height: 1;
    }
  
    hr {
      color: white;
    }
  
    a:link {
      color: #cbeaff;
      background-color: transparent;
      text-decoration: none;
    }
  
    a:visited {
      color: #cbeaff;
      background-color: transparent;
      text-decoration: none;
    }
  
    a:hover {
      color: rgb(255, 255, 255);
      background-color: transparent;
      text-decoration: underline;
    }
  
    a:active {
      color: #7acaff;
      background-color: transparent;
      text-decoration: underline;
    }
  
    .container {
      display: flex;
      flex-direction: row;
    }
  
    img.pfp {
      margin-left: 40px;
      margin-right: 30px;
      border-radius: 10%;
    }
  
    .nolink {
      color: #cbeaff;
    }
  
    .overlay {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.7);
      transition: opacity 500ms;
      visibility: hidden;
      opacity: 0;
    }
    .overlay:target {
      visibility: visible;
      opacity: 1;
    }
  
    .popup {
      margin: 70px auto;
      padding: 20px;
      background: #c082ff;
      border-radius: 5px;
      width: 30%;
      position: relative;
      transition: all 5s ease-in-out;
    }
  
    .popup h2 {
      margin-top: 0;
      color: #ffffff;
      font-family: Inter;
      font-weight: normal;
    }
  
    .popup h3 {
      margin-top: 0;
      color: #ffffff;
      font-family: Inter;
      font-weight: normal;
    }
    .popup .close {
      position: absolute;
      top: 20px;
      right: 30px;
      transition: all 200ms;
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
      color: #ffffff;
    }
    .popup .close:hover {
      color: #dfbfff;
    }
    .popup .content {
      max-height: 30%;
      overflow: auto;
    }
  
    @media screen and (max-width: 700px){
  
      .popup{
        width: 70%;
      }
    }
  
    .buttons{
      border: 2px solid white;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      margin-left: 13vw;
      margin-right: 13vw;
    }
  
    p.smol {
    margin: 5px;
    padding: 5px;
    }
  
    h1.smol {
    margin: 5px;
    padding: 5px;
    }
  
    .smol {
      font-size: 20px;
    }
  
    p.centered {
      text-align: center;
      color: white;
      align-items: center;
    }
  
  </style>
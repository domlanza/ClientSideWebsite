function blog() {
var content = ` 
    <h2> Web Design Experience </h2>
     <p>
        My web development experience is intermediate. 
        I have interned for a company specializing in web 
        development. I used a framework called 
        Laravel. The company interned for would assign me projects
        to style and edit different themes.
      </p>
    <h2> Proposed Database Design </h2>
      <p>
        <br>
         Recipe Blog Table
         <ul>
          <li>Primary Key (Every recipe posted)</li>
          <li>username(Foreign Key)</li>
          <li>date</li>
          <li>time</li>
          <li>recipe</li>
          <li>photo(optional)</li>
         </ul>  
      </p>
     <h2> HomePage Homwork Blog </h2>
      <p> The HomePage Homework assignment I really enjoyed.
          I thought it had just enough content to work on and
          everything was taught clearly. With that being said,
          something valuable I have learned during that assignment
          is how important it is to have reusable code and
          to program in a way that is easy to understand.
          In earlier classes of mine I would program in a very
          pen to paper style where I would just write as much as I can
          to figure out the issue. This assignment has made
          me change my approach to programming.
        </p>
    <h2> JavaScript UI Blog </h2>
           <p> I thought this homework assignment was very challenging.
           If I may be honest. There was not a lot of work to do.
           But in a way it felt like a lot of information to understand.
           Quite honestly, I was very frustrated doing this assignment
           because of the dropdown menu. To have a responsive
           navigation bar where you can click out of it anywhere
           was very difficult for me to create. I kept working at
           it and eventually did get it to work. It taught me
           to really feel my emotions and sometimes to take a
           step back from my work. With that being said, I also
           learned routing and how beneficial it is to not simply
           call different links in your page using the copy and paste
           method showed in the first tutorial. I am liking how
           my website is coming along.
        </p>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }
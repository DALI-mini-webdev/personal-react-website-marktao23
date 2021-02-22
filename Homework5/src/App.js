import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <div className="App">
        <NavBar/>
      </div>
      <audio src="07 Like a Virgin.mp3" controls></audio> <br></br>
      <span id="ourParagraph">Feel free to listen to some music!</span>
      <h2 id="header" class="container">Welcome to Mark's website!</h2>
          <center><div id="mainBlockText">
            Hello everyone, my name is Mark, and I'm a '23 at Dartmouth (maybe a '24!).
            I'm originally from Dallas, TX, where I went to high school and grew up with 
            my two older sisters. I applied to Dartmouth in 2019 and am very grateful to be here!
            I'm planning on studying government with potential minors in computer science
            and public policy, but I'm not too sure on that yet. Outside of the classroom, I'm
            mainly involved with the men's volleyball team and a really cool group on campus called 
            the <a href="https://www.cofired.org/">Coalition For Immigrant Reform and Equality at Dartmouth (CoFIRED)</a>.  
             Although I'm not too sure as to what I want to do post graduation, I'm thinking it'll 
            probably be something consulting-related, though I might plan on attending graduate school, too! 
            I've always had a passion for creative building and development, and I figured this DALI course 
            represented the perfect opportunity for me to add some new skills to my repretoire and am very excited to 
            get to learn more about web development and more! Looking forward to the term everybody!
        
            <div id="paddy">
              Here's a picture of me!
            </div>
            
            <div>
              <img src="IMG_4671.jpg" alt="missing image" width="260" height="200">
              </img>
                <div id="caption">
                  (mirror pic!)
                </div>
            </div>
    
            <div id= "paddy">
              also: here's a video of my german shepherd eating peanut butter!
            </div>
            
            <div>
              <iframe width="260" height="200" src="https://www.youtube.com/embed/dqajcQaRXWU" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture" allowfullscreen id="container">
              </iframe>
            </div>
            
            <div id="paddy">
              now check out this cool to-do list! you can add tasks, delete, and change them!
            </div>

            <div className='todo-app'>
              <TodoList />
            </div>

          </div>
        </center>    
    </div>
  );
}

export default App;

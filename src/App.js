import image from './img/bob_image.jpeg';
import './App.css';


function App() {
  
  
  const handleInput = () => {
    const botMessage = document.querySelector('#message1');
    const humanMessage = document.querySelector('#message2');
    
    let Question = ['question|Question|ask|'] //adding the 'ask a question'
    let words = new RegExp(Question);
    if(words.test(document.querySelector('#input').value)){ // if the input contains a word 'question'
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Sure.'; // display this message
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '';
      }, 2000);
    }

    let yelling = ['bbbob|bob!!']
    let words2 = new RegExp(yelling);
    if(words2.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Whoa, chill out!';
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '';
      }, 2000);
    }

    let yell_question = ['!']
    let words3 = new RegExp(yell_question);
    if(words3.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Calm down, I know what Im doing!';
        document.querySelector('#input').value = '';
      }, 2000);
      setTimeout(() => {
        status.innerHTML = 'Not active';
        status.style.color = 'red';
      }, 5000);
    }

    let nothing = ['Bob|bob']
    let words4 = new RegExp(nothing);
    if(words4.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Fine. Be that way!';
        document.querySelector('#input').value = '';
      }, 2000);
      setTimeout(() => {
        status.innerHTML = 'Not active';
        status.style.color = 'red';
      }, 5000);
    }

    let anything_else = ['hi|oi|hello']
    let words5 = new RegExp(anything_else);
    if (words5.test(document.querySelector('#input').value)){
      const status = document.querySelector('.status');
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Whatever.';
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '';
      }, 2000);
    }

    humanMessage.innerHTML = document.querySelector('#input').value; // display the input
  }
  return (
    
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">Bob</div>
              <div className='status'></div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div className="bot-message" id='message1'></div>
                <div className="human-message" id='message2'></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
                <div className="input">
                  <input type="text" id='input' placeholder='Enter your message'/>
                </div>
                <div className="btn">
                  <button onClick={handleInput}>
                    <i className="fas fa-paper-plane"></i>
                    Send
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default App;

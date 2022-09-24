// IMPORTS
import { useState, useEffect } from 'react';
import R from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



// FUNÇAO PRINCIPAL

function App() {

  const [stt, setState] = useState('');
  const [loadingPosts, setLoading] = useState(true);
  const [closePosts, setCloseP] = useState(false)

  const handleChecked = () => {
    setCloseP((prev) => !prev)
  }

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then((r) => r.json())
    .then((json) => {

      setState(json)
      setLoading(false)
      setCloseP(true)
    })
  });


  // api comentarios
  // useEffect(() => {
  //   const url = 'https://jsonplaceholder.typicode.com/comments'
  //   fetch(url)
  //   .then((d) => d.json())
  //   .then((Json) => {

  //     setState(Json)
  //   })
  // });



  // CARREGAMENTO DOS POSTS
function loadPosts() {
  const post = ReactDOM.createRoot(
    document.getElementById('Loadpost')
  ); 

  if(closePosts === true) {
   
  
    let closeBtn = ReactDOM.createRoot(document.getElementById('btn-open-posts'))
    return (
      closeBtn.render(
        <svg onClick={handleChecked} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fillRule="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>,
        
        )
        ),

        post.render(

          <div>
            {stt.map((i) => {
      
              return(
                <article key={i.id}>
                <div className="container">
                  <div className="row">
                    <div className="col">
            
                <div className="card mt-5" data-aos='fade-left' >
                  <div className="card-header text-dark bg-warning">
                              <strong>ID: {i.id}</strong>
                  <span> 
                  <svg id='arrow' onClick={openCom} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-down arrow-post" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>  
                  </span>            
                      
                      
                  </div>
                  <div className="card-body body-card" id='cards'>
                    <blockquote className="blockquote mb-0">
                      <p className="text-dark">{i.title}</p>
                      <h4 className='h4 text-secondary'>{i.body}</h4>
                    </blockquote>
                  </div>
                </div>
                </div>
                </div>
                </div>
                </article>
              )
            })}
      
         
          </div>
      
        )
    
    
  } else {
    let closeBtn = ReactDOM.createRoot(document.getElementById('btn-open-posts'));

    return(
      setCloseP(true),
      closeBtn.render(
        <><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fillRule="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg><span className='p-3' id='text-btn-load'><strong>Carregar posts</strong></span></>

    ), 
    post.render(' ')
    )
  }


 
  
}

  function openCom() {
    const card = ReactDOM.createRoot(document.getElementById('cards'));
   
  }

  return (
    <div className="App">

    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" id='teste'>Teste FE</span>
      </div>
    </nav>

      <div className="container">
      <div className="row">
        <div className="col">

 
    

    <button type='button' className='btn btn-warning mt-5' onClick={ loadPosts } id='btn-open-posts'>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
		</svg>
    <span className='p-3' id='text-btn-load'><strong>Carregar posts</strong></span>
    </button>
    <span id='render-spinner'></span>

      </div>
        </div>
          </div>

      
    
  
    </div>

  

  );
}

export default App;


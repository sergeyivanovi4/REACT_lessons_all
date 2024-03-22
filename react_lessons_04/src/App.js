import React, { useState } from 'react';
import './App.css';


const Spoiler = ({ header = '+', open = true, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleSpoiler = () => {
      setIsOpen(!isOpen);
  };

  return (
    <>
    <hr style={{width: "90%"}}/>
        <h2 style={{color :"red"}}>Spoiler:</h2>
          <div className="spoiler">
          <div className="spoiler-header" onClick={toggleSpoiler}>
              {header}
          </div>
          {isOpen && (
              <div className="spoiler-content">
                  {children}
              </div>
          )}
      </div>
    </>

  );
};

// 
// RangeInput
// 

const RangeInput = ({ min, max, ...props }) => {
  const handleChange = (event) => {
      const { value } = event.target;
      // Перевірка мінімальної та максимальної довжини рядка
      const isValid = value.length >= min && value.length <= max;
      // Зміна кольору відповідно до валідації
      event.target.style.borderColor = isValid ? 'initial' : 'red';
  };

  return (
    <>
    <hr style={{color :"red", width: "90%"}}/>
    <h2 style={{color :"red"}}>RangeInput:</h2>
    <input {...props} onChange={handleChange} />
    </>
  );
};

// 
// LoginForm
// 

const LoginForm = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login && password) {
      onLogin(login, password);
    }
  };

  return (
    <>
        <hr style={{width: "90%"}}/>
        <h2 style={{color :"red"}}>LoginForm:</h2>
	<div>
        <input 
            type="text"
            placeholder="Логін"
            value={login}
            onChange={(event) => setLogin(event.target.value)}>
        </input>
        <br />

        <input 
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        <br />

        <button onClick={handleLogin} disabled={!login || !password}>
            Увійти
        </button>
	</div>
    </>
  )
};

// 
// PasswordConfirm
// 

const PasswordConfirm = ({min}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setError('');
    }
    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        setError('');
    }

    const validatePassword = () => {
        if (password.lenght < min) {   // щось ленгтх трохи не задоволений
            setError(`Пароль повинен містити принаймні ${min} символів`)
            return false;
        }
        if (!/(?=.*\d)/.test(password)) {
            setError('Пароль повинен містити принаймні одну цифру');
            return false;
        }
        if (password !== confirmPassword) {
            setError('Паролі не співпадають');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.praventDefault();
        if (validatePassword()) {
            console.log('Пароль успішно підтверджено:', password);
        }
    };

    return (
        <>
        <hr style={{width: "90%"}}/>
        <h2 style={{color :"red"}}>PaswordConfirm:</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ borderColor: error && 'red' }}
                />
            </div>
            <div>
                <label>Підтвердіть пароль:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    style={{ borderColor: error && 'red' }}
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}   
            <button type="submit">Підтвердити пароль</button>
        </form>
        </>
    );
}


// 
// Carousel
// 


const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(3);

  const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
      <div>
        <hr style={{width: "90%"}}/>
        <h2 style={{color :"red"}}>Carousel:</h2>
            <button 
                style={{
                color: "red",
                height: "500px",
                width: "200px",
                fontSize: "40px",
                display: "inline-block",
                background: "rgba(255,255,255, 0.1)",
                position: "absolute",
                border: "none"
            }}
                onClick={handlePrevClick}
                >PREV
            </button>
            <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
                style={{width: "1000px", height: '500px', cursor: 'pointer' }}
                onClick={handleNextClick}
            />
            <button 
            style={{
                color: "red",
                fontSize: "40px",
                height: "500px",
                width: "200px",

                display: "inline-block",
                background: "rgba(255,255,255, 0.1)",
                position: "absolute",
                border: "none",
                right: "65px"
            }}
            onClick={handleNextClick}>
                NEXT
            </button>   
        
          <Thumbnails
              images={images}
              current={currentImageIndex}
              onChange={handleThumbnailClick}
          />
      </div>
  );
}

function Thumbnails({ images, current, onChange }) {
  return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {images.map((image, index) => (
              <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  style={{
                      width: '50px',
                      height: '30px',
                      margin: '0 5px',
                      border: index === current ? '2px solid blue' : 'none',
                      cursor: 'pointer',
                  }}
                  onClick={() => onChange(index)}
              />
          ))}
      </div>
  );
}

// 
// Pagination
// 

const Content = ({ page }) => (
    <div style={{ fontSize: '1em' }}>Сторінка №{page}</div>
);

const Color = ({ page }) => (
    <div style={{ color: `rgb(${page * 16},${page * 16},${page * 16})` }}>{page}</div>
);

const Pagination = ({ render, max }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const Render = render;

    const handlePrevClick = () => {
        setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    };

    const handleNextClick = () => {
        setCurrentPage((prevPage) => Math.min(max, prevPage + 1));
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (     
        <div>
        <hr style={{width: "90%"}}/>
        <h2 style={{color :"red"}}>Pagination:</h2>
            <Render page={currentPage} />
            <div>
                <button onClick={handlePrevClick}>Prev</button>
                {currentPage > 2 && <button onClick={() => handlePageClick(1)}>1</button>}
                {currentPage > 3 && <span>...</span>}
                {currentPage > 1 && <button onClick={() => handlePageClick(currentPage - 1)}>{currentPage - 1}</button>}
                <button disabled>{currentPage}</button>
                {currentPage < max && <button onClick={() => handlePageClick(currentPage + 1)}>{currentPage + 1}</button>}
                {currentPage < max - 1 && <span>...</span>}
                {currentPage < max - 1 && <button onClick={() => handlePageClick(max)}>{max}</button>}
                <button onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};





function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <Counter />

        <Spoiler header={<h2 style={{border :"1px solid white"}}>Заголовок 1</h2> } open>
            <h3 >Контент 1</h3>
            <p>
                Лорем іпсум тралівалі і т.д.
            </p>
        </Spoiler>
        <Spoiler header={<h2 style={{border :"1px solid white"}}>Заголовок 2</h2> } open>
            <h3 >Контент 2</h3>
            <p>
                Лорем іпсум тралівалі і т.д.
            </p>
        </Spoiler>

        <RangeInput min={2} max={10} type="text" className="input" onChange={(e) => console.log(e.target.value)} />

        <LoginForm />

        <PasswordConfirm min={2} />


        <Carousel images={["https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"]} />

        
        <Pagination max={10} render={Content} />
        <Pagination max={16} render={Color} />
      </header>
    </div>
  );
}

export default App;



// 
// Counter
// 

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <hr style={{width: "90%"}}/>
        <h2 style={{color :"red"}}>Counter:</h2>
    <button onClick={() => setCount(count +1)}>
      {count}
    </button>
    <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}
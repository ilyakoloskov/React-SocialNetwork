import './App.sass'

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__about about box">
          <div className="about__name">IK</div>
          <div className="about__employments">
            <span className="about__employ">frontend-developer</span>
          </div>
        </div>
        <div className="header__menu menu box">
          <span className="menu__breadcrumb">menu</span>
          <span className="menu__burger burger">X</span>
        </div>
        <div className="header__player player box player-scrolls">player</div>
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__wrap box">
            <h1 className="profile__title">Ilya Koloskov</h1>
            <div className="profile__dob">09 / 03 / 1998</div>
            <img className="profile__avatar" src="/images/profile.jpg" />
            <div className="profile__info">
              <ul className="profile__info-list">
                <li className="profile__info-item">
                  <strong className="profile__info-strong">Nationality: </strong>
                  <span className="profile__info-span">Russia</span>
                </li>
                <li className="profile__info-item">
                  <strong className="profile__info-strong">Passion: </strong>
                  <span className="profile__info-span">Frontend, music, sport</span>
                </li>
              </ul>
            </div>
            <div className="profile__message btn">Send message</div>
          </div>
          <div className="posts box">
            <h2 className="posts__title">My posts</h2>
            <div className="posts__inner">
              <textarea className="posts__textarea" placeholder="Add posts:"></textarea>
              <button className="posts__btn btn">Add post</button>
            </div>
            <div className="posts__list">
              <article className="posts__item">
                Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post,
                Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post,
              </article>
              <article className="posts__item">
                Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post,
                Hello, i'm post, Hello, i'm post, Hello, i'm post, Hello, i'm post,
              </article>
            </div>
          </div>
        </section>
      </main>
      <aside className="sidebar box">aside</aside>
    </div>
  )
}

export default App

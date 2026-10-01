import { useState } from 'react'
import './App.css'

function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <p className="product-category">{category}</p>
      <h3>{title}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  )
}

function LikeButton() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="like-box">
      <button type="button" onClick={() => setLikes((current) => current + 1)}>
        ❤ Like
      </button>
      <p>
        Total Likes: <strong>{likes}</strong>
      </p>
    </div>
  )
}

const students = [
  { id: 1, name: 'Alice', score: 82 },
  { id: 2, name: 'Ben', score: 47 },
  { id: 3, name: 'Charlie', score: 58 },
  { id: 4, name: 'Diana', score: 39 },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <p className="eyebrow">Fresh picks</p>
        <h1>Fun Product Page</h1>
      </header>

      <section className="products-section" aria-label="Featured products">
        <ProductCard title="Wireless Headphones" price={129.99} category="Electronics" />
        <ProductCard title="Classic Sneakers" price={89.5} category="Fashion" />
      </section>

      <section className="interaction-section">
        <h2>Community Likes</h2>
        <LikeButton />
      </section>

      <section className="students-section">
        <h2>Student Status</h2>
        <ul className="student-list">
          {students.map((student) => (
            <li key={student.id} className="student-row">
              <span>{student.name}</span>
              <span>Score: {student.score}</span>
              <span className={student.score >= 50 ? 'status pass' : 'status fail'}>
                {student.score >= 50 ? 'Pass' : 'Fail'}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App

import './App.css'
import catone from "./assets/images/cat1.jpg"
import cattwo from "./assets/images/cat2.jpg"
import catthree from "./assets/images/cat3.jpg"
import catfour from "./assets/images/cat4.jpg"

const data = [
  {
    photo: catone,
    name: "Aegean"
  },

  {
    photo: cattwo,
    name: "Ocicat"
  },

  {
    photo: catthree,
    name: "Pixie-bob"
  },

  {
    photo: catfour,
    name: "Toyger"
  },

  {
    photo: catone,
    name: "Aegean"
  },

  {
    photo: cattwo,
    name: "Ocicat"
  },

  {
    photo: catthree,
    name: "Pixie-bob"
  },

  {
    photo: catfour,
    name: "Toyger"
  },
]

function App() {
  return (
    <>
      <div className='container'>
        {data.map((item) => (
          <div className='card'>
            <img src={item.photo} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App

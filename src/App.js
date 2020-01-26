import React, { useState, useEffect } from 'react'

import './App.css'
import Project from './components/Project.js'
import cartes from './Cartes.js'
import sortProjects from './components/SortLetters.js'
import Reload from './components/Reload'
import Modale from './components/Modale'
import dice from './assets/dice.png'
import click from './assets/click.png'

function App () {
  const wordsList = [
    'fullstack',
    'malleret',
    'react',
    'algorithm',
    'pierre',
    'frontend',
    'html',
    'node.js',
    'backend',
    'mongo.db',
    'express',
    'algorithm',
    'git',
    'github'
  ]
  const [carts, setCarts] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ])
  const [classChange, setClassChange] = useState(true)
  const [wordNum, setWordNum] = useState(-1)
  const [projetsList, setProjectList] = useState(cartes)
  const [prevProjList, setPrevProjList] = useState(cartes)
  const [modaleNum, setModaleNum] = useState(null)

  //pick the next word from the list and reorganize the projecList with new order and new bigletters
  const pickAWord = () => {
    //first save previous project list
    setPrevProjList(projetsList)

    //pick next word or first one if end of list
    let num = wordNum
    if (num === wordsList.length - 1) {
      num = 0
    } else {
      num++
    }
    setWordNum(num)

    // Change the list according to the new picked word
    setProjectList(sortProjects(wordsList[num], cartes))
  }

  //and use it with first word of the list at landing
  useEffect(() => {
    pickAWord(wordNum)
  }, [])

  //open one card. set all other card state to false
  const setACart = num => {
    const newValue = !carts[num]
    let arr = []
    for (let i = 0; i < 9; i++) {
      if (i === num) {
        arr.push(newValue)
      } else arr.push(false)
    }
    setCarts(arr)
  }

  // Search the position of a cart in the sorted project List. to be used in the map where we need to set previous positions
  const search = id => {
    for (let i = 0; i < 9; i++) {
      if (id === projetsList[i].id) {
        return i
      }
    }
  }

  /* # # # # # # APP # # # # # # # # # # # # # # # # # # # # # # # # # # */
  return (
    <div
      className='app'
      onClick={() => {
        setModaleNum(null)
      }}
    >
      <div className='header'>PIERRE MALLERET</div>
      <div className='subtitle'>
        <span>SELECTED PROJECTS</span>
        <div
          onClick={() => {
            // setClassChange(false)

            pickAWord()
            // setTimeout(() => {
            //   setClassChange(true)
            // }, 2400)
          }}
        >
          {/* <Reload /> */}
          <img src={click} alt='clic' />
          {/* <span>tryme</span> */}
          <img src={dice} alt='dice' />
        </div>
      </div>

      <div
        className='gridprojects'
        onClick={event => {
          event.stopPropagation()
        }}
      >
        {/* MODAL TO WATCH ONE */}
        {modaleNum !== null && <Modale project={projetsList[modaleNum]} />}

        <div className='projectscontenair'>
          {/* We Map according to the previous ProjecList so the positions don't change instantly
        Positions will then progressively translate to new ProjectList because we give them classes according to the new projectList order*/}
          {prevProjList.map((projet, index) => {
            //Search position of the current project in the new Array Projectlist and set it to the class.
            const pos = search(projet.id)
            return (
              <div className={'project projectPos' + pos}>
                <Project
                  key={projet.id}
                  gif={projet.gif}
                  description={projet.description}
                  title={projet.title}
                  color={projet.color}
                  link={projet.link}
                  show={carts[index]}
                  setCarts={() => {
                    setACart(index)
                  }}
                  bigletter={projet.bigletter}
                  setModaleNum={setModaleNum}
                  index={index}
                />
              </div>
            )
          })}
        </div>
        {/* end of gridProject */}
      </div>
      {/* end of App */}
    </div>
  )
}

export default App

import style from "./app.module.css"

import { useEffect, useState } from "react"

import { WORDS } from "./utils/words.js"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

function App() {
  // Pontuação atual
  const [score, setScore] = useState(0)

  // adicionando o challenge como desafios
  const [challenge, setChallenge] = useState(null)

  // letras compondo a palavra

  const [letter, setLetter] = useState("")

  // letras utilizadas
  const [lettersUsed, setLettersUsed] = useState([])

  // Quantia de Palavras e adicionando limite em tentativas
  const attemptLimit = challenge?.word.length
  const maxLimit = attemptLimit + Math.floor(attemptLimit / 2)

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]

    setChallenge(randomWord)

    setScore(0)
    setLetter("")
    setLettersUsed([])
  }

  useEffect(() => {
    startGame()
  }, [])

  function restartGame() {
    const isConfirm = window.confirm("Você deseja reiniciar o jogo ?")
    if (isConfirm) {
      startGame()
    }
  }

  function endGame(message) {
    alert(message)
    startGame()
  }

  useEffect(() => {
    if (!challenge) {
      return
    }

    const attemptLimit = challenge.word.length
    const maxLimit = attemptLimit + Math.floor(attemptLimit / 2)

    setTimeout(() => {
      if (score === attemptLimit) {
        return endGame("Parabéns, Você Ganhou")
      }

      if (lettersUsed.length === maxLimit) {
        return endGame("Usou todas as Tentativas")
      }
    }, 200)
  }, [score, lettersUsed.length])

  function handleConfirm() {
    if (!challenge) {
      return
    }

    if (!letter.trim()) {
      return alert("Digite uma letra")
    }

    const value = letter.toUpperCase()
    const exists = lettersUsed.find(
      (used) => used.value.toUpperCase() === value
    )

    if (exists) {
      setLetter("")
      return alert(`Você ja digitou essa letra (${letter.toUpperCase()})`)
    }

    const hit = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length

    const correct = hit > 0
    const currentScore = score + hit

    setLetter("")
    setScore(currentScore)
    setLettersUsed((prevState) => [...prevState, { value, correct }])

    if (setScore > 10) {
      restartGame()
    }
  }

  if (!challenge) {
    return
  }

  return (
    <div className={style.container}>
      <main className={style.main}>
        <Header
          current={lettersUsed.length}
          max={maxLimit}
          onRestart={() => restartGame()}
        />
        <Tip tip={challenge.tip} />

        <div className={style.Letters}>
          {challenge.word.split("").map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            )
            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? "correct" : "default"}
              />
            )
          })}
        </div>

        <h4>Palpite</h4>
        <div className={style.attempt}>
          <Input
            value={letter}
            autoFocus
            maxLength={1}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title={"Confirmar"} onClick={handleConfirm} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  )
}

export default App

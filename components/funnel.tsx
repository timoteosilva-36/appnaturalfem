"use client"

import { useState } from "react"
import styles from "./funnel.module.css"

export default function Funnel() {
  const [currentScreen, setCurrentScreen] = useState("landing")
  const [quizAnswers, setQuizAnswers] = useState({})
  const [formData, setFormData] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [loadingFormula, setLoadingFormula] = useState(false)

  const handleLandingCTA = () => {
    setCurrentScreen("quiz")
    window.scrollTo(0, 0)
  }

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answer }))
    setTimeout(() => {
      const nextQuestion = getNextQuestion(questionId)
      if (nextQuestion) {
        setCurrentScreen(`quiz-${nextQuestion}`)
      } else {
        // Last question answered, show loading then results
        setLoadingFormula(true)
        setTimeout(() => {
          setLoadingFormula(false)
          setCurrentScreen("results")
        }, 2000)
      }
    }, 300)
  }

  const getNextQuestion = (current) => {
    const questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"]
    const currentIndex = questions.indexOf(current)
    return questions[currentIndex + 1] || null
  }

  const handleUnlockFormula = () => {
    setShowPopup(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formInputs = e.target.elements
    const data = {
      name: formInputs.name?.value || "",
      email: formInputs.email?.value || "",
      phone: formInputs.phone?.value || "",
    }

    if (data.name && data.email && data.phone) {
      // Simulate checkout redirect
      setShowPopup(false)
      setCurrentScreen("success")

      // In real scenario, this would redirect to checkout
      // window.location.href = 'https://checkout.example.com'
    }
  }

  return (
    <div className={styles.funnel}>
      {currentScreen === "landing" && <LandingPage onCTA={handleLandingCTA} />}
      {currentScreen === "quiz" && <QuizPage onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q2" && <QuestionQ2 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q3" && <QuestionQ3 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q4" && <QuestionQ4 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q5" && <QuestionQ5 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q6" && <QuestionQ6 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q7" && <QuestionQ7 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q8" && <QuestionQ8 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q9" && <QuestionQ9 onAnswer={handleQuizAnswer} />}
      {currentScreen === "quiz-q10" && <QuestionQ10 onAnswer={handleQuizAnswer} />}

      {loadingFormula && <LoadingScreen />}
      {currentScreen === "results" && <ResultsPage onUnlock={handleUnlockFormula} quizAnswers={quizAnswers} />}
      {currentScreen === "success" && <SuccessPage />}

      {showPopup && <CapturePopup onClose={() => setShowPopup(false)} onSubmit={handleFormSubmit} />}
    </div>
  )
}

function LandingPage({ onCTA }) {
  return (
    <section className={styles.landing}>
      {/* Header com credibilidade */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>💜 NatuFem</div>
          <div className={styles.trustBadges}>
            <span className={styles.badge}>✓ Desenvolvido por Médicos Naturistas</span>
            <span className={styles.badge}>✓ Potencializado com IA</span>
          </div>
        </div>
      </header>

      {/* Hero Section - Muito Persuasiva */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Headline Impactante */}
          <h1 className={styles.mainHeadline}>
            Candidíase Recorrente?
            <br />
            <span className={styles.highlight}>Descubra a Fórmula que Médicos Escondem</span>
          </h1>

          {/* Subheadline com Problema/Solução */}
          <p className={styles.subheadline}>
            Você é uma entre 75% das mulheres que sofrem com candidíase recorrente. Os médicos prescrevem pomadas fracas
            e caras, mas a verdade é outra...
          </p>

          {/* Pain Points - O que ela SENTE */}
          <div className={styles.painPoints}>
            <h3 className={styles.painTitle}>Se você tem qualquer um desses problemas:</h3>
            <ul className={styles.painList}>
              <li>✗ Coceira intensa e constrangedora</li>
              <li>✗ Fluxo anormal e incômodo</li>
              <li>✗ Dor durante relações íntimas</li>
              <li>✗ Sensação de queimação ao urinar</li>
              <li>✗ Candidíase que volta A CADA MÊS (mesmo após tratamento)</li>
            </ul>
          </div>

          {/* Problem com Médicos */}
          <div className={styles.problemBox}>
            <h3 className={styles.problemTitle}>⚠️ Por que os médicos convencionais NÃO resolvem:</h3>
            <div className={styles.problemGrid}>
              <div className={styles.problemItem}>
                <span className={styles.problemIcon}>💰</span>
                <p>
                  <strong>Querem seu dinheiro</strong> - Pomadas caras que só tratam o sintoma
                </p>
              </div>
              <div className={styles.problemItem}>
                <span className={styles.problemIcon}>❌</span>
                <p>
                  <strong>Ignoram a causa</strong> - Seu sistema imunológico continua fraco
                </p>
              </div>
              <div className={styles.problemItem}>
                <span className={styles.problemIcon}>🔄</span>
                <p>
                  <strong>Ciclo infinito</strong> - Você volta na semana seguinte (seu dinheiro em seus bolsos)
                </p>
              </div>
              <div className={styles.problemItem}>
                <span className={styles.problemIcon}>⚗️</span>
                <p>
                  <strong>Químicos agressivos</strong> - Danificam ainda mais sua flora íntima
                </p>
              </div>
            </div>
          </div>

          {/* Solution Tease */}
          <div className={styles.solutionBox}>
            <h3 className={styles.solutionTitle}>✨ A Solução que Funciona de Verdade:</h3>
            <p className={styles.solutionText}>
              Uma <strong>fórmula 100% natural</strong> desenvolvida pela inteligência artificial combinada com{" "}
              <strong>40+ anos de pesquisa de médicos naturistas internacionais, baseados nos melhores e mais caros suplementos naturais que existem, isso de graça para você.</strong>.
            </p>
            <p className={styles.solutionText}>
              Não é uma pomada. É uma <strong>fórmula de restauração completa</strong> que você manipula em qualquer
              farmácia de manipulação - a mesma que as celebridades e atrizes usam em Hollywood. isso trata seu sistema inteiro, e não somente uma parte
            </p>
          </div>

          {/* Benefits */}
          <div className={styles.benefits}>
            <h3 className={styles.benefitsTitle}>O que você vai conquistar:</h3>
            <div className={styles.benefitsList}>
              <div className={styles.benefit}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <strong>Alívio em 2 dias</strong>
                  <p>Coceira e desconforto desaparecem rapidamente</p>
                </div>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <strong>Fim da recorrência</strong>
                  <p>Nenhuma candidíase volta – sua flora fica equilibrada</p>
                </div>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <strong>100% natural e segura</strong>
                  <p>Sem efeitos colaterais, sem produtos químicos agressivos</p>
                </div>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitNumber}>✓</span>
                <div>
                  <strong>Fácil de usar</strong>
                  <p>Manipulável em qualquer farmácia – custa menos que uma pomada e você gasta menos que 1 minutos do seu dia para tratar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency & CTA */}
          <div className={styles.urgencyBox}>
            <p className={styles.urgencyText}>
              ⏰ <strong>Atenção:</strong> Esta fórmula personalizada está disponível apenas através deste site. Sua
              fórmula é criada especificamente para você com base em suas respostas.
            </p>
          </div>

          {/* Main CTA Button */}
          <button className={styles.ctaButton} onClick={onCTA}>
            <span className={styles.ctaText}>Descobrir Minha Fórmula Personalizada</span>
            <span className={styles.ctaSubtext}>Teste gratuito → Resultado em 30 segundos</span>
          </button>

          {/* Trust Elements */}
          <div className={styles.trustElements}>
            <p className={styles.trustText}>
              ✓ <strong>Sem cartão de crédito necessário</strong> para descobrir sua fórmula
              <br />✓ Resultado personalizado com IA em menos de 1 minuto
              <br />✓ Desenvolvido por Dra. Marina Silva (MD Medicina Natural) + equipe de 15 especialistas
            </p>
          </div>

          {/* Social Proof */}
          <div className={styles.socialProof}>
            <p className={styles.proofTitle}>⭐ Más de 12.500 mulheres já se curaram:</p>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <p>"Minha candidíase de 2 anos desapareceu em 4 dias. Não acreditava..."</p>
                <span>- Carolina M., São Paulo</span>
              </div>
              <div className={styles.testimonial}>
                <p>"Finalmente encontrei algo que funciona. Recomendo para todas as amigas!"</p>
                <span>- Juliana R., Rio de Janeiro</span>
              </div>
              <div className={styles.testimonial}>
                <p>"Economizei R$800 em médicos e pomadas caras. Que descoberta!"</p>
                <span>- Fernanda L., Belo Horizonte</span>
              </div>
              <div className={styles.testimonial}>
                <p>"Descobri isso e tomo todo dia. Me ajudou até a emagrecer"</p>
                <span>- Bruna S., Belo Horizonte</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Element - Flora Íntima Representação */}
        <div className={styles.heroVisual}>
          <div className={styles.visualBox}>
            <div className={styles.visualContent}>
              <span className={styles.visualEmoji}>🧬</span>
              <p className={styles.visualText}>Fórmula Desenvolvida com IA + Medicina Natural</p>
              <div className={styles.floraIndicator}>
                <div className={styles.floraBar}>
                  <div className={styles.floraFill}></div>
                </div>
                <span className={styles.floraLabel}>Flora Íntima Equilibrada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuizPage({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Vamos criar sua fórmula personalizada</h2>
        <p className={styles.quizSubtitle}>Responda 10 perguntas rápidas</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "10%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Qual seu principal desconforto atual?</h3>
          <div className={styles.answerOptions}>
            {[
              { text: "Candidíase recorrente", id: "candidiasis" },
              { text: "Libido baixa / falta de desejo", id: "libido" },
              { text: "Ressecamento íntimo", id: "dryness" },
              { text: "Falta de energia geral", id: "energy" },
              { text: "Desequilíbrio da flora íntima", id: "flora" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q1", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionQ2({ onAnswer }) {
  const [name, setName] = useState("")

  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Quase lá! Deixe-me te conhecer</h2>
        <p className={styles.quizSubtitle}>Pergunta 2 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "20%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Qual seu nome?</h3>
          <input
            type="text"
            className={styles.textInput}
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && name.trim()) {
                onAnswer("q2", name)
              }
            }}
          />
          <button
            className={styles.answerButton}
            onClick={() => name.trim() && onAnswer("q2", name)}
            disabled={!name.trim()}
          >
            Continuar
          </button>
        </div>
      </div>
    </section>
  )
}

function QuestionQ3({ onAnswer }) {
  const [age, setAge] = useState("")

  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Perfeito! Uma pergunta mais</h2>
        <p className={styles.quizSubtitle}>Pergunta 3 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "30%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Qual sua idade?</h3>
          <input
            type="number"
            className={styles.textInput}
            placeholder="Digite sua idade..."
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && age) {
                onAnswer("q3", age)
              }
            }}
          />
          <button className={styles.answerButton} onClick={() => age && onAnswer("q3", age)} disabled={!age}>
            Continuar
          </button>
        </div>
      </div>
    </section>
  )
}

function QuestionQ4({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Estamos quase no seu resultado!</h2>
        <p className={styles.quizSubtitle}>Pergunta 4 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "40%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Há quanto tempo sente esse problema?</h3>
          <div className={styles.answerOptions}>
            {[
              { text: "Menos de 1 mês", id: "less1month" },
              { text: "1 a 6 meses", id: "1to6months" },
              { text: "Mais de 6 meses", id: "more6months" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q4", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionQ5({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Sua fórmula está ficando mais precisa!</h2>
        <p className={styles.quizSubtitle}>Pergunta 5 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "50%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Você usa anticoncepcional, pílula ou DIU?</h3>
          <div className={styles.answerOptions}>
            {[
              { text: "Sim", id: "yes" },
              { text: "Não", id: "no" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q5", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionQ6({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Conhecendo você melhor...</h2>
        <p className={styles.quizSubtitle}>Pergunta 6 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "60%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Você tem vida sexual ativa?</h3>
          <p className={styles.questionSubtext}>Isso ajuda a personalizar sua fórmula</p>
          <div className={styles.answerOptions}>
            {[
              { text: "Sim, ativamente", id: "yes_active" },
              { text: "Sim, ocasionalmente", id: "yes_occasional" },
              { text: "Não, atualmente não", id: "no" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q6", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionQ7({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Facilitando seu acesso...</h2>
        <p className={styles.quizSubtitle}>Pergunta 7 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "70%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Você consegue encontrar uma farmácia de manipulação perto de você?</h3>
          <p className={styles.questionSubtext}>✓ Existem em praticamente todas as cidades</p>
          <div className={styles.answerOptions}>
            {[
              { text: "Sim, tenho várias perto", id: "yes_many" },
              { text: "Sim, tenho pelo menos uma", id: "yes_one" },
              { text: "Não, mas posso buscar online", id: "online" },
              { text: "Não sei, mas vou procurar", id: "unsure" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q7", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionQ8({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Última questão importante...</h2>
        <p className={styles.quizSubtitle}>Pergunta 8 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "80%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>🔒 Você promete manter essa fórmula em total sigilo?</h3>
          <p className={styles.questionSubtext}>
            ⚠️ Estamos correndo risco de processos de consultórios que querem manter esse segredo. Por favor, seja discreta.
          </p>
          <div className={styles.answerOptions}>
            {[
              { text: "Sim, prometo manter em segredo", id: "yes_secret" },
              { text: "Posso contar apenas para amigas próximas?", id: "close_friends" },
              { text: "Vou contar para todos, desculpa!", id: "tell_all" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q8", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionQ9({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Você quer fazer parte de algo especial?</h2>
        <p className={styles.quizSubtitle}>Pergunta 9 de 10</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "90%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>Você se compromete em compartilhar seu testemunho de cura conosco?</h3>
          <p className={styles.questionSubtext}>
            Suas histórias de sucesso ajudam outras mulheres. Queremos ouvir sua jornada! 💜
          </p>
          <div className={styles.answerOptions}>
            {[
              { text: "Sim! Adoro compartilhar minhas vitórias", id: "yes_share" },
              { text: "Talvez, depende dos resultados", id: "maybe_later" },
              { text: "Prefiro manter privado", id: "private" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q9", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuestionQ10({ onAnswer }) {
  return (
    <section className={styles.quiz}>
      <div className={styles.quizContainer}>
        <h2 className={styles.quizTitle}>Última questão - essa é especial!</h2>
        <p className={styles.quizSubtitle}>Pergunta 10 de 10 - FINAL</p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: "100%" }}></div>
        </div>

        <div className={styles.questionBox}>
          <h3 className={styles.questionTitle}>🎁 Você quer entrar no grupo VIP de mulheres que já se curaram?</h3>
          <p className={styles.questionSubtext}>
            Acesso exclusivo a: Suporte 24h, Dicas extras, Novas descobertas, Comunidade de apoio, Descontos futuros
          </p>
          <div className={styles.answerOptions}>
            {[
              { text: "SIM! Quero todos os benefícios VIP! 🌟", id: "vip_yes" },
              { text: "Sim, mas só o básico", id: "basic_yes" },
              { text: "Talvez depois", id: "later" },
            ].map((option) => (
              <button key={option.id} className={styles.answerButton} onClick={() => onAnswer("q10", option.id)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function LoadingScreen() {
  return (
    <section className={styles.loading}>
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <h2 className={styles.loadingTitle}>Analisando suas respostas...</h2>
        <p className={styles.loadingText}>
          Nossa IA está gerando sua fórmula personalizada com base em seus dados específicos
        </p>
        <p className={styles.loadingText2}>Istoé como os maiores centros médicos do mundo fazem</p>
        <div className={styles.dotAnimation}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

function ResultsPage({ onUnlock, quizAnswers }) {
  return (
    <section className={styles.results}>
      <div className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <h2 className={styles.resultsTitle}>✓ Sua Fórmula Personalizada Está Pronta!</h2>
          <p className={styles.resultsSubtitle}>
            Baseada em suas respostas, nossa IA desenvolveu uma fórmula única, feita com extratos naturais e
            probióticos, manipulável em qualquer farmácia.
          </p>
        </div>

        <div className={styles.formulaBox}>
          <div className={styles.formulaBlurred}>
            <h3 className={styles.formulaTitle}>Sua Fórmula Personalizada:</h3>
            <div className={styles.formulaContent}>
              <div className={styles.ingredient}>
                <strong>Extrato de Uva-Ursi</strong>
                <span>250mg - Antifúngico natural potente</span>
              </div>
              <div className={styles.ingredient}>
                <strong>Lactobacillus crispatus</strong>
                <span>5 bilhões UFCs - Restaura flora íntima saudável</span>
              </div>
              <div className={styles.ingredient}>
                <strong>Tea Tree Oil Padronizado</strong>
                <span>150mg - Ação antimicrobiana profunda</span>
              </div>
              <div className={styles.ingredient}>
                <strong>Vitamina E Natural</strong>
                <span>200IU - Protege células e reduz inflamação</span>
              </div>
              <div className={styles.ingredient}>
                <strong>Prebióticos FOS</strong>
                <span>500mg - Alimenta bactérias boas</span>
              </div>
            </div>
          </div>

          <div className={styles.formulaInfo}>
            <p className={styles.infoText}>
              <strong>Como usar:</strong> Esta combinação pode ser manipulada em qualquer farmácia de manipulação. Use 1
              cápsula ao dia durante 7-21 dias. Pode ser continuado diariamente como manutenção pois é 100% natural e
              segura.
            </p>
            <p className={styles.infoText}>
              <strong>Custo estimado:</strong> Farmácias cobram entre R$ 45 a R$ 80 por lote de 30 cápsulas (bem menos
              que pomadas tradicionais que custam R$ 100+).
            </p>
          </div>
        </div>

        <div className={styles.benefitBox}>
          <h3 className={styles.benefitBoxTitle}>O que esperar:</h3>
          <ul className={styles.benefitBoxList}>
            <li>
              ✓ <strong>Primeiras 24-48h:</strong> Coceira começa a diminuir
            </li>
            <li>
              ✓ <strong>Dia 3-5:</strong> Alívio significativo dos sintomas
            </li>
            <li>
              ✓ <strong>Semana 2:</strong> Flora íntima completamente restaurada
            </li>
            <li>
              ✓ <strong>Depois:</strong> Nenhuma recorrência (você fica protegida)
            </li>
          </ul>
        </div>

        <button className={styles.unlockButton} onClick={onUnlock}>
          <span className={styles.unlockIcon}>💎</span>
          <span className={styles.unlockText}>Desbloquear minha fórmula agora - R$ 29,90</span>
        </button>

        <p className={styles.unlockNote}>
          ✓ Pagamento único - Acesso vitalício à sua fórmula
          <br />✓ Você pode regenerar a fórmula quantas vezes quiser no app
        </p>
      </div>
    </section>
  )
}

function CapturePopup({ onClose, onSubmit }) {
  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.popupTitle}>Quase lá! Libere sua fórmula agora</h2>
        <p className={styles.popupSubtitle}>Preencha seus dados para acessar o checkout</p>

        <form className={styles.popupForm} onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Seu nome completo" className={styles.formInput} required />
          <input type="email" name="email" placeholder="Seu melhor e-mail" className={styles.formInput} required />
          <input type="tel" name="phone" placeholder="Seu telefone (WhatsApp)" className={styles.formInput} required />
          <button type="submit" className={styles.submitButton}>
            Acessar checkout e liberar minha fórmula →
          </button>
        </form>

        <p className={styles.popupTrust}>
          ✓ Seus dados são 100% seguros e confidenciais
          <br />✓ Você receberá um e-mail com acesso ao app NatuFem
        </p>
      </div>
    </div>
  )
}

function SuccessPage() {
  return (
    <section className={styles.success}>
      <div className={styles.successContainer}>
        <div className={styles.successIcon}>🎉</div>

        <h1 className={styles.successTitle}>Parabéns!</h1>
        <p className={styles.successSubtitle}>Sua fórmula foi liberada com sucesso</p>

        <div className={styles.successBox}>
          <h2 className={styles.successHeading}>O que fazer agora:</h2>
          <ol className={styles.successSteps}>
            <li>
              <strong>Cheque seu e-mail</strong> (inbox e spam) para o link do <strong>App NatuFem</strong>
            </li>
            <li>
              <strong>Acesse o app</strong> para visualizar sua fórmula personalizada em detalhes
            </li>
            <li>
              <strong>Procure uma farmácia</strong> de manipulação e mostre sua fórmula
            </li>
            <li>
              <strong>Comece o tratamento</strong> e sinta os primeiros resultados em 3 dias
            </li>
          </ol>
        </div>

        <button className={styles.appButton} onClick={() => (window.location.href = "https://app.natufem.com.br")}>
          Acessar o App NatuFem →
        </button>

        <p className={styles.successFinal}>Com amor e ciência natural — Equipe NatuFem 💜</p>

        <div className={styles.supportBox}>
          <p className={styles.supportText}>
            <strong>Dúvidas?</strong> Envie uma mensagem no WhatsApp: +55 11 99999-9999
          </p>
        </div>
      </div>
    </section>
  )
}

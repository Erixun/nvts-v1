import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main} style={{ gap: 60, padding: '6rem' }}>
      <div
        className="intro"
        style={{
          textAlign: 'center',
          maxInlineSize: 500,
          display: 'grid',
          gap: 15,
        }}
      >
        <h1>Välkommen</h1>
        <div className="presentation">
          <p>
            Detta är <em>Nordic Vertitech Solutions</em>. Vi är ett modernt
            företag specialiserat på hissmontering och installation, samt
            ombyggnad av befintliga hissar i lägenhetsbyggnader. Vårt mål är att
            erbjuda högkvalitativa tjänster till våra kunder, säkerställa att
            deras byggnader är väl utrustade och att vi lever upp till alla
            relevanta lagar och regler.
          </p>

          <p>
            Vi har erfarenhet av att arbeta med både små och stora kommersiella
            byggnader, och vi är bekanta med de tekniska och affärsmässiga
            utmaningarna som dessa projekt innebär. Med vår expertis och passion
            kan vi se till att din byggnad är väl utrustad och att det finns en
            hiss där det behövs.
          </p>

          <p>
            Vi tar även hand om underhåll och reparation av hissar för att
            säkerställa att de fungerar effektivt och säkert. Detta innebär
            regelbundna kontroller och reparationer för att förhindra oväntade
            driftstopp och garantera att hissen alltid är klar att använda.
          </p>

          <p>
            Vi strävar efter att erbjuda en lösning från början till slut, från
            design till daglig drift, och vi är alltid tillgängliga för att
            svara på eventuella frågor eller problem. Vårt team består av
            utbildade och licensierade hissinstallatörer med mångårig kompetens,
            vilket gör oss väl rustade för att hantera alla typer av
            hissprojekt.
          </p>

          <p>
            Vi ser fram emot att samarbeta med dig och bidra till att göra dina
            byggnader säkrare och mer effektiva. Kontakta oss idag för ett
            samtal om hur vi kan hjälpa till att förbättra din byggnad genom
            installation eller ombyggnad av hiss.
          </p>
        </div>
      </div>
    </main>
  );
}

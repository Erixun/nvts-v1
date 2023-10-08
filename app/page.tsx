import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main} style={{ gap: 60 }}>
      <div className="intro" style={{ textAlign: 'center' }}>
        <h1>Welcome</h1>
        <p style={{ textAlign: 'center', padding: 10 }}>
          This is the home of Nordic Vertitech Solutions.
        </p>
        <p>
          We provide services and installation of elevators, escalators and
          other vertical transportation systems.
        </p>
      </div>
      <div className="content">
        <h2>Aktuellt</h2>
        <div
          className="cardcontainer"
          style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 30, paddingBlock: 30, justifyContent: 'space-around' }}
        >
          <div className="card" style={{width: 200}}>
            <div
              className="cardimg"
              style={{
                display: 'flex',
                width: '100%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                aspectRatio: 1,
                backgroundColor: '#b4d4ff',
              }}
            >
              <div style={{ margin: 'auto' }}>img</div>
            </div>
            <div className="cardcontent" style={{ padding: 10 }}>
              <h3>News</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem doloremque officiis quas nostrum, amet sint minus
                quam doloribus unde excepturi.
              </p>
            </div>
          </div>
          <div className="card" style={{width: 200}}>
            <div
              className="cardimg"
              style={{
                display: 'flex',
                width: '100%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                aspectRatio: 1,
                backgroundColor: '#b4d4ff',
              }}
            >
              <div style={{ margin: 'auto' }}>img</div>
            </div>
            <div className="cardcontent" style={{ padding: 10 }}>
              <h3>News</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem doloremque officiis quas nostrum, amet sint minus
                quam doloribus unde excepturi.
              </p>
            </div>
          </div>
          <div className="card" style={{width: 200}}>
            <div
              className="cardimg"
              style={{
                display: 'flex',
                width: '100%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                aspectRatio: 1,
                backgroundColor: '#b4d4ff',
              }}
            >
              <div style={{ margin: 'auto' }}>img</div>
            </div>
            <div className="cardcontent" style={{ padding: 10 }}>
              <h3>News</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem doloremque officiis quas nostrum, amet sint minus
                quam doloribus unde excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">MindBuilders</header>
        <article className="main">
          <img src="https://t3.ftcdn.net/jpg/03/18/47/10/360_F_318471020_shhSmrSduwSsN36CxPpxjCxIWOcfaYjI.jpg" />
          <p>Ensinando habilidades para o mundo real</p>
        </article>
        <aside className="aside aside-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet nisi suscipit odio aliquam congue id bibendum risus. Nullam
          molestie nunc dolor, eget pellentesque magna eleifend id. In sodales
          nisl turpis, id viverra ipsum finibus eu. Cras bibendum arcu id
          laoreet consectetur. Sed aliquet mi ac nisl dictum, ut dictum augue
          faucibus. Aliquam sit amet ullamcorper ante, sed dignissim ipsum.
        </aside>
        <aside className="aside aside-2">
          {" "}
          <a href="https://wa.me/+5511973849522">Whatsapp</a>{" "}
        </aside>
        <footer className="footer">Desenvolvido por David Larronda</footer>
      </div>
    </div>
  );
}

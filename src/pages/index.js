// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


// HOME ESTILO "LANDING"

import React, { useMemo, useEffect, useState } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function Countdown({ targetISO }) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / (3600 * 24));
  const hours = Math.floor((totalSec % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  return (
    <div className={styles.countdown} aria-label="Contagem regressiva">
      <div className={styles.pill}><b>{days}</b><span>dias</span></div>
      <div className={styles.pill}><b>{hours}</b><span>horas</span></div>
      <div className={styles.pill}><b>{mins}</b><span>min</span></div>
      <div className={styles.pill}><b>{secs}</b><span>seg</span></div>
    </div>
  );
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Card({ title, meta, children, href, cta }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <h3>{title}</h3>
        {meta ? <div className={styles.meta}>{meta}</div> : null}
      </div>
      <div className={styles.cardBody}>{children}</div>
      {href ? (
        <a className={styles.cardCta} href={href} target="_blank" rel="noreferrer">
          {cta ?? "Abrir"}
        </a>
      ) : null}
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className={styles.faqItem}>
      <summary>{q}</summary>
      <div className={styles.faqAnswer}>{a}</div>
    </details>
  );
}

export default function Home() {
  // >>> EDITE AQUI <<<
  const casal = "Keila & Douglas";
  const dataExtenso = "Data do casamento — 21/02/2026";
  const local = "Local — Cidade/UF";
  const targetISO = "2026-02-21T11:30:00-03:00"; // ajuste a data/hora real

  // Links (pode ser Google Forms, WhatsApp, Pix/Lista etc.)
  const rsvpLink = "https://forms.gle/SEU_FORM_AQUI";
  const mapsLink = "https://www.google.com/maps/place/Espa%C3%A7o+Villa+Borghese/@-23.425097,-46.5966074,17z/data=!3m1!4b1!4m6!3m5!1s0x94cef5bbcb4278a1:0x86013c8474a85ac0!8m2!3d-23.4250971!4d-46.5917418!16s%2Fg%2F11hjf1zjrw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";
  const listaLink = "https://SEU_LINK_DA_LISTA_AQUI";

  return (
    <Layout title={casal} description="Página do casamento">
      <main>
        {/* HERO */}
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.badge}>💍 Save the date</div>
            <h1 className={styles.title}>{casal}</h1>
            <p className={styles.lead}>
              Uma página simples e divertida pra celebrar com quem a gente ama. ✨
            </p>

            <div className={styles.heroInfo}>
              <div className={styles.heroInfoLine}>📅 {dataExtenso}</div>
              <div className={styles.heroInfoLine}>📍 {local}</div>
            </div>

            <Countdown targetISO={targetISO} />

            <div className={styles.heroCtas}>
              <a className={styles.primaryBtn} href={rsvpLink} target="_blank" rel="noreferrer">
                Confirmar presença
              </a>
              <a className={styles.secondaryBtn} href="#programacao">
                Ver programação
              </a>
            </div>

            <nav className={styles.quickNav} aria-label="Atalhos">
              <a href="#sobre">Sobre</a>
              <a href="#programacao">Programação</a>
              <a href="#como-chegar">Como chegar</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </header>

        {/* SOBRE */}
        <Section
          id="sobre"
          title="Sobre a gente"
          subtitle="Um resumo curtinho (e fofo) da nossa história."
        >
          <div className={styles.grid2}>
            <Card title="Nossa história" meta="❤️">
              <p>
                Escreva aqui 4–6 linhas: como se conheceram, um momento marcante,
                e o que vocês mais amam fazer juntos.
              </p>
            </Card>

            <Card title="O grande dia" meta="✨">
              <ul className={styles.list}>
                <li><b>Traje:</b> (ex: esporte fino / social)</li>
                <li><b>Chegue com:</b> (ex: 30 min de antecedência)</li>
                <li><b>Dica:</b> (ex: vai ter pista, vai ter foto, vai ter surpresa!)</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* PROGRAMAÇÃO */}
        <Section
          id="programacao"
          title="Programação"
          subtitle="Horários e momentos principais (ajuste conforme seu evento)."
        >
          <div className={styles.grid3}>
            <Card title="Cerimônia" meta="⛪ 12:00">
              <p>Abertura + entrada + votos + aquela emoção.</p>
            </Card>
            <Card title="Recepção" meta="🥂 11:30">
              <p>Brinde, fotos, comes & bebes.</p>
            </Card>
            <Card title="Festa" meta="🕺 12:40">
              <p>Pista liberada + surpresas + muita alegria.</p>
            </Card>
          </div>
        </Section>

        {/* COMO CHEGAR */}
        <Section
          id="como-chegar"
          title="Como chegar"
          subtitle="Links úteis pra ninguém se perder (nem a sogra 😅)."
        >
          <div className={styles.grid2}>
            <Card title="Mapa" meta="📍" href={mapsLink} cta="Abrir no Maps">
              <p>Coloque o endereço completo aqui (ou só o nome do local).</p>
            </Card>

            <Card title="Lista de presentes" meta="🎁" href={listaLink} cta="Ver lista">
              <p>Você pode usar lista, Pix, ou “cotas” (lua de mel etc.).</p>
            </Card>
          </div>
        </Section>

        {/* FAQ */}
        <Section
          id="faq"
          title="Perguntas frequentes"
          subtitle="O básico pra deixar tudo fácil."
        >
          <div className={styles.faq}>
            <FAQItem
              q="Posso levar acompanhante?"
              a={<p>Responda aqui (ex: sim, informar no RSVP; ou apenas convidados listados).</p>}
            />
            <FAQItem
              q="Vai ter estacionamento?"
              a={<p>Responda aqui (ex: no local / valet / rua).</p>}
            />
            <FAQItem
              q="Qual o traje?"
              a={<p>Responda aqui (ex: esporte fino; evitar branco etc.).</p>}
            />
            <FAQItem
              q="Contato pra dúvidas"
              a={<p>Coloque um WhatsApp ou e-mail de referência.</p>}
            />
          </div>
        </Section>

        <footer className={styles.footer}>
          <div>Feito com carinho 💛</div>
        </footer>
      </main>
    </Layout>
  );
}

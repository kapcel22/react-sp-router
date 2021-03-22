import React from 'react';
import Article from "../Templates/Article";

const articles = [
    {
        id: 1,
        title: 'Czym jest teoria strun?',
        author: 'Jan Nowak',
        text: 'Teoria strun (TS) – model matematyczny przewidujący, że podstawowym budulcem materii nie są cząstki w postaci punktu, lecz struny wielkości 10-31 metra. Pierwotna teoria strun, zwana  teorią strun bozonowych, powstała w 1970 roku. Jednak nie jest ona teorią odzwierciedlającą stan naszego fizycznego świata, ponieważ nie zakłada istnienia fermionów. Z upływem czasu pojawiały się nowe odmiany teorii strun. Obecnie uważa się, że wszystkie te teorie są odmianami jednej teorii wyższego rzędu, M-teorii.'
    },
    {
        id: 2,
        title: 'Na czym polega Hipoteza Riemanna?',
        author: 'Bolesław Dzięcioł',
        text: 'Hipoteza Riemanna - sformułowana w 1859 roku hipoteza[1], dotycząca badanej przez niemieckiego matematyka Bernharda Riemanna funkcji dzeta. Jest jednym z największych nierozwiązanych problemów w matematyce obok hipotezy Goldbacha. Mówi ona, że wszystkie tzw. nietrywialne zera (nierzeczywiste) tej funkcji mają część rzeczywistą równą ½. Problem ten ma duże znaczenie dla całej matematyki – w szczególności dla teorii liczb, ale również dla statystyki oraz fizyki. Jest jednym z problemów milenijnych, ogłoszonych przez Instytut Matematyczny Claya w roku 2000[2]. Clay Mathematics Institute (CMI) ufundował nagrodę w wysokości miliona dolarów za dowód lub obalenie tej hipotezy. Hipoteza Riemanna jest ósmym problemem z listy problemów Hilberta.'
    },
    {
        id: 3,
        title: 'Co to jest Teoria grafów?',
        author: 'Jan Nowak',
        text: 'Teoria grafów – dział matematyki zajmujący się badaniem własności grafów. Za pierwszą pracę na temat teorii grafów uznawany jest opis zagadnienia mostów królewieckich, opublikowany w 1736 roku przez Leonharda Eulera. Algorytmy grafowe są także przedmiotem badań informatyki.'
    }
];

const HomePage = () => {
    const articlesList = articles.map(article =>(
        <Article
            key={article.id}
            {...article}
        />
    ));

    return (
        <div className="home-page">
            <h2>Strona główna - nowości</h2>
            { articlesList }
        </div>
    );
};

export default HomePage;

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // TRANSLATIONS
    // ==========================================

    const translations = {
        en: {
            page: {
                title: "WORLDSEED – Beyond Digital Worlds",
                description: "WORLDSEED is an independent technology project exploring and developing the foundations for new interactive digital worlds."
            },

            nav: {
                about: "About",
                core: "CORE",
                vision: "Vision"
            },

            hero: {
                eyebrow: '<span class="status-indicator"></span>AN INDEPENDENT TECHNOLOGY PROJECT',
                title: 'BEYOND<br>DIGITAL <span class="gradient-text">WORLDS.</span>',
                description: "WORLDSEED is an independent technology project with an ambitious vision: to explore and develop new possibilities for interactive digital worlds.",
                discover: 'Discover the project <span>→</span>',
                github: "Explore on GitHub",
                discord: "Join our Discord",
                meta: '<span>INDEPENDENT DEVELOPMENT</span><span class="meta-divider"></span><span>WORLDSEED PROJECT</span>',
                visualTop: '<span class="label-line"></span>WORLD INITIALIZATION',
                visualBottom: '<span class="status-indicator"></span>SYSTEM CONCEPT'
            },

            about: {
                index: "01 / INTRODUCTION",
                title: 'One idea. <span class="gradient-text">A new direction.</span>',
                description: "WORLDSEED is driven by the vision of creating technical foundations for complex and interactive digital environments. The project is being developed and expanded step by step.",

                card1: {
                    title: "Technology",
                    text: "Developing independent technical foundations and modular components."
                },

                card2: {
                    title: "Modularity",
                    text: "Building a structured foundation designed to evolve and expand over time."
                },

                card3: {
                    title: "Innovation",
                    text: "Exploring new technical approaches and bringing them to life step by step."
                }
            },

            core: {
                index: "02 / FOUNDATION",
                title: 'WORLDSEED <span class="gradient-text">CORE</span>',
                paragraph1: "WORLDSEED CORE is a central part of the project. Its focus is on an independent technical foundation built around a modular structure.",
                paragraph2: "Development progresses step by step, with an emphasis on extensibility, clear structures and long-term technical growth.",
                profile: 'View developer profile <span>↗</span>'
            },

            vision: {
                index: "03 / THE VISION",
                title: 'Not just another project.<br><span class="gradient-text">A foundation for what comes next.</span>',
                description: "WORLDSEED is a long-term project. Every development phase lays the groundwork for the next step."
            },

            github: {
                index: "OPEN DEVELOPMENT",
                title: "Follow the development.",
                description: "Explore the public repository and follow the project's progress.",
                button: 'GitHub Repository <span>↗</span>'
            },

            footer: {
                description: "Independent project. Built step by step."
            },

            accessibility: {
                switchLanguage: "Switch language",
                openNavigation: "Open navigation"
            }
        },

        de: {
            page: {
                title: "WORLDSEED – Jenseits digitaler Welten",
                description: "WORLDSEED ist ein unabhängiges Technologieprojekt, das die technischen Grundlagen für neue interaktive digitale Welten erforscht und entwickelt."
            },

            nav: {
                about: "Über uns",
                core: "CORE",
                vision: "Vision"
            },

            hero: {
                eyebrow: '<span class="status-indicator"></span>EIN UNABHÄNGIGES TECHNOLOGIEPROJEKT',
                title: 'JENSEITS<br>DIGITALER <span class="gradient-text">WELTEN.</span>',
                description: "WORLDSEED ist ein unabhängiges Technologieprojekt mit einer ambitionierten Vision: neue Möglichkeiten für interaktive digitale Welten zu erforschen und zu entwickeln.",
                discover: 'Projekt entdecken <span>→</span>',
                github: "Auf GitHub ansehen",
                discord: "Unserem Discord beitreten",
                meta: '<span>UNABHÄNGIGE ENTWICKLUNG</span><span class="meta-divider"></span><span>WORLDSEED PROJEKT</span>',
                visualTop: '<span class="label-line"></span>WELTINITIALISIERUNG',
                visualBottom: '<span class="status-indicator"></span>SYSTEMKONZEPT'
            },

            about: {
                index: "01 / EINLEITUNG",
                title: 'Eine Idee. <span class="gradient-text">Eine neue Richtung.</span>',
                description: "WORLDSEED verfolgt die Vision, technische Grundlagen für komplexe und interaktive digitale Umgebungen zu schaffen. Das Projekt wird Schritt für Schritt entwickelt und erweitert.",

                card1: {
                    title: "Technologie",
                    text: "Entwicklung unabhängiger technischer Grundlagen und modularer Komponenten."
                },

                card2: {
                    title: "Modularität",
                    text: "Aufbau einer strukturierten Grundlage, die sich langfristig weiterentwickeln und erweitern lässt."
                },

                card3: {
                    title: "Innovation",
                    text: "Erforschung neuer technischer Ansätze und deren schrittweise Umsetzung."
                }
            },

            core: {
                index: "02 / GRUNDLAGE",
                title: 'WORLDSEED <span class="gradient-text">CORE</span>',
                paragraph1: "WORLDSEED CORE ist ein zentraler Bestandteil des Projekts. Im Mittelpunkt steht eine unabhängige technische Grundlage mit modularer Struktur.",
                paragraph2: "Die Entwicklung erfolgt Schritt für Schritt. Im Fokus stehen Erweiterbarkeit, klare Strukturen und langfristiges technisches Wachstum.",
                profile: 'Entwicklerprofil ansehen <span>↗</span>'
            },

            vision: {
                index: "03 / DIE VISION",
                title: 'Nicht einfach nur ein weiteres Projekt.<br><span class="gradient-text">Eine Grundlage für das, was kommt.</span>',
                description: "WORLDSEED ist ein langfristiges Projekt. Jede Entwicklungsphase schafft die Grundlage für den nächsten Schritt."
            },

            github: {
                index: "OFFENE ENTWICKLUNG",
                title: "Verfolge die Entwicklung.",
                description: "Entdecke das öffentliche Repository und verfolge die Fortschritte des Projekts.",
                button: 'GitHub-Repository <span>↗</span>'
            },

            footer: {
                description: "Unabhängiges Projekt. Schritt für Schritt entwickelt."
            },

            accessibility: {
                switchLanguage: "Sprache wechseln",
                openNavigation: "Navigation öffnen"
            }
        }
    };

    // ==========================================
    // LANGUAGE SYSTEM
    // ==========================================

    const languageToggle = document.getElementById("language-toggle");
    const languageLabel = document.getElementById("language-label");
    const languageFlag = document.getElementById("language-flag");

    let currentLanguage = "en";

    try {
        const savedLanguage = localStorage.getItem("worldseed-language");

        if (savedLanguage === "en" || savedLanguage === "de") {
            currentLanguage = savedLanguage;
        }
    } catch (error) {
        console.warn("WORLDSEED: Language preference could not be loaded.", error);
    }

    function getTranslation(object, path) {
        return path.split(".").reduce((value, key) => {
            return value && value[key] !== undefined ? value[key] : undefined;
        }, object);
    }

    function applyLanguage(language) {
        const selectedLanguage = translations[language];

        if (!selectedLanguage) {
            return;
        }

        currentLanguage = language;

        // Update document language
        document.documentElement.lang = language;

        // Translate marked HTML elements
        document.querySelectorAll("[data-i18n], [data-i18n-html]").forEach((element) => {
            const key = element.getAttribute("data-i18n-html")
                || element.getAttribute("data-i18n");

            const translation = getTranslation(selectedLanguage, key);

            if (translation === undefined) {
                console.warn("WORLDSEED: Missing translation:", key);
                return;
            }

            if (element.hasAttribute("data-i18n-html") || key === "hero.eyebrow") {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Translate GitHub and Discord navigation links
        document.querySelectorAll(".nav-links .nav-github").forEach((link) => {
            if (link.href.includes("github.com")) {
                link.innerHTML = language === "de"
                    ? 'GitHub <span>↗</span>'
                    : 'GitHub <span>↗</span>';
            }

            if (link.href.includes("discord.gg")) {
                link.innerHTML = language === "de"
                    ? 'Discord <span>↗</span>'
                    : 'Discord <span>↗</span>';
            }
        });

        // Translate hero external buttons
        const heroGithub = document.querySelector('.hero-actions a[href*="github.com"]');
        const heroDiscord = document.querySelector('.hero-actions a[href*="discord.gg"]');

        if (heroGithub) {
            heroGithub.innerHTML = selectedLanguage.hero.github + " &#8599;";
        }

        if (heroDiscord) {
            heroDiscord.innerHTML = selectedLanguage.hero.discord + " &#8599;";
        }

        // Update page title
        document.title = selectedLanguage.page.title;

        // Update meta descriptions
        const description = document.querySelector('meta[name="description"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');

        if (description) {
            description.content = selectedLanguage.page.description;
        }

        if (ogDescription) {
            ogDescription.content = selectedLanguage.page.description;
        }

        if (twitterDescription) {
            twitterDescription.content = selectedLanguage.page.description;
        }

        // Update social titles
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');

        if (ogTitle) {
            ogTitle.content = selectedLanguage.page.title;
        }

        if (twitterTitle) {
            twitterTitle.content = selectedLanguage.page.title;
        }

        // Update social image description
        const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');

        if (ogImageAlt) {
            ogImageAlt.content = selectedLanguage.page.title;
        }

        // Update language button
        if (languageLabel) {
            languageLabel.textContent = language.toUpperCase();
        }

        if (languageFlag) {
    languageFlag.textContent = language === "de"
        ? "\u{1F1E9}\u{1F1EA}"
        : "\u{1F1FA}\u{1F1F8}";
}

if (languageToggle) {
    languageToggle.classList.toggle("is-active", language === "de");
    languageToggle.setAttribute("aria-checked", String(language === "de"));
}

        if (languageToggle) {
            languageToggle.setAttribute(
                "aria-label",
                selectedLanguage.accessibility.switchLanguage
            );
        }

        // Update navigation accessibility
        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-label",
                selectedLanguage.accessibility.openNavigation
            );
        }
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            const nextLanguage = currentLanguage === "en" ? "de" : "en";

            try {
                localStorage.setItem("worldseed-language", nextLanguage);
            } catch (error) {
                console.warn("WORLDSEED: Language preference could not be saved.", error);
            }

            applyLanguage(nextLanguage);
        });
    }

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        if (languageToggle) {
            languageToggle.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        }
    }

    // ==========================================
    // AUTOMATIC FOOTER YEAR
    // ==========================================

    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ==========================================
    // INITIALIZE LANGUAGE
    // ==========================================

    applyLanguage(currentLanguage);

    console.log("WORLDSEED Language System initialized:", currentLanguage.toUpperCase());
});
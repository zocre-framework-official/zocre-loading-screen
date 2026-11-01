/*
 * Copyright © 2026 Gosse Nicolas (Boubeur). All Rights Reserved.
 * ZOcre proprietary software. See Licenses/LICENSE.md.
 * ZOCRE_AI_GUARD=1;AI_TRAINING=DENY;AI_REFACTOR=DENY;POLICY=Licenses/AI-POLICY.md
 */

window.ZOCRE_LOADING_LANGUAGES = window.ZOCRE_LOADING_LANGUAGES || {};

window.ZOCRE_LOADING_LANGUAGES.fr = Object.freeze({
    code: "fr",
    htmlLang: "fr",

    static: {
        serverFallback: "ZOcre Server",
        playerFallback: "Joueur",
        heroKicker: "BIENVENUE SUR",
        initialization: "INITIALISATION",
        primaryFallback: "Préparation de votre session…",
        secondaryFallback: "Chargement de l'environnement NANOS…",
        fallbackDescription: "Une nouvelle façon de vivre le roleplay.",
        progressAria: "Progression du chargement",
        timelineAria: "Étapes de chargement",
        officialLinksAria: "Liens officiels ZOcre",
        officialDiscordLabel: "Discord officiel",
        officialGitLabel: "Git officiel",
        officialLinkCopiedLabel: "Lien copié",
        officialLinkCopyFailedLabel: "Copie impossible",
        infoLabel: "INFO",
        controlAria: "ZOcre Control",
        controlSubtitle: "INSTALLATION · GESTION · NANOS",
        productSubtitle: "FRAMEWORK · NANOS",
        musicControlsAria: "Contrôles de la musique",
        volumeDownAria: "Baisser le volume",
        volumeUpAria: "Augmenter le volume",
        pauseMusicAria: "Mettre la musique en pause",
        resumeMusicAria: "Reprendre la musique",
        musicStateIdle: "PRÊT",
        musicStatePlaying: "LECTURE",
        musicStatePaused: "PAUSE",
        musicStateGesture: "LECTURE POUR DÉMARRER",
        musicStateFallback: "SECOURS AUDIO",
        musicStateError: "AUDIO INDISPONIBLE"
    },

    stages: {
        connection: "Connexion",
        download: "Ressources",
        assets: "Assets",
        level: "Niveau",
        entities: "Entités",
        shaders: "Shaders",
        finishing: "Finalisation"
    },

    tips: [
        "ZOcre prépare votre environnement de jeu.",
        "Les progressions affichées proviennent directement de NANOS.",
        "Une première connexion peut être plus longue lorsque des assets doivent être téléchargés.",
        "Les shaders sont compilés par NANOS avant la finalisation de votre session."
    ],

    preview: {
        primary: "Chargement des assets",
        secondary: "Préparation de l'environnement"
    }
});

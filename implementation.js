/*
*   Retro Redrawn 
*   -- Implementation Script
*
*   Frontend data container of the Redrawn Viewer. 
*   Contains implementation data specific to a Redrawn project.
*
*   by Tyson Moll (vvvvvvv), 2023.
*
*/

// Directories
var artistImgDir = "img/profiles/";
var artistImgExtension = '.png';  // Image extension for artist images.
// (having JavaScript self-determine if an image exists without a particular extension is difficult)

// Audio
var bgmTrack = null;

/** Content layers in the Redrawn */
var activeLayerIndex = 0;           // Currently active layer index (and initial index)
var redrawnLayers = [
    {
        name: "game", //foldername?
        canvasSize: {width: 10000, height: 2096},
        areas: castleAreas
    }
];

/** Biome Data (Screen icons) */
var biomes = [
    {
        name: "Terrace",
        ident: "terrace",
        iconId: "grass",
        color: 'rgb(90 180 100)',
    },
    {
        name: "Underground",
        ident: "underground",
        iconId: "fireplace",
        color: 'rgb(113 104 127)',
    },
    {
        name: "Castle",
        ident: "castle",
        iconId: "fort",
        color: 'rgb(114 79 52)',
    },
    {
        name: "Boss",
        ident: "boss",
        iconId: "dark_mode",
        color: 'rgb(129 28 56)',
    },
    {
        name: "Other",
        ident: "other",
        iconId: "dataset",
        color: 'rgb(94 94 94)',
    },
    {
        name: "Mountain",
        ident: "mounatain",
        iconId: "landscape",
        color: 'rgb(120 94 94)',
    },
    {
        name: "Forest",
        ident: "forest",
        iconId: "forest",
        color: 'rgb(30 120 80)',
    },
    
];

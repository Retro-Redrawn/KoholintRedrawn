/// CODE TO BE COPIED INTO INTERACTIVE.JS
/// Made for crossreferencing current camera xy pos 
/// and determin what img you are currently looking at
/// and then hopefully draw a clickable with the pfp & name on there. 


//needed vars
var locationCheck = false;

var clickable = null;
var clickableMarginBgX = 0;
var clickableMarginBgY = -20;
var clickableIconMarginX = 5;
var clickableIconMarginY = 5;
var clickableTextMarginX = 20;
var clickableTextMarginX = 5;


//(in tick?) ================================

//ie. the camera is no longer moving to the wanted position
if ( map.x == currentPos.x && map.y == currentPos.y && locationCheck == false)
{
	console.log("run check");
	check(currentPos.x,currentPos.y,areaArray,areaImageArray)
	locationCheck = true;
}

//ie. the camera is currently moving so when it stops I nee dot check again. 
if (map.x != currentPos.x && map.y != currentPos.y && locationCheck == true)
{
	console.log("moving camera");
	clickable = null;
	locationCheck == false
}

//================================

// loop through area.js
function check(x ,y ,areaArray,areaImageArray)
{
    for (var i = 0; i < areaArray.length; i++)
    {
        var area = areaArray[i];
        //if starting coordinates are in range of entree
        if (x > area.point.x && y> area.point.y)
        {
            var img = areaImageArray(i)
            //img.naturalHeigth
            //img.naturalWidth needed to determine how big this entree img size is
            if (x < area.point.x + img.naturalWidth && y < 
            area.point.y + img.naturalHeigth)
            {
                // You are on this json entree (ie you are right from its starting xy but not past the xy of the image width and height)
                console.log("area found.");
                //get artist name from json
                var username = area.artist
                // draw the white rectangle around the map
                generateAreaZone(area, img)

                // Draw clickableprofile (xentree yentree username)
                // idk even how
                Break;
            }
        }
    }
}

Clickableprofile(x, y, u)
{
    /// IDK use something from teh way it loads in Artists at init on the left side of the screen?
    /// can you even draw a div over a canvas? Or does this now need be a new element within the canvas?

/*
// Prepare PIXI area tile
     var area = activeAreas[i];
     var activeImages = getActiveLayerAreaImages();
     var areaImage = activeImages[i];
// Get biome data
     var backgroundColor = 'rgb(0 0 0)';
     var materialIcon = '';
     for (var j=0; j< biomes.length; j++) {
     let biome = biomes[j];
         if (biome.ident === area.type) {
         backgroundColor = biome.color;
         materialIcon = biome.iconId;
         break;
         }
     }
// Prep artist image HTML
     var areaArtist = area.artist.replace('@', '');
     var artistImageHTML = '';
     if (areaArtist === '') {
         console.log("Area artist is undefined, skipping artist image.");
     }
     else
     {
         // Get artist image
         var areaArtistImage = area.artistImageOverride;
         if (areaArtistImage === '') {
            areaArtistImage = areaArtist;  // Fallback if no artist image is defined
         }
         var artistImgPath = artistImgDir + areaArtistImage + artistImgExtension;
         var artistImageHTML = `<a href="${area.url}" target="_blank" title="${area.artist}">
             <img src="${artistImgPath}" alt="${area.artist}" /></a>`;
     }
    // preepare the HTML block corresponding to an area and its associated credts
     var html =
     `<li class="area" title="${area.title}" style="background-color:${backgroundColor}" onclick="focusOnArea('${area.title}')">
         <div class="area__header" >
            <span class="material-icons">
                 ${materialIcon}
            </span>
            <span>
                 ${area.title}
            </span>
         </div>
         <div class="area__info">
            <div class="area__info__inner">
                 <div class="area__info__img">
                     ${artistImageHTML}
                 </div>
                 <div class="area__info__name">
                    ${area.url ? `<a href="${area.url}" target="_blank" title="${area.artist}">${area.artist}</a>` : `<a>${area.artist}</a>`}
                    ${area.post_url ? `<a href="${area.post_url}" target="_blank" title="View Post">[View Post]</a>` : ''}
                 </div>
            </div>
         </div>
    </li>`
     areaList.innerHTML += html
     */ 
 }


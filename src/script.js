import './style.css'

// Récupération de la zone de texte, du bouton et de la section de résultats
const zoneDeTexte = document.getElementById("dictee")
const boutonAnalyser = document.querySelector("button")
const resultatSection = document.querySelector(".resultat")
const texteResultat = document.getElementById("resultatTexte")

// Ajout d'un écouteur d'événement sur le bouton pour appeler la fonction d'analyse du texte
boutonAnalyser.addEventListener("click", function() {
  const texte = zoneDeTexte.value // Récupération du texte entré dans la zone de texte

  // Vérification si le texte n'est pas vide
  if (texte.trim() !== "") {
    analyserTexte(texte) // Appel de la fonction d'analyse du texte dans backend/server.js
  }

});

function getResult(text) {
  let originalActiveElement;

  //showLoadingCursor();

  // Send the text to the API endpoint
  fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: text }),
  })
    .then((response) => response.json())
    .then(async (data) => {
      // Use original text element and fallback to current active text element
      const activeElement =
        originalActiveElement ||
        (document.activeElement.isContentEditable && document.activeElement);

      if (activeElement) {
        if (
          activeElement.nodeName.toUpperCase() === "TEXTAREA" ||
          activeElement.nodeName.toUpperCase() === "INPUT"
        ) {
          // Insert after selection
          activeElement.value = `${activeElement.value.slice(0, activeElement.selectionEnd)}\n\n${data.reply}${activeElement.value.slice(activeElement.selectionEnd, activeElement.length)}`;

        } else {
          // Special handling for contenteditable
          const replyNode = document.createTextNode(`\n\n${data.reply}`);
          const selection = window.getSelection();

          if (selection.rangeCount === 0) {
            selection.addRange(document.createRange());
            selection.getRangeAt(0).collapse(activeElement, 1);
          }

          const range = selection.getRangeAt(0);
          range.collapse(false);

          // Insert reply
          range.insertNode(replyNode);

          // Move the cursor to the end
          selection.collapse(replyNode, replyNode.length);
        }
      } else {
        // Alert reply since no active text area
        //alert(${data.reply});
        return data.reply


        // navigator.clipboard
        //   .writeText(data.reply)
        //   .then(function () {
        //     // alert("Text copied to clipboard");
        //   })
        //   .catch(function (error) {
        //     alert("Error copying text to clipboard:", error);
        //   });
      }

    });
};

function analyserTexte(texte) {
  const resultat = getResult(texte)
  texteResultat.innerHTML = texte

  // const mots = resultat.split(" ")

  // var resultatProgressif = ""
  // for (var i = 0; i < mots.length; i++) {
  //   (function(i) {
  //     const timeout = Math.random() * 100;
  //     setTimeout(function() {
  //       resultatProgressif += mots[i] + " ";
  //       texteResultat.innerHTML = resultatProgressif;
  //     }, i * timeout);
  //   })(i);
  // }

  // Affichage de la section de résultats si nécessaire
  resultatSection.style.display = "block"
}
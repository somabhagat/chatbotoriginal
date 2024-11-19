import { CustomButton } from "./custom-button";
import { CustomHeader } from "./custom-header";
import { CustomIntro } from "./custom-intro";
import { CustomTrigger } from "./custom-trigger";

export const webchat = {
  theme: {
    mobileBreakpoint: 460,
    style: {
      position: "fixed",
      right: 20,
      bottom: 20,
      width: 350, // Änderungen gemäß den width Vorgaben aus Figma.
      height: 600, // Änderungen gemäß den height Vorgaben aus Figma.
      margin: "auto",
      backgroundColor: "#F2E7E4", // Änderungen gemäß den Farbe Vorgaben aus Figma.
      borderRadius: 0, // Änderungen gemäß den Vorgaben aus Figma, um die Kanten eckig zu gestalten.
      boxShadow: 0, // Änderungen gemäß den Vorgaben aus Figma, um kein Shadow zu gestalten.
      overflow: "hidden",
      // backgroundImage:'linear-gradient(to top, #ffffff,#ffffff 11%,#9a9ae3 40%,#0000ff 85%,#0000ff 85%)',
      fontFamily: '"Open Sans", sans-serif',
    },

    triggerButton: {
            custom: CustomTrigger,
    },

    header: {
      custom: CustomHeader,
    },

    message: {
      bot: {
        image: null,
        style: {
          color: "black",
          borderRadius: 0,
          background: "#C4EAF8",
        },
      },
      user: {
        style: {
          color: "black",
          background: "#FFFFFF",
          borderRadius: 0,
        },
      },
    },

    button: {
      style: {
        color: "black",
        background: "#C4EAF8", // Änderungen gemäß den Vorgaben aus Figma.
        borderRadius: 0,
      },
      hoverBackground: "#47C8F6",
      hoverTextColor: "black",

      // custom: CustomButton,
    },
    replies: {
      align: "center",
      wrap: "nowrap",
    },
    reply: {
      style: {
        color: "black",
        background: "#e1fcfb",
        borderColor: "black",
      },
    },
    userInput: {
      style: {
        background: "black",
      },
      box: {
        style: {
          color: "#000000", // user input color
          background: "#FFFFFF",
          width: "90%", // Änderungen gemäß den Vorgaben aus Figma, um den Platzhaltertext in einer Zeile anzuzeigen.
          // borderRadius: 20,
          paddingLeft: 10,
          marginRight: 10,
        },
        placeholder: "Fragen Sie mich etwas",
      },
      emojiPicker: true,
      // These are the set of inputs which are not allowed.
      blockInputs: [
        {
          match: [/ugly/i, /bastard/i],
          message: "We cannot tolerate these kind of words.",
        },
      ],
      persistentMenu: [
        // Änderungen gemäß den Vorgaben aus Figma.
        { label: "Was ist CONTEXTSUITE?", payload: "Was ist CONTEXTSUITE?" },
        { label: "Was ist CONTEXTCLOUD?", payload: "Was ist CONTEXTCLOUD ?" },
        { closeLabel: "Close" },
      ],
    },
    /* scrollbar: {
      enable: true,
      autoHide: true,
      thumb: {
        opacity: 1,
        color: "yellow",
        bgcolor:
          "yellow",
        border: "20px",
      },
      track: {
        color: 'black',
        bgcolor:
          'linear-gradient(-131deg,rgba(50, 40, 43) 0%,rgb(125, 62, 81) 100%);',
        border: '20px',
      },
    }, */
  },

  // Webchat listeners
  onInit: (app) => {
    // You can combine webchat listeners with the Webchat SDK's Api in order
    // to obtain extra functionalities. This will open automatically the webchat.
    // console.log("onInit")
    // app.open();
    app.addBotText(
      "Hallo! Ich bin Sophy, eure KI-Assistentin. Ich gebe keine Rechtsberatung, aber ich bin hier, um euch bei euren Fragen bestmöglich zu helfen! 😊"
    );
  },
  /* onOpen: (app) => {
    console.log("onOpen");
  },
  onClose: (app) => {
    console.log("I have been closed!");
  },
  onMessage: (app) => {
    console.log("New message!");
  }, */
};

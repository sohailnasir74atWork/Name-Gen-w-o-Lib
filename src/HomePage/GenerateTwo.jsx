import React  from 'react'
import { useState } from 'react'
import { styles, symbols } from './Data';
// import gtag from 'ga-gtag';
// import "./Generate.css"

const GenerateOne = () => {
    const [styledName, setStyledName] = useState([])
    const [styledName2, setStyledName2] = useState([])
    const [name, setName] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [newName, setNewName] = useState("");
    const [randomSymbolsArry, setRandomSymbolsArry] = useState([])

    const {swal} = window
       // const handleCopy1 = () => {
    //     const lastStyledName = styledName2[styledName2.length - 1];
    //     const textToCopy = styledName2[currentIndex] || lastStyledName;

    //     navigator.clipboard.writeText(textToCopy ? textToCopy : "").then(() => {
    //         swal("Copied to Clipboard", {
    //             buttons: false,
    //             timer: 700,
    //         });
    //     });
    // };

    const handleCopy2 = async () => {
        navigator.clipboard.writeText(styledName[currentIndex] ? `${randomSymbolsArry[currentIndex].left}${styledName[currentIndex]}${randomSymbolsArry[currentIndex].right}` : "").then(() => {
            swal("Copied to Clipboard", {
                buttons: false,
                timer: 700,
            });
        });
        // gtag('event', 'Sec-2- Copied', {
        //     poll_title: 'sec-2',
        //   })
    };
    const handleNextGenrate = async () => {

        if (styledName.length < 1) {
            swal({
                icon: "error",
                title: "Please Insert Name",
            });
            return;
        }
        setCurrentIndex((currentIndex + 1)); // use the updated value of `styledName` state
    };
    const handlePre = () => {
        if (currentIndex < 1)
            return
        setCurrentIndex(currentIndex - 1);
    };

   const handleClickShare = async () => {
        try {
          await navigator.share({
            title: "Unleash your creativity!",
            text: "Create cool unique names (Pubg,WhatsApp, Facebook etc)",
            url: "https://pubg-name-generator.onrender.com/",
          });
          console.log('Shared successfully');
        } catch (err) {
          console.error('Error sharing:', err);
        }
        // gtag('event', 'Sec-2- Share', {
        //     poll_title: 'sec-2',
        //   })
      };
    const clearScreen = () => {
        const inputField = document.getElementById("2");
        inputField.value = "";
        setName("");
        setCurrentIndex(0);
        setStyledName([]);
        setStyledName2([]);
        setNewName("");
        generateSymbols()
    };
    function mixStylesSimple(value) {
        const mixedNames = [];
        let randomSymbols = "";
        for (let s = 0; s < styles.length; s++) {
            let mixedName = "";
            for (let i = 0; i < value.length; i++) {
                const char = value.charAt(i).toLowerCase();
               if (char === " ") {
                    mixedName += " ";
                } else {
                    const randomStyle = styles[s];
                    mixedName += randomStyle[char] ? randomStyle[char] : char;
                    randomSymbols = symbols[Math.floor(Math.random() * symbols.length)];
                }
            }
         mixedNames.push(mixedName);
        }
        return mixedNames;
    }
    function mixStyles(value) {
        let mixedNameWithSymbols = "";
        let randomSymbols = "";
        for (let i = 0; i <= value.length; i++) {
            const char = value.charAt(i).toLowerCase();
            if (char === " ") {
                mixedNameWithSymbols += " ";
                continue;
            }
            const randomStyle = styles[Math.floor(Math.random() * styles.length)];

            mixedNameWithSymbols += randomStyle[char] ? randomStyle[char] : char;
        }
        mixedNameWithSymbols = `${mixedNameWithSymbols}`
        return mixedNameWithSymbols;
    }
const generateSymbols =  ()=>{const random = [];
    for (let i = 0; i < 200; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        const randomSymbol = symbols[randomIndex];
        random.push(randomSymbol);
    }
    setRandomSymbolsArry(random)}
    const handleChange = (event) => {
        if(randomSymbolsArry.length===0){generateSymbols()}
        
        const keyCode = event.key;
        if (keyCode === "Backspace" || keyCode === "Delete" || event.target.value.length < name.length) {
            const modifiedArray1 = styledName.map((element) => {
                return element.slice(0, -1);
            });
            setStyledName(modifiedArray1);
            const modifiedArray2 = styledName2.map((element) => {
                return element.slice(0, -1);
            });
            setStyledName2(modifiedArray2);
            setName(event.target.value)
            if (event.target.value.length === 0) { setCurrentIndex(0); setStyledName([]); setStyledName2([]) }
            return;
        }
        setTimeout(() => {
            const name = event.target.value;
            setName(name);
            const mixedName2 = mixStylesSimple(name);
            setStyledName2(mixedName2);
            setCurrentIndex(1);
            const mixedNames = [];
            for (let i = 0; i < 200; i++) {
                const mixedName = mixStyles(name.charAt(name.length - 1)); // define the `mixStyles` function first
                mixedNames.push(styledName[i] ? styledName[i] + mixedName : mixedName);
            }
            setStyledName(mixedNames);
        }, 10);
    };

   return (
        <div className='section-wrapper-gen'>
            <h3>Perfect Name with one Click!</h3>
            {/* <div className='display-fields bg-one'>
                <span className='counter'>#{currentIndex < styledName2.length ? (currentIndex) : styledName2.length}/{styledName2.length}&nbsp;&nbsp;</span>
                <span className='generated-name'>{styledName2[currentIndex] ? `${randomSymbolsArry[currentIndex].left}${styledName2[currentIndex]}${randomSymbolsArry[currentIndex].right}` : styledName2[styledName2.length - 1] ? `${randomSymbolsArry[currentIndex].left}${styledName2[styledName2.length - 1]}${randomSymbolsArry[currentIndex].right}` : "Simple Style"}

                </span>
                <Button className="copy-button" variant="outlined" startIcon={<ContentCopyIcon />} onClick={handleCopy1}>
                    COPY
                </Button>
            </div> */}
            <div className='display-fields bg-one'>
                <span className='counter'>#{currentIndex}/{styledName.length}</span>
                <span className='generated-name'>{styledName[currentIndex] ? `${randomSymbolsArry[currentIndex].left}${styledName[currentIndex]}${randomSymbolsArry[currentIndex].left}` : newName ? newName : "Random Style"}
                </span>
                <button className="primary-button w-20" onClick={ handleCopy2}>
                    COPY
                </button>
            </div>
            <div className='display-fields'>

                <input id="2" className='input-name' type='text' placeholder='Write  Your Name Here' autoComplete='off' onKeyUp={handleChange} />
                <button className="primary-button w-20" onClick={clearScreen}>
                    Clear
                </button>
            </div>
            <div className='btn-cont'>
                <button className="primary-button w-20" onClick={handlePre}>
                    prev</button>
                <button className="primary-button w-60" onClick={handleNextGenrate}>
                    Generate
                </button>
                <button className="primary-button w-20" onClick={handleNextGenrate}>
                    Next
                </button>
            </div>
            <div className='btn-cont-share'>
                <button className="primary-button w-95-auto" onClick={ handleClickShare}>
                Share website with friends!</button>
                
            </div>
        </div>
    )
}

export default GenerateOne
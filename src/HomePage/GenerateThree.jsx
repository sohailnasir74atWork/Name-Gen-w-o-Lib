import React, { useRef, useState } from 'react'
import { styles } from './Data';
import { symbols } from './Data';
import gtag from 'ga-gtag';
import "./Generate.css"

const GenerateTwo = () => {
    const [active, setActive] = useState(1);
    const [updateSymbol, setUpdateSymbol] = useState("");
    const inputRef = useRef(null);
    const { swal } = window

    const handleCopy = () => {
        navigator.clipboard.writeText(updateSymbol ? updateSymbol : "").then(() => {
            swal("Copied to Clipboard", {
                buttons: false,
                timer: 700,
            });
        });
        gtag('event', 'Sec-3- Copied', {
            poll_title: 'sec-3',
        })
    };
    /////////////////////////////////////////////////////////////////
    const filteredArr = symbols.filter(obj => obj.left === obj.right);
    const UniqueSymbols = filteredArr.map(obj => obj.left);
    const leftRight = symbols.filter(obj => obj.left !== obj.right);
    const listStyles = styles.slice(0, styles.length - 2);

    const clearScreen = () => {
        setUpdateSymbol(updateSymbol.slice(0, -1))
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
        gtag('event', 'Sec-3- Share', {
            poll_title: 'sec-3',
        })
    };

    const handleActiveButton = (value) => {
        setActive(value)
    }

    const handleSymbols = (e) => {
        const symbol = e.target.innerHTML;
        const inputEl = inputRef.current;
        const cursorPos = inputEl.selectionStart;
        setUpdateSymbol(updateSymbol.slice(0, cursorPos) + symbol + updateSymbol.slice(cursorPos));
        inputEl.setSelectionRange(cursorPos + 1, cursorPos + 1);
    };

    const handleChange = (event) => {
        const text = event.target.value;
        setUpdateSymbol(text);
    };
    return (
        <div className='section-wrapper-gen'>
            <h3>Your Name, Your Way !</h3>
            <div className='display-fields'>
                <input
                    ref={inputRef}
                    className="input-name"
                    type="text"
                    placeholder="Write Your Name Here"
                    value={updateSymbol}
                    onChange={handleChange}
                />
                <button className="primary-button w-20" onClick={handleCopy}>
                    COPY</button>
            </div>
            <div className='key-pad'>
                <div className='button-cont'>
                    <div className='w-50'><button className={`primary-button w-100 ${active === 2 ? "inactive w-100" : ""}`} onClick={() => handleActiveButton(1)}>SELECT SYMBOLS</button></div>
                    <div className='w-50'><button className={`primary-button w-100 ${active === 1 ? "inactive w-100" : ""}`} onClick={() => handleActiveButton(2)} >SELECT CHARACTER</button></div>
                </div>
                {active === 1 && <div className='symbol-cont-heading'>
                    <span className='heading-sub'>Simple Symbols</span>
                    <div className='cont-1'>
                        {UniqueSymbols.map(item => {
                            return <>

                                <span className='symbol' onClick={handleSymbols}>{item}</span></>
                        })}</div>
                    <span className='heading-sub'>Left Right Symbols</span>
                    <div className='cont-1'>
                        {leftRight.map(item => {
                            return <span className='left-right' style={{ display: "flex" }}>

                                <span className='symbol' onClick={handleSymbols}>{item.left}</span>
                                <span className='symbol' onClick={handleSymbols}>{item.right}</span>
                            </span>
                        })}</div>
                </div>}
                {active === 2 && <div className='symbol-cont'>

                    {listStyles.map((item, index) => {
                        return <>
                            <span className='heading-sub'>Style -{index + 1}</span>
                            <div className='text-cont'>
                                <span className='symbol' onClick={handleSymbols} >{item.a}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.b}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.c}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.d}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.e}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.f}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.g}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.h}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.i}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.j}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.k}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.l}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.m}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.n}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.o}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.p}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.q}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.r}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.s}</span>
                                <span className='symbol' onClick={handleSymbols} >{item.t}</span>
                                <span className='symbol' onClick={handleSymbols}>{item.u}</span>
                                <span className='symbol' onClick={handleSymbols}>{item.v}</span>
                                <span className='symbol' onClick={handleSymbols}>{item.w}</span>
                                <span className='symbol' onClick={handleSymbols}>{item.x}</span>
                                <span className='symbol' onClick={handleSymbols}>{item.y}</span>
                                <span className='symbol' onClick={handleSymbols}>{item.z}</span>
                            </div>
                        </>
                    })}
                </div>}
            </div>
            <div className='btn-cont'>
                {/* <Button className="pre-next-btn ml-0" variant="outlined" startIcon={<ContentCopyIcon />} onClick={handleCopy}>
                    Copy</Button> */}
                <button className="primary-button w-80" onClick={handleClickShare}>
                    SHARE WITH YOUR FRIENDS !
                </button>
                <button className="primary-button w-20" onClick={clearScreen}>
                    CLEAR
                </button>
            </div>
        </div>
    )
}
export default GenerateTwo